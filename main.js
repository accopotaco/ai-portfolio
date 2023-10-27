
gsap.to('.one',2,{
    scale:1,
  })
  setTimeout(() => {
  gsap.to('.two',2,{
      scale:1,
    })
  }, 4000);

let cont = gsap.timeline();
cont.to('.bg',{
  scale:1,
  x:"-20vw ",
})
.to('.iruka',{
  x:"95vw",
  y:"-95vh",
  scale:0.6,
},"<")
.to('.umi', {
  scale:0.6,
  x:-200,
  y:100,
})
ScrollTrigger.create({
  animation: cont,
  trigger:".container",
  start:"top 0%",
  end:"bottom 0%",
  scrub:2,
  pin:true,
});
