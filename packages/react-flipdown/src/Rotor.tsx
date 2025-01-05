import {useEffect, useRef, useState} from "react";

import './Rotor.css'

type Props = {
    value: string;
}

export function Rotor({value}: Props) {
    const refRotor = useRef<HTMLDivElement>(null);
    const [prevValue, setPrevValue] = useState('0');

    useEffect(() => {
        if (refRotor.current) {
            setPrevValue(value);
            refRotor.current.classList.remove('flipped');
            setTimeout(() => refRotor.current?.classList.add('flipped'), 500);
        }
    }, [value, setPrevValue]);

    return (
        <div className="rotor">
            <div ref={refRotor} className="rotor-leaf flipped">
                <figure className="rotor-leaf-rear">
                    {value}
                </figure>

                <figure className="rotor-leaf-front">
                    {prevValue}
                </figure>
            </div>

            <div className="rotor-top">
                {value}
            </div>

            <div className="rotor-bottom">
                {prevValue}
            </div>
        </div>
    )
}