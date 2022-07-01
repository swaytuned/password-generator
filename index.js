const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("pwOne")
let passwordTwo = document.getElementById("pwTwo")
let generated = ""


//function to call array
function randomizeCharacters(){
    // math to pull from array
    let randomCharacter = Math.floor( Math.random() * characters.length )
  
    //pull random character for each password box
    passwordOne.textContent = characters[randomCharacter] 
    passwordTwo.textContent = characters[randomCharacter]


    //for loop
   for (let i = 0; i < characters.length; i++)
    console.log(characters[i])
}

//function to generate passwords
//function pwbtn(){

 }
//console.log(randomizeCharacters())

//for (let i = 0; i < characters.length; i++)
//console.log(characters[i])