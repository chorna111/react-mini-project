export default function Elements({playGame}){
   return(
    <div>
        <button className='move-button' onClick={() => playGame("rock")}>
        <img className="move-icon" src="/images/rock-emoji.png" alt="rock" />
        </button>
        <button className='move-button'  onClick={() => playGame("paper")}>
        <img className="move-icon" src="/images/paper-emoji.png" alt="paper" />
        </button>
        <button className='move-button'  onClick={() => playGame("scissors")}>
        <img className="move-icon" src="/images/scissors-emoji.png" alt="scissors" />
        </button>
    </div>
    )   
}