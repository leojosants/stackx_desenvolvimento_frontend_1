import { useCallback, useMemo, useState } from "react";

const MiniGame2 = () => {
    const [count, setCount] = useState(0);

    const handleButtonClickDecrease = useCallback(
        () => {
            if (count === 0) {
                return;
            }
            setCount(count - 1);
        },
        [count]
    );

    const handleButtonClickInrease = useCallback(
        () => {
            setCount(count + 1);
        },
        [count]
    );

    const getCurrentCount = () => {
        console.log('Obtendo valor atual da contagem')
        return count;
    };

    const memorizeCount = useMemo(
        () => {
            return getCurrentCount();
        },
        [count]
    );

    return (
        <div>
            <h2>Mini Game</h2>
            <p>Contador: {count}</p>
            <p>Contagem memorizada: {memorizeCount}</p>
            <button onClick={handleButtonClickDecrease}>-</button>
            <button onClick={handleButtonClickInrease}>+</button>
        </div>
    );
};

export default MiniGame2;