// // // 'use client'
// // // import { motion } from 'framer-motion'
// // // import { Target, Eye, Heart, Users, Shield, ArrowDown, HandHeart } from 'lucide-react'

// // // export default function About() {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       {/* Enhanced Hero Section with Scroll Indicator */}
// // //       <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white pt-32 pb-20">
// // //         <div className="absolute inset-0 bg-black/20"></div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             className="text-center"
// // //           >
// // //             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
// // //               About GGAU
// // //             </h1>
// // //             <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
// // //               Leading Uganda's transformation in <span className="text-white font-semibold">genetics, genomics, and medical innovation</span> to build a healthier, self-reliant Africa.
// // //             </p>
            
// // //             {/* Impact Stats */}
// // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16">
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-white mb-2">5+</div>
// // //                 <div className="text-blue-200 text-sm">Research Projects</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-white mb-2">8+</div>
// // //                 <div className="text-blue-200 text-sm">University Partners</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-white mb-2">2</div>
// // //                 <div className="text-blue-200 text-sm">Continental Initiatives</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-white mb-2">24</div>
// // //                 <div className="text-blue-200 text-sm">Years Experience</div>
// // //               </div>
// // //             </div>
            
// // //             {/* Scroll Indicator */}
// // //             <motion.div
// // //               animate={{ y: [0, 10, 0] }}
// // //               transition={{ duration: 2, repeat: Infinity }}
// // //               className="mt-16"
// // //             >
// // //               <ArrowDown className="w-6 h-6 mx-auto text-blue-200" />
// // //               <p className="text-blue-200 text-sm mt-2">Scroll to explore</p>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Who We Are Section */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6 }}
// // //             >
// // //               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// // //                 Who We Are
// // //               </h2>
// // //               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
// // //                 The <span className="text-blue-800 font-semibold">Genetics and Genomics Association of Uganda (GGAU)</span> is a pioneering scientific organization driving innovation in genetics, genomics, and biotechnology across Uganda and Africa.
// // //               </p>
// // //               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
// // //                 We bridge the gap between cutting-edge research and real-world healthcare solutions, empowering African scientists and communities through capacity building, strategic partnerships, and sustainable medical innovation.
// // //               </p>
// // //               <div className="flex flex-col sm:flex-row gap-4">
// // //                 <motion.a
// // //                   href="/get-involved"
// // //                   whileHover={{ scale: 1.05 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                   className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
// // //                 >
// // //                   <HandHeart className="w-5 h-5" />
// // //                   Support Our Mission
// // //                 </motion.a>
// // //                 <motion.a
// // //                   href="/projects"
// // //                   whileHover={{ scale: 1.05 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                   className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
// // //                 >
// // //                   Our Research Projects
// // //                 </motion.a>
// // //               </div>
// // //             </motion.div>
            
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6 }}
// // //               className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-80 flex items-center justify-center"
// // //             >
// // //               <div className="text-center text-blue-900">
// // //                 <Target className="w-16 h-16 mx-auto mb-4" />
// // //                 <p className="text-lg font-semibold">Building Africa's Healthcare Future</p>
// // //                 <p className="text-blue-700 mt-2">Through Genetics & Innovation</p>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Mission & Vision - Enhanced */}
// // //       <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-center mb-16"
// // //           >
// // //             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h2>
// // //             <p className="text-xl text-blue-200 max-w-2xl mx-auto">
// // //               The foundation that drives our commitment to transforming healthcare in Africa
// // //             </p>
// // //           </motion.div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.1 }}
// // //               className="bg-blue-700/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30"
// // //             >
// // //               <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
// // //                 <Target className="w-10 h-10 text-blue-200" />
// // //               </div>
// // //               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h3>
// // //               <p className="text-lg text-blue-100 text-center leading-relaxed">
// // //                 To promote genetics and genomics research, capacity development, and local innovation for health and biotechnology transformation in Uganda and Africa.
// // //               </p>
// // //             </motion.div>

// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.2 }}
// // //               className="bg-blue-700/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30"
// // //             >
// // //               <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
// // //                 <Eye className="w-10 h-10 text-blue-200" />
// // //               </div>
// // //               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Vision</h3>
// // //               <p className="text-lg text-blue-100 text-center leading-relaxed">
// // //                 To become Uganda's and Africa's leading center of excellence in genomics, personalized medicine, and medical biotechnology.
// // //               </p>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Rest of your existing sections remain the same */}
// // //       {/* Core Values Section */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-center mb-16"
// // //           >
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // //               Our Core Values
// // //             </h2>
// // //             <p className="text-xl text-gray-600">The principles that guide our work</p>
// // //           </motion.div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //             <ValueCard
// // //               icon={<Shield className="w-8 h-8" />}
// // //               title="Integrity and Ethics"
// // //               description="We maintain the highest standards of scientific integrity and ethical conduct in all our research and operations."
// // //             />
// // //             <ValueCard
// // //               icon={<Heart className="w-8 h-8" />}
// // //               title="Scientific Innovation"
// // //               description="We push the boundaries of knowledge through cutting-edge research and innovative solutions."
// // //             />
// // //             <ValueCard
// // //               icon={<Users className="w-8 h-8" />}
// // //               title="Collaboration and Inclusion"
// // //               description="We believe in the power of partnerships and inclusive approaches to solve complex health challenges."
// // //             />
// // //             <ValueCard
// // //               icon={<Target className="w-8 h-8" />}
// // //               title="African Empowerment"
// // //               description="We are committed to building African capacity and sovereignty in healthcare and biotechnology."
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Institutional Alignment */}
// // //       <section className="py-20 bg-gray-100">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //             className="text-center"
// // //           >
// // //             <h2 className="text-3xl font-bold text-gray-900 mb-8">
// // //               Institutional Alignment
// // //             </h2>
// // //             <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
// // //               GGAU operates in alignment with Uganda's National Development Plan (NDP III), the Ministry of Science, Technology and Innovation (MoSTI), and continental science frameworks of the African Union (Agenda 2063).
// // //             </p>
// // //             <motion.a
// // //               href="/get-involved"
// // //               whileHover={{ scale: 1.05 }}
// // //               className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
// // //             >
// // //               <HandHeart className="w-5 h-5" />
// // //               Partner With Us
// // //             </motion.a>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   )
// // // }

// // // function ValueCard({ icon, title, description }: any) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 30 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.6 }}
// // //       className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow hover:border-blue-300 group"
// // //     >
// // //       <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
// // //         {icon}
// // //       </div>
// // //       <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">{title}</h3>
// // //       <p className="text-gray-600">{description}</p>
// // //     </motion.div>
// // //   )
// // // }

// // 'use client'
// // import { motion } from 'framer-motion'
// // import { Target, Eye, Heart, Users, Shield, ArrowDown, HandHeart } from 'lucide-react'

// // export default function About() {
// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       {/* Enhanced Hero Section WITH IMAGE */}
// //       <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
// //         {/* Background Image - You can replace this URL with your actual image */}
// //         <div 
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //           style={{
// //             backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
// //           }}
// //         >
// //           <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-blue-900/80"></div>
// //         </div>
        
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             {/* Badge */}
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: 0.2, duration: 0.5 }}
// //               className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
// //             >
// //               <Shield className="w-5 h-5" />
// //               <span className="text-sm font-semibold">Trusted Since 2024</span>
// //             </motion.div>

// //             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
// //               Transforming African
// //               <span className="block text-teal-300">Healthcare</span>
// //               Through Genomics
// //             </h1>
            
// //             <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
// //               Pioneering medical innovation, building local capacity, and creating sustainable healthcare solutions for Uganda and beyond.
// //             </p>

// //             {/* CTA Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
// //               <motion.a
// //                 href="/get-involved"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl"
// //               >
// //                 <HandHeart className="w-5 h-5" />
// //                 Support Our Mission
// //               </motion.a>
              
// //               <motion.a
// //                 href="/projects"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white/30 transition-all"
// //               >
// //                 View Our Research
// //               </motion.a>
// //             </div>

// //             {/* Impact Stats Overlay */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.6, duration: 0.5 }}
// //               className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
// //             >
// //               <div className="text-center">
// //                 <div className="text-3xl font-bold text-white mb-2">5+</div>
// //                 <div className="text-teal-200 text-sm uppercase tracking-wide">Research Projects</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-3xl font-bold text-white mb-2">8+</div>
// //                 <div className="text-teal-200 text-sm uppercase tracking-wide">University Partners</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-3xl font-bold text-white mb-2">2</div>
// //                 <div className="text-teal-200 text-sm uppercase tracking-wide">Continental Initiatives</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-3xl font-bold text-white mb-2">24</div>
// //                 <div className="text-teal-200 text-sm uppercase tracking-wide">Years Experience</div>
// //               </div>
// //             </div>

