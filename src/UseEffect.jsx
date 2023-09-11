import { useState, useEffect } from "react";

function UseState() {
    const [resource, setResource] = useState("posts");
    const [items, setItems] = useState([]);

    // useEffect running when resource changes
    useEffect(() => {
        // set up code when effect triggered
        fetch("https://jsonplaceholder.typicode.com/" + resource)
            .then((response) => response.json())
            .then((json) => setItems(json));
        // code to run after every render or component unmounting
        return () => {
            console.log("clean up");
        };
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
