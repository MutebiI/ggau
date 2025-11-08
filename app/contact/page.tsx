'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 border border-white/30 max-w-full mx-2"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-semibold">Get In Touch</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Contact
              <span className="block text-blue-300 mt-2">Our Team</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to collaborate or learn more about our groundbreaking research? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form - Left Side - NOW WORKING! */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Send Us a <span className="text-blue-600">Message</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Interested in partnership, research collaboration, or learning more about our initiatives? 
                Click the button below to email our team directly.
              </p>

              {/* WORKING EMAIL SOLUTION */}
              <div className="space-y-4 md:space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3 md:mb-4">
                    Quick Contact Method
                  </h3>
                  <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">
                    For the fastest response, email both team members simultaneously:
                  </p>
                  
                  <motion.a
                    href="mailto:mwesinelie@yahoo.com,mneliah1978@gmail.com?subject=GGAU Contact Inquiry&body=Hello GGAU Team,%0D%0A%0D%0AI would like to get in touch about:%0D%0A%0D%0A[Please describe your inquiry here]%0D%0A%0D%0A---%0D%0A[Your Name]%0D%0A[Your Organization]%0D%0A[Your Contact Information]"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    Email Both Team Members
                  </motion.a>
                  
                  <p className="text-blue-600 text-xs md:text-sm mt-3 md:mt-4 text-center">
                    📧 Sent to both: mwesinelie@yahoo.com & mneliah1978@gmail.com
                  </p>
                </div>

                {/* Additional Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <motion.a
                    href="mailto:mwesinelie@yahoo.com?subject=GGAU Contact Inquiry"
                    whileHover={{ scale: 1.02 }}
                    className="bg-green-50 border border-green-200 text-green-700 py-2 md:py-3 px-4 rounded-lg font-medium text-center hover:bg-green-100 transition-all duration-200 text-xs md:text-sm"
                  >
                    Email Nelson Only
                  </motion.a>
                  <motion.a
                    href="mailto:mneliah1978@gmail.com?subject=GGAU Contact Inquiry" 
                    whileHover={{ scale: 1.02 }}
                    className="bg-purple-50 border border-purple-200 text-purple-700 py-2 md:py-3 px-4 rounded-lg font-medium text-center hover:bg-purple-100 transition-all duration-200 text-xs md:text-sm"
                  >
                    Email Erinah Only
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Details - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8 w-full"
            >
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Get In <span className="text-blue-600">Touch</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                  Reach out to us through any of these channels. Our team is ready to assist you with 
                  research collaborations, partnership opportunities, or any questions about our work.
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 md:p-6 lg:p-8 border border-blue-100 w-full">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  Phone Numbers
                </h3>
                <div className="space-y-3 md:space-y-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 md:p-6 border border-green-100 w-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Email Addresses</h4>
                  <p className="text-green-700 font-semibold text-sm md:text-base break-all">mwesinelie@yahoo.com</p>
                  <p className="text-green-600 text-xs md:text-sm mt-1 break-all">mneliah1978@gmail.com</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 md:p-6 border border-purple-100 w-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Office Location</h4>
                  <p className="text-purple-700 font-semibold text-sm md:text-base">Voice Mall Building</p>
                  <p className="text-purple-600 text-xs md:text-sm mt-1">Namulanda, Entebbe Highway</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 md:p-6 border border-amber-100 w-full">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2 md:mb-3">Office Hours</h4>
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-amber-700 text-right">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-amber-700 text-right">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-amber-700 text-right">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 md:p-6 border border-red-100 w-full">
                <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Urgent Research Matters</h4>
                <p className="text-red-700 font-semibold text-xs md:text-sm mb-2 md:mb-3 leading-tight">
                  For time-sensitive research collaborations or emergency consultations
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-600 flex-shrink-0" />
                  <span className="font-semibold text-red-700 text-sm md:text-base break-all">+256 760 051963</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
              Visit Our <span className="text-blue-600">Office</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Located at Voice Mall Building along Entebbe Highway for convenient access
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 lg:p-8 w-full">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl h-48 md:h-56 lg:h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2 md:mb-4" />
                <p className="text-lg md:text-xl font-semibold">Interactive Map Coming Soon</p>
                <p className="text-blue-100 text-sm md:text-base mt-1 md:mt-2">Voice Mall Building, Namulanda</p>
                <p className="text-blue-100 text-sm md:text-base">Entebbe Highway, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Contact Detail Component - FIXED for mobile phone number layout
function ContactDetail({ label, value, description }: any) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-xl border border-blue-200 w-full"
    >
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mt-2 md:mt-2.5 flex-shrink-0"></div>
      <div className="flex-1 min-w-0">
        {/* Stack label and value vertically on mobile, horizontally on larger screens */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-1">
          <span className="text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-0">{label}:</span>
          <span className="text-base md:text-lg font-bold text-blue-700 break-all sm:break-normal">{value}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-600 leading-tight">{description}</p>
      </div>
    </motion.div>
  )
}