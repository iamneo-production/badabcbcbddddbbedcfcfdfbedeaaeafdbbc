import React from 'react'
import { useState } from 'react';

interface ButtonProps {
    onClick: () => void;
    text : String;
}

const ButtonFunc = (text) => {
    if(text === ""){
        return "Button Works";
    } else {
        return text;
    }
}




const Button = (ButtonProps) => {
    return (<button onClick = {ButtonProps.onClick}>{ButtonProps.children}</button>);
}

export default Button;