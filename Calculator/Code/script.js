let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let ScreenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        console.log('Button text is ',buttonText)
        if(buttonText=='x'){
            buttonText = '*';
            ScreenValue +=buttonText;
            screen.value = ScreenValue;
        }
        else if(buttonText=='AC'){
            ScreenValue = "";
            screen.value = ScreenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(ScreenValue);
            ScreenValue=screen.value;
        }
        else{
            ScreenValue +=buttonText;
            screen.value = ScreenValue;
        }
    });
}