// //             {/* Scroll Indicator */}
// //             <motion.div
// //               animate={{ y: [0, 10, 0] }}
// //               transition={{ duration: 2, repeat: Infinity }}
// //               className="mt-16"
// //             >
// //               <ArrowDown className="w-6 h-6 mx-auto text-teal-300" />
// //               <p className="text-teal-300 text-sm mt-2 font-semibold">Discover Our Story</p>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Who We Are Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6 }}
// //             >
// //               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// //                 Who We Are
// //               </h2>
// //               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
// //                 The <span className="text-teal-600 font-semibold">Genetics and Genomics Association of Uganda (GGAU)</span> is Uganda's leading scientific organization driving innovation in genetics, genomics, and biotechnology.
// //               </p>
// //               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
// //                 We bridge cutting-edge research with real-world healthcare solutions, empowering African scientists and communities through capacity building, strategic partnerships, and sustainable medical innovation.
// //               </p>
              
// //               {/* Additional Image Placeholder */}
// //               <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 h-64 flex items-center justify-center mt-8">
// //                 <div className="text-center text-white">
// //                   <Users className="w-12 h-12 mx-auto mb-4" />
// //                   <p className="text-lg font-semibold">African Research Team</p>
// //                   <p className="text-teal-100 text-sm mt-2">[Team collaboration image]</p>
// //                 </div>
// //               </div>
// //             </motion.div>
            
// //             {/* Second Image Placeholder */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6 }}
// //               className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 h-96 flex items-center justify-center"
// //             >
// //               <div className="text-center text-white">
// //                 <Target className="w-16 h-16 mx-auto mb-4" />
// //                 <p className="text-xl font-semibold">Advanced Laboratory</p>
// //                 <p className="text-blue-100 text-sm mt-2">[Modern lab equipment image]</p>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mission & Vision Section */}
// //       <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800 text-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h2>
// //             <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
// //               The foundation that drives our commitment to transforming healthcare in Africa
// //             </p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.1 }}
// //               className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
// //             >
// //               <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
// //                 <Target className="w-10 h-10 text-white" />
// //               </div>
// //               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h3>
// //               <p className="text-lg text-emerald-100 text-center leading-relaxed">
// //                 To promote genetics and genomics research, capacity development, and local innovation for health and biotechnology transformation in Uganda and Africa.
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
// //             >
// //               <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
// //                 <Eye className="w-10 h-10 text-white" />
// //               </div>
// //               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Vision</h3>
// //               <p className="text-lg text-emerald-100 text-center leading-relaxed">
// //                 To become Uganda's and Africa's leading center of excellence in genomics, personalized medicine, and medical biotechnology.
// //               </p>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Core Values Section */}
// //       <section className="py-20 bg-slate-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Our Core Values
// //             </h2>
// //             <p className="text-xl text-gray-600">The principles that guide our work</p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             <ValueCard
// //               icon={<Shield className="w-8 h-8" />}
// //               title="Integrity and Ethics"
// //               description="We maintain the highest standards of scientific integrity and ethical conduct."
// //               color="blue"
// //             />
// //             <ValueCard
// //               icon={<Heart className="w-8 h-8" />}
// //               title="Scientific Innovation"
// //               description="We push the boundaries of knowledge through cutting-edge research."
// //               color="teal"
// //             />
// //             <ValueCard
// //               icon={<Users className="w-8 h-8" />}
// //               title="Collaboration"
// //               description="We believe in the power of partnerships to solve complex challenges."
// //               color="emerald"
// //             />
// //             <ValueCard
// //               icon={<Target className="w-8 h-8" />}
// //               title="African Empowerment"
// //               description="We are committed to building African capacity in healthcare."
// //               color="purple"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Institutional Alignment */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center"
// //           >
// //             <h2 className="text-3xl font-bold text-gray-900 mb-8">
// //               Institutional Alignment
// //             </h2>
// //             <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
// //               GGAU operates in alignment with Uganda's National Development Plan (NDP III), the Ministry of Science, Technology and Innovation (MoSTI), and continental science frameworks of the African Union (Agenda 2063).
// //             </p>
// //             <motion.a
// //               href="/get-involved"
// //               whileHover={{ scale: 1.05 }}
// //               className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
// //             >
// //               <HandHeart className="w-5 h-5" />
// //               Partner With Us
// //             </motion.a>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// // function ValueCard({ icon, title, description, color }: any) {
// //   const colorStyles = {
// //     blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white',
// //     teal: 'bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white',
// //     emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white',
// //     purple: 'bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white'
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.6 }}
// //       className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all hover:scale-105 group"
// //     >
// //       <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors ${colorStyles[color]}`}>
// //         {icon}
// //       </div>
// //       <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>
// //       <p className="text-gray-600">{description}</p>
// //     </motion.div>
// //   )
// // }
// 'use client'
// import { motion } from 'framer-motion'
// import { Target, Eye, Heart, Users, Shield, ArrowDown, HandHeart } from 'lucide-react'

