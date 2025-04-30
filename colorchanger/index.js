const body = document.querySelector('body');
const title = document.querySelector('#title');
const button = document.querySelectorAll('button');
// const home = document.querySelector('#home');

button.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'red';
            title.style.color = 'black';
            // home.style.backgroundColor = 'white';
            
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
            title.style.color = 'black';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
            title.style.color = 'black';
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = 'green';
            title.style.color = 'black';
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = 'purple';
            title.style.color = 'black';
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = 'black';
            title.style.color = 'white';
        }
    })
})