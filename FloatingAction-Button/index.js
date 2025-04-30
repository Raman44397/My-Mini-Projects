const body = document.querySelector('body');

const fixedBtn = document.getElementById('fixedbtn');
const exit = document.getElementById('exit');
const enter = document.getElementById('enter');
const innerContent = document.getElementById('inner-content');
const CV = document.getElementById('cv');
const h1 = document.querySelector('h1');


fixedBtn.addEventListener('click',function(e){
    if (enter.style.display !== "none") {
        enter.style.display = "none";
        exit.style.display = "inline";
        innerContent.style.display = "inline";
        CV.style.display = "inline";
    } else {
        exit.style.display = "none";
        enter.style.display = "inline";
        innerContent.style.display = "none";
        CV.style.display = "none";
    }
})

CV.addEventListener('click',function(e){
    const link = document.createElement("a");
  link.href = "files/myfile.pdf"; 
  link.download = "myfile.pdf";   
  link.click();
})

const darkMode = document.getElementById('dark-mode');
const light = document.getElementById('light');
const dark = document.getElementById('dark');

darkMode.addEventListener('click', function(e){
    if (dark.style.display !== "none") {
        dark.style.display = "none";
        light.style.display = "inline";
        body.style.background = "black";
        h1.style.color = "white";
        h1.style['borderBottom'] = "2px solid white";
        darkMode.style.background = "white";
        
        
    } else if(light.style.display !== "none"){
        light.style.display = "none";
        dark.style.display = "inline";
        body.style.background = "white";
        h1.style.color = "black";
        h1.style['borderBottom'] = "2px solid black";
        darkMode.style.background = "black";
       
    }
})
