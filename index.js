const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordButton = document.getElementById("password-btn");
let empty ="";


//Onclick to generate random characters from array
function generatePassword(){
    // math to pull from array, need two
    
    //let randomCharacterTwo = Math.floor( Math.random() * characters.length ) 
    //passwordTwo.textContent = characters[randomCharacterTwo]

    //adds in fifteen chracters
    for (let i = 0; i < 15; i++){
        let randomCharacterOne = Math.floor( Math.random() * characters.length ) 
        passwordOne.textContent += characters[randomCharacterOne]  
    }
    
}




 



