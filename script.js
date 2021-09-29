const randomNum=Math.floor(Math.random()*49+1);
    console.log(randomNum);

        const userGuess=document.querySelector(".numbox");
        const resultDiv=document.querySelector(".result");
        const historyDiv=document.querySelector(".history");
        const submitButton=document.querySelector(".submit");
       // console.log(userGuess);
        let chances=3;
        let win=false;

            function game(){
                if(chances&&!win){
                const guess=userGuess.value;
                let result;
            console.log(guess);
          // console.log(randomNum);
            if(randomNum==guess){
                result="YOU WON THE GAME!!!";
                win=true;
            }else if(randomNum>guess){
                if(chances==1){
                    result=`GAME OVER!<br>The number is ${randomNum}`;
                }else{
                result="YOU GUESSED LOW";
                }
            }else if(randomNum<guess) {
                if(chances==1){
                    result=`GAME OVER!<br>The number is ${randomNum}`;
                }else{
                result="YOU GUESSED HIGH";
            }
        }
        

            chances--;
           historyDiv.innerHTML +=` YOU GUESSED ${guess}<br>`;
            return resultDiv.innerHTML=`${result}`;
           
            
            }
        }
        
    
        function refresh(){
            if(!chances||win)
            location.reload();
        }
        