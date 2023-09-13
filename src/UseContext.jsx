import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function UseContext() {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    }
    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionalContextComponent />
            </ThemeContext.Provider>
        </>
    );
}

function FunctionalContextComponent() {
    const darkTheme = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        padding: "1rem 2rem",
    };
    return <div style={themeStyles}>UseContext</div>;
}

export default UseContext;
