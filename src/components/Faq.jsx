import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle, Star, MapPin, Clock, BarChart, Shield } from 'lucide-react';

const WhyChooseTANVRA = () => {
  const stats = [
    { value: "18+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { value: "1000+", label: "Tech Talents Placed", icon: <Users className="w-5 h-5" /> },
    { value: "94%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "10+", label: "Tech Domains", icon: <Shield className="w-5 h-5" /> }
  ];

  const coreStrengths = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Technology Specialization",
      description: "Deep expertise in emerging tech sectors including AI, Quantum Computing, and Blockchain",
      points: ["Sector-specific recruiters", "Technical assessment expertise", "Market intelligence"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Data-Driven Approach",
      description: "Using analytics and market insights to optimize recruitment strategies",
      points: ["Salary benchmarking", "Market trend analysis", "Competitive insights"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network Excellence",
      description: "Extensive connections with technology companies and talent",
      points: ["Quality placements", "Industry relationships", "Talent pipeline"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Needs Assessment",
      description: "Understanding your specific requirements and company culture"
    },
    {
      number: "02",
      title: "Talent Sourcing",
      description: "Leveraging our network to identify top candidates"
    },
    {
      number: "03",
      title: "Technical Screening",
      description: "Rigorous evaluation by domain experts"
    },
    {
      number: "04",
      title: "Final Placement",
      description: "Seamless onboarding and post-placement support"
    }
  ];

  const testimonials = [
    {
      role: "Technology Leader",
      content: "Found our Lead AI Engineer within 2 weeks. Exceptional understanding of technical requirements.",
      rating: 5
    },
    {
      role: "Engineering Director",
      content: "Their expertise in specialized hiring saved us months of recruitment efforts.",
      rating: 5
    }
  ];

  const techHubs = [
    { city: "Tech Hub A", positions: "85+", companies: "Leading Companies" },
    { city: "Tech Hub B", positions: "45+", companies: "Innovative Startups" },
    { city: "Tech Hub C", positions: "60+", companies: "Enterprise Clients" },
    { city: "Tech Hub D", positions: "35+", companies: "Growing Organizations" }
  ];

  return (
    <section id='insights' className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#003366]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">OUR ADVANTAGE</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#003366] to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Partner With <span className="text-[#003366]">Our Expertise</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            18+ years of specialized technology recruitment experience delivering exceptional results
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#003366] rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFC023] mb-3">
                {React.cloneElement(stat.icon, { className: "w-6 h-6 text-[#003366]" })}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreStrengths.map((strength, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#003366] hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#003366] mb-6 group-hover:bg-[#003366]/90 transition-colors">
                {React.cloneElement(strength.icon, { className: "w-7 h-7 text-white" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#003366] transition-colors">
                {strength.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {strength.description}
              </p>
              <ul className="space-y-2">
                {strength.points.map((point, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#FFC023] mr-3 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-[#003366]">Recruitment Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#003366] via-[#003366]/50 to-[#003366] -z-10"></div>
            
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#003366] hover:shadow-lg transition-all duration-500 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#003366] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 group-hover:bg-[#003366]/90 group-hover:scale-110 transition-all">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#003366]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Client <span className="text-[#003366]">Success Stories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#003366] hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#003366] flex items-center justify-center text-white font-bold text-lg">
                    TL
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">Technology Leader</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-[#FFC023] fill-[#FFC023] ml-1" 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Tech Hubs */}
        <div className="bg-[#003366] rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Technology Network</h3>
            <p className="text-gray-300">Connecting talent with opportunities across technology hubs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techHubs.map((hub, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-5 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#FFC023] mr-2" />
                  <div className="font-bold text-white">{hub.city}</div>
                </div>
                <div className="text-2xl font-bold text-[#FFC023] mb-1">{hub.positions}</div>
                <div className="text-sm text-gray-300">Active Positions</div>
                <div className="text-xs text-gray-400 mt-2">{hub.companies}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Team?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Connect with our expert recruiters to find the perfect technology talent for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#003366]/90 hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-white text-[#003366] font-semibold rounded-lg border border-[#003366] hover:bg-[#003366] hover:text-white hover:scale-105 transition-all duration-300">
                Explore Services
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <div className="flex items-center justify-center gap-6">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#FFC023]" />
                  Quick response
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-[#FFC023]" />
                  Confidential process
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#FFC023]" />
                  Guaranteed results
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTANVRA;