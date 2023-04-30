import {LitElement, html, css} from "lit";
import {customElement, property, state, queryAll} from 'lit/decorators.js';

import './Flipdown.ts'

@customElement("showcase-app")
class App extends LitElement {
    static styles = css`
    html {
        height: 100%;
    }
    
    body {
        margin: 0;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: space-around;
    }
    
    body,
    .example h1,
    .example p,
    .example .button {
        transition: all .2s ease-in-out;
    }
    
    .example {
        font-family: 'Roboto', sans-serif;
        width: 550px;
        height: 378px;
        margin: auto;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .example .flipdown {
        margin: auto;
    }
    
    .example h1 {
        text-align: center;
        font-weight: 100;
        font-size: 3em;
        margin-top: 0;
        margin-bottom: 10px;
    }
    
    .example p {
        text-align: center;
        font-weight: 100;
        margin-top: 0;
        margin-bottom: 35px;
    }
    
    .example .buttons {
        width: 100%;
        height: 50px;
        margin: 50px auto 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    .example .buttons p {
        height: 50px;
        line-height: 50px;
        font-weight: 400;
        padding: 0 25px 0 0;
        margin: 0;
    }
    
    .example .button {
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
    
    .example .button i {
        margin-right: 5px;
    }
    
    @media (prefers-color-scheme: light) {
        body .buttons p {
            color: #000000;
        }
    
        .example .button:hover {
            background-color: #333;
            color: #FFF;
        }
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            background-color: #151515;
        }
    
        body .example h1 {
            color: #FFFFFF;
        }
    
        body .example p {
            color: #FFFFFF;
        }
    
        body .buttons p {
            color: #FFFFFF;
        }
    
        body .buttons .button {
            color: #FFFFFF;
            border-color: #FFFFFF;
        }
    
        body .buttons .button:hover {
            color: #151515;
            background-color: #FFFFFF;
        }
    }
    
    @media (max-width: 550px) {
        .example {
            width: 100%;
            height: 362px;
        }
    
        .example h1 {
            font-size: 2.5em;
        }
    
        .example p {
            margin-bottom: 25px;
        }
    
        .example .buttons {
            width: 100%;
            margin-top: 25px;
            text-align: center;
            display: block;
        }
    
        .example .buttons p,
        .example .buttons a {
            float: none;
            margin: 0 auto;
        }
    
        .example .buttons p {
            padding-right: 0;
        }
    
        .example .buttons a {
            display: inline-block;
        }
    }
    `

    render() {
        // Unix timestamp (in seconds) to count down to
        const twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
        
        return html`
            <div class="example">
                <h1>FlipDown.js</h1>
                <p>A lightweight and performant flip styled countdown clock</p>
                <adan-flipdown epoch="${twoDaysFromNow}"></adan-flipdown>
                <div class="buttons">
                    <p>Version: <span id="ver">3.0.2</span> (&lt;11KB minified)</p>
                    <a href="https://github.com/PButcher/flipdown#flipdown" class="button"><i
                        class="fab fa-github"></i> <span>Get started</span></a>
                </div>
            </div>
        `
    }
}