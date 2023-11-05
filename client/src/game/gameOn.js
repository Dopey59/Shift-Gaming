import React from "react";
import { useEffect } from "react";

export default function GameActivated(){

    const Banniere = document.getElementById('bgBanniere');
    const btn = document.getElementById('GameOn');

    function setColor(){
        Banniere.style.backgroundColor = "red"; 
    };
    setColor();

    function setTextChanged(){
        btn.innerText= "Game On";
        
    };
    setTextChanged();

    if(setTextChanged() == true){
        btn.innerText = "Game Off";
    }else{

    };
}