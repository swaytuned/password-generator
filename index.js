const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordButton = document.getElementById("password-btn")



//function to call array
function generatePassword(){
    // math to pull from array, need two
    let randomCharacter = Math.floor( Math.random() * characters.length ) 
  
    //pull random character for each password box
    
    //passwordTwo.textContent = characters[randomCharacter]

    //for loop
    for (let i = 0; i < 15; i++){
        passwordOne.textContent += characters[randomCharacter]
    }
    
}




 


//for (let i = 0; i < characters.length; i++)
//console.log(characters[i])

