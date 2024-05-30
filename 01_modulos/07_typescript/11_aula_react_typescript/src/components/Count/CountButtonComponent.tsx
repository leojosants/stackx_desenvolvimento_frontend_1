import React from "react";
import { CountButtonInterface } from "../../interface/Count/CountButtonInterface";

const CountButton: React.FC<CountButtonInterface> = (props): JSX.Element => {
    const { setCount } = props;

    const account = (value: number): void => {
        setCount(
            (lastValue: number) => {
                if (value < 0 && lastValue === 0) {
                    return 0;
                }

                if (value === 0) {
                    return 0;
                }

                return lastValue + value;
            }
        );
    };

    return (
        <>
            <button onClick={() => account(-1)}>
                Decrementar
            </button>

            <button onClick={() => account(0)}>
                Resetar
            </button>

            <button onClick={() => account(+1)}>
                Incrementar
            </button>
        </>
    );
};

export default CountButton;