// export default function About() {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Enhanced Hero Section WITH IMAGE */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
//         {/* Background Image - You can replace this URL with your actual image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-blue-900/80"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
//             >
//               <Shield className="w-5 h-5" />
//               <span className="text-sm font-semibold">Trusted Since 2024</span>
//             </motion.div>

//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//               Transforming African
//               <span className="block text-teal-300">Healthcare</span>
//               Through Genomics
//             </h1>
            
//             <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
//               Pioneering medical innovation, building local capacity, and creating sustainable healthcare solutions for Uganda and beyond.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
//               <motion.a
//                 href="/get-involved"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl"
//               >
//                 <HandHeart className="w-5 h-5" />
//                 Support Our Mission
//               </motion.a>
              
//               <motion.a
//                 href="/projects"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white/30 transition-all"
//               >
//                 View Our Research
//               </motion.a>
//             </div>

//             {/* Impact Stats Overlay */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
//             >
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white mb-2">5+</div>
//                 <div className="text-teal-200 text-sm uppercase tracking-wide">Research Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white mb-2">8+</div>
//                 <div className="text-teal-200 text-sm uppercase tracking-wide">University Partners</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white mb-2">2</div>
//                 <div className="text-teal-200 text-sm uppercase tracking-wide">Continental Initiatives</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-white mb-2">24</div>
//                 <div className="text-teal-200 text-sm uppercase tracking-wide">Years Experience</div>
//               </div>
//             </motion.div>

//             {/* Scroll Indicator */}
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="mt-16"
//             >
//               <ArrowDown className="w-6 h-6 mx-auto text-teal-300" />
//               <p className="text-teal-300 text-sm mt-2 font-semibold">Discover Our Story</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Who We Are
//               </h2>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 The <span className="text-teal-600 font-semibold">Genetics and Genomics Association of Uganda (GGAU)</span> is Uganda's leading scientific organization driving innovation in genetics, genomics, and biotechnology.
//               </p>
//               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                 We bridge cutting-edge research with real-world healthcare solutions, empowering African scientists and communities through capacity building, strategic partnerships, and sustainable medical innovation.
//               </p>
              
//               {/* Additional Image Placeholder */}
//               <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 h-64 flex items-center justify-center mt-8">
//                 <div className="text-center text-white">
//                   <Users className="w-12 h-12 mx-auto mb-4" />
//                   <p className="text-lg font-semibold">African Research Team</p>
//                   <p className="text-teal-100 text-sm mt-2">[Team collaboration image]</p>
//                 </div>
//               </div>
//             </motion.div>
            
