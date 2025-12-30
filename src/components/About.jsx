import React from 'react';
import FAQ from './Faq';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Image with concise bio */}
                    <div className="space-y-8">
                        {/* Image Container */}
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <img 
                                src="./images/ceo.jpg" 
                                alt="Kishore Pinninti - Founder & CEO"
                                className="w-full h-[500px] object-cover"
                            />
                            
                            {/* Name/Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold">Kishore Pinninti</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="w-8 h-0.5 bg-[#FFC023]"></div>
                                        <p className="text-lg opacity-90">Founder & CEO</p>
                                    </div>
                                    <p className="text-gray-200 mt-2 text-sm opacity-80">
                                        Tanvra Software Solutions
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Bio Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-1 bg-[#FFC023]"></div>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Quick Bio</span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Bringing nearly <span className="font-semibold text-[#003366]">20 years of global experience</span> in 
                                building and scaling talent acquisition for world-class technology organizations.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#003366] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Led hiring at Amazon/AWS, SAP, Cisco</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#003366] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Global recruitment operations setup</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#003366] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Expert in AI, Cloud, Cybersecurity hiring</span>
                                </div>
                            </div>
                        </div>

                        {/* Our Team Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-1 bg-[#003366]"></div>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Team</span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Tanvra is powered by a team of seasoned recruitment professionals who have worked with top-tier global organizations and high-growth technology companies.
                            </p>
                            <div className="space-y-3 mb-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#FFC023] rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-600">
                                        Deep domain expertise across emerging technologies, product engineering, enterprise platforms, and leadership hiring
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#FFC023] rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-600">
                                        Strong market networks and consultative mindset
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#FFC023] rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-600">
                                        Works closely with clients to identify, engage, and secure top-quality talent in competitive and niche markets
                                    </span>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-[#003366] mb-2 text-sm">Our Commitment</h4>
                                <p className="text-sm text-gray-700">
                                    Every engagement at Tanvra is driven by <span className="font-medium">quality, accountability, and speed</span>, with founder-led oversight and hands-on delivery by experienced recruiters who understand both client expectations and candidate motivations.
                                </p>
                            </div>
                        </div>

                        {/* Why Tanvra Card */}
                        <div className="bg-gradient-to-br from-[#003366] to-[#004080] text-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold mb-4">Why Tanvra?</h4>
                            <p className="mb-4 opacity-95">
                                A strategic talent partner for organizations in complex tech landscapes.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#FFC023]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Founder-led & personally driven</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#FFC023]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Specialized in emerging technologies</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#FFC023]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Build teams, not just fill positions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Main Content */}
                    <div className="space-y-8">
                        {/* Introduction Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-1 bg-[#FFC023]"></div>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">About Kishore</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Founder & CEO of
                                <span className="text-[#003366] block">Tanvra Software Solutions</span>
                            </h1>
                            
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    With nearly two decades of global experience, Kishore has transformed talent acquisition 
                                    for leading technology organizations including <span className="font-semibold text-[#003366]">Amazon/AWS, SAP Labs, Cisco, and Thomson Reuters</span>.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    His expertise spans both product and services organizations, where he aligns talent strategy 
                                    with business growth, innovation, and long-term objectives.
                                </p>
                            </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#003366] font-bold text-sm">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">GCC Setup & Expansion</p>
                                            <p className="text-sm text-gray-600">Established Global Capability Centres worldwide</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#003366] font-bold text-sm">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Global Operations</p>
                                            <p className="text-sm text-gray-600">Recruitment in US, India, Vietnam, Korea, Costa Rica</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#003366] font-bold text-sm">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Tech Domain Expertise</p>
                                            <p className="text-sm text-gray-600">AI, Cybersecurity, Cloud, Product Engineering</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#003366] font-bold text-sm">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Strategic Partnership</p>
                                            <p className="text-sm text-gray-600">C-suite collaboration for talent planning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tanvra Vision */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Tanvra's Vision</h3>
                            
                            <div className="space-y-4">
                                <p className="text-gray-700">
                                    Founded to address the unprecedented talent shortage in transformative domains: 
                                    <span className="font-semibold text-[#003366] ml-2">InsurTech, AI, Cybersecurity, Blockchain, and Quantum.</span>
                                </p>
                                
                                <div className="bg-blue-50 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-3">Our Progressive Approach</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm font-bold">1</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800">High-impact lateral hiring</p>
                                                <p className="text-sm text-gray-600">One-time placements for critical roles</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm font-bold">2</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800">Contract staffing solutions</p>
                                                <p className="text-sm text-gray-600">Scalable hiring models</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-sm font-bold">3</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800">Technology accelerators</p>
                                                <p className="text-sm text-gray-600">Domain-focused solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Differentiator */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900">What Makes Tanvra Different</h3>
                            
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-white transition-colors">
                                    <div className="w-6 h-6 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Founder-Led Engagement</p>
                                        <p className="text-sm text-gray-600 mt-1">Kishore personally drives strategy and execution for accountability</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-white transition-colors">
                                    <div className="w-6 h-6 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Deep Technical Understanding</p>
                                        <p className="text-sm text-gray-600 mt-1">Combines talent expertise with technical roadmap comprehension</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-white transition-colors">
                                    <div className="w-6 h-6 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Strategic Team Building</p>
                                        <p className="text-sm text-gray-600 mt-1">Focus on building mission-accelerating teams, not just filling roles</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action - Compact */}
                        <div className="pt-4">
                            <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white p-5 rounded-lg shadow-md">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Ready to Build Your A-Team?</h4>
                                        <p className="text-sm opacity-95">
                                            Specialized talent solutions for InsurTech, AI, Cybersecurity, Blockchain & Quantum
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button className="bg-[#FFC023] hover:bg-[#e6a900] text-gray-900 font-semibold px-6 py-2 rounded-lg transition-colors">
                                            Connect With Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ/>
        </section>
    );
};

export default About;