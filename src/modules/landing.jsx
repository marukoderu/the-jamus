import React, {useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import { Transition } from "../components/transtition";
import '../assets/css/landing.css'

gsap.registerPlugin(ExpoScaleEase);

export const Landing = () => {
    const navigate = useNavigate();
    const land1 = useRef(null);
    const landingAnimation = useRef(gsap.timeline());

    useEffect(() => {
        const animation = landingAnimation.current;

        animation.fromTo(land1.current, { y: "50%" }, { y: "0%", duration: 3.5, ease: "expo.inOut", delay: 1 });
        animation.fromTo(land1.current, { scale: 0.85 }, { scale: 1, duration: 1.5, ease: "expo.inOut", delay: 3 });

        // Use both Navigate and Timeout
        const redirectTimeout = setTimeout(() => {
        navigate("/about-general-jamu");
        }, 15000);

        // Clean up the animation and timeout on component unmount
        // return () => {
        // animation.kill();
        // clearTimeout(redirectTimeout);
        // };
    }, [navigate]);

    return (
        <div className="landing h-screen lg:w-screen sm:w-screen">
            <Transition timeline={landingAnimation.current} />
            <div ref={land1} className="ld-container lg:p-0 min-[320px]:p-5 sm:w-full grid grid-rows-6 content-center place-content-center">
                <div className="ld-logo row-span-1 flex lg:items-end min-[320px]:items-center text-center">
                    <h5 className="lg:text-xl min-[320px]:text-xl">The Jamu's</h5>
                </div>

                <div className="ld-content text-3xl row-span-5 grid lg:content-stretch min-[320px]:content-center lg:grid-cols-2 min-[320px]:grid-cols-1 lg:pt-[2em]">
                    <h1 className="lg:text-7xl min-[320px]:text-5xl">AUTHENTIC</h1>
                    <h1 className="lg:text-7xl min-[320px]:text-5xl">HERBAL</h1>
                    <h1 className="lg:text-7xl min-[320px]:text-5xl">CULTURAL</h1>
                    <h1 className="lg:text-7xl min-[320px]:text-5xl">TRADITIONAL</h1>
                    <h1 className="lg:text-7xl min-[320px]:text-5xl">HOLISTIC</h1>
                    <h1 className="lg:text-7xl min-[320px]:text-5xl">MEDICINAL</h1>
                </div>
            </div>
        </div>  
    )
}