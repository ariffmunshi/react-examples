import { useState } from "react";
function UseState() {
    // const [count, setCount] = useState(0);
    // initialise state with callback function if only require to run once
    const [count, setCount] = useState(() => {
        return 0;
    });
    const [obj, setObj] = useState({ name: "John", age: 20 });

    // Pass previous value as callback if using previous value
    function decrementCount() {
        setCount((prevCount) => prevCount - 1);
    }
    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }

    function addAge() {
        // state should be treated as immutable
        // update objects by cloning previous object and modifying
        setObj((prevObj) => ({
            ...prevObj,
            age: prevObj.age + 1,
        }));
    }
    return (
        <>
            <button onClick={decrementCount}>-</button>
            {count}
            <button onClick={incrementCount}>+</button>
            <br />
            <p>
                Person: {obj.name}, age: {obj.age}
            </p>
            <button onClick={addAge}>Add Age</button>
        </>
    );
}

export default UseState;
