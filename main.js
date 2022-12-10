import './style.css'
import {FlipDown} from "./src/flipdown.js";

document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  const twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
    const flipdown = new FlipDown(twoDaysFromNow)
        // Start the countdown
        .start()
        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });

  // Show version number
    document.getElementById('ver').innerHTML = flipdown.version;
});
