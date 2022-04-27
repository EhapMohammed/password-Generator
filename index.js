const passowrdsChrs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    passowrdsWithSympols = ["!","#","$","%","&","'","()","*","+",",","-",".","/",0,1,2,3,4,5,6,7,8,9,":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","^","\\","_","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","`"],
    displyOne = document.getElementById('displyOne'),
    displyTwo = document.getElementById('displyTwo'),
    displyThree = document.getElementById('displyThree'),
    displyFour = document.getElementById('displyFour'),
    clickButton = document.getElementById('clickButton'),
    passlength = document.getElementById('passlength'),
    erorrLength = document.getElementById('erorr');

/* clear old password before genrate new passwords funcation */
function clearPassword(){
        displyOne.textContent = ""
        displyTwo.textContent = ""
        displyThree.textContent = ""
        displyFour.textContent = ""
}
/* display passwords at Html element DOM */
function displayCharsPasswords(){
    /* check password length that user inter it with in the the range from 1 to 12 */
    if(passlength.value === ""){
        erorrLength.textContent = "Please add passwords length first"
    }
    else if(passlength.value > 12 || passlength.value < 1){
        erorrLength.textContent = "Please note that the minimum is 1 and maximum is 12"
    }else{
        clearPassword();
        for(let i=0; i < passlength.value;i++){
            /* get Random numbers */
           let randomNum1 = Math.floor(Math.random() * passowrdsChrs.length),
           randomNum2 = Math.floor(Math.random() * passowrdsChrs.length),
           randomNum3 = Math.floor(Math.random() * passowrdsChrs.length),
           randomNum4 = Math.floor(Math.random() * passowrdsChrs.length);
           /* display passwords */
           displyOne.textContent += passowrdsChrs[randomNum1]
           displyTwo.textContent += passowrdsChrs[randomNum2]
           displyThree.textContent += passowrdsChrs[randomNum3]
           displyFour.textContent += passowrdsChrs[randomNum4]
       }
    }
            

}
function CharsPlusSympols(){
    /* check password length that user inter it with in the the range from 1 to 12 */
    if(passlength.value === ""){
        erorrLength.textContent = "Please add passwords length first"
    }
    else if(passlength.value > 12 || passlength.value < 1){
        erorrLength.textContent = "Please note that the minimum is 1 and maximum is 12"
    }else{
        clearPassword();
        for(let i=0; i < passlength.value;i++){
            /* get Random numbers */
            let randomNum1 = Math.floor(Math.random() * passowrdsWithSympols.length),
            randomNum2 = Math.floor(Math.random() * passowrdsWithSympols.length),
            randomNum3 = Math.floor(Math.random() * passowrdsWithSympols.length),
            randomNum4 = Math.floor(Math.random() * passowrdsWithSympols.length);
                    /* display passwords */
            displyOne.textContent += passowrdsWithSympols[randomNum1]
            displyTwo.textContent += passowrdsWithSympols[randomNum2]
            displyThree.textContent += passowrdsWithSympols[randomNum3]
            displyFour.textContent += passowrdsWithSympols[randomNum4]
            }
    }
}

/* copy password to clipborad functions */ 
function copyText1() {

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(displyOne.textContent);

  /* Alert the copied text */
  alert(`Copied the text: ${displyOne.textContent}`);
}

function copyText2() {  
    /* Copy the text inside the text field */
   navigator.clipboard.writeText(displyTwo.textContent);
 
   /* Alert the copied text */
   alert(`Copied the text: ${displyTwo.textContent}`);
 }
 
 function copyText3() {  
    /* Copy the text inside the text field */
   navigator.clipboard.writeText(displyThree.textContent);
 
   /* Alert the copied text */
   alert(`Copied the text: ${displyThree.textContent}`);
 }

 function copyText4() {
    /* Copy the text inside the text field */
   navigator.clipboard.writeText(displyFour.textContent);
 
   /* Alert the copied text */
   alert(`Copied the text: ${displyFour.textContent}`);
 }
