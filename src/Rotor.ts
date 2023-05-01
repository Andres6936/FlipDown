import {css, html, LitElement, PropertyValues} from "lit";
import {customElement, property, query, state} from "lit/decorators.js";

@customElement('adan-rotor')
class Rotor extends LitElement {
    static styles = css`
    @media (prefers-color-scheme: dark) {
            /* Rotor tops */
             .rotor,
             .rotor-top,
             .rotor-leaf-front {
                color: #FFFFFF;
                background-color: var(--flipdown-color-dark-rotor);
            }

            /* Rotor bottoms */
             .rotor-bottom,
             .rotor-leaf-rear {
                color: #EFEFEF;
                background-color: var(--flipdown-color-dark-rotor);
            }

            /* Hinge */
             .rotor:after {
                border-top: solid 1px var(--flipdown-color-dark);
            }
    }
    
    @media (prefers-color-scheme: light) {
            /* Rotor tops */
             .rotor,
             .rotor-top,
             .rotor-leaf-front {
                color: #222222;
                background-color: #DDDDDD;
            }

            /* Rotor bottoms */
             .rotor-bottom,
             .rotor-leaf-rear {
                color: #333333;
                background-color: #EEEEEE;
            }

            /* Hinge */
             .rotor:after {
                border-top: solid 1px #222222;
            }
    }
    
        .rotor {
            position: relative;
            float: left;
            width: 50px;
            height: 80px;
            margin: 0 5px 0 0;
            border-radius: 4px;
            font-size: 4rem;
            text-align: center;
            perspective: 200px;
        }

         .rotor:last-child {
            margin-right: 0;
        }

         .rotor-top,
         .rotor-bottom {
            overflow: hidden;
            position: absolute;
            width: 50px;
            height: 40px;
        }

         .rotor-leaf {
            z-index: 1;
            position: absolute;
            width: 50px;
            height: 80px;
            transform-style: preserve-3d;
            transition: transform 0s;
        }

         .rotor-leaf.flipped {
            transform: rotateX(-180deg);
            transition: all 0.5s ease-in-out;
        }

         .rotor-leaf-front,
         .rotor-leaf-rear {
            overflow: hidden;
            position: absolute;
            width: 50px;
            height: 40px;
            margin: 0;
            transform: rotateX(0deg);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }

         .rotor-leaf-front {
            line-height: 80px;
            border-radius: 4px 4px 0 0;
        }

         .rotor-leaf-rear {
            line-height: 0;
            border-radius: 0 0 4px 4px;
            transform: rotateX(-180deg);
        }

         .rotor-top {
            line-height: 80px;
            border-radius: 4px 4px 0 0;
        }

         .rotor-bottom {
            bottom: 0;
            line-height: 0;
            border-radius: 0 0 4px 4px;
        }

         .rotor:after {
            content: '';
            z-index: 2;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 40px;
            border-radius: 0 0 4px 4px;
        }
    
    @media (max-width: 550px) {
     .rotor {
                font-size: 2.2rem;
                margin-right: 3px;
            }

             .rotor,
             .rotor-leaf,
             .rotor-leaf-front,
             .rotor-leaf-rear,
             .rotor-top,
             .rotor-bottom,
             .rotor:after {
                width: 30px;
            }
    
     .rotor-leaf-front,
             .rotor-top {
                line-height: 50px;
            }

             .rotor-leaf,
             .rotor {
                height: 50px;
            }

             .rotor-leaf-front,
             .rotor-leaf-rear,
             .rotor-top,
             .rotor-bottom,
             .rotor:after {
                height: 25px;
            }
    }
    `

    @query(".rotor-leaf")
    rotorLeaft!: HTMLDivElement

   // Used for display the animation of change of value, where the old
   // value is replaced for the new value
    @state()
    prevValue!: number

    @property({type: Number})
    value!: number

    protected willUpdate(_changedProperties: PropertyValues<this>) {
        if (this.rotorLeaft && _changedProperties.has('value')) {
           // Set the previous value for display the animation, the change of
           // this state in this method not trigger a update.
            this.prevValue = _changedProperties.get('value');
            // Start the animation
            this.rotorLeaft.classList.remove('flipped')
            setTimeout(() => this.rotorLeaft.classList.add('flipped'), 500)
        }
    }

    public render() {
        return html`
            <div class="rotor">
                <div class="rotor-leaf flipped">
                    <figure class="rotor-leaf-rear">
                        ${this.value}
                    </figure>

                    <figure class="rotor-leaf-front">
                        ${this.prevValue}
                    </figure/>
                </div>

                <div class="rotor-top">
                    ${this.value}
                </div>

                <div class="rotor-bottom">
                    ${this.prevValue}
                </div>
            </div>
        `
    }
}