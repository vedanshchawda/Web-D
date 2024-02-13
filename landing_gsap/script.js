var tl=gsap.timeline()

tl.from("#nav img, #nav h3, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("#main h1",{
    y:100,
    delay:0.5,
    duration:1,
    stagger:0.3,
    opacity:0
})

tl.from("#container img",{
    scale:0,
    duration:0.5,
    opacity:0,
    stagger:0.3
})

tl.from("#main #icons",{
    scale:0,
    duration:1,
    opacity:0
})

tl.from("#main h5",{
    scale:0,
    opacity:0
})

tl.to("#main h5",{
    y:30,
    repeat:-1,
    duration:0.5,
    yoyo:true
})
