import React from 'react'
import './cardSlider.css'
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from "framer-motion"
 


const CardSlider = () => {
    const requestRef = useRef();
    const [state, setState] = useState([0, 0, 0]);
    const animationTriggered = useRef(false);
    console.log(state[0])
    useEffect(() => {
        const targetDiv = document.getElementById('cards');

        const handleScroll = () => {
           
            const rect = targetDiv.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            console.log(animationTriggered)
            if (!animationTriggered.current &&
                 rect.top < viewportHeight && rect.bottom >= 0 && 
                 state[0] < 100) {
                // Start animation when the targetDiv is in the viewport
                //setAnimationTriggered(true);
            
               console.log('it entered')
                animate();
         
               
            }  
        };
       
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationTriggered]);
    
    const animate = () => {
        const deltas = [1, 2, 3]; // Different increment values for each card
        setState(prevState => {
            const newState = prevState.map((value, index) => value + deltas[index]);
            if (newState[0] >= 100) {
               // cancelAnimationFrame(requestRef.current); // Stop animation loop
                animationTriggered.current = true; // Set animation triggered flag
            }
            return newState;
        });
    };

    return (
        <div id='container'> {/* This creates space to allow scrolling */}
            <div id='cards'>
                <div className="card" style={{ 
                  marginTop: `${state[0]}px`,
                  marginBotom: `${state[0]}px`  }}>
                    {/* Content for card 1 */}
                    <div className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 34"><path fill="currentColor" d="M17 4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414 0L10 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13.5 9.086L18.586 4zM5 18v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0m5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm4 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m6-4a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"/></svg>
                    </div>
                    <blockquote>Since implementing Effidyst's solutions, we've seen a considerable increase in our overall productivity. Our employees seem happier and more motivated than ever before.</blockquote>
                    <cite>-Jenna, CEO of TechStart</cite>
                    <h2>1.</h2>
                </div>
                <div className="card" style={{ marginTop: `${state[1]}px` }}>
                    {/* Content for card 2 */}
                    <div className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 34"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M17.252 12.49c-.284 2.365-1.833 3.31-2.502 3.996c-.67.688-.55.825-.505 1.834a.916.916 0 0 1-.916.971h-2.658a.918.918 0 0 1-.917-.971c0-.99.092-1.22-.504-1.834c-.76-.76-2.548-1.833-2.548-4.784a5.307 5.307 0 1 1 10.55.788"/><path d="M10.46 19.236v1.512c0 .413.23.752.513.752h2.053c.285 0 .514-.34.514-.752v-1.512m-2.32-10.54a2.227 2.227 0 0 0-2.226 2.227m10.338.981h1.834m-3.68-6.012l1.301-1.301M18.486 17l1.301 1.3M12 2.377V3.86m-6.76.73l1.292 1.302M4.24 18.3L5.532 17m-.864-5.096H2.835"/></g></svg>
                    </div>
                    <blockquote>Effidyst has truly transformed our work environment. Their products are innovative, and their team is always supportive, helping us at every step of our journey towards increased productivity.</blockquote>
                    <cite>- Sophia, Project Manager at BuildIt</cite>
                     
                    <h2>2.</h2>
                </div>
                <div className="card" style={{ marginTop: `${state[2]}px` }}>
                    {/* Content for card 3 */}
                    <div className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 34"><g fill="none"><path fill="currentColor" d="m10.15 8.802l-.442.606zM12 3.106l-.508.552a.75.75 0 0 0 1.015 0zm1.85 5.696l.442.606zM12 9.676v.75zm-1.408-1.48c-.69-.503-1.427-1.115-1.983-1.76c-.574-.665-.859-1.254-.859-1.721h-1.5c0 1.017.578 1.954 1.223 2.701c.663.768 1.501 1.457 2.235 1.992zM7.75 4.715c0-1.059.52-1.663 1.146-1.873c.652-.22 1.624-.078 2.596.816l1.015-1.104C11.23 1.38 9.704.988 8.418 1.42C7.105 1.862 6.25 3.096 6.25 4.715zm6.542 4.693c.734-.534 1.572-1.224 2.235-1.992c.645-.747 1.223-1.684 1.223-2.701h-1.5c0 .467-.284 1.056-.859 1.721c-.556.645-1.292 1.257-1.982 1.76zm3.458-4.693c0-1.619-.855-2.853-2.167-3.295c-1.286-.432-2.813-.04-4.09 1.134l1.015 1.104c.972-.894 1.945-1.036 2.597-.816c.625.21 1.145.814 1.145 1.873zM9.708 9.408c.755.55 1.354 1.018 2.292 1.018v-1.5c-.365 0-.565-.115-1.408-.73zm3.7-1.212c-.843.615-1.043.73-1.408.73v1.5c.938 0 1.537-.467 2.292-1.018z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 20.388h2.26c1.01 0 2.033.106 3.016.308a14.85 14.85 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.887 1.887 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162c-.11.017-.225.033-.345.047m0 0a8.176 8.176 0 0 1-.11.012m.11-.012a.998.998 0 0 0 .427-.24a1.492 1.492 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.524.524 0 0 1-.11.012m0 0a9.274 9.274 0 0 1-1.814.004"/><rect width="3" height="8" x="2" y="14" stroke="currentColor" stroke-width="1.5" rx="1.5"/></g></svg>
                    </div>
                    <blockquote>The team at Effidyst understands our unique requirements and provides solutions that cater perfectly to them. Our workers' welfare and productivity have both seen substantial improvements.</blockquote>
                   <cite>- Olivia, CEO of Alpha Corp.</cite>
                    <h2>3.</h2>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;