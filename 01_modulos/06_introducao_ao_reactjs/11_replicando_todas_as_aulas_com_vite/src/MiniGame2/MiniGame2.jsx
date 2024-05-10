import { useState } from "react";

const MiniGame2 = () => {
    const [count, setCount] = useState(0);

    const handleButtonClickDecrease = () => {
        setCount(count - 1);
    };

    const handleButtonClickInrease = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Mini Game</h2>
            <p>Contador: {count}</p>
            <button onClick={handleButtonClickDecrease}>-</button>
            <button onClick={handleButtonClickInrease}>+</button>
        </div>
    );
};

export default MiniGame2;