import {useState} from "react";

import './Rotor.css'

type Props = {
    value: string;
}

export function Rotor({value}: Props) {
    const [prevValue, setPrevValue] = useState(value);

    return (
        <div className="rotor">
            <div className="rotor-leaf flipped">
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