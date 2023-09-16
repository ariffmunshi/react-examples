import { ThemeProvider, useTheme, useThemeUpdate } from "./ThemeContext";
function UseContext() {
    return (
        <>
            <ThemeProvider>
                <FunctionalContextComponent />
            </ThemeProvider>
        </>
    );
}

function FunctionalContextComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        padding: "1rem 2rem",
    };
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>UseContext</div>
        </>
    );
}

export default UseContext;
