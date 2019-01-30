const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');




red.style.order= 1;
blue.style.order= 2;
green.style.order= 3;
pink.style.order= 4;
gray.style.order= 5



let blockOrder=0;


red.addEventListener('click', e=> {
    --blockOrder
    red.style.order= blockOrder;  
})

window.addEventListener('mouseup', e=> {
    --blockOrder
blue.style.order= blockOrder;
})
blue.addEventListener('mousedown', e=> {
    console.log(e);
    e.preventDefault();
    setInterval(()=> {TweenMax.to(e.target, 3, {x: 2000, ease:Bounce.easeOut})} ,10000);
    
})


green.addEventListener('click', e=> {
    --blockOrder
green.style.order= blockOrder;

    
})

pink.addEventListener('click', e=> {
    --blockOrder
pink.style.order= blockOrder;
   
})

gray.addEventListener('click', e=> { 
    --blockOrder
gray.style.order= blockOrder;
})


