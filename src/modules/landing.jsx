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
            <div ref={land1} className="ld-container grid grid-rows-5 content-center place-content-center">
                <div className="ld-logo row-span-1 flex items-end">
                    <h5>The Jamu's</h5>
                </div>

                <div className="ld-content text-3xl row-span-4 grid grid-cols-2 pt-[2em]">
                    <h1>AUTHENTIC</h1>
                    <h1>HERBAL</h1>
                    <h1>CULTURAL</h1>
                    <h1>TRADITIONAL</h1>
                    <h1>HOLISTIC</h1>
                    <h1>MEDICINAL</h1>
                </div>
            </div>
        </div>  
    )
}