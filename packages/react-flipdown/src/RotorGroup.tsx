import {Rotor} from "./Rotor";
import {useMemo} from "react";

import './RotorGroup.css'

type Props = {
    title: string;
    value: string;
}

export function RotorGroup({title, value}: Props) {
    const [slot1, slot2] = useMemo(() => value.split(''), [value])

    return (
        <div className="rotor-group">
            <div className="rotor-group-heading" data-before={title}/>
            <div className="flex">
                <Rotor value={slot1}/>
                <Rotor value={slot2}/>
            </div>
        </div>
    )
}