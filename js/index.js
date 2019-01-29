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


const headingS = document.querySelector('h1');
headingS.addEventListener('mousemove', e => {
    headingS.style.color = 'green';
    headingS.addEventListener('click', e => {
        headingS.style.color = 'blue';
        headingS.addEventListener('mouseup', e => {
            headingS.style.color = 'purple';
            headingS.addEventListener('mouseleave', e => {
                headingS.style.color = '#212529';
})})})})


const funBus = document.querySelector('.intro > img');
funBus.addEventListener('mouseover', e => {
    funBus.src = 'img/image.png';

    funBus.addEventListener('mouseout', e => {
        TweenMax.to(e.currentTarget, 3, {x: 1500, ease:Bounce.easeOut})
})})


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

 const content = document.querySelector('.inverse-content');
 content.addEventListener('mouseenter', e => {
    content.style.color= 'orange';
 })