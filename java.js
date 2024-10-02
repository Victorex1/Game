const game = () => {

    let pscore = 0;
    let cscore = 0;
    const march = document.querySelector('.march');
    const result = document.querySelector('.result')


     //transition between pages
    const page = () => {
        const button = document.querySelector('.intro button');
        const intro = document.querySelector('.intro');

      button.addEventListener('click', () => {
        intro.classList.add('fadeout');
        march.classList.remove('fadeout');
      }) 
    };


    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player');
    const computerHand = document.querySelector('.computer');
    //play march
    const playMarch = () => {

     options.forEach( option => {
       
        option.addEventListener('click', function() {


          playerHand.style.animation = 'playershake 2s ease ';
          computerHand.style.animation = 'computershake 2s ease ';

          //setting time out
          setTimeout(() => {

            const computerChoise  = ['rock','paper','scissors'];
            const computerOption = Math.floor(Math.random() * 3);
            const  computers  = computerChoise[computerOption];
  
            playerHand.src = `./img/${this.textContent}.png`;
            computerHand.src = `./img/${computers}.png`;
            compareHand(this.textContent,computers);
  
          },2000);
         
          //removing animation
          playerHand.addEventListener('animationend',() =>{
            playerHand.style.animation = '';
            computerHand.style.animation = '';
  
          })

        })
     })
    };


    const win = document.querySelector('.winner');
 
    //compare of hands
    const compareHand = (player,computer) => {
     

      if(player === computer){
        
        win.textContent = 'its is a tie'; 
        return;
      }

      if(player === 'rock'){
        if(computer ==='paper'){
            win.textContent = 'computer wins';
            cscore++;
            score();
             return;
        }else{
            win.textContent = 'player wins';
            pscore++;
            score();
             return;
        };
      }

      if(player === 'paper'){
        if(computer === 'scissors'){
            win.textContent = 'computer wins';
            cscore++;
            score();
            return;
        }else{
            win.textContent = 'player wins';
            pscore++;
            score();
            return;
        }
      }

      if(player === 'scissors'){
       if(computer === 'rock'){
        win.textContent = 'computer wins';
        cscore++;
            score();
            return;
       }else{
        win.textContent = 'player wins';
        pscore++;
            score();
            return;
      }
      }
    };


    //updating scores
    const score = () => {
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      const result = document.querySelector('.result')


          playerScore.textContent = pscore;
          computerScore.textContent = cscore;

     
      winner(pscore,cscore);
      console.log(pscore,cscore);




      //reloading score
       const reloaded = () => {
      const reload = document.querySelector('.reload');

      reload.addEventListener('click', () => {

       pscore = 0;
       cscore = 0;
        playerScore.textContent= 0;
        computerScore.textContent = 0;
        march.style.pointerEvents = 'all';

        playerHand.src = `./img/rock.png`;
        computerHand.src = `./img/rock.png`;

        win.textContent = 'Choose an option'; 


        if(result.classList.contains('win')){
        result.classList.remove('win');


        }else{
        result.classList.remove('lost');
        
        };
        result.textContent = '';


      })
    }
    reloaded();


    };

    //declearing the winner
    const winner = (player,computer) => {

      if(player === 10){
        result.textContent = 'You won';
        result.classList.add('win');
        march.style.pointerEvents = 'none';

      }else if(computer === 10){
        result.textContent = 'You lost';
        result.classList.add('lost');
        march.style.pointerEvents = 'none';

      }
    };


    //reloading the scores
  


    //decleration of function
    page();
    playMarch();

};

game();