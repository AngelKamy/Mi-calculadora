const display = document.getElementById("display");
const buttons = document.querySelectorAll("button")

buttons.forEach((item)=>{
    item.addEventListener('click',()=>{
            if(item.id == "clear"){
                display.innerText = "";
            }else if(item.id == "backspace"){
                let string = display.innerText.toString();
            }
    })
})