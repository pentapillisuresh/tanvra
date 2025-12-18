import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-10 h-1 bg-[#FFC023]"></div>
                                <span className="text-sm font-semibold text-gray-600">PROFESSIONAL PROFILE</span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900">
                                VP of Talent Acquisition &<br />
                                <span className="text-[#003366]">Tech Recruitment Leader</span>
                            </h1>
                        </div>

                        <div className="text-gray-700 space-y-4">
                            <p className="text-lg">
                                18+ years in HR & recruiting. Leading global tech talent acquisition at Feuji.
                            </p>
                            
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <p>Specialized in software engineering, cloud, data science, cybersecurity hiring</p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <p>LinkedIn Certified & SAP License certified recruiter</p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <p>Expert in building high-performing, diverse tech teams globally</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                                <div className="text-2xl font-bold text-[#003366]">18+</div>
                                <div className="text-sm text-gray-600">Years</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                                <div className="text-2xl font-bold text-[#003366]">1000+</div>
                                <div className="text-sm text-gray-600">Hired</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        {/* Expertise */}
                        {/* <div className="bg-white p-6 rounded-lg border-l-4 border-[#FFC023] shadow-sm">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Technology Expertise</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Software Engineering</span>
                                    <span className="font-bold text-[#003366]">Expert</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Cloud Computing</span>
                                    <span className="font-bold text-[#003366]">Expert</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Data & Analytics</span>
                                    <span className="font-bold text-[#003366]">Expert</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Cyber Security</span>
                                    <span className="font-bold text-[#003366]">Advanced</span>
                                </div>
                            </div>
                        </div> */}

                        {/* Contact */}
                        <div className="bg-[#003366] text-white p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Connect</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-300">LinkedIn</p>
                                        <p className="font-medium">Professional Profile</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#FFC023] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-300">Email</p>
                                        <p className="font-medium">Business Inquiries</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="text-center p-6 border border-gray-300 rounded-lg">
                            <p className="text-gray-700 italic">
                                "Building exceptional teams for the world's leading technology companies."
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="font-bold text-[#003366]">VP Talent Acquisition</p>
                                <p className="text-sm text-gray-600">Feuji Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;