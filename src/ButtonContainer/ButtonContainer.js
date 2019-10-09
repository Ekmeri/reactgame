import React, { useState } from 'react';
import './ButtonContainer.css';

//random number
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const ButtonContainer  = () => {

    const [counter, setCount] = useState(0);
    
    let recent = 0;
    let buttonHolder = [];
    let time = 1500;
    let nextTime = 1000;
    let buttons = [];
    let points = 0;
    let next = 0;
    let className = [
        "button color1",
        "button color2",
        "button color3",
        "button color4"
    ];

    
    const timer = setTimeout = (activateNext, time, nextTime) => {

        const suffleNew = (previous) => {
            next = (previous + getRandomInt(1, 2)) % 4;
            buttonHolder.push(next);
            return next;
        }

        next = suffleNew(recent);

        if (recent ===0) {
        className[recent] = "button color1_1";
        className[next] = "button color1";
        }
        else if (recent === 1) {
        className[recent] = "button color2_2";
        className[next] = "button color2";        
        }
        else if (recent === 2) {
        className[recent] = "button color3_3";
        className[next] = "button color3";        
        }
        else {
        className[recent] = "button color4_4";
        className[next] = "button color4";        
        }
        
        recent = next;

        if (time > 350)
        time = time - 40;
        else
        time = time -1;

        timer = setTimeout(activateNext, time, time);

        if (buttonHolder.leght >= 10)
        stopGame();

        
    }


    const push = (i) => {
        if (buttonHolder[0]==i) {
            setCount(counter++);
            buttonHolder.shift();
            points = counter;
        }
        else
        stopGame();
    }
    const stopGame = () => {
        clearTimeout(timer);

    }
    

        return (
            
        <div className='button-container'>{points}
            <div onClick={() => push(1)} className={className[0]}></div>
            <div onClick={() => push(2)} className={className[1]}></div>
            <div onClick={() => push(3)} className={className[2]}></div>
            <div onClick={() => push(4)} className={className[3]}></div>
        </div>
        );
}

export default ButtonContainer;

/*
class based state
this.setState({
    result: this.state.result +1
})
OR
this.setState(prevState => {
    return{
        result: prevState.result + 1
    }})
*/