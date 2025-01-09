import { useRef, useEffect } from "react";

// React hook to detect if it is the first render of a component.
export const useFirstRender = () => {
    const firstRender = useRef(true);

    useEffect(() => {
        firstRender.current = false;
    }, []);

    return firstRender.current;
};