//             {/* Second Image Placeholder */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 h-96 flex items-center justify-center"
//             >
//               <div className="text-center text-white">
//                 <Target className="w-16 h-16 mx-auto mb-4" />
//                 <p className="text-xl font-semibold">Advanced Laboratory</p>
//                 <p className="text-blue-100 text-sm mt-2">[Modern lab equipment image]</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h2>
//             <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
//               The foundation that drives our commitment to transforming healthcare in Africa
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
//             >
//               <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Target className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h3>
//               <p className="text-lg text-emerald-100 text-center leading-relaxed">
//                 To promote genetics and genomics research, capacity development, and local innovation for health and biotechnology transformation in Uganda and Africa.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
//             >
//               <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Eye className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Vision</h3>
//               <p className="text-lg text-emerald-100 text-center leading-relaxed">
//                 To become Uganda's and Africa's leading center of excellence in genomics, personalized medicine, and medical biotechnology.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-xl text-gray-600">The principles that guide our work</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <ValueCard
//               icon={<Shield className="w-8 h-8" />}
//               title="Integrity and Ethics"
//               description="We maintain the highest standards of scientific integrity and ethical conduct."
//               color="blue"
//             />
//             <ValueCard
//               icon={<Heart className="w-8 h-8" />}
//               title="Scientific Innovation"
//               description="We push the boundaries of knowledge through cutting-edge research."
//               color="teal"
//             />
//             <ValueCard
//               icon={<Users className="w-8 h-8" />}
//               title="Collaboration"
//               description="We believe in the power of partnerships to solve complex challenges."
//               color="emerald"
//             />
//             <ValueCard
//               icon={<Target className="w-8 h-8" />}
//               title="African Empowerment"
//               description="We are committed to building African capacity in healthcare."
//               color="purple"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Institutional Alignment */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">
//               Institutional Alignment
//             </h2>
//             <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
//               GGAU operates in alignment with Uganda's National Development Plan (NDP III), the Ministry of Science, Technology and Innovation (MoSTI), and continental science frameworks of the African Union (Agenda 2063).
//             </p>
//             <motion.a
//               href="/get-involved"
//               whileHover={{ scale: 1.05 }}
//               className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
//             >
//               <HandHeart className="w-5 h-5" />
//               Partner With Us
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function ValueCard({ icon, title, description, color }: any) {
//   const colorStyles = {
//     blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white',
//     teal: 'bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white',
//     emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white',
//     purple: 'bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white'
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all hover:scale-105 group"
//     >
//       <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors ${colorStyles[color]}`}>
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </motion.div>
//   )
// }
'use client'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Shield, ArrowDown, HandHeart } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section WITH IMAGE */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold">Trusted Since 2024</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transforming Healthcare
              <span className="block text-blue-300">Through Genomics</span>
              And Innovation
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Pioneering medical innovation, building local capacity, and creating sustainable healthcare solutions through cutting-edge genetic research.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <HandHeart className="w-5 h-5" />
                Support Our Mission
              </motion.a>
              
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white/30 transition-all"
              >
                View Our Research
              </motion.a>
            </div>

            {/* Impact Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">University Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Continental Initiatives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24</div>
                <div className="text-blue-200 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16"
            >
              <ArrowDown className="w-6 h-6 mx-auto text-blue-300" />
              <p className="text-blue-300 text-sm mt-2 font-semibold">Discover Our Story</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The <span className="text-blue-600 font-semibold">Genetics and Genomics Association of Uganda (GGAU)</span> is Uganda's leading scientific organization driving innovation in genetics, genomics, and biotechnology.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We bridge cutting-edge research with real-world healthcare solutions, empowering scientists and communities through capacity building, strategic partnerships, and sustainable medical innovation.
              </p>
              
              {/* Additional Image Placeholder */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 h-64 flex items-center justify-center mt-8">
                <div className="text-center text-white">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Research Team</p>
                  <p className="text-blue-100 text-sm mt-2">[Team collaboration image]</p>
                </div>
              </div>
            </motion.div>
            
            {/* Second Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 h-96 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <Target className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl font-semibold">Advanced Laboratory</p>
                <p className="text-blue-100 text-sm mt-2">[Modern lab equipment image]</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              The foundation that drives our commitment to transforming healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h3>
              <p className="text-lg text-blue-100 text-center leading-relaxed">
                To promote genetics and genomics research, capacity development, and local innovation for health and biotechnology transformation in Uganda and Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Vision</h3>
              <p className="text-lg text-blue-100 text-center leading-relaxed">
                To become Uganda's and Africa's leading center of excellence in genomics, personalized medicine, and medical biotechnology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">The principles that guide our work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Shield className="w-8 h-8" />}
              title="Integrity and Ethics"
              description="We maintain the highest standards of scientific integrity and ethical conduct."
              color="blue"
            />
            <ValueCard
              icon={<Heart className="w-8 h-8" />}
              title="Scientific Innovation"
              description="We push the boundaries of knowledge through cutting-edge research."
              color="blue"
            />
            <ValueCard
              icon={<Users className="w-8 h-8" />}
              title="Collaboration"
              description="We believe in the power of partnerships to solve complex challenges."
              color="blue"
            />
            <ValueCard
              icon={<Target className="w-8 h-8" />}
              title="Local Empowerment"
              description="We are committed to building local capacity in healthcare."
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Institutional Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Institutional Alignment
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              GGAU operates in alignment with Uganda's National Development Plan (NDP III), the Ministry of Science, Technology and Innovation (MoSTI), and continental science frameworks of the African Union (Agenda 2063).
            </p>
            <motion.a
              href="/get-involved"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <HandHeart className="w-5 h-5" />
              Partner With Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description, color }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all hover:scale-105 group"
    >
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}