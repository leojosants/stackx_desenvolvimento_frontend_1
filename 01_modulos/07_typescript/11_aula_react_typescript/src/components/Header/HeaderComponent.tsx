import React from "react";
import { HeaderInterface } from "../../interface/Header/HeaderInterface";

const AppHeader: React.FC<HeaderInterface> = (props): JSX.Element => {
    const { title, setTitle } = props;

    return (
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
    );
};

export default AppHeader;