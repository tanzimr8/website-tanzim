import React, { useEffect, useState } from 'react'

const ScrollIndicator = () => {
    const [scroll,setScroll] = useState(0);
    const handleScrollChange = ()=>{
        const totalScrolled = document.documentElement.scrollTop;
        const elementHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScroll(Math.round(totalScrolled/elementHeight * 100));
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScrollChange);

        window.removeEventListener('scroll',()=>{})
    });
  return (
    <div className="scroll-indicator">
        <div className="current-scroll" style={{width: `${scroll}%`}}></div>
    </div>
  )
}

export default ScrollIndicator