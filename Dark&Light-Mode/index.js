// const toggleMode = document.querySelector('#toggle-mode');
const checkbox = document.querySelector('#checkbox');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');


checkbox.addEventListener('click',function(e){
    if(e.target.checked){
        body.style.background = "black";
        h1.style.color = "white";

    }else{
        body.style.background = "white";
        h1.style.color = "black";
    }
}
)