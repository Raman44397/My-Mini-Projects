let slide = document.getElementsByClassName('slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentSlide = 0;



slideShow(currentSlide);

const autoSlide = setInterval(()=>{
    currentSlide++;
    // slide.style.transition = " all 3s ease-in";
    slideShow(currentSlide);
},3000);

function slideShow(num){
    if(num == slide.length){
        currentSlide = 0;
        num = 0;
    }
    if(num < 0){
        currentSlide = slide.length-1;
        num = slide.length-1;
    }
    for( let i of slide){
        i.style.display = 'none';
    }
    slide[num].style.display = "block";
    
}

function sliderBtn(){
    
    prevBtn.addEventListener('click',function(e){
        e.preventDefault();
        currentSlide--;
        slideShow(currentSlide);   
        
    })
    nextBtn.addEventListener('click',function(e){
        e.preventDefault();
        currentSlide++;
        slideShow(currentSlide);
        
    });
}
sliderBtn(currentSlide);