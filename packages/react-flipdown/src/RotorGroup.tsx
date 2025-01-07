import {Rotor} from "./Rotor";
import {useMemo} from "react";
import styled from "styled-components";

import './RotorGroup.css'

const getPrevValue = (value: string) => {
    const valueAsNumber = +value;
    if (valueAsNumber === 9) {
        return 0;
    } else if (valueAsNumber === 0) {
        return 1;
    } else {
        return valueAsNumber + 1;
    }
};

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 0.3rem;
`

type Props = {
    title: string;
    value: string;
}

export function RotorGroup({title, value}: Props) {
    const [slot1, slot2] = useMemo(() => value.split(''), [value])

    return (
        <div className="rotor-group">
            <div className="rotor-group-heading" data-before={title}/>
            <FlexContainer>
                <Rotor value={slot1} prevValue={getPrevValue(slot1)}/>
                <Rotor value={slot2} prevValue={getPrevValue(slot2)}/>
            </FlexContainer>
        </div>
    )
}