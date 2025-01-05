import {RotorGroup} from "./RotorGroup";
import {useEffect, useState} from "react";

import './Flipdown.css'

const pad = (value: number) => String(value).padStart(2, '0');

type Props = {
    epoch: number;
}

export function Flipdown({epoch}: Props) {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Get time now
            const now = new Date().getTime() / 1000;

            // Between now and epoch
            let diff = epoch - now <= 0 ? 0 : epoch - now;

            // Days remaining
            const days = Math.floor(diff / 86400);
            diff -= days * 86400;

            // Hours remaining
            const hours = Math.floor(diff / 3600);
            diff -= hours * 3600;

            // Minutes remaining
            const minutes = Math.floor(diff / 60);
            diff -= minutes * 60;

            // Seconds remaining
            const seconds = Math.floor(diff);

            // Trigger the refresh of UI
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1_000)

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flipdown flipdown__theme-dark">
            <RotorGroup title="Days" value={pad(days)}/>
            <RotorGroup title="Hours" value={pad(hours)}/>
            <RotorGroup title="Minutes" value={pad(minutes)}/>
            <RotorGroup title="Seconds" value={pad(seconds)}/>
        </section>
    )
}