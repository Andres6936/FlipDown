import {html, LitElement, TemplateResult} from "lit";
import {customElement, property, state, queryAll} from 'lit/decorators.js';

type Theme = "dark" | "light"
type Heading = "Days" | "Hours" | "Minutes" | "Seconds"

interface Options {
    theme: Theme,
    headings: Heading[],
}

interface Clock {
    // Days
    d: number,
    // Hours
    h: number,
    // Minutes
    m: number,
    // Seconds
    s: number,
}

interface ClockDisplay {
    // Days
    d: string,
    // Hours
    h: string,
    // Minutes
    m: string,
    // Seconds
    s: string,
}


/**
 * @name pad
 * @description Prefix a number with zeroes
 * @author PButcher
 * @param {string} n - Number to pad
 * @param {number} len - Desired length of number
 **/
function pad(n: number | string, len: number): string {
    const representation = n.toString();
    return representation.length < len ? pad("0" + representation, len) : representation;
}

/**
 * @description Add multiple children to an element
 **/
function appendChildren(parent: HTMLElement, children: HTMLElement[]) {
    children.forEach((el) => {
        parent.appendChild(el);
    });
}

@customElement('adan-flipdown')
export class Flipdown extends LitElement {
    // UTS to count down to
    @property()
    epoch!: number

    // FlipDown version
    @state()
    version: string = "0.3.2"

    // Time at instantiation in seconds
    @state()
    now: number = this._getTime();

    // UTS passed to FlipDown is in the past
    @state()
    countdownEnded: boolean = false

    // User defined callback for countdown end
    @state()
    hasEndedCallback: Function | null = null;

    // Rotor DOM elements
    @state()
    rotors: TemplateResult[] = [];

    @queryAll("#rotor-leaf-front")
    rotorLeafFront = [];

    @queryAll("#rotor-leaf-rear")
    rotorLeafRear = [];

    @queryAll("#rotor-top")
    rotorTop = []

    @queryAll("#rotor-bottom")
    rotorBottom = []

    @state()
    rotorTops = [];

    @state()
    rotorBottoms = [];

    // The IntervalID of interval used for update the component or null if the
    // internval not is set
    @state()
    countdown: number | null = null;

    // Number of days remaining
    @state()
    daysRemaining = 0;

    // Clock values as numbers
    @state()
    clockValues: Clock = {
        d: 0,
        h: 0,
        m: 0,
        s: 0
    };

    // Clock values as strings
    @state()
    clockStrings: ClockDisplay = {
        d: "0",
        h: "0",
        m: "0",
        s: "0"
    };

    // Clock values as array
    @state()
    clockValuesAsString: string[] = [];

    @state()
    prevClockValuesAsString: string[] = [];

    @state()
    daysremaining: number = 0

    // Parse options
    @state()
    opts: Options = this._parseOptions({})

    constructor() {
        super();

        // Print Version
        console.log(`FlipDown ${this.version} (Theme: ${this.opts.theme})`);

        // Start the countdown
        // Set up the countdown interval, it is called each second
        this.countdown = setInterval(this._tick.bind(this), 1000);
    }

    /**
     * @name ifEnded
     * @description Call a function once the countdown ends
     * @author PButcher
     * @param {function} cb - Callback
     **/
    ifEnded(cb: Function) {
        this.hasEndedCallback = function () {
            cb();
            this.hasEndedCallback = null;
        };

        // Chainable
        return this;
    }

    /**
     * @name _getTime
     * @description Get the time in seconds (unix timestamp)
     * @author PButcher
     **/
    private _getTime(): number {
        return new Date().getTime() / 1000;
    }

    /**
     * @name _hasCountdownEnded
     * @description Has the countdown ended?
     * @author PButcher
     **/
    _hasCountdownEnded() {
        // Countdown has ended
        if (this.epoch - this.now < 0) {
            this.countdownEnded = true;

            // Fire the ifEnded callback once if it was set
            if (this.hasEndedCallback != null) {
                // Call ifEnded callback
                this.hasEndedCallback();

                // Remove the callback
                this.hasEndedCallback = null;
            }

            return true;

            // Countdown has not ended
        } else {
            this.countdownEnded = false;
            return false;
        }
    }

    /**
     * @name _parseOptions
     * @description Parse any passed options
     * @param {object} opt - Optional configuration settings
     * @author PButcher
     **/
    _parseOptions(opt: Partial<Options>): Options {
        let headings: Heading[] = ["Days", "Hours", "Minutes", "Seconds"];
        if (opt.headings && opt.headings.length === 4) {
            headings = opt.headings;
        }
        return {
            // Theme
            theme: opt["theme"] ? opt.theme : "dark",
            headings,
        };
    }

    /**
     * @name _createRotorGroup
     * @description Add rotors to the DOM
     * @author PButcher
     * @param {array} rotors - A set of rotors
     * @param {number} rotorIndex - The indice of rotor
     **/
    _createRotorGroup(rotors: TemplateResult[], rotorIndex: number): TemplateResult {
        return html`
            <div class="rotor-group">
                <div class="rotor-group-heading" data-before="${this.opts.headings[rotorIndex]}"></div>
                ${rotors}
            </div>
        `
    }

