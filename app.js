//Ye Olde List of Functions
 
//Start prompt function
function startPrompt() {
    alert("Hello, Welcome to Temperature Converter")
    var username = prompt("What is your name?")
    alert(`Welcome, ${username}`)
 
    return username
}
 
//Temperature Prompt
function tempPrompt() {
    do {
    var userTemp = prompt("What temperature would you like to convert?")
    } while ( isNaN(userTemp) == true )
    return userTemp
}
 
//Redirector
function redirect(tempcondition) {
    if (tempcondition == 1) {
        convertC(tempPrompt())
    } else if (tempcondition == 2) {
        convertF(tempPrompt())
    }
}
 
//C to F function
function convertC(userTemp) {
    //integer check
    if ( isNaN(userTemp) == true ) {
        alert("Only numbers are allowed, the program will terminate now")
    } else if ( isNaN(userTemp) == false ) {
        //fahrenheit conversion
        var fahrenheit = (((userTemp * 9) / 5) + 32)
        alert(`${userTemp} Celsius in Fahrenheit is ${fahrenheit}`)
    }
    return fahrenheit
}
 
//F to C function
function convertF(userTemp) {
    //integer check
    if ( isNaN(userTemp) == true ) {
        alert("Only numbers are allowed, the program will terminate now")
    } else if ( isNaN(userTemp) == false ) {
        //celsius conversion
        var celsius = (((userTemp - 32) * 5) / 9)
        alert(`${userTemp} Fahrenheit in Celsius is ${celsius}`)
    }
    return celsius
}
 
//Conversion user prompt function
function conversionUnit() {
    do {
        var condition = prompt(`Would you like to convert from
        1. C to F
        2. F to C`)
     } while ( isNaN(condition) == true )
    return condition
}
 
//Main Operation start
 
startPrompt()
 
redirect(conversionUnit())