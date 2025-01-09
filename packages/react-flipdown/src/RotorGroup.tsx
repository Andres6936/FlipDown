import {Rotor} from "./Rotor";
import {useEffect, useMemo, useRef} from "react";
import styled, {css} from "styled-components";
import {useFirstRender} from "./useFirstRender";

const getPrevValue = (value: string, isFirstRender: boolean) => {
    const valueAsNumber = +value;
    if (isFirstRender) return valueAsNumber;

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
        background-color: light-dark(#151515, #DDDDDD);
    }

    &:nth-child(n+2):nth-child(-n+3):after {
        ${Point};
        bottom: 50px;
        background-color: light-dark(#151515, #DDDDDD);
    }
`

const RotorGroupHeading = styled.div`
    &:before {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    &:before {
        color: light-dark(#000000, #EEEEEE);
        content: attr(data-before);
    }
`

type Props = {
    title: string;
    value: string;
}

export function RotorGroup({title, value}: Props) {
    const [slot1, slot2] = useMemo(() => value.split(''), [value])

    const isFirstRender = useFirstRender();

    return (
        <RotorGroupContainer>
            <RotorGroupHeading data-before={title}/>
            <FlexContainer>
                <Rotor value={slot1} prevValue={getPrevValue(slot1, isFirstRender)}/>
                <Rotor value={slot2} prevValue={getPrevValue(slot2, isFirstRender)}/>
            </FlexContainer>
        </RotorGroupContainer>
    )
}