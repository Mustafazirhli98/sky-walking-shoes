import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

//introduction
gsap.registerPlugin(ScrollTrigger);

export const introductionAnimation = () => {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".info",
            start: "top center",
            end: "bottom center",
            scrub: 10,
        }
    })
        .fromTo(".info", { opacity: 0 }, { opacity: 1, duration: 10, ease: "in", stagger: 10 });
};

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
