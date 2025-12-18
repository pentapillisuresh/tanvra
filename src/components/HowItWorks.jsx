import React from 'react';
import { ArrowRight } from 'lucide-react';

const IndustryInsights = () => {
  const featuredInsight = {
    title: "Tech Talent Report 2025: The Future of AI Careers",
    category: "Featured Insight",
    description: "Comprehensive analysis of emerging roles and skill demands in artificial intelligence. Discover how AI is reshaping career paths and what skills will be in highest demand through 2025.",
    stats: [
      { value: "45%", label: "Growth in AI Jobs" },
      { value: "300K", label: "New AI Positions" },
      { value: "$200K", label: "Average Salary" }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFC023]/10 text-[#FFC023] text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFC023] mr-2 animate-pulse"></span>
            INDUSTRY INSIGHTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access exclusive research, market trends, and expert analysis to navigate the evolving landscape of emerging technologies.
          </p>
        </div>

        {/* Featured Insight */}
        <div className="bg-[#003366] rounded-2xl overflow-hidden mb-12 shadow-xl border border-[#003366]">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFC023] text-[#003366] text-xs font-medium mb-4">
                {featuredInsight.category}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featuredInsight.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {featuredInsight.description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {featuredInsight.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#FFC023] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center px-5 py-2.5 bg-[#FFC023] text-[#003366] font-medium rounded-lg hover:bg-[#FFC023]/90 transition-all duration-300 hover:scale-105">
                Read Full Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="md:w-1/3 relative">
              <img
                src="./images/banner11.jpg"
                alt="Featured Insight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#003366]/20 md:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsights;