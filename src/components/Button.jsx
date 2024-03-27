import classNames from "classnames";
import React from "react";


const Button = ({ className, outline, children, addPizza }) => {
    return (
        <button onClick = {addPizza}
            className={classNames("button", className, {
                "button-outline": outline,
            })}
        >
            {children}
        </button>
    );
};

export default Button;
