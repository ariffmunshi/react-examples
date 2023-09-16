import { useCallback, useEffect, useState } from "react";

function UseCallback() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Toggle Theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}

function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
    }, [getItems]);

    return items.map((item) => <div key={item}>{item}</div>);
}

export default UseCallback;
