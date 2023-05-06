import {html, css, LitElement, TemplateResult} from "lit";
import {customElement, property, state, queryAll} from 'lit/decorators.js';

import './RotorGroup.ts'

type Theme = "dark" | "light"
type Heading = "Days" | "Hours" | "Minutes" | "Seconds"

interface Options {
    theme: Theme,
    headings: Heading[],
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

@customElement('adan-flipdown')
export class Flipdown extends LitElement {
    static styles = css`
        @media (prefers-color-scheme: dark) {
            .flipdown {
                font-family: sans-serif;
                font-weight: bold;
            }
        }

        @media (prefers-color-scheme: light) {

        /* Font styles */
            .flipdown {
                font-family: sans-serif;
                font-weight: bold;
            }
        }

        .flipdown {
            display: flex;
            column-gap: 1.5rem;
            justify-content: center;
            overflow: visible;
            width: 510px;
            height: 110px;
        }
    `

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

    @state()
    days!: number

    @state()
    hours!: number

    @state()
    minutes!: number

    @state()
    seconds!: number

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
        this._tick();
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
     * @name _tick
     * @description Calculate current tick
     * @author PButcher
     **/
    private _tick() {
        // Get time now
        this.now = this._getTime();

        // Between now and epoch
        let diff = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;

        // Days remaining
        this.days = Math.floor(diff / 86400);
        diff -= this.days * 86400;

        // Hours remaining
        this.hours = Math.floor(diff / 3600);
        diff -= this.hours * 3600;

        // Minutes remaining
        this.minutes = Math.floor(diff / 60);
        diff -= this.minutes * 60;

        // Seconds remaining
        this.seconds = Math.floor(diff);

        // Has the countdown ended?
        this._hasCountdownEnded();

        setTimeout(this._tick.bind(this), 1_000);
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

        return html`
            <div class="flipdown flipdown__theme-${this.opts.theme}">
                <adan-rotor-group title="Days" value="${pad(this.days, 2)}"></adan-rotor-group>
                <adan-rotor-group title="Hours" value="${pad(this.hours, 2)}"></adan-rotor-group>
                <adan-rotor-group title="Minutes" value="${pad(this.minutes, 2)}"></adan-rotor-group>
                <adan-rotor-group title="Seconds" value="${pad(this.seconds, 2)}"></adan-rotor-group>
            </div>
        `;
    }
}