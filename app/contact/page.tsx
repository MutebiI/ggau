'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Contact
              <span className="block text-blue-300">Our Team</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate or learn more about our groundbreaking research? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a <span className="text-blue-600">Message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Interested in partnership, research collaboration, or learning more about our initiatives? 
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company or institution"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="research">Research Collaboration</option>
                    <option value="donation">Support & Donation</option>
                    <option value="career">Career Opportunity</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your inquiry or project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get In <span className="text-blue-600">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of these channels. Our team is ready to assist you with 
                  research collaborations, partnership opportunities, or any questions about our work.
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  Phone Numbers
                </h3>
                <div className="space-y-4">
                  <ContactDetail
                    label="Primary Line"
                    value="+256 760 051963"
                    description="Available 24/7 for urgent inquiries"
                  />
                  <ContactDetail
                    label="Research Office"
                    value="+256 787 920011"
                    description="Research collaborations & partnerships"
                  />
                  <ContactDetail
                    label="Administration"
                    value="+256 740 443114"
                    description="General inquiries & appointments"
                  />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Email Address</h4>
                  <p className="text-green-700 font-semibold">mwesinelie@yahoo.com</p>
                  <p className="text-green-600 text-sm mt-1">mneliah1978@gmail.com</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Office Location</h4>
                  <p className="text-purple-700 font-semibold">Voice Mall Building</p>
                  <p className="text-purple-600 text-sm mt-1">Namulanda, Entebbe Highway</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-amber-700">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-amber-700">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-amber-700">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                <h4 className="font-bold text-gray-900 mb-2">Urgent Research Matters</h4>
                <p className="text-red-700 font-semibold text-sm mb-3">
                  For time-sensitive research collaborations or emergency consultations
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span className="font-semibold text-red-700">+256 760 051963</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="text-blue-600">Office</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located at Voice Mall Building along Entebbe Highway for convenient access
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-xl font-semibold">Interactive Map Coming Soon</p>
                <p className="text-blue-100 mt-2">Voice Mall Building, Namulanda</p>
                <p className="text-blue-100">Entebbe Highway, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Contact Detail Component
function ContactDetail({ label, value, description }: any) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-blue-200"
    >
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm font-semibold text-gray-700">{label}:</span>
          <span className="text-lg font-bold text-blue-700">{value}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}