import React, { useEffect } from 'react';
import useSound from 'use-sound';
import ReactHowler from 'react-howler'
let song = new Audio("../audio/A.mp3");

function Keyboard(){
    var word="";
    var text="";
    const soundSource = "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";
    
    useEffect(()=>{
        fetch("https://random-word-api.herokuapp.com/word?number=1").then(response => {
            return response.json();
        }).then(data => {
            word=data[0];
            word=word.toUpperCase();
            alert(word.length);
        });
    })

    const buttonA=()=>{
        // music.pause();
        // music = new Audio("../audio/A.mp3");
        // music.play();

    }

    const buttonClicked=(v)=>{
        song.play();
        text=text+v.toString();
        text=text.toUpperCase();
        document.getElementById('display').value=text;
        if(word==text){
            setTimeout(function(){ //To Delay the congratulation message by .3 seconds
                alert("Congratulations");
           },300);
            setTimeout(function(){ //To Delay the congratulation message by .4 seconds
                window.location.reload(false);
            },400);
        }
        if(text.length>word.length){
            text=v;
            document.getElementById('display').value=text;
        }
        console.log(text)
    }

    const clearText=()=>{
        text="";
        document.getElementById('display').value=text;
    }

    const backSpace=()=>{
        text=text.slice(0,text.length-1);
        document.getElementById('display').value=text;
    }

    return(
        <div>
            <h3 id="wordnik-wordofday-heading">Word of the day!</h3>
            <div id="wordnik-wordofday"></div>

            <h1>This is my keyboard</h1>

            

            <form>
                <label>
                <input id="display" type="text" name="output" size="6" placeholder="CIPHER" style={{width:"300px"}}/>
                </label>
            </form>
            <p></p>
            <button onClick={()=>buttonClicked("Q")}>Q</button>
            <button onClick={()=>buttonClicked("W")}>W</button>
            <button onClick={()=>buttonClicked("E")}>E</button>
            <button onClick={()=>buttonClicked("R")}>R</button>
            <button onClick={()=>buttonClicked("T")}>T</button>
            <button onClick={()=>buttonClicked("Y")}>Y</button>
            <button onClick={()=>buttonClicked("U")}>U</button>
            <button onClick={()=>buttonClicked("I")}>I</button>
            <button onClick={()=>buttonClicked("O")}>O</button>
            <button onClick={()=>buttonClicked("P")}>P</button>
            <p></p>
            <button onClick={()=>buttonClicked("A")}>A</button>
            <button onClick={()=>buttonClicked("S")}>S</button>
            <button onClick={()=>buttonClicked("D")}>D</button>
            <button onClick={()=>buttonClicked("F")}>F</button>
            <button onClick={()=>buttonClicked("G")}>G</button>
            <button onClick={()=>buttonClicked("H")}>H</button>
            <button onClick={()=>buttonClicked("J")}>J</button>
            <button onClick={()=>buttonClicked("K")}>K</button>
            <button onClick={()=>buttonClicked("L")}>L</button>
            <button>👍</button>
            <p></p>
            <button onClick={()=>clearText()}>🧹</button>
            <button onClick={()=>buttonClicked("Z")}>Z</button>
            <button onClick={()=>buttonClicked("X")}>X</button>
            <button onClick={()=>buttonClicked("C")}>C</button>
            <button onClick={()=>buttonClicked("V")}>V</button>
            <button onClick={()=>buttonClicked("B")}>B</button>
            <button onClick={()=>buttonClicked("N")}>N</button>
            <button onClick={()=>buttonClicked("M")}>M</button>
            <button onClick={()=>backSpace()}>👈</button>
        </div>
    )
}
export default Keyboard;