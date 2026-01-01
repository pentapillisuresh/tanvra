import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle, Star, MapPin, Clock, BarChart, Shield, Cpu, Zap, Building, Globe, Layers, Briefcase } from 'lucide-react';

const WhyChooseTANVRA = () => {
  const stats = [
    {
      value: "18+",
      label: "Years Experience",
      icon: <Award className="w-5 h-5" />,
      description: "In global technology talent acquisition"
    },
    {
      value: "500+",
      label: "Tech Companies Served",
      icon: <Building className="w-5 h-5" />,
      description: "From startups to Fortune 500 in India"
    },
    {
      value: "97%",
      label: "Client Satisfaction",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Long-term partnerships with technology leaders"
    },
    {
      value: "5",
      label: "Specialized Domains",
      icon: <Layers className="w-5 h-5" />,
      description: "InsurTech, AI, Cybersecurity, Blockchain, Quantum"
    }
  ];

  const coreStrengths = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Domain-First Approach",
      description: "Deep specialization in five high-growth technology sectors",
      points: [
        "InsurTech: PolicyTech, ClaimsTech, Underwriting AI",
        "AI/ML: Computer Vision, NLP, Predictive Analytics",
        "Cybersecurity: Cloud Security, Threat Intelligence",
        "Blockchain: Smart Contracts, DeFi, Web3",
        "Quantum Computing: Quantum Algorithms, Qubit Tech"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "India-Focused Excellence",
      description: "Extensive network across India's technology hubs",
      points: [
        "Deep understanding of Indian talent market",
        "Strong presence in Bengaluru, Hyderabad, Pune, Delhi-NCR",
        "Connections with premium engineering institutes",
        "Local market salary intelligence"
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Strategic Talent Partnerships",
      description: "Founder-led engagement for strategic hiring",
      points: [
        "Kishore personally leads key client relationships",
        "C-suite advisory for talent strategy",
        "Customized recruitment solutions",
        "Scalable team building expertise"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Domain Discovery",
      description: "Deep dive into your specific technology stack and business goals"
    },
    {
      number: "02",
      title: "Talent Mapping",
      description: "Comprehensive analysis of available talent in your domain across India"
    },
    {
      number: "03",
      title: "Technical Validation",
      description: "Rigorous assessment by domain experts with industry experience"
    },
    {
      number: "04",
      title: "Strategic Onboarding",
      description: "Ensuring smooth integration and long-term success"
    }
  ];

  return (
    <section id="why-choose-tanvra" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#003366]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">THE TANVRA ADVANTAGE</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#003366] to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#003366]">Choose Tanvra</span> for Your Tech Talent
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            18+ years of specialized experience in building technology teams for
            <span className="font-semibold text-[#003366]"> InsurTech, AI, Cybersecurity, Blockchain, and Quantum </span>
            domains across India
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#003366] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#003366] to-[#004080] group-hover:from-[#004080] group-hover:to-[#003366] transition-all">
                  {React.cloneElement(stat.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-[#003366] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Strengths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-[#003366]">Strategic Advantages</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreStrengths.map((strength, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-[#003366] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003366] via-[#FFC023] to-[#003366]"></div>

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#003366] to-[#004080] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(strength.icon, { className: "w-7 h-7 text-white" })}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#003366] transition-colors">
                  {strength.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {strength.description}
                </p>

                <ul className="space-y-2">
                  {strength.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 group-hover:text-gray-800 transition-colors">
                      <CheckCircle className="w-4 h-4 text-[#FFC023] mr-3 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-[#003366]">4-Step</span> Recruitment Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#003366] via-[#003366]/50 to-[#003366] -z-10"></div>

            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#003366] hover:shadow-xl transition-all duration-500 text-center group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003366] to-[#004080] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#003366]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(0, 51, 102, 0.92) 50%, rgba(17, 24, 39, 0.95) 100%), url('./images/bannerbg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'multiply',
              border: '1px solid rgba(255, 192, 35, 0.2)'
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/60 via-transparent to-[#FFC023]/20 opacity-50"></div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FFC023]/5 to-transparent rounded-full -translate-y-24 translate-x-24"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#003366]/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-1 bg-gradient-to-r from-[#FFC023] to-[#e6a900]"></div>
                <span className="text-[#FFC023] text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#FFC023]/10 to-transparent px-3 py-1 rounded-full">
                  Ready to Scale
                </span>
                <div className="w-6 h-1 bg-gradient-to-r from-[#e6a900] to-[#FFC023]"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white via-white to-[#FFC023] bg-clip-text text-transparent">
                Build Your Tech Team in India
              </h3>

              <p className="text-gray-300 mb-6 max-w-xl mx-auto text-base">
                InsurTech experts, AI specialists, Cybersecurity professionals,
                Blockchain developers, or Quantum researchers - we have the network
                to find the right talent.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  className="px-6 py-3 font-bold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
                  style={{
                    background: 'linear-gradient(135deg, #FFC023 0%, #e6a900 50%, #FFC023 100%)',
                    color: '#111827'
                  }}
                >
                  <Briefcase className="w-4 h-4" />
                  Schedule Strategy Call
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                <button
                  className="px-6 py-3 font-bold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Users className="w-4 h-4" />
                  Discuss Hiring Needs
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFC023]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center justify-center text-xs text-gray-300 group">
                    <div className="relative p-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFC023]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <Shield className="w-4 h-4 mr-2 text-[#FFC023] relative z-10" />
                    </div>
                    <span className="relative z-10">Founder-Led Engagement</span>
                  </div>

                  <div className="flex items-center justify-center text-xs text-gray-300 group">
                    <div className="relative p-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFC023]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <Target className="w-4 h-4 mr-2 text-[#FFC023] relative z-10" />
                    </div>
                    <span className="relative z-10">Domain Expertise</span>
                  </div>

                  <div className="flex items-center justify-center text-xs text-gray-300 group">
                    <div className="relative p-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFC023]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CheckCircle className="w-4 h-4 mr-2 text-[#FFC023] relative z-10" />
                    </div>
                    <span className="relative z-10">India-Focused Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTANVRA;