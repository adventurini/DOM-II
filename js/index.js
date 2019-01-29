// Your code goes here


// // Anon function example
// // workBtn.addEventListener('click', function(event) {
// //   console.log(`Click!`);
// // });

// const firstName = document.querySelector('.first-name');

// firstName.addEventListener('keydown', e => {
//   console.log(`This is my event: ${e.code}`);
// });


// const containerBtn = document.querySelector('.container');
// containerBtn.addEventListener('click', e => {
//   // target is what you are actively clicking
//   console.log(`This is my target: ${e.target}`);
//   // currentTarget is what you added your event listener to
//   console.log(`This is my target: ${e.currentTarget}`);
// });

// const workBtn = document.querySelector('.lambda-button');
// workBtn.addEventListener('click', e => {
//   console.log(`Work button fired a click event!`);
//   // ALL about stopping events from bubbling
//   e.stopPropagation();
 
// });

// workBtn.addEventListener('mouseover', e => {
//   console.log(`Work button fired a click event!`);
//   // ALL about stopping events from bubbling
//   e.stopPropagation();
//   TweenMax.to(e.currentTarget, 1, {
//     width:200,
//     ease:Bounce.easeOut
//   });
// });

// workBtn.addEventListener('mouseout', e => {
//   console.log(`Work button fired a click event!`);
//   // ALL about stopping events from bubbling
//   e.stopPropagation();
//   TweenMax.to(e.currentTarget, 1, {
//     width:150,
//     ease:Bounce.easeOut
//   });
// });


// const formSubmit = document.querySelector('.form-submit');
// formSubmit.addEventListener('click', e => {
//   console.log(`Work button fired a click event!`);
//   // stops the original behavior of HTML elements
//   e.preventDefault();
// });


// const contain = document.querySelector('.container home');
// contain.addEventListener('mousover', e =>{
//     console.log('Click event');
//     TweenMax.from(e.currentTarget, 1, {width:200, ease:Bounce.easeOut});
// })

const headingS = document.querySelector('h1');
headingS.addEventListener('click', e => {
    headingS.style.color = 'green';
    headingS.addEventListener('click', e => {
        headingS.style.color = 'blue';
        headingS.addEventListener('click', e => {
            headingS.style.color = 'purple';
            headingS.addEventListener('click', e => {
                headingS.style.color = '#212529';
})})})})


const funBus = document.querySelector('.intro > img');
funBus.addEventListener('mouseover', e => {
    // funBus.style.display = 'none';
    funBus.src = 'img/image.png';

    funBus.addEventListener('mouseout', e => {
        TweenMax.to(e.currentTarget, 3, {x: 1500, ease:Bounce.easeOut})
})})


//  const b = document.querySelector();
//  a.addEventListener('drag', e=>{
     
//  })

//  const c = document.querySelector();
//  a.addEventListener('load', e=>{
     
//  })

//  const d = document.querySelector();
//  a.addEventListener('focus', e=>{
     
//  })

//  const e = document.querySelector();
//  a.addEventListener('resize', e=>{
     
//  })

//  const f = document.querySelector();
//  a.addEventListener('scroll', e=>{
     
//  })

 const contain = document.querySelector('.content-section');
 contain.addEventListener('mousedown', e => {
    contain.style.color = 'blue';
    contain.addEventListener('mouseup', e => {
        contain.style.color = 'teal';
     })
 })

 const imageS = document.querySelector('.img-content > img');
 imageS.addEventListener('dblclick', e => {
     imageS.style.opacity = '.2'
 })