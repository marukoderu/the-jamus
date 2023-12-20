import React, {useRef, useEffect} from 'react'
import '../assets/css/trans.css'
import gsap, {Power4} from 'gsap'

export function Transition({timeline}) {
    const trans = useRef(null);
    const transImg = useRef(null);
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 4,
            y: 2500,
            ease: Power4.easeInOut,
            delay: 1
        });
    })
    return (
        <div>
           <div className="transition-effect flex items-center justify-center" ref={trans}>
                <img className='img-trans' src={process.env.PUBLIC_URL + '/logo.svg'} /> 
            </div> 
        </div>
    )
}