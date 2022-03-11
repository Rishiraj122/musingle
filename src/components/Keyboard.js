import React, { useEffect } from 'react';
import {text} from './wordlist.txt';

//Higher Octave
import Q from '../audio/C4.mp3';
import W from '../audio/D4.mp3';
import S from '../audio/E4.mp3';
import H from '../audio/F4.mp3';
import J from '../audio/G4.mp3';
import K from '../audio/A4.mp3';
import L from '../audio/B4.mp3';
//Middle Octave 
import C from '../audio/C5.mp3';
import D from '../audio/D5.mp3';
import E from '../audio/E5.mp3';
import F from '../audio/F5.mp3';
import G from '../audio/G5.mp3';
import A from '../audio/A5.mp3';
import B from '../audio/B5.mp3';
//Lower Octave
import V from '../audio/C6.mp3';
import R from '../audio/D6.mp3';
import T from '../audio/E6.mp3';
import Y from '../audio/F6.mp3';
import U from '../audio/G6.mp3';
import I from '../audio/A6.mp3';
import O from '../audio/B6.mp3';
import P from '../audio/C7.mp3';
//Other tones
import Z from '../audio/Bb4.mp3';
import X from '../audio/D3.mp3';
import N from '../audio/Ab3.mp3';
import M from '../audio/E7.mp3';


