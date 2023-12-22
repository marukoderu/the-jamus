import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import { Transition } from "../components/transtition";
import '../assets/css/landing.css'

gsap.registerPlugin(ExpoScaleEase);

export const Landing = () => {
    const landing = gsap.timeline()
    const land1 = useRef(null)
    useEffect(() => {
        gsap.set(land1.current, {
            y: "50%"
        });
        gsap.to(land1.current, {
            duration:3.5,
            ease: "expo.inOut",
            y: "0%",
            delay: 1
        });
        gsap.set(land1.current, {
            scale: .85
        });
        gsap.to(land1.current, {
            duration: 1.5,
            ease: "expo.inOut",
            scale: 1,
            delay: 3
        });
    })

    return (
        <div className="landing h-screen w-screen">
            <Transition timeline={landing} />
            <div ref={land1} className="ld-container lg:p-0 min-[320px]:p-5 sm:w-full grid grid-rows-6 content-center place-content-center">
                <div className="ld-logo row-span-1 flex lg:items-end min-[320px]:items-center text-center">
                    <h5 className="lg:text-4xl min-[320px]:text-xl">The Jamu's</h5>
                </div>

                <div className="ld-content text-3xl row-span-5 grid lg:content-stretch min-[320px]:content-center lg:grid-cols-2 min-[320px]:grid-cols-1 lg:pt-[2em]">
                    <h1 className="lg:text-9xl min-[320px]:text-5xl border-b-2 border-[#776B5D]">AUTHENTIC</h1>
                    <h1 className="lg:text-9xl min-[320px]:text-5xl border-b-2 border-[#776B5D]">HERBAL</h1>
                    <h1 className="lg:text-9xl min-[320px]:text-5xl border-b-2 border-[#776B5D]">CULTURAL</h1>
                    <h1 className="lg:text-9xl min-[320px]:text-5xl border-b-2 border-[#776B5D]">TRADITIONAL</h1>
                    <h1 className="lg:text-9xl min-[320px]:text-5xl border-b-2 border-[#776B5D]">HOLISTIC</h1>
                    <h1 className="lg:text-9xl min-[320px]:text-5xl border-b-2 border-[#776B5D]">MEDICINAL</h1>
                </div>
            </div>
        </div>  
    )
}