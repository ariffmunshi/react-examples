import { useReducer, useState } from "react";

const ACTIONS = {
    ADD_TODO: "add-todo",
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO: {
            return [...todos, newTodo(action.payload.name)];
        }
    }
}

function newTodo(name) {
    return { id: Date.now(), name, completed: false };
}

function UseReducerExample() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
        setName("");
    }
    console.log(todos);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
        </>
    );
}

export default UseReducerExample;