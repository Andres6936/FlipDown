import {useEffect, useRef, useState} from "react";

import styled from "styled-components";

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
    
    :last-child {
        margin-right: 0;
    }
    
    :after {
        content: '';
        z-index: 2;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 40px;
        border-radius: 0 0 4px 4px;
    }

    @media (prefers-color-scheme: dark) {
        color: #FFFFFF;
        background-color: #202020;

        :after {
            border-top: solid 1px #151515;
        }
    }

    @media (prefers-color-scheme: light) {
        color: #222222;
        background-color: #DDDDDD;
        
        :after {
            border-top: solid 1px #222222;
        }
    }
`

const RotorTop = styled.div`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
    
    line-height: 80px;
    border-radius: 4px 4px 0 0;

    @media (prefers-color-scheme: dark) {
        color: #FFFFFF;
        background-color: #202020;
    }

    @media (prefers-color-scheme: light) {
        color: #222222;
        background-color: #DDDDDD;
    }
`

const RotorBottom = styled.div`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
    
    bottom: 0;
    line-height: 0;
    border-radius: 0 0 4px 4px;

    @media (prefers-color-scheme: dark) {
        color: #EFEFEF;
        background-color: #202020;
    }

    @media (prefers-color-scheme: light) {
        color: #333333;
        background-color: #EEEEEE;
    }
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

const RotorLeafRear = styled.figure`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
    margin: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    line-height: 0;
    border-radius: 0 0 4px 4px;
    transform: rotateX(-180deg);

    @media (prefers-color-scheme: dark) {
        color: #EFEFEF;
        background-color: #202020;
    }

    @media (prefers-color-scheme: light) {
        color: #333333;
        background-color: #EEEEEE;
    }
`

const RotorLeafFront = styled.figure`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
    margin: 0;
    transform: rotateX(0deg);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    line-height: 80px;
    border-radius: 4px 4px 0 0;

    @media (prefers-color-scheme: dark) {
        color: #FFFFFF;
        background-color: #202020;
    }

    @media (prefers-color-scheme: light) {
        color: #222222;
        background-color: #DDDDDD;
    }
`

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
        <RotorContainer>
            <RotorLeaf ref={rotorLeafRef} className="flipped">
                <RotorLeafRear>
                    {value}
                </RotorLeafRear>

                <RotorLeafFront>
                    {prevValue}
                </RotorLeafFront>
            </RotorLeaf>

            <RotorTop>
                {value}
            </RotorTop>

            <RotorBottom>
                {prevValue}
            </RotorBottom>
        </RotorContainer>
    )
}
