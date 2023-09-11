import { useState } from "react";
function UseState() {
    const [count, setCount] = useState(0);
    function decrementCount() {
        setCount(count - 1);
    }
    function incrementCount() {
        setCount(count + 1);
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
