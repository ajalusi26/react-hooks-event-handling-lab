// Code Keypad Component Here
import React from "react";
function enteringPassword(){
    console.log('Entering password...')
}
function Keypad(){
    return(
        <input onChange={enteringPassword} type="password" />
    )
}
export default Keypad
