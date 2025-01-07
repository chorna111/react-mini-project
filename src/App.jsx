import { useEffect, useState } from 'react';
import './App.css'

import Score from './components/Score';
import Elements from './components/Elements';
import Result from './components/Result';
import { pickComputerMove } from './components/GameLogic';
import { findResult } from './components/GameLogic';

export default function App() {
  const [score,setScore]=useState(JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
  })
  const [result,setResult]=useState('')
  const [moves,setMoves]=useState('')
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(()=>{
    localStorage.setItem('score', JSON.stringify(score)),
    [score]
  })
  function playGame(playerMove){
    const computerMove=pickComputerMove()
    const gameResult=findResult(playerMove,computerMove)
    if (gameResult === "You win") setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    else if (gameResult === "You lose") setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    else setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
    setResult(gameResult);
    setMoves(
     `You 
      <img src="images/${playerMove}-emoji.png" class="move-icon" alt="${playerMove}">
      <img src="images/${computerMove}-emoji.png" class="move-icon" alt="${computerMove}">
      Computer`
    );
  
  }
  
  function autoPlay(){
    if(!isAutoPlaying){
            const id=setInterval(()=>playGame(pickComputerMove()),1000)
            setIntervalId(id)
            setIsAutoPlaying(true)
    
            }else{
                clearInterval(intervalId);
                setIsAutoPlaying(false);
    
            }
          }

  function resetScore(){
    setScore({ wins: 0, losses: 0, ties: 0 });
    localStorage.removeItem("score");

  }
  
 
  return (
    <div>
      <h1>
        Rock Paper Scissors
      </h1>
      <Elements playGame={playGame}></Elements>
      
      
      <Result moves={moves} result={result}></Result>
      <Score score={score}></Score>
      <button className='reset-score-button' onClick={resetScore}>Reset Score</button>
      <button className='auto-play-button' onClick={autoPlay}>Autoplay</button>


      
    </div>
  );
}

