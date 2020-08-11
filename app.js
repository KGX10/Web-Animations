const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const headline = document.querySelector('.headline')
const logo = document.querySelector('#logo')

const tl = new TimelineMax();
tl.fromTo(hero,1,{height:'0%'},{height:'100%', ease: Power2.easeInOut})
.fromTo(hero,0.5,{width:"100%"},{width:"80%", ease: Power2.easeInOut})
.fromTo(slider,1,{x:'-100%'},{x:'0%', ease: Power2.easeInOut},"-=0.5")
.fromTo(logo,0.5,{opacity:"0",x:"100"},{opacity:"1",x:"0", ease:Power2.easeInOut},"-=0.8")
.fromTo(headline,0.5,{opacity:"0",x:"100"},{opacity:"1",x:"0", ease:Power2.easeInOut},"-=0.8")