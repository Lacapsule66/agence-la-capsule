import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const anim = () => {
    const tl = gsap.timeline()
  tl.to("#scale", {
    scale: 1,
    duration: 0.6,
    ease: "power1.inOut",
  });
    tl.to(
    "#scale2",
    {
        scale: 1,
        duration: 0.33,
        ease: "power1.inOut",
    },
   
    );

};
export const toggle = () => {
  gsap.fromTo(
    "#toggle",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#toggle",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "restart none none reverse",
      },
    }
  );
};
export const toggle2 = () => {
    gsap.fromTo(
        "#toggle2",
        {
        opacity: 0,
        x: 100,
        },
        {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#toggle2",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none reverse",
        },
        }
    );
    }
export    const scale2 = () => {
        gsap.to(
        "#scale2",
        {
        
            scale: 1,
            duration: 0.33,
            ease: "power1.inOut",
            scrollTrigger: {
            trigger: "#scale2",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none reverse",
            },
        },
        );

    }
export const scale3 = () => {
   gsap.fromTo(
    "#scale3",
    {
      x: -100,
      opacity: 0,
    },
    {
      delay: 0.5,
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      
     
    }
  );
};