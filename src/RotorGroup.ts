import {css, html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

import './Rotor.ts'

@customElement("adan-rotor-group")
class RotorGroup extends LitElement {
    static styles = css`
    @media (prefers-color-scheme: dark) {

            /* Rotor group headings */
             .rotor-group-heading:before {
                color: #EEEEEE;
            }

            /* Delimeters */
             .rotor-group:nth-child(n+2):nth-child(-n+3):before,
             .rotor-group:nth-child(n+2):nth-child(-n+3):after {
                background-color: var(--flipdown-color-dark);
            }
        }

        @media (prefers-color-scheme: light) {
    
            /* Rotor group headings */
             .rotor-group-heading:before {
                color: #000000;
            }

            /* Delimeters */
             .rotor-group:nth-child(n+2):nth-child(-n+3):before,
             .rotor-group:nth-child(n+2):nth-child(-n+3):after {
                background-color: #DDDDDD;
            }
        }
    
     .rotor-group {
            position: relative;
            float: left;
            padding-right: 30px;
        }

         .rotor-group:last-child {
            padding-right: 0;
        }

         .rotor-group-heading:before {
            display: block;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }

         .rotor-group:nth-child(1) .rotor-group-heading:before {
            content: attr(data-before);
        }

         .rotor-group:nth-child(2) .rotor-group-heading:before {
            content: attr(data-before);
        }

         .rotor-group:nth-child(3) .rotor-group-heading:before {
            content: attr(data-before);
        }

         .rotor-group:nth-child(4) .rotor-group-heading:before {
            content: attr(data-before);
        }

         .rotor-group:nth-child(n+2):nth-child(-n+3):before {
            content: '';
            position: absolute;
            bottom: 20px;
            left: 115px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

         .rotor-group:nth-child(n+2):nth-child(-n+3):after {
            content: '';
            position: absolute;
            bottom: 50px;
            left: 115px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }
    
    @media (max-width: 550px) {
     .rotor-group {
                padding-right: 20px;
            }

             .rotor-group:last-child {
                padding-right: 0;
            }

             .rotor-group-heading:before {
                font-size: 0.8rem;
                height: 20px;
                line-height: 20px;
            }

             .rotor-group:nth-child(n+2):nth-child(-n+3):before,
             .rotor-group:nth-child(n+2):nth-child(-n+3):after {
                left: 69px;
            }

             .rotor-group:nth-child(n+2):nth-child(-n+3):before {
                bottom: 13px;
                height: 8px;
                width: 8px;
            }

             .rotor-group:nth-child(n+2):nth-child(-n+3):after {
                bottom: 29px;
                height: 8px;
                width: 8px;
            }
    }
    `

    @property()
    title!: string

    @property()
    value!: string

    public render() {
       const [slot1, slot2] = this.value.split('')

        return html`
            <div class="rotor-group">
                <div class="rotor-group-heading" data-before="${this.title}"></div>
                <adan-rotor value="${slot1}"></adan-rotor>
                <adan-rotor value="${slot2}"></adan-rotor>
            </div>
        `
    }
}