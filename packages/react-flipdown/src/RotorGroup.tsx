import {Rotor} from "./Rotor";
import {useMemo} from "react";
import styled, {css} from "styled-components";

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

type RotorGroupHeadingProps = {
    title: string,
}

const RotorGroupHeading = styled.div<RotorGroupHeadingProps>`
    &:before {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    &:before {
        color: light-dark(#000000, #EEEEEE);
        content: '${props => props.title}';
    }
`

type Props = {
    title: string;
    value: {
        current: number,
        previous: number,
    };
}

export function RotorGroup({title, value}: Props) {
    const [slot1, slot2] = useMemo(() => String(value.current).padStart(2, "0").split(''), [value.current])
    const [prev1, prev2] = useMemo(() => String(value.previous).padStart(2, "0").split(''), [value.previous])

    return (
        <RotorGroupContainer>
            <RotorGroupHeading title={title}/>
            <FlexContainer>
                <Rotor value={slot1} prevValue={prev1}/>
                <Rotor value={slot2} prevValue={prev2}/>
            </FlexContainer>
        </RotorGroupContainer>
    )
}