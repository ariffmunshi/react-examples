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
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </>
    );
}

function Todo({ todo }) {
    return (
        <span style={{ color: todo.completed ? "grey" : "black" }}>
            {todo.name}
        </span>
    );
}

export default UseReducerExample;
