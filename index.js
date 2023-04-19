let screen = document.getElementById('screen')

var buttons=document.querySelectorAll('button');

let screenValue = '';
for (item of buttons)
{
    item.addEventListener("click",(e)=> {
        // buttonText=e.target.innerText;

        buttonText=e.target.innerHTML;

        // console.log("button text is ", + buttonText);   
        // if(buttonText=='X'){
        //     buttonText='*';
        //     screenValue +=buttonText;
        //     screen.value = screenValue;
        // }
        if(buttonText== 'C')
        {
            screenValue = '';
            screen.value= screenValue;
        }
        else if(buttonText== '=')
        {
            screen.value = eval(screenValue);
        }
        else
        {
            screenValue +=buttonText;
            screen.value = screenValue;
        }



    })
}

