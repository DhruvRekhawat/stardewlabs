"use client"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Benefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const benefitItems = [
    {
      title: "Your digital presence works 24/7 with our performance-optimized websites and apps.",
      image: "/Stick Figure Lifting.jpeg",
    },
    {
      title: "Every solution is tailored to your unique business challenges—no generic templates or cookie-cutter code here!",
      image: "/Smiling Star Illustration.jpeg",

    },
    {
      title: "Get enterprise-level tech solutions without the enterprise-level price tag.",
      image: "/Minimalist Desk Worker.jpeg"
    },
    {
      title: "Our designers and developers collaborate to create intuitive experiences that users love and businesses rely on.",
      image:"/Minimalist Water Ripples.jpeg"
    },
    // {
    //   title: "Future-proof technology stack ensures your digital products stay relevant and maintainable for years to come.",
    // },
    // {
    //   title: "From concept to launch, we handle every step of the development process with transparency and precision.",
    // },
  ];
  
  const totalSlides = benefitItems.length;
 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
 
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };


  return (
    <div className="w-full py-10 md:px-12">
      <div className="flex items-center gap-2 mb-4 bg-red-100 rounded-full w-fit pl-1 pr-4 py-1">
        <div className="bg-black p-2 rounded-full">
          <Star className="text-white w-4 h-4" />
        </div>
        <span className="font-medium">Benefits</span>
      </div>
     
      <h2 className="text-2xl md:text-4xl font-semibold mb-10 max-w-2xl">
        See why partnering with us is the smartest move.
      </h2>
      <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 active:h-5 active:w-5 transition-all hover:cursor-pointer" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 active:h-5 active:w-5 transition-all hover:cursor-pointer" />
          </button>
        </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 30}%)` }}
          >
            {benefitItems.map((item, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[33.333%] p-4"
              >
                <div className="bg-red-50 p-4 rounded-xl h-full flex flex-col items-stretch justify-center">
                  <p className="text-lg md:text-xl font-medium">{item.title}</p>
                  <Image src={item.image} alt='smiling star' width={200} height={200} className=' mix-blend-multiply'></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;