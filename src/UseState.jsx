import { useState } from "react";
function UseState() {
    const [count, setCount] = useState(0);

    // Pass previous value as callback if using previous value
    function decrementCount() {
        setCount((prevCount) => prevCount - 1);
    }
    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <>
            <button onClick={decrementCount}>-</button>
            {count}
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default UseState;
