import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Insights', href: '#insights' },
    { name: 'Opportunities', href: '#opportunities' },
    { name: 'Contact', href: '#contact' }
  ];

  const technologyAreas = [
    'Artificial Intelligence',
    'Quantum Computing',
    'Blockchain',
  
  
    'InsurTech',
    
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'contact@professional.com',
      href: 'mailto:contact@professional.com'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '91 8309898737',
      href: 'tel:+918309898737'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Professional Services',
      href: '#'
    }
  ];

  return (
    <footer className="bg-[#003366] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
               <div className="">
              <img
                src="/images/logo.png"
                alt="WishWall Logo"
                className="w-50 h-32"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
              {/* <div className="w-16 h-1 bg-[#FFC023] mb-4"></div> */}
            </div>
            <p className="text-gray-300 mb-6 max-w-lg">
              18+ years of specialized technology recruitment experience, connecting exceptional talent 
              with leading companies across emerging technology sectors.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFC023]/10 flex items-center justify-center mr-3 group-hover:bg-[#FFC023]/20 transition-colors">
                    {React.cloneElement(item.icon, { className: "w-4 h-4 text-[#FFC023]" })}
                  </div>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFC023] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#FFC023] mr-3 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Focus */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Technology Focus</h3>
            <div className="flex flex-wrap gap-2">
              {technologyAreas.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/10 text-gray-300 text-xs rounded-full hover:bg-white/20 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Social & LinkedIn */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-sm font-medium mb-4 text-gray-300">Connect Professionally</h4>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-[#FFC023] text-[#003366] font-semibold rounded-lg hover:bg-[#FFC023]/90 transition-all duration-300 group/linkedin"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
                <svg 
                  className="w-4 h-4 ml-2 group-hover/linkedin:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Certifications & Badges */}
        {/* <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Professional Certifications</h4>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/10 text-white text-xs rounded-full">
                  LinkedIn Certified Professional–Recruiter
                </span>
                <span className="px-4 py-2 bg-white/10 text-white text-xs rounded-full">
                  SAP License to Recruit
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-300 mb-2">Years of Excellence</div>
              <div className="text-3xl font-bold text-[#FFC023]">18+</div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {new Date().getFullYear()} Tanvra. All rights reserved.</p>
            </div>
            
            <div className="text-gray-400 text-sm flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;