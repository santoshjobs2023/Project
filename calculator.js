box = document.getElementById('box');
button =document.querySelectorAll('button');
let screenValue ="";
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        console.log("button is",buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            box.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue ="";
            box.value = screenValue;
        }
        else if(buttonText == "="){
            box.value = eval(screenValue);
            // screenValue ="";
        }
        else{
            screenValue += buttonText;
            box.value = screenValue; 
        }
    })
}