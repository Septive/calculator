// Variables to store the calculator screen output as strings 
var screenOutput = "";

// This function will clear all the values and set it to 0 
function clearScreen() {
  screenOutput = "";
  document.getElementById("output").innerHTML = 0;
}

// This function will add the string value of the button onto the screen 
function addValue(btnValue) {
  
  screenOutput += btnValue.value;
  if(screenOutput.length > 15){
  screenOutput = screenOutput.slice(0, 15);
}
  document.getElementById("output").innerHTML = screenOutput;
    
}
// This function adds the operator onto the display
function addOperator(btnValue) {
  screenOutput += btnValue.value;
    if(screenOutput.length > 15){
        screenOutput = screenOutput.slice(0, 15);
}
  document.getElementById("output").innerHTML = screenOutput;
}
// This is the function that will evaluate whatever is displayed on the screen
function equals() { 
  screenOutput = eval(screenOutput);
  document.getElementById("output").innerHTML = screenOutput;
  var estring = screenOutput.toString();
    if (estring.length > 12){
        screenOutput = estring.slice(0, 12);
    }

}

// This function changes the sign of the number to negative or positive
function reverse(){
    screenOutput = screenOutput * -1;
    document.getElementById("output").innerHTML = screenOutput;
}

// This function will square root the value of the number on the screen
function squareroot(){
    screenOutput = Math.sqrt(screenOutput);
    document.getElementById("output").innerHTML = screenOutput;

}

// This function will delete the last number on the screen
function del(){
    screenOutput = screenOutput.substring(0, screenOutput.length - 1);
    document.getElementById("output").innerHTML = screenOutput;
}

// This function will calculate the sin of a number
function sin(){
    screenOutput = Math.sin(screenOutput);
    document.getElementById("output").innerHTML = screenOutput;
}


// This function will calculate the cos of a number
function cos(){
    screenOutput = Math.cos(screenOutput);
    document.getElementById("output").innerHTML = screenOutput;
}

// This function will calculate the tan of a number
function tan(){
    screenOutput = Math.tan(screenOutput);
    document.getElementById("output").innerHTML = screenOutput;
}

// This is my MYSTERY power function. It multiplies the value on the screen by itself
function power(){
     if(screenOutput.length > 15){
        screenOutput = screenOutput.slice(0, 15);
}
    screenOutput = screenOutput * screenOutput;
    document.getElementById("output").innerHTML = screenOutput;
}