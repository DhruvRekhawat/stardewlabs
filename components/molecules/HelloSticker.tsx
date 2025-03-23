"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const CircularSticker = () => {
  const [rotation, setRotation] = useState(0);
  
  // Animate the text rotation continuously with optimized animation
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate(time) {
      // Use a smoother animation calculation based on time
      setRotation(time * 0.02 % 360);
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative group">
        {/* Main sticker with red theme */}
        <div className="w-24 h-24 bg-[#ea384c] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 cursor-pointer group-hover:shadow-xl">
          {/* Center with placeholder image */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center z-10 overflow-hidden">
            <Image 
              src="/hello.gif" 
              alt="Placeholder" 
              className="object-cover"
              height={100}
              width={100}
            />
          </div>
          
          {/* Rotating text */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" style={{ transform: `rotate(${rotation}deg)` }}>
            <path 
              id="textPath" 
              d="M50,15 A35,35 0 1,1 49.9,15" 
              fill="none"
            />
            <text className="text-[11px] fill-white font-medium tracking-wider">
              <textPath xlinkHref="#textPath" startOffset="0%">
                COME SAY HELLO • COME SAY HELLO •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircularSticker;