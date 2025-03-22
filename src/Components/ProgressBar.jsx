import React from 'react'
import { useState, useEffect } from 'react'

function ProgressBar() {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <div className='w-1.5 bg-gray-400 fixed ml-[-5px] mt-[90px] h-full mb-4'>
        <div className='bg-green-600 transition-all ease-in-out duration-1000' style={{height: `${scrollTop}%`}}>

        </div>
    </div>
  )
}

export default ProgressBar