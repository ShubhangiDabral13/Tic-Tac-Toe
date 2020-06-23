//Restart Game Button
var restart = document.querySelector("#b")

// Grabs all the squares
var squares = document.querySelectorAll("td");

//Clear all the squares
function clearBoard(){
  for(var i = 0; i < squares.length; i ++)
{
  squares[i].textContent = " ";
}
}
//Will clear the table after restart button is clicked.
restart.addEventListener("click",clearBoard);

//Check the square marker


function changeMaker(){
  if(this.textContent === " ")
  {
    this.textContent = "X";
  }else if(this.textContent == "X")
  {
    this.textContent = "O";
  }else {
  this.textContent = " ";
  }
}



for(var i = 0; i < squares.length ; i++)
{
  squares[i].addEventListener("click",changeMaker)
}
// For loop to add event listeners to all the squares
