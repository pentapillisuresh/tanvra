// components/Features.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const insights = [
    {
      type: "QUANTUM",
      title: "QUANTUM COMPUTING",
      description: "Harnessing quantum mechanics to solve complex problems beyond classical computing capabilities.",
      link: "#",
      image: "./images/card1.jpg",
      color: "#8B5CF6"
    },
    {
      type: "AI",
      title: "ARTIFICIAL INTELLIGENCE",
      description: "Intelligent systems transforming industries through machine learning and advanced data analytics.",
      link: "#",
      image: "./images/card2.jpg",
      color: "#10B981"
    },
    {
      type: "BLOCKCHAIN",
      title: "BLOCKCHAIN TECHNOLOGY",
      description: "Decentralized systems building trust, transparency, and security through distributed ledger technology.",
      link: "#",
      image: "./images/card3.jpg",
      color: "#F59E0B"
    },
    {
      type: "INSURTECH",
      title: "INSURTECH INNOVATIONS",
      description: "Modern insurance solutions powered by technology and digital platforms for enhanced customer experience.",
      link: "#",
      image: "./images/banner12.jpg",
      color: "#3B82F6"
    }
  ];

  return (
    <section id="industries" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Header */}
        <div 
          className="text-center mb-12"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div 
            className="inline-flex items-center gap-2 mb-4"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="w-10 h-1 bg-[#003366]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">TECHNOLOGY EXPERTISE</span>
            <div className="w-10 h-1 bg-[#003366]"></div>
          </div>
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Specialized Recruitment
          </h1>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-right"
            data-aos-delay="250"
          >
            Expert talent acquisition across cutting-edge technology domains
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-xl cursor-pointer"
              data-aos={`${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}
              data-aos-delay={index * 100 + 300}
              data-aos-once="true"
            >
              {/* Full Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${insight.image}')` }}
              >
                {/* Subtle overlay only on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700"></div>
              </div>

              {/* Dark Blue Overlay - Slides from bottom */}
              <div className="
                absolute bottom-0 left-0 right-0
                bg-gradient-to-t from-[#003366] via-[#003366]/95 to-[#003366]/80
                h-20
                group-hover:h-full
                transition-all duration-500 ease-out
                overflow-hidden
              ">
                {/* Content Container */}
                <div className="
                  absolute inset-0
                  flex flex-col justify-end
                  p-6
                  transform translate-y-0
                  group-hover:-translate-y-4
                  transition-transform duration-500 ease-out
                ">
                  {/* Type Badge */}
                  <div className="mb-3">
                    <span className="
                      inline-block px-3 py-1
                      text-xs font-bold uppercase tracking-wider
                      rounded-full
                      border
                    "
                    style={{
                      background: `${insight.color}20`,
                      color: insight.color,
                      borderColor: insight.color
                    }}
                    >
                      {insight.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="
                    text-lg font-bold text-white leading-tight mb-2
                    line-clamp-2
                    transition-all duration-300
                  ">
                    {insight.title}
                  </h3>

                  {/* Description - Reveals on hover */}
                  <div className="
                    overflow-hidden
                    max-h-0
                    opacity-0
                    group-hover:max-h-48
                    group-hover:opacity-100
                    group-hover:mt-3
                    transition-all duration-500 ease-out
                  ">
                    <p className="
                      text-white/90 text-sm leading-relaxed mb-4
                    ">
                      {insight.description}
                    </p>
                    
                    {/* Action Button */}
                    <button className="
                      w-full py-2
                      text-white text-sm font-semibold uppercase tracking-wider
                      rounded-lg
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      border
                      hover:scale-[1.02]
                    "
                    style={{
                      background: `${insight.color}30`,
                      borderColor: insight.color
                    }}
                    >
                      <span>Talent Solutions</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

            

              {/* Color Glow on Hover */}
              <div className="
                absolute inset-0
                opacity-0
                group-hover:opacity-15
                transition-all duration-500
                pointer-events-none
              "
              style={{ background: insight.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;