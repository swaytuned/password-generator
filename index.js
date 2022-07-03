'use strict';
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");
const passwordButton = document.getElementById("password-btn");



//Onclick to generate random characters from array
function generatePassword(){   
    //Start with empty text field step 1
    let newPasswordOne = "";  
    let newPasswordTwo = "";     
    //adds in fifteen chracters step 2
    for (let i = 0; i < 15; i++){
        //randomizes the array to output passwords
        let randomCharacterOne = Math.floor( Math.random() * characters.length ) 
        let randomCharacterTwo = Math.floor( Math.random() * characters.length ) 
        //Randomized chracters and outputs to  text field
        newPasswordOne += characters[randomCharacterOne]
        newPasswordTwo += characters[randomCharacterTwo]
        //step 3
        passwordOne.textContent = newPasswordOne;
        passwordTwo.textContent = newPasswordTwo;
    }       

}

