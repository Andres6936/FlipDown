import {RotorGroup} from "./RotorGroup";
import {useState} from "react";

import './Flipdown.css'

const pad = (value: number) => String(value).padStart(2, '0');

export function Flipdown() {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    return (
        <section className="flipdown flipdown__theme-dark">
            <RotorGroup title="Days" value={pad(days)}/>
            <RotorGroup title="Hours" value={pad(hours)}/>
            <RotorGroup title="Minutes" value={pad(minutes)}/>
            <RotorGroup title="Seconds" value={pad(seconds)}/>
        </section>
    )
}