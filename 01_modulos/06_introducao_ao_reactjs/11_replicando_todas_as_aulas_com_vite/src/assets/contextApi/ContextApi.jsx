import { createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeButton = () => {
    const theme = useContext(ThemeContext);

    const stylesButton1 = {
        background: theme,
        border: 'none',
        marginRight: '1rem',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    const stylesButton2 = {
        background: 'red',
        border: 'none',
        marginRight: '1rem',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <>
            <button style={stylesButton1}>
                Botão temático 1
            </button>

            <button style={stylesButton2}>
                Botão temático 2
            </button>

            <button>
                Sem configurações
            </button>
        </>
    );
};

const UseThemeButton = () => {
    return (
        <ThemeContext.Provider value={'orange'}>
            <div>
                <h1>Exemplo com useContext</h1>
                <ThemeButton />
            </div>
        </ThemeContext.Provider>
    );
};

export default UseThemeButton;