import {ButtonGithub} from "./ButtonGithub";
import {Flipdown} from "react-flipdown";

import './App.css';

// Unix timestamp (in seconds) to count down to
const twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

const App = () => {
    return (
        <div className="example">
            <h1>FlipDown.js</h1>
            <p>A lightweight and performant flip styled countdown clock</p>
            <Flipdown epoch={twoDaysFromNow}/>
            <ButtonGithub/>
        </div>
    );
};

export default App;
