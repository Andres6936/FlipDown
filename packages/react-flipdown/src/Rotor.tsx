import {useEffect, useRef, useState} from "react";

import './Rotor.css'

type Props = {
    value: string;
    prevValue: number,
}

export function Rotor({value, prevValue}: Props) {
    const rotorLeafRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (rotorLeafRef.current) {
            // Animate the flipping transition
            rotorLeafRef.current.classList.remove("flipped");
            setTimeout(() => {
                rotorLeafRef.current?.classList.add("flipped");
            }, 500);
        }
    }, [value]);

    return (
        <div className="rotor">
            <div ref={rotorLeafRef} className="rotor-leaf flipped">
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
