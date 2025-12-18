import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Clock, User, Calendar, Briefcase, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Business Inquiries",
      description: "For partnership and collaboration opportunities",
      value: "contact@tanvara.com",
      action: "Send Email",
      link: "mailto:contact@tanvara.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Professional Consultation",
      description: "Schedule a call with our specialists",
      value: "+1 (234) 567-8900",
      action: "Schedule Call",
      link: "tel:+12345678900"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Meeting Availability",
      description: "Book a consultation with our team",
      value: "Monday - Friday, 9AM - 6PM",
      action: "Book Meeting",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#003366]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">CONTACT US</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#003366] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Connect with our technology recruitment experts to discuss your talent needs or career aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form - Made taller to match right side */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#003366] flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
                  <p className="text-gray-600">
                    Share your requirements and our team will contact you
                  </p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-800 font-medium">Thank you for your inquiry</p>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
              <div className="space-y-6 flex-grow">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#003366]" />
                      Full Name
                    </div>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 transition-all duration-300 bg-gray-50/50"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#003366]" />
                      Email Address
                    </div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your professional email"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 transition-all duration-300 bg-gray-50/50"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#003366]" />
                      Company / Organization
                    </div>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 transition-all duration-300 bg-gray-50/50"
                  />
                </div>

                {/* Message */}
                <div className="flex-grow">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#003366]" />
                      Message
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your recruitment needs or career goals..."
                    rows="5"
                    className="w-full h-full min-h-[150px] px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 transition-all duration-300 bg-gray-50/50 resize-none"
                    required
                  />
                </div>

                {/* Response Time Note */}
                <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#003366]" />
                    Average response time
                  </div>
                  <span className="font-bold text-[#003366]">24 hours</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#003366]/90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 mt-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information - Restructured to take less vertical space */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#FFC023] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Direct Contact</h3>
                  <p className="text-gray-600">Multiple ways to reach our team</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="group bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300 border border-transparent hover:border-gray-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#003366]/10 flex items-center justify-center group-hover:bg-[#003366]/20 transition-colors">
                        <div className="text-[#003366]">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="text-gray-900 font-medium text-sm">{item.value}</div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#003366] font-semibold text-xs mt-2 hover:text-[#003366]/80 group/link"
                        >
                          {item.action}
                          <svg className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined Section: Why Connect + CTA */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200">
              {/* Why Connect Section */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Connect With Us?</h4>
                <div className="space-y-3">
                  {[
                    "18+ years of technology recruitment experience",
                    "Specialized expertise in emerging technologies",
                    "Direct connections with leading technology companies"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#003366] flex-shrink-0 mr-3 mt-0.5" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-[#003366] rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Ready to Accelerate Your Recruitment?</h4>
                <p className="text-gray-300 mb-4 text-sm">
                  Connect with our experts for a confidential discussion about your talent strategy
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="px-4 py-3 bg-[#FFC023] text-[#003366] font-semibold rounded-lg hover:bg-[#FFC023]/90 hover:scale-105 transition-all duration-300 text-center text-sm"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center text-sm"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;