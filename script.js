const randomNum=Math.floor(Math.random()*49+1);
    //console.log(randomNum);

        const userGuess=document.querySelector(".numbox");
        const resultDiv=document.querySelector(".result");
        const historyDiv=document.querySelector(".history");
        const submitButton=document.querySelector(".submit");
        const S=document.querySelector("#chancesdisplay");
       // console.log(userGuess);
        let chances=3;
        let win=false;

            function game(){
              const guess=userGuess.value;
                let result;
                if(guess>50||guess<1){
                    result="Your guess should be 1 to 50";
                    resultDiv.innerHTML=`<h5>${result}</h5>`;
                }

            //console.log(guess);
          // console.log(randomNum);
         else if(chances&&!win){
            if(randomNum==guess){
                result=`✨YOU WON THE GAME!!!✨<br>Congradulations✨😍!!!`;
                win=true;
            }else if(randomNum>guess){
                if(chances==1){
                    result=`GAME OVER!
                    The number is ${randomNum}`;
                }else{
                result="YOU GUESSED LOW 😒";
                }
            }else if(randomNum<guess) {
                if(chances==1){
                    result=`GAME OVER! 
                    The number is <b>${randomNum}</b>`;
                }else{
                result="YOU GUESSED HIGH 😒";
            }
        }
        S.innerHTML=`${chances}`;
            chances--;
        historyDiv.innerHTML +=` YOU GUESSED ${guess}<br>`;
            return resultDiv.innerHTML=`${result}`;
            
            }
        }
    
        function refresh(){
            if(!chances||win)
            location.reload();
        }
        
        