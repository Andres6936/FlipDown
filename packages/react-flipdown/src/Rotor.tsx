import {useEffect, useRef, useState} from "react";

import './Rotor.css'

type Props = {
    value: string;
}

export function Rotor({value}: Props) {
    const rotorLeafRef = useRef<HTMLDivElement>(null);
    const [prevValue, setPrevValue] = useState(value);

    useEffect(() => {
        if (rotorLeafRef.current) {
            // Animate the flipping transition
            rotorLeafRef.current.classList.remove("flipped");
            setTimeout(() => {
                setPrevValue(value);
                rotorLeafRef.current?.classList.add("flipped");
            }, 500);
        }
    }, [value, setPrevValue]);

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
