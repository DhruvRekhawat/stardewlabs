// components/ClientTestimonials.jsx

const ClientTestimonials = () => {
  const testimonials = [
    {
      quote: "Dhruv was an excellent freelance web designer for Neural City.  His work was consistently professional and delivered within the agreed-upon timeframe.  We were particularly impressed with his ability to quickly grasp our vision for the website. He's sharp, insightful, and translates ideas into tangible results efficiently. We highly recommend Dhruv for any website design project",
      name: "Akshay Kanchan",
      title: "FOUNDER, Neural City",
      logo: "/images/logo1.png",
      avatar: "/images/tobias.jpg"
    },
    {
      quote: "Dhruv is an extremely talented professional who brings multiple skillsets. He has a deep understanding of the internet and the trends that are hot at any given point of time. He has a very good hold on different industries and the pain points of customers. He is inquisitive and genuinely listens when you tell him your requirement. This make him very different from many others who think they know it all.",
      name: "Sachin Amarnath",
      title: "MANAGING DIRECTOR, Ascent School of Construction",
      logo: "/images/logo2.png",
      avatar: "/images/silas.jpg"
    },
    {
      quote: "I came in with high hopes, and they absolutely blew me away. From strategy to execution, every detail was on point. I'm telling everyone I know—hire them!",
      name: "Abhijeet ",
      title: "CEO, Captain Side Gaming",
      logo: "/images/logo3.png",
      avatar: "/images/orion.jpg"
    }
  ];


  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 justify-center mb-6">
          <div className="bg-black rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-1.146-.322-2.217-.88-3.126A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-lg font-medium">Client Stories</h2>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hear stories 
            <span className="relative inline-block mx-2">
              {/* <div className="flex -space-x-4">
              <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
              </div> */}
            </span>
            straight from
            <br /> the people we helped!
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <blockquote className="text-lg font-medium mb-8">&quot;{testimonial.quote}&quot;</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  {/* <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={64} 
                    height={64} 
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  {/* <div className="h-8 w-20 relative">
                    <Image 
                      src={testimonial.logo} 
                      alt="Company logo" 
                      layout="fill" 
                      objectFit="contain" 
                      objectPosition="left"
                    />
                  </div> */}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;