import React, {useEffect, useRef} from "react";
import styled, {css} from "styled-components";
import {useFirstRender} from "./useFirstRender";

const PreferColorScheme = css`
    color: light-dark(#FFFFFF, #222222);
    background-color: light-dark(#202020, #DDDDDD);
`

const PreferColorSchemeVariant = css`
    color: light-dark(#EFEFEF, #333333);
    background-color: light-dark(#202020, #EEEEEE);
`

const RotorContainer = styled.div`
    position: relative;
    float: left;
    width: 50px;
    height: 80px;
    margin: 0 5px 0 0;
    border-radius: 4px;
    font-size: 4rem;
    text-align: center;
    perspective: 200px;
    color: light-dark(#FFFFFF, #222222);
    background-color: light-dark(#202020, #DDDDDD);
    
    &:last-child {
        margin-right: 0;
    }
    
    &:after {
        content: '';
        z-index: 2;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 40px;
        border-radius: 0 0 4px 4px;
        border-top: solid 1px light-dark(#151515, #222222);
    }
`

const RotorTopBottomView = styled.div`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
`

const RotorTop = styled(RotorTopBottomView)`
    line-height: 80px;
    border-radius: 4px 4px 0 0;

    ${PreferColorScheme}
`

const RotorBottom = styled(RotorTopBottomView)`
    bottom: 0;
    line-height: 0;
    border-radius: 0 0 4px 4px;

    ${PreferColorSchemeVariant}
`

const RotorLeaf = styled.div`
    z-index: 1;
    position: absolute;
    width: 50px;
    height: 80px;
    transform-style: preserve-3d;
    
    
    &.flipped {
        transform: rotateX(-180deg);
        transition: all 0.5s ease-in-out;
    }
`

const RotorLeafView = styled.figure`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
    margin: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
`

const RotorLeafRear = styled(RotorLeafView)`
    line-height: 0;
    border-radius: 0 0 4px 4px;
    transform: rotateX(-180deg);

    ${PreferColorSchemeVariant}
`

const RotorLeafFront = styled(RotorLeafView)`
    line-height: 80px;
    border-radius: 4px 4px 0 0;

    ${PreferColorScheme}
`

type Props = {
    value: React.ReactNode;
    prevValue: React.ReactNode,
}

export function Rotor({value, prevValue}: Props) {
    const rotorLeafRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useFirstRender();

    const [currentValue, setCurrentValue] = React.useState(value);
    const [previousValue, setPreviousValue] = React.useState(prevValue);

    useEffect(() => {
        if (rotorLeafRef.current && !isFirstRender) {
            // Animate the flipping transition
            rotorLeafRef.current.classList.remove("flipped");
            setTimeout(() => {
                rotorLeafRef.current?.classList.add("flipped");
                setCurrentValue(value);
                setPreviousValue(prevValue);
            }, 500);
        }
    }, [value, prevValue]);

    return (
        <RotorContainer>
            <RotorLeaf ref={rotorLeafRef}>
                <RotorLeafRear>
                    {currentValue}
                </RotorLeafRear>

                <RotorLeafFront>
                    {previousValue}
                </RotorLeafFront>
            </RotorLeaf>

            <RotorTop>
                {currentValue}
            </RotorTop>

            <RotorBottom>
                {previousValue}
            </RotorBottom>
        </RotorContainer>
    )
}
