import { useState } from "react";
function UseRef() {
    const [name, setName] = useState("");
    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>You entered: {name}</p>
        </>
    );
}

export default UseRef;
