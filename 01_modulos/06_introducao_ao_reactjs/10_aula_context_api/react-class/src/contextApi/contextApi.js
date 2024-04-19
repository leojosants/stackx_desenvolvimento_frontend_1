import React, { useContext, createContext } from 'react';

const ThemeContext = createContext();

const ThemeButton = () => {
    const theme = useContext(ThemeContext);

    return (
        <>
            <button style={{ backgroundColor: theme, border: 'none' }}>
                Botão Temático
            </button>
            <button>Teste</button>
        </>
    );
};

const UseThemeButton = () => {
    return (
        <ThemeContext.Provider value='#ff000042'>
            <div>
                <h1>Exemplo com useContext</h1>
                <ThemeButton />
            </div>
        </ThemeContext.Provider>
    );
};

export default UseThemeButton;