    /**
     * @name _createRotor
     * @description Create a rotor DOM element
     * @author PButcher
     * @param {number} v - Initial rotor value
     **/
    _createRotor(v: number = 0): TemplateResult {
        return html`
            <div class="rotor">
                <div class="rotor-leaf">
                    <figure class="rotor-leaf-rear">
                        ${v}
                    </figure>

                    <figure class="rotor-leaf-front">
                    </figure/>
                </div>

                <div class="rotor-top">
                    ${v}
                </div>

                <div class="rotor-bottom">
                    ${v}
                </div>
            </div>
        `
    }

    /**
     * @name _tick
     * @description Calculate current tick
     * @author PButcher
     **/
    _tick() {
        // Get time now
        this.now = this._getTime();

        // Between now and epoch
        let diff = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;

        // Days remaining
        this.clockValues.d = Math.floor(diff / 86400);
        diff -= this.clockValues.d * 86400;

        // Hours remaining
        this.clockValues.h = Math.floor(diff / 3600);
        diff -= this.clockValues.h * 3600;

        // Minutes remaining
        this.clockValues.m = Math.floor(diff / 60);
        diff -= this.clockValues.m * 60;

        // Seconds remaining
        this.clockValues.s = Math.floor(diff);

        // Update clock values
        this._updateClockValues();

        // Has the countdown ended?
        this._hasCountdownEnded();
    }

    /**
     * @name _updateClockValues
     * @description Update the clock face values
     * @author PButcher
     * @param {boolean} init - True if calling for initialisation
     **/
    _updateClockValues(init = false) {
        // Build clock value strings
        this.clockStrings.d = pad(this.clockValues.d, 2);
        this.clockStrings.h = pad(this.clockValues.h, 2);
        this.clockStrings.m = pad(this.clockValues.m, 2);
        this.clockStrings.s = pad(this.clockValues.s, 2);

        // Concat clock value strings
        this.clockValuesAsString = (
            this.clockStrings.d +
            this.clockStrings.h +
            this.clockStrings.m +
            this.clockStrings.s
        ).split("");

        // Update rotor values
        // Note that the faces which are initially visible are:
        // - rotorLeafFront (top half of current rotor)
        // - rotorBottom (bottom half of current rotor)
        // Note that the faces which are initially hidden are:
        // - rotorTop (top half of next rotor)
        // - rotorLeafRear (bottom half of next rotor)
//        this.rotorLeafFront.forEach((el, i) => {
//            el.textContent = this.prevClockValuesAsString[i];
//        });
//
//        this.rotorBottom.forEach((el, i) => {
//            el.textContent = this.prevClockValuesAsString[i];
//        });
//
//        function rotorTopFlip() {
//            this.rotorTop.forEach((el, i) => {
//                if (el.textContent !== this.clockValuesAsString[i]) {
//                    el.textContent = this.clockValuesAsString[i];
//                }
//            });
//        }
//
//        function rotorLeafRearFlip() {
//            this.rotorLeafRear.forEach((el, i) => {
//                if (el.textContent !== this.clockValuesAsString[i]) {
//                    el.textContent = this.clockValuesAsString[i];
//                    el.parentElement.classList.add("flipped");
//                    var flip = setInterval(
//                        function () {
//                            el.parentElement.classList.remove("flipped");
//                            clearInterval(flip);
//                        }.bind(this),
//                        500
//                    );
//                }
//            });
//        }

        // Init
        if (!init) {
//            setTimeout(rotorTopFlip.bind(this), 500);
//            setTimeout(rotorLeafRearFlip.bind(this), 500);
        } else {
//            rotorTopFlip.call(this);
//            rotorLeafRearFlip.call(this);
        }

        // Save a copy of clock values for next tick
        this.prevClockValuesAsString = this.clockValuesAsString;
    }

    public render() {
        // Check whether countdown has ended and calculate how many digits the day counter needs
        if (this._hasCountdownEnded()) {
            this.daysremaining = 0;
        } else {
            this.daysremaining = Math.floor(
                (this.epoch - this.now) / 86400
            ).toString().length;
        }
        const dayRotorCount: number = this.daysremaining <= 2 ? 2 : this.daysremaining;

        // Create and store rotors
        for (let i = 0; i < dayRotorCount + 6; i++) {
            this.rotors = [...this.rotors, this._createRotor(0)];
        }

        // Create day rotor group
        const dayRotors: TemplateResult[] = [];
        for (let i = 0; i < dayRotorCount; i++) {
            dayRotors.push(this.rotors[i]);
        }

        const rotors = []
        // Create other rotor groups
        let count = dayRotorCount;
        for (let i = 0; i < 3; i++) {
            const otherRotors = [];
            for (let j = 0; j < 2; j++) {
                otherRotors.push(this.rotors[count]);
                count++;
            }
            rotors.push(this._createRotorGroup(otherRotors, i + 1));
        }

        // Set initial values;
        this._tick();
        this._updateClockValues(true);

        return html`
            <div class="flipdown__theme-${this.opts.theme}">
                <div class="rotor-group">
                    <div class="rotor-group-heading" data-before="${this.opts.headings[0]}"></div>
                    ${dayRotors}
                </div>
                ${rotors}
            </div>
        `;
    }
}