
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoPlayer(){
    var videoPlayer = document.getElementById('myVideo');
    var playbackSpeed = 1.0;
    function changeSpeed(speed) {
        playbackSpeed = speed;
        videoPlayer.playbackRate = speed;
    }

    changeSpeed(2);


}

videoPlayer()

// gsap
gsap.from(".nlink",{
    stagger:.2,
    y:10,
    duration:1,
    ease:Power2,
    opacity:0
})


Shery.textAnimate("#headings h1" , {
    
    style: 2,
    y: 10,
    delay: .3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2",{
    y:50,
    stagger:.3,
    opacity:0,
    ease:Expo,
    duration:1,

})

Shery.imageEffect("#imgntext img",{
    style:3,
    config:{"uFrequencyX":{"value":22.9,"range":[0,100]},"uFrequencyY":{"value":15.27,"range":[0,100]},"uFrequencyZ":{"value":23.66,"range":[0,100]},"geoVertex":{"range":[1,64],"value":44.28},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6652590459971963},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

Shery.imageEffect(".imgeff img",{
    style:5,
    config:{"a":{"value":2.29,"range":[0,30]},"b":{"value":-0.71,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},


})

gsap.from("#imgntext img",{
    y:"80",
    opacity:0,
    duration:1,
    ease:Expo.easeInOut
})

Shery.imageEffect("#bimg",{
    style:4,
    gooey:true,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.22,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.53,"range":[0,5]},"uFrequency":{"value":2.37,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7951991020155702},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.82,"range":[1,15]},"durationOut":{"value":0.62,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2]},"discard_threshold":{"value":0.49,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}},
})

document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
    gsap.to("#footer video",{
        opacity:1,
        duration:1,
        ease:Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
    gsap.to("#footer video",{
        opacity:0,
        duration:1,
        ease:Power4
    })
    
    
})

gsap.to("#visit", { 
    scale: "+=0.1", 
    yoyo: true, 
    ease: "power1.inOut",
    repeat: -1, 
    duration: 1 
});

Shery.makeMagnet("#centertag", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
















