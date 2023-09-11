import { useState, useRef, useEffect } from "react";
function UseRef() {
    const [name, setName] = useState("");
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef("");

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={focus}>Focus</button>
            <p>You entered: {name}</p>
            <p>Previous value was: {prevName.current}</p>
            <p>Item been rendered: {renderCount.current} times</p>
        </>
    );
}

export default UseRef;
