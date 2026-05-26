import "./components.css"
import React from "react";

function Button({children, onClick, variant='default'}) {
    return (
        <button className={variant} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;