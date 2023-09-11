import { useState, useEffect } from "react";

function UseState() {
    const [resource, setResource] = useState("posts");

    // useEffect running when resource changes
    useEffect(() => {
        console.log("useEffect");
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
        </>
    );
}

export default UseState;
