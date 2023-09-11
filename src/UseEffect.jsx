import { useState, useEffect } from "react";

function UseState() {
    const [resource, setResource] = useState("posts");
    const [items, setItems] = useState([]);

    // useEffect running when resource changes
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/" + resource)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [resource]);
    return (
        <>
            <div>
                <button onClick={() => setResource("posts")}>Posts</button>
                <button onClick={() => setResource("comments")}>
                    Comments
                </button>
                <button onClick={() => setResource("users")}>Users</button>
            </div>
            <h1>{resource}</h1>
            {items.map((item) => (
                <pre key={item.id}>{JSON.stringify(item)}</pre>
            ))}
        </>
    );
}

export default UseState;