function Keyboard(){
    var word="";
    var text="";
    var flag=false;
    var audioEl = new Audio();
    var index="";

   // var audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a")
    
   useEffect(()=>{
       console.log(text);
        fetch("https://random-word-api.herokuapp.com/word?number=1").then(response => {
            return response.json();
        }).then(data => {//cool //fool
            word=data[0];
            word=word.toUpperCase();
            document.getElementById('wordlen').value=word.length;
            document.getElementById("wordlen").innerHTML = "Word Length: "+word.length
            // alert(word);
        });
    })

    const helper=()=>{
        var shuffled = word.split('').sort(() => 0.5-Math.random()).join('');
        console.log(shuffled);
        document.getElementById('shuffling').innerHTML="🤹🏼 "+shuffled+" 🤹🏼‍♀️";
    }


    const playMusic=()=>{
       
            for(let i=0;i<word.length;i=i+1){
                if(flag==true){
                    i=word.length;
                }
                setTimeout(function(){
                    soundDirect(word.charAt(i));
                    // console.log(word.charAt(i));
                },1000*i);
            }
        
    }

    const correctWord =(v)=>{ //Plays word tones index wise
        soundDirect(word.charAt(v));
    }

    const showWord =()=>{
        alert(word);
    }

    //To play music
    const soundDirect=(v)=>{
        if(v=="A"){
            audioEl = new Audio(A);
            audioEl.play()
            console.log(v);            
        }
        else if(v=="B"){
            audioEl = new Audio(B);
            audioEl.play()
            console.log(v);
        }
        else if(v=="C"){
            audioEl = new Audio(C);
            audioEl.play()
            console.log(v);
        }
        else if(v=="D"){
            audioEl = new Audio(D);
            audioEl.play()
            console.log(v);
        }
        else if(v=="E"){
            audioEl = new Audio(E);
            audioEl.play()
            console.log(v);
        }
        else if(v=="F"){
            audioEl = new Audio(F);
            audioEl.play()
            console.log(v);
        }
        else if(v=="G"){
            audioEl = new Audio(G);
            audioEl.play()
            console.log(v);
        }
        else if(v=="V"){
            audioEl = new Audio(V);
            audioEl.play()
            console.log(v);
        }
        else if(v=="R"){
            audioEl = new Audio(R);
            audioEl.play()
            console.log(v);
        }
        else if(v=="T"){
            audioEl = new Audio(T);
            audioEl.play()
            console.log(v);
        }
        else if(v=="Y"){
            audioEl = new Audio(Y);
            audioEl.play()
            console.log(v);
        }
        else if(v=="U"){
            audioEl = new Audio(U);
            audioEl.play()
            console.log(v);
        }
        else if(v=="I"){
            audioEl = new Audio(I);
            audioEl.play()
            console.log(v);
        }
        else if(v=="O"){
            audioEl = new Audio(O);
            audioEl.play()
            console.log(v);
        }
        else if(v=="P"){
            audioEl = new Audio(P);
            audioEl.play()
            console.log(v);
        }
        else if(v=="Q"){
            audioEl = new Audio(Q);
            audioEl.play()
            console.log(v);
        }
        else if(v=="W"){
            audioEl = new Audio(W);
            audioEl.play()
            console.log(v);
        }
        else if(v=="S"){
            audioEl = new Audio(S);
            audioEl.play()
            console.log(v);
        }
        else if(v=="H"){
            audioEl = new Audio(H);
            audioEl.play()
            console.log(v);
        }
        else if(v=="J"){
            audioEl = new Audio(J);
            audioEl.play()
            console.log(v);
        }
        else if(v=="K"){
            audioEl = new Audio(K);
            audioEl.play()
            console.log(v);
        }
        else if(v=="L"){
            audioEl = new Audio(L);
            audioEl.play()
            console.log(v);
        }
        else if(v=="Z"){
            audioEl = new Audio(Z);
            audioEl.play()
            console.log(v);
        }
        else if(v=="X"){
            audioEl = new Audio(X);
            audioEl.play()
            console.log(v);
        }
        else if(v=="N"){
            audioEl = new Audio(N);
            audioEl.play()
            console.log(v);
        }
        else if(v=="M"){
            audioEl = new Audio(M);
            audioEl.play()
            console.log(v);
        }
      }

    const buttonClicked=(v)=>{
        soundDirect(v)
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

            <h1 id="wordlen" value="wow">This is my keyboard</h1>
            <h3 id="shuffling">Word of the day!</h3>
            

            <form>
                <label>
                <input id="display" type="text" name="output" size="6" placeholder="CIPHER" style={{width:"300px"}}/>
                </label>
            </form>
            <p></p>
            <button onClick={()=>correctWord(0)}>1</button>
            <button onClick={()=>correctWord(1)}>2</button>
            <button onClick={()=>correctWord(2)}>3</button>
            <button onClick={()=>correctWord(3)}>4</button>
            <button onClick={()=>correctWord(4)}>5</button>
            <button onClick={()=>correctWord(5)}>6</button>
            <button onClick={()=>correctWord(6)}>7</button>
            <button onClick={()=>correctWord(7)}>8</button>
            <button onClick={()=>correctWord(8)}>9</button>
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
            <button onClick={()=>helper()}>💡</button>
            <button onClick={()=>buttonClicked("A")}>A</button>
            <button onClick={()=>buttonClicked("S")}>S</button>
            <button onClick={()=>buttonClicked("D")}>D</button>
            <button onClick={()=>buttonClicked("F")}>F</button>
            <button onClick={()=>buttonClicked("G")}>G</button>
            <button onClick={()=>buttonClicked("H")}>H</button>
            <button onClick={()=>buttonClicked("J")}>J</button>
            <button onClick={()=>buttonClicked("K")}>K</button>
            <button onClick={()=>buttonClicked("L")}>L</button>
            <button onClick={()=>playMusic()}>🔊</button>
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
            
            <p></p>
            <button onClick={()=>correctWord(0)}>10</button>
            <button onClick={()=>correctWord(0)}>11</button>
            <button onClick={()=>correctWord(0)}>12</button>
            <button onClick={()=>showWord()}>🌈</button>
            <button onClick={()=>correctWord(0)}>13</button>
            <button onClick={()=>correctWord(0)}>14</button>
            <button onClick={()=>correctWord(0)}>15</button>
            {/* <button onClick={soundBb}>
                <span>Play Audio</span>
            </button>
            <audio className="audio-element">
                <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
            </audio> */}
        </div>
    )
}
export default Keyboard;

//Audios:
//https://assets.coderrocketfuel.com/pomodoro-times-up.mp3