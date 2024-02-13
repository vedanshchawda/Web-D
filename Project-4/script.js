var tl1=gsap.timeline()

tl1.from("#container h1, #container h2, #container button",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3
})


var tl2=gsap.timeline()
tl2.from("#about #heading h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#about #heading h2",
        start:"top 65%",
        end:"top 75%",
        scrub:4
    }
})

tl2.from("#about #image #firstrow",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#about #image #firstrow",
        start:"top 75%",
        end:"top 85%",
        scrub:4
    }
})

tl2.from("#about #image #secrow",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#about #image #secrow",
        start:"top 75%",
        end:"top 85%",
        scrub:4
    }
})

tl2.from("#about #abt h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#about #abt h2",
        start:"top 65%",
        end:"top 75%",
        scrub:4
    }
})

tl2.from("#about #cnt",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#about #cnt",
        start:"top 75%",
        end:"top 85%",
        scrub:4
    }
})

var tl3=gsap.timeline()

tl3.from("#works .services h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works .services h2",
        start:"top 65%",
        end:"top 75%",
        scrub:4
    }
})

tl3.from("#works .services div h3",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works .services h3",
        start:"top 70%",
        end:"top 80%",
        scrub:4
    }
})

tl3.from("#works #items .l1-items",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #items .l1-items",
        start:"top 75%",
        end:"top 85%",
        scrub:4
    }
})

tl3.from("#works #items .l2-items",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #items .l2-items",
        start:"top 75%",
        end:"top 85%",
        scrub:4
    }
})

tl3.from("#works #items .l3-items",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #items .l3-items",
        start:"top 75%",
        end:"top 85%",
        scrub:4
    }
})

tl3.from("#works #items .l4-items",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #items .l4-items",
        start:"top 75%",
        end:"top 85%",
        scrub:4
    }
})

tl3.from("#seq",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#seq",
        start:"top 70%",
        end:"top 80%",
        scrub:4
    }
})

tl3.from("#works .services #seq a",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works .services #seq a",
        start:"top 90%",
        end:"top 95%",
        scrub:4
    }
})


tl3.from("#works #htl",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #htl",
        start:"top 70%",
        end:"top 80%",
        scrub:4
    }
})

tl3.from("#works #cards #r1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #cards #r1",
        start:"top 70%",
        end:"top 73%",
        scrub:4
    }
})

tl3.from("#works #cards #r2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #cards #r2",
        start:"top 70%",
        end:"top 73%",
        scrub:4
    }
})

tl3.from("#works #cards #r3",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#works #cards #r3",
        start:"top 70%",
        end:"top 73%",
        scrub:4
    }
})


var tl4=gsap.timeline()
tl4.from("#process h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process h2",
        start:"top 70%",
        end:"top 80%",
        scrub:4
    }
})

tl4.from("#process #p1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process #p1",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})

tl4.from("#process #p2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process #p2",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})

tl4.from("#process #p3",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process #p3",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})

tl4.from("#process #p4",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process #p4",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})

tl4.from("#process #p5",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process #p5",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})

tl4.from("#process #p6",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process #p6",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})

tl4.from("#process #p7",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#process #p7",
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})


var tl5=gsap.timeline()

tl5.from("#logo img",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:"#logo img",
        start:"top 85%",
        end:"top 95%",
        scrub:4
    }
})