import { useState, useRef, useEffect } from "react";
function UseRef() {
    const [name, setName] = useState("");
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });
    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>You entered: {name}</p>
            <p>Item been rendered: {renderCount.current} times</p>
        </>
    );
}

export default UseRef;
