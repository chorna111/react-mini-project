export function pickComputerMove(){
        const randomNumber=Math.random()
        let computerMove='';
        
        
        if(randomNumber>=0 && randomNumber<1/3){
            computerMove='rock';
        
        }else if(randomNumber>=1/3&&randomNumber<2/3){
            computerMove='paper'
        }else if(randomNumber>=2/3&&randomNumber<1){
            computerMove='scissors'
        }
        
        return computerMove;
        
        
        }
export function findResult(playerMove,computerMove){
    let gameResult=''
    
    if(playerMove==='rock'){
        if(computerMove==='rock'){
            gameResult='Tie';
        }else if(computerMove==='paper'){
            gameResult='You lose';
    
        }else if(computerMove==='scissors'){
            gameResult='You win';
        } 
    }else if(playerMove==='paper'){
        if(computerMove==='rock'){
            gameResult='You win';
        }else if(computerMove==='paper'){
            gameResult='Tie';
    
        }else if(computerMove==='scissors'){
            gameResult='You lose';
        }
    }else if(playerMove==='scissors'){
        if(computerMove==='rock'){
            gameResult='You lose';
        }else if(computerMove==='paper'){
            gameResult='You win';
    
        }else if(computerMove==='scissors'){
            gameResult='Tie';
        }   
    
    }
    return gameResult    

}


