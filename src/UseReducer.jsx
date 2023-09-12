import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "decrement":
            return { count: state.count - 1 };
        case "increment":
            return { count: state.count + 1 };
        default:
            return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function decrement() {
        dispatch({ type: "decrement" });
    }

    function increment() {
        dispatch({ type: "increment" });
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            {state.count}
            <button onClick={increment}>+</button>
        </>
    );
}

export default UseReducer;
