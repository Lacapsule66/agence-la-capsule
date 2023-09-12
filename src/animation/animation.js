import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const opacityAnim = () => {
    gsap.to('#opacity', {
        opacity: 1,
        duration: .3,
    
    });
    }
    export const scale = () => {
    gsap.to('#scale', {
        scale: 1,
        duration: .3,
        scrollTrigger: {
            trigger: '#scale',
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
            
        }

    });
    }
    export const scale2 = () => {
        gsap.to('#scale2', {
            scale: 1,
            duration: .3,
            scrollTrigger: {
                trigger: '#scale2',
                start: 'top 80%',
                end: 'bottom 80%',
                toggleActions: 'play none none reverse',
                
            }
    
        });
        }
    
export const toggle = () => {
    gsap.fromTo('#soin', {
        x:-100,
        opacity: 0,
    }, {
        x:0,
        opacity: 1,
      
        stagger: .3,
        scrollTrigger: {
            trigger: '#soin',
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
            
        }


    });
    }
       