import React, { useState } from "react";
import TeamImage from "../assets/hero.jpeg";
import { Cover } from "../Component/ui/cover";
import AnimatedCounter from "../Component/AnimatedCounter";
import useScrollReveal from "../Hooks/useScrollReveal";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Scroll reveal refs
  const sectionRef = useScrollReveal();
  const headerRef = useScrollReveal({ delay: 100 });
  const servicesRef = useScrollReveal({ delay: 200 });
  const imageRef = useScrollReveal({ delay: 300 });
  const statsRef = useScrollReveal({ delay: 400 });
   const highlightsRef = useScrollReveal({ delay: 200 });

  const services = [
    "General Construction Services",
    "Concrete Work",
    "Design and Planning",
    "Civil Works",
    "Pre-Construction",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 mt-10  sm:mt-20 px-4 sm:px-8 lg:px-16 bg-white reveal"
      aria-label="Construction Services Hero Section"
    >
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#0a2253]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

  {/* Left Column: Heading + Services */}
   

          {/* Left: Heading */}
          <div ref={headerRef} className="flex-1  flex flex-col gap-6">
         

            <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-900 leading-tight">
              Where <span className="text-[#102c6f]">Innovation </span> Drives  
              <br />
              <Cover >
                <span className="text-[#ff6726] "> Structural Perfection</span>
              </Cover>
            </h1>
         

            
          


    {/* Services Pills */}
    <div ref={servicesRef} className="opacity-0 translate-y-8 transition-all duration-700 reveal  flex flex-col md:flex-row gap-3 items-center md:items-start">
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {services.map((item, index) => (
          <span
            key={index}
            className="px-5 py-2.5 bg-white border border-gray-200 hover:border-[#ff6726] hover:text-[#ff6726] rounded-full text-sm font-medium shadow-sm transition-all cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto md:mx-0 mt-4 md:mt-0">
       We specialize in transforming ideas into solid, reliable structures through expert craftsmanship and an unwavering commitment to quality. At KK Construction, every project begins with a vision—yours—and we turn that vision into reality by blending modern construction techniques with years of hands-on experience.
      </p>
    </div>
  </div>

        
</div>


        {/* Image + Stats */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

          {/* Image */}
          <div ref={imageRef} className="opacity-0 translate-y-8 transition-all duration-700 reveal relative w-full md:w-2/3">
            {!imageLoaded && (
              <div className="absolute inset-0 rounded-2xl bg-gray-200 animate-pulse"></div>
            )}
            <img
              src={TeamImage}
              alt="Construction team working"
              onLoad={() => setImageLoaded(true)}
              className="rounded-2xl w-full h-64 sm:h-80 md:h-[420px] object-cover shadow-xl"
            />
          </div>

          {/* Stats Box */}
          <div ref={statsRef} className="opacity-0 translate-y-8 transition-all duration-700 reveal bg-[#ff6726] text-white p-6 sm:p-8 rounded-2xl shadow-lg w-full md:w-1/3 space-y-4 md:-mt-10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold">
                <AnimatedCounter to={60} />+
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold">
                <AnimatedCounter to={10} />+
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Years of Experience
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold">
                <AnimatedCounter to={250} />+
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}