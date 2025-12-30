import React, { useState, useEffect } from 'react';
import { MapPin, Briefcase, DollarSign, Clock, ChevronRight, Star, Users, Building, Award, TrendingUp, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedOpportunities = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const opportunities = [
    {
      id: 4,
      title: "InsurTech Data Scientist",
      company: "InsuranceTech Corp",
      location: "Mumbai, India",
      salary: "₹22L - ₹32L",
      type: "Full-time",
      featured: true,
      category: "InsurTech",
      logo: "📊",
      skills: ["Python", "SQL", "Machine Learning"],
      rating: 4.6,
      posted: "3 days ago"
    },
    {
      id: 2,
      title: "Senior ML Engineer",
      company: "AI Innovations Ltd",
      location: "Hyderabad, India",
      salary: "₹30L - ₹45L",
      type: "Full-time",
      featured: true,
      category: "AI",
      logo: "🤖",
      skills: ["PyTorch", "TensorFlow", "MLOps"],
      rating: 4.9,
      posted: "1 day ago"
    },
    {
      id: 5,
      title: "Cybersecurity Architect",
      company: "SecureNet Systems",
      location: "Delhi, India",
      salary: "₹28L - ₹40L",
      type: "Full-time",
      featured: true,
      category: "Cybersecurity",
      logo: "🛡️",
      skills: ["Cloud Security", "Threat Analysis", "GRC"],
      rating: 4.8,
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "Blockchain Developer",
      company: "Crypto Solutions",
      location: "Remote, India",
      salary: "₹20L - ₹30L",
      type: "Full-time",
      featured: false,
      category: "Blockchain",
      logo: "⛓️",
      skills: ["Solidity", "Web3", "Smart Contracts"],
      rating: 4.7,
      posted: "1 week ago"
    },
    {
      id: 1,
      title: "Senior Quantum Software Engineer",
      company: "QuantumTech Solutions",
      location: "Bangalore, India",
      salary: "₹25L - ₹35L",
      type: "Full-time",
      featured: true,
      category: "Quantum",
      logo: "⚛️",
      skills: ["Python", "Qiskit", "Quantum Algorithms"],
      rating: 4.8,
      posted: "2 days ago"
    }
  ];

  const categories = [
    { name: 'All', count: opportunities.length },
    { name: 'InsurTech', count: opportunities.filter(job => job.category === 'InsurTech').length },
    { name: 'AI', count: opportunities.filter(job => job.category === 'AI').length },
    { name: 'Cybersecurity', count: opportunities.filter(job => job.category === 'Cybersecurity').length },
    { name: 'Blockchain', count: opportunities.filter(job => job.category === 'Blockchain').length },
    { name: 'Quantum', count: opportunities.filter(job => job.category === 'Quantum').length }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "1,200+", label: "Active Positions", color: "bg-[#FFC023]/20 text-[#FFC023]" },
    { icon: <Building className="w-6 h-6" />, value: "250+", label: "Indian Companies", color: "bg-[#003366]/20 text-[#003366]" },
    { icon: <Award className="w-6 h-6" />, value: "500+", label: "Successful Placements", color: "bg-[#FFC023]/20 text-[#FFC023]" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "98%", label: "Success Rate", color: "bg-[#003366]/20 text-[#003366]" }
  ];

  const categoryColors = {
    "InsurTech": "bg-blue-100 text-blue-700",
    "AI": "bg-green-100 text-green-700",
    "Cybersecurity": "bg-red-100 text-red-700",
    "Blockchain": "bg-amber-100 text-amber-700",
    "Quantum": "bg-purple-100 text-purple-700"
  };

  // Filter opportunities based on active category
  const filteredOpportunities = activeCategory === 'All' 
    ? opportunities 
    : opportunities.filter(job => job.category === activeCategory);

  return (
    <section id='career' className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#003366]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">FEATURED OPPORTUNITIES</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#003366] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Opportunities in <span className="text-[#003366]">India</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exclusive opportunities with leading Indian technology companies at the forefront of innovation
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 ${stat.color.split(' ')[0]}`}>
                {React.cloneElement(stat.icon, { className: "w-7 h-7" })}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-12 bg-white rounded-xl p-4 shadow-sm"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-[#003366] text-white shadow-md'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-1 text-xs rounded ${
                activeCategory === category.name 
                  ? 'bg-[#FFC023] text-[#003366]' 
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Opportunities Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredOpportunities.map((job, index) => (
            <div
              key={job.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#003366]/20"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-2xl">
                      {job.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[job.category]}`}>
                          {job.category}
                        </span>
                        {job.featured && (
                          <span className="px-3 py-1 bg-[#FFC023] text-[#003366] rounded-full text-xs font-bold flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#003366] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      <Star className="w-4 h-4 text-[#FFC023] fill-[#FFC023] mr-1" />
                      <span className="font-bold text-gray-900">{job.rating}</span>
                      <span className="text-gray-400 ml-1">/5</span>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    {job.type}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Salary */}
                <div className="mb-4">
                  <div className="flex items-center text-gray-700 mb-1">
                    <DollarSign className="w-4 h-4 mr-2 text-[#003366]" />
                    <span className="text-sm font-medium">Annual Package</span>
                  </div>
                  <div className="text-2xl font-bold text-[#003366]">{job.salary}</div>
                  <div className="text-xs text-gray-500 mt-1">Posted {job.posted}</div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-3">Required Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200 hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="
                    flex-1 py-3 px-4
                    bg-[#003366] text-white font-semibold
                    rounded-lg
                    hover:bg-[#003366]/90 hover:scale-[1.02]
                    transition-all duration-300
                    flex items-center justify-center gap-2
                    group/apply
                  ">
                    Apply Now
                    <ChevronRight className="w-4 h-4 group-hover/apply:translate-x-1 transition-transform" />
                  </button>
                  <button className="
                    py-3 px-4
                    bg-white text-[#003366] font-semibold
                    rounded-lg border border-[#003366]
                    hover:bg-[#003366] hover:text-white
                    transition-all duration-300
                  ">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Opportunities in India</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: "Data Scientist", company: "Tech Solutions", location: "Chennai", salary: "₹18L+" },
              { role: "Cloud Architect", company: "Digital Services", location: "Pune", salary: "₹25L+" },
              { role: "Security Engineer", company: "CyberTech", location: "Remote", salary: "₹20L+" }
            ].map((job, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-5 border border-gray-200 hover:border-[#FFC023] hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900 group-hover:text-[#003366]">{job.role}</h4>
                  <div className="text-lg font-bold text-[#FFC023]">{job.salary}</div>
                </div>
                <div className="text-sm text-gray-600 mb-3">{job.company} • {job.location}</div>
                <button className="w-full py-2 text-[#003366] font-medium text-sm hover:bg-[#003366] hover:text-white rounded-lg transition-colors">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="bg-gradient-to-r from-[#003366] to-[#003366]/90 rounded-2xl p-8 md:p-12 text-center text-white"
          data-aos="fade-up"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career in India?</h3>
            <p className="text-gray-200 mb-8">
              Join thousands of technology professionals who have found their dream roles through our specialized recruitment network across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-[#FFC023] text-[#003366] font-bold rounded-lg hover:bg-white hover:scale-105 transition-all duration-300">
                Schedule a Career Consultation
              </button>
              <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Submit Your Resume
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <div className="flex items-center justify-center gap-6">
                <span>✓ No placement fees</span>
                <span>✓ Direct company hiring</span>
                <span>✓ Pan-India opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunities;