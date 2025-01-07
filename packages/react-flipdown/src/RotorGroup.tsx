import {Rotor} from "./Rotor";
import {useMemo} from "react";
import styled, {css} from "styled-components";

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

const Point = css`
    content: '';
    position: absolute;
    left: 115px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
`

const RotorGroupContainer = styled.div`
    position: relative;
    float: left;
    padding-right: 30px;

    &:last-child {
        padding-right: 0;
    }

    &:nth-child(n+2):nth-child(-n+3):before {
        ${Point};
        bottom: 20px;
    }

    &:nth-child(n+2):nth-child(-n+3):after {
        ${Point};
        bottom: 50px;
    }

    &:nth-child(1) {
        content: attr(data-before);
    }

    &:nth-child(2) {
        content: attr(data-before);
    }

    &:nth-child(3) {
        content: attr(data-before);
    }

    &:nth-child(4) {
        content: attr(data-before);
    }


    @media (prefers-color-scheme: dark) {
        &:nth-child(n+2):nth-child(-n+3):before,
        &:nth-child(n+2):nth-child(-n+3):after {
            background-color: #151515;
        }
    }

    @media (prefers-color-scheme: light) {
        &:nth-child(n+2):nth-child(-n+3):before,
        &:nth-child(n+2):nth-child(-n+3):after {
            background-color: #DDDDDD;
        }
    }
`

type Props = {
    title: string;
    value: string;
}

export function RotorGroup({title, value}: Props) {
    const [slot1, slot2] = useMemo(() => value.split(''), [value])

    return (
        <RotorGroupContainer className="rotor-group">
            <div className="rotor-group-heading" data-before={title}/>
            <FlexContainer>
                <Rotor value={slot1} prevValue={getPrevValue(slot1)}/>
                <Rotor value={slot2} prevValue={getPrevValue(slot2)}/>
            </FlexContainer>
        </RotorGroupContainer>
    )
}