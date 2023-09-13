import { useReducer } from "react";
import UseReducerExample from "./UseReducerExample";

const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTION.DECREMENT:
            return { count: state.count - 1 };
        case ACTION.INCREMENT:
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
        dispatch({ type: ACTION.INCREMENT });
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            {state.count}
            <button onClick={increment}>+</button>
            <UseReducerExample />
        </>
    );
}

export default UseReducer;
