import {RotorGroup} from "./RotorGroup";
import {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {useFirstRender} from "./useFirstRender";

const MAXIMUM_OF_DAY = 365;
const MAXIMUM_OF_HOUR = 24;
const MAXIMUM_OF_MINUTE = 60;
const MAXIMUM_OF_SECOND = 60;

const clampDay = (value: number) => {
    if (value >= MAXIMUM_OF_DAY) return MAXIMUM_OF_DAY;
    if (value < 0) return 0;
    return value;
}

const clampHour = (value: number) => {
    if (value >= MAXIMUM_OF_HOUR) return MAXIMUM_OF_HOUR;
    if (value < 0) return 0;
    return value;
}

const clampMinute = (value: number) => {
    if (value >= MAXIMUM_OF_MINUTE) return MAXIMUM_OF_MINUTE;
    if (value < 0) return 0;
    return value;
}

const clamSecond = (value: number) => {
    if (value >= MAXIMUM_OF_SECOND) return MAXIMUM_OF_SECOND;
    if (value < 0) return 0;
    return value;
}

const getCountdown = (epoch: number, isFirstRender: boolean) => {
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
        days: {
            current: days,
            previous: isFirstRender ? days : clampDay(days - 1),
        },
        hours: {
            current: hours,
            previous: isFirstRender ? hours : clampHour(hours - 1),
        },
        minutes: {
            current: minutes,
            previous: isFirstRender ? minutes : clampMinute(minutes - 1),
        },
        seconds: {
            current: seconds,
            previous: isFirstRender ? seconds : clamSecond(seconds - 1),
        },
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
    const isFirstRender = useFirstRender();

    const [countdownEnded, setCountdownEnded] = useState<boolean>(false);
    const [callbackCalled, setCallbackCalled] = useState<boolean>(false);
    const [countdown, setCountdown] = useState(getCountdown(epoch, isFirstRender));

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
            setCountdown(getCountdown(epoch, isFirstRender));
        }, 1_000)

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <RotorGroup title="Days" value={countdown.days}/>
            <RotorGroup title="Hours" value={countdown.hours}/>
            <RotorGroup title="Minutes" value={countdown.minutes}/>
            <RotorGroup title="Seconds" value={countdown.seconds}/>
        </Container>
    )
}