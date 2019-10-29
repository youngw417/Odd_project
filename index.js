
const clickBlue = document.querySelector(".story-con__each-2");
const boxWhite = document.querySelector(".story-con__each-1");
const boxOrange = document.querySelector(".story-con__each-3");
// const myHtml = `<div class="story-con__each__heading story-con__each__heading--2">
//     <h1 class="story-con__heading">LET'S TALK.</h1>
// </div>
// <h3 class="story-con_subheading">CALLING ALL FILMMMAKERS, WRITERS, DESIGNERS, MUSCIANS, ACTORS/ACTRESSES...</h3>
// <p>We're always looking to grow our team.</p>
// <p>Get in touch at <a href="mailto:info@oddfolkfilm.com">info@oddfolkfilm.com</a></p>`;
// console.log(myHtml);
// clickBlue.addEventListener('mouseenter', event => {
//     event.target.style.backgroundColor = 'white';
    
// //    boxWhite.innerHTML = myHtml;

//     boxWhite.style.backgroundColor = '#1c35c6'; 
// })
// clickBlue.addEventListener('mouseleave', event => {
//     event.target.style.backgroundColor = '#1c35c6';
//     boxWhite.style.backgroundColor = 'white';
// })

clickBlue.addEventListener('click', ()=> {
    clickBlue.style.zIndex = 100;
    boxWhite.style.zIndex = 50;
    boxOrange.style.zIndex = 0;
    TweenMax.to(clickBlue, 1, {x:-50, y: 110});
    TweenMax.to(boxWhite, 1, {x:50, y: -110});
    TweenMax.to(boxOrange, 1, {x:0, y: 0});
})

boxWhite.addEventListener('click', ()=> {
    boxWhite.style.zIndex = 100;
    clickBlue.style.zIndex = 50;
    boxOrange.style.zIndex = 0;
    TweenMax.to(boxWhite, 1, {x:0, y: 0});
    TweenMax.to(clickBlue, 1, {x:0, y: 0});
    TweenMax.to(boxOrange, 1, {x:0, y: 0});
})

boxOrange.addEventListener('click', ()=> {
    boxOrange.style.zIndex = 100;
    boxWhite.style.zIndex = 0;
    TweenMax.to(boxOrange, 1, {x:-100, y: 210});
    TweenMax.to(boxWhite, 1, {x:100, y: -210});
    TweenMax.to(clickBlue, 1, {x:0, y: 0});
})