import {RotorGroup} from "./RotorGroup";
import {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {TypeGroup} from "./TypeGroup";

const pad = (value: number) => String(value).padStart(2, '0');

const getCountdown = (epoch: number) => {
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

    return {
        days,
        hours,
        minutes,
        seconds,
    }
}

const Container = styled.div`
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
    overflow: visible;
    width: 510px;
    height: 110px;
    font-family: sans-serif;
    font-weight: bold;
    
    :host {
        color-scheme: light dark;
    }
`

type Props = {
    epoch: number;
    ifEnded?: () => void;
}

export function Flipdown({epoch, ifEnded}: Props) {
    const [countdownEnded, setCountdownEnded] = useState<boolean>(false);
    const [callbackCalled, setCallbackCalled] = useState<boolean>(false);
    const [countdown, setCountdown] = useState(getCountdown(epoch));

    // Has the countdown ended?
    const hasCountdownEnded = useCallback(() => {
        // Avoid recalculate if ended
        if (countdownEnded) return true;

        // Countdown has ended
        if (epoch - new Date().getTime() / 1000 <= 0) {
            setCountdownEnded(true);

            // Fire the ifEnded callback once if it was set
            if (ifEnded && !callbackCalled) {
                // Call ifEnded callback
                ifEnded();
                setCallbackCalled(true);
            }

            return true;
        }
        // Countdown has not ended
        return false;
    }, [])

    // Calculate current tick
    useEffect(() => {
        const interval = setInterval(() => {
            // Has the countdown ended?
            hasCountdownEnded();
            // Trigger the refresh of UI
            setCountdown(getCountdown(epoch));
        }, 1_000)

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <RotorGroup title="Days" type={TypeGroup.Days} value={pad(countdown.days)}/>
            <RotorGroup title="Hours" type={TypeGroup.Hours} value={pad(countdown.hours)}/>
            <RotorGroup title="Minutes" type={TypeGroup.Minutes} value={pad(countdown.minutes)}/>
            <RotorGroup title="Seconds" type={TypeGroup.Seconds} value={pad(countdown.seconds)}/>
        </Container>
    )
}