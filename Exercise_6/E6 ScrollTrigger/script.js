//Register Plugin
gsap.registerPlugin(ScrollTrigger);

//-------------------------------

//Fade In (Section 1) - Animates on scroll down, reverses on scroll up ("play reverse play reverse").
gsap.from("#section1 .box", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#section1 .box",
        start: "top center", //when the top of the trigger element reaches the center of the viewport.
        markers: true,
        toggleActions: "play reverse play reverse"
    }
});

//-------------------------------

//Scale Up (Section 2) - Plays on scroll down, resets when leaving from the top ("play none none reset").
gsap.from("#section2 .box", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#section2 .box",
        start: "top 75%", //when the top of the element reaches 75% down in the viewport.

        markers: true,
        toggleActions: "play none none reset"
    }
});

//-------------------------------

//Rotate (Section 3) - Restarts animation each time it's re-entered ("restart none none reverse").
gsap.from("#section3 .box", {
    rotation: 360,
    duration: 1,
    scrollTrigger: {
        trigger: "#section3 .box",
        start: "top bottom", //when the top of the element reaches the bottom of the viewport.
        markers: true,
        toggleActions: "restart none none reverse"
    }
});

//-------------------------------

//Slide Right (Section 4) - Plays when entering, pauses if scrolling stops, resumes on re-entry, resets when exiting ("play pause resume reset").
gsap.from("#section4 .box", {
    x: -200,
    duration: 1,
    scrollTrigger: {
        trigger: "#section4 .box",
        start: "center center",
        markers: true,
        toggleActions: "play pause resume reset"
    }
});



//-------------------------------
// Section 6 - Opacity and Scale with smooth fade+grow
gsap.from("#section6 .box", {
    opacity: 0,
    scale: 0.5,
    duration: 1.2,
    scrollTrigger: {
        trigger: "#section6 .box",
        start: "top 80%",
        end: "bottom 60%",
        markers: true,
        toggleActions: "play reverse play reverse"
    }
});

//-------------------------------
// Section 7 - Y-axis slide + repeat animation
gsap.from("#section7 .box", {
    y: 150,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section7 .box",
        start: "top 75%",
        end: "bottom 60%",
        markers: true,
        toggleActions: "restart pause resume reset"
    }
});

//-------------------------------
// Section 8 - Full rotation with reset
gsap.from("#section8 .box", {
    rotation: 720,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#section8 .box",
        start: "center bottom",
        end: "top center",
        markers: true,
        toggleActions: "play none none reset"
    }
});
