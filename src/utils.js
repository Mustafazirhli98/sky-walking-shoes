import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLocation } from "react-router-dom";
import { PATHS } from "./routes/Routes";

//introduction animation
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

//title animation
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
    gsap.to(".title_img", {
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

//market animation
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
            y: 50,
            opacity: 1,
            ease: "power3",
            duration: 1,
            scrollTrigger: {
                trigger: triggerElement,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        }
    );
};

//credit-card animation
export const creditCardAnimation = () => {
    gsap.fromTo(".credit-card", {
        x: 800,
        duration: 2,
    },
        {
            x: 0
        })
}

export const ordercheckAnimation = () => {
    gsap.to(".order-check", {
        rotateY: 360,
        duration: 0.5
    })
}

export const logoAnimation = () => {
    gsap.to(".logoSVG", {
        rotateY: 360,
        duration: 1.5
    })
}
//navbar routes

export const GetUrlInfo = () => {
    const location = useLocation();
    return location.pathname;
}

export const NavbarRouteMapper = (url) => {
    if (url === PATHS.DEFAULT)
        return "Ürün Hakkında"
    else return "Sepeti Onayla"
}