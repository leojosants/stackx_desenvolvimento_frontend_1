import React, { useState } from "react";
import './miniGame.css';

const MiniGame = () => {
    const [cont, setCount] = useState(0);

    const handleClickIncrease = () => {
        setCount(cont + 1);
    }

    const handleClickDecrease = () => {
        if (cont === 0) {
            alert('Contador não pode ser negativo!');
            return;
        }
        setCount(cont - 1);
    }

    return (
        <div>
            <h2>Mini Game de Contagem</h2>
            <p>Contador: {cont}</p>
            <button onClick={handleClickIncrease}>+</button>
            <button onClick={handleClickDecrease}>-</button>
        </div>
    );
};

export default MiniGame;