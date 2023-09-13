import { useReducer, useState } from "react";

const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO: {
            return [...todos, newTodo(action.payload.name)];
        }
        case ACTIONS.TOGGLE_TODO: {
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
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
                <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </>
    );
}

function Todo({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.completed ? "grey" : "black" }}>
                {todo.name}
            </span>
            <button
                onClick={() =>
                    dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { id: todo.id },
                    })
                }
            >
                Toggle
            </button>
        </div>
    );
}

export default UseReducerExample;
