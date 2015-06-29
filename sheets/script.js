console.log('hi all');
var arrayBoard = document.querySelectorAll('.square');
var player;
var a=0;
var button = document.querySelector('button');

button.addEventListener('click',reset);

function selectedSpace(){
  console.log('hummmm...');
  if((this.innerHTML== 'X')|| (this.innerHTML=='O')){
    window.alert("space already taken. select another space");
    console.log('try again');
  }else if (a% 2 === 0) {
    a=a+1;
    this.innerHTML = "X";
    console.log(a);
    player = this.innerHTML;

  }else if (a% 2 !== 0) {
    a=a+1;
    this.innerHTML = "O";
    console.log(a);
    player = this.innerHTML;
  }
  winnerPrompt();
}


for (var i = 0; i < arrayBoard.length; i++) {
  arrayBoard[i].addEventListener('click', selectedSpace);
  console.log('yuppppp!');
}

function winnerRow(){
  if((arrayBoard[0].innerHTML) == (arrayBoard[1].innerHTML) && (arrayBoard[2].innerHTML) == (arrayBoard[1].innerHTML)) {
    console.log('hi1a');
    return true;
  }else if (
      (arrayBoard[3].innerHTML) == (arrayBoard[4].innerHTML) && (arrayBoard[5].innerHTML) == (arrayBoard[4].innerHTML)){
          console.log('hi1b');
          return true;
  }else if (
      (arrayBoard[6].innerHTML) == (arrayBoard[7].innerHTML) && (arrayBoard[8].innerHTML) == (arrayBoard[7].innerHTML)){
          console.log('hi1c');
          return true;
    }else {return false;}
}

function winnerCol(){ //solves for winner of 1st column only
  if ((arrayBoard[0].innerHTML) == (arrayBoard[3].innerHTML) && (arrayBoard[6].innerHTML) == (arrayBoard[3].innerHTML)) {
    console.log('hi2a');
    return true;
  }else if ((arrayBoard[1].innerHTML) == (arrayBoard[4].innerHTML) && (arrayBoard[7].innerHTML) == (arrayBoard[4].innerHTML)) {
    console.log('hi2b');
    return true;
  }else if ((arrayBoard[2].innerHTML) == (arrayBoard[5].innerHTML) && (arrayBoard[8].innerHTML) == (arrayBoard[5].innerHTML)) {
    console.log('hi2c');
    return true;
  }else {return false;}
}

function winnerDiag() {
  if ((arrayBoard[0].innerHTML) == (arrayBoard[4].innerHTML) && (arrayBoard[8].innerHTML)== (arrayBoard[4].innerHTML)) {
    console.log('hi3a');
    return true;
  }else if ((arrayBoard[2].innerHTML) == (arrayBoard[4].innerHTML) && (arrayBoard[6].innerHTML) == (arrayBoard[4].innerHTML)) {
    console.log('hi3b');
    return true;
  }else {return false;}
}

function winnerPrompt() {
  if(winnerDiag() === true || winnerCol()=== true || winnerRow() === true){
    alert(player + ' wins!');
  }else if (a === 9) {
    alert("tie - no winner");

  }
}

function reset(){
  var restBoard = document.querySelectorAll('.square');
  for (var i = 0; i < restBoard.length; i++) {
    restBoard[i].innerHTML = i;
    console.log('weeeeeeee!');
  }
}
