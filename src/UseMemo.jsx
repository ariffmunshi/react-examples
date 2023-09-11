import { useState, useMemo, useEffect } from "react";

function slowFunction(number) {
    for (let i = 0; i < 1000000000; i++) {
        i;
    }
    return number * 2;
}

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => slowFunction(number), [number]);
    // use useMemo to prevent re-initialising on each render
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);

    // example to show that themeStyles is re-initialised on each render
    useEffect(() => {
        console.log("Theme changed");
    }, [themeStyles]);

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

export default UseMemo;
