let choices = document.querySelectorAll(".choices");
let userScore=document.querySelector("#us");
let compScore=document.querySelector("#cs");
let msg=document.querySelector("#msg");
let playAgainbtn=document.querySelector("#btn");
let us=0;
let cs=0;
// let userWin =true;
// console.log(choices);
// console.dir(choices);
// let access the user coice on click

 choices.forEach((option)=>{
 // console.log(option);
 option.addEventListener("click",()=>{
 //  console.log(option);
 let userChoice=option.getAttribute("id");
 //  console.log("User choice:",userChoice);
  playgame(userChoice); //Argument variable 
}); 
});

// now let make computer choice
 const comChoice=()=>{
 const game = [Rock , Paper , Secior];
 const idx = Math.floor(Math.random()*3);
return game[idx];
// console.log(" computer choice: " ,game[idx].id);
}
// console.log(Math.floor(Math.random()*10));
 const playgame=(userChoice)=>{
  console.log("User choice:",userChoice);
  const comp = comChoice();
   console.log( "computer choice: ",comp.id);
//draw logic
   if (userChoice===comp.id){
drawGame();
}  
else{ 
   let userWin;
  // let userWin =true;
  if ( userChoice==="Rock" && comp.id==="Paper"){  userWin =false;  }//comp=win user=loss
  else if (userChoice==="Rock" && comp.id==="Secior"){ userWin =true;  }
  else if (userChoice==="Paper" && comp.id==="Rock"){ userWin =true;  }
  else if (userChoice==="Paper" && comp.id==="Secior"){ userWin =false;  }
  else if (userChoice=== "Secior" && comp.id=== "Rock"){ userWin =false;  }
  else if (userChoice=== "Secior" && comp.id=== "Paper"){ userWin =true; }
  showWinner(userWin,userChoice,comp.id);
}
}


  const drawGame=()=>{
  // console.log("Game is Draw");
  msg.innerText="Game was Draw.Play again";
  msg.style.backgroundColor="#081b31";

}


 const showWinner=(userWin,userChoice,comp)=>{
if (userWin===true){           //user win (user score=0)+1
  // console.log("User Win"); 
  msg.innerText=`You Win! Your ${userChoice} beats ${comp}`;
  msg.style.backgroundColor="green";
  us++; // us=us+1; us=1
  userScore.innerText=us;
}
else{  //comp win (comp score=0)+1
  // console.log("User loss");
  msg.innerText=`You lost. ${comp} beats your ${userChoice}`;                             
  msg.style.backgroundColor="red";
   cs++; //cs=1
   compScore.innerText=cs;
}
 }
 let playAgain=()=>{
   msg.innerText="Play your move";
  msg.style.backgroundColor="#081b31";
  us=0;
  cs=0;
  userScore.innerText=us;
  compScore.innerText=cs;
 }
playAgainbtn.addEventListener("click",playAgain);