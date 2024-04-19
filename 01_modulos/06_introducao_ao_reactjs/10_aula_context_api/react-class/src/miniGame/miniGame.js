import React, { useCallback, useMemo, useState } from "react";
import './miniGame.css';

const MiniGame = () => {
    const [count, setCount] = useState(0);

    const handleClickDecreaseCount = useCallback(
        () => {
            if (count === 0) {
                alert('Contador não pode ser negativo!');
                return;
            }
            setCount(count - 1);
        }, [count]
    );

    const handleClickIncreaseCount = useCallback(
        () => {
            setCount(count + 1);
        }, [count]
    );

    const getCurrentCount = () => {
        console.log('Obtendo valor atual da contagem!');
        return count;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memorizeCount = useMemo(
        () => {
            return getCurrentCount();
        }
    );

    return (
        <div>
            <h2>Mini Game de Contagem</h2>
            <p>Contador: {count}</p>
            <p>Contagem memorizada: {memorizeCount}</p>
            <button onClick={handleClickDecreaseCount}>-</button>
            <button onClick={handleClickIncreaseCount}>+</button>
        </div>
    );
};

export default MiniGame;