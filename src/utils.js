import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

//introduction
export const introductionAnimation = () => {

    gsap.timeline().fromTo(".info-left", {
        x: -100
    }, {
        scrollTrigger: {
            trigger: ".introduction",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        x: 0, stagger: 1, duration: 2, ease: "in"
    });
    gsap.timeline().fromTo(".info-right", {
        x: 100
    }, {
        scrollTrigger: {
            trigger: ".info-left",
            start: "top center",
            end: "bottom-center",
            scrub: true
        },
        x: 0, stagger: 1, duration: 2, ease: "in"
    })
}

//title
export const titleAnimation = () => {
    gsap.fromTo(".title", {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3",
    }
    );
    gsap.to(".title-img", {
        rotationX: 360,
        duration: 2,
        scrollTrigger: {
            trigger: ".title",
            start: "bottom",
            end: ".market",
            scrub: 4

        }
    })
}

//market
export const marketAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerElement = ".market";
    gsap.fromTo(
        triggerElement,
        {
            y: -100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 3,
            scrollTrigger: {
                trigger: triggerElement,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        }
    );
};
