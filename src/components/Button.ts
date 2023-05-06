import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('showcase-button')
class Button extends LitElement {
    static styles = css`
    .button {
        transition: all .2s ease-in-out;
    }
    
     .buttons {
        width: 100%;
        height: 50px;
        margin: 50px auto 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

     .buttons p {
        height: 50px;
        line-height: 50px;
        font-weight: 400;
        padding: 0 25px 0 0;
        margin: 0;
    }

    .button {
        display: inline-block;
        height: 50px;
        box-sizing: border-box;
        line-height: 46px;
        text-decoration: none;
        color: #333;
        padding: 0 20px;
        border: solid 2px #333;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 700;
        transition: all .2s ease-in-out;
    }
    
     .button i {
        margin-right: 5px;
    }
    
    @media (prefers-color-scheme: light) {
         .buttons p {
            color: #000000;
        }

         .button:hover {
            background-color: #333;
            color: #FFF;
        }
    }
    
    @media (prefers-color-scheme: dark) {
       
        .buttons p {
            color: #FFFFFF;
        }

         .buttons .button {
            color: #FFFFFF;
            border-color: #FFFFFF;
        }

        .buttons .button:hover {
            color: #151515;
            background-color: #FFFFFF;
        }
    }
    `

    render() {
        return html`
            <div class="buttons">
                <p>Version: <span id="ver">3.0.2</span> (&lt;11KB minified)</p>
                <a href="https://github.com/Andres6936/FlipDown" class="button"><i
                    class="fab fa-github"></i> <span>Get started</span></a>
            </div>
        `
    }
}