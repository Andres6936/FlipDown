import {LitElement, html, css} from "lit";
import {customElement, property, state, queryAll} from 'lit/decorators.js';

import './Flipdown.ts'
import './components/Button.ts'

@customElement("showcase-app")
class App extends LitElement {
    static styles = css`
    .example h1,
    .example p,
    .example {
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
    
    @media (prefers-color-scheme: dark) {
        .example h1 {
            color: #FFFFFF;
        }
    
        .example p {
            color: #FFFFFF;
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
                <showcase-button></showcase-button>
            </div>
        `
    }
}