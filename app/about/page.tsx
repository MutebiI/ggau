// 'use client'
// import { motion } from 'framer-motion'
// import { Target, Eye, Heart, Users, Shield, ArrowDown, HandHeart } from 'lucide-react'

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-50 overflow-x-hidden">
//       {/* Enhanced Hero Section WITH IMAGE */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 border border-white/30 max-w-full mx-2"
//             >
//               <Shield className="w-4 h-4 md:w-5 md:h-5" />
//               <span className="text-xs md:text-sm font-semibold">Trusted Since 2024</span>
//             </motion.div>

//             <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
//               Transforming Healthcare
//               <span className="block text-blue-300 mt-2">Through Genomics</span>
//               And Innovation
//             </h1>
            
//             <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
//               Pioneering medical innovation, building local capacity, and creating sustainable healthcare solutions through cutting-edge genetic research.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-12 px-4">
//               <motion.a
//                 href="/get-involved"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-sm md:text-base"
//               >
//                 <HandHeart className="w-4 h-4 md:w-5 md:h-5" />
//                 Support Our Mission
//               </motion.a>
              
//               <motion.a
//                 href="/projects"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:bg-white/30 transition-all w-full sm:w-auto text-sm md:text-base"
//               >
//                 View Our Research
//               </motion.a>
//             </div>

//             {/* Impact Stats Overlay */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mt-12 md:mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 mx-4"
//             >
//               <div className="text-center">
//                 <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">5+</div>
//                 <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">Research Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">8+</div>
//                 <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">University Partners</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">2</div>
//                 <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">Continental Initiatives</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">24</div>
//                 <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">Years Experience</div>
//               </div>
//             </motion.div>

//             {/* Scroll Indicator */}
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="mt-8 md:mt-16"
//             >
//               <ArrowDown className="w-5 h-5 md:w-6 md:h-6 mx-auto text-blue-300" />
//               <p className="text-blue-300 text-xs md:text-sm mt-2 font-semibold">Discover Our Story</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section className="py-12 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="w-full"
//             >
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
//                 Who We Are
//               </h2>
//               <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
//                 The <span className="text-blue-600 font-semibold">Genetics and Genomics Association of Uganda (GGAU)</span> is Uganda's leading scientific organization driving innovation in genetics, genomics, and biotechnology.
//               </p>
//               <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
//                 We bridge cutting-edge research with real-world healthcare solutions, empowering scientists and communities through capacity building, strategic partnerships, and sustainable medical innovation.
//               </p>
              
//               {/* Additional Image Placeholder */}
//               <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 md:p-8 h-48 md:h-64 flex items-center justify-center mt-6 md:mt-8 w-full">
//                 <div className="text-center text-white">
//                   <Users className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
//                   <p className="text-base md:text-lg font-semibold">Research Team</p>
//                   <p className="text-blue-100 text-xs md:text-sm mt-2">[Team collaboration image]</p>
//                 </div>
//               </div>
//             </motion.div>
            
//             {/* Second Image Placeholder */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 h-64 md:h-96 flex items-center justify-center w-full"
//             >
//               <div className="text-center text-white">
//                 <Target className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
//                 <p className="text-lg md:text-xl font-semibold">Advanced Laboratory</p>
//                 <p className="text-blue-100 text-xs md:text-sm mt-2">[Modern lab equipment image]</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Guiding Principles</h2>
//             <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto px-4">
//               The foundation that drives our commitment to transforming healthcare
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-full">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 w-full"
//             >
//               <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
//                 <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
//               </div>
//               <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center">Our Mission</h3>
//               <p className="text-base md:text-lg text-blue-100 text-center leading-relaxed">
//                 To promote genetics and genomics research, capacity development, and local innovation for health and biotechnology transformation in Uganda and Africa.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 w-full"
//             >
//               <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
//                 <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
//               </div>
//               <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center">Our Vision</h3>
//               <p className="text-base md:text-lg text-blue-100 text-center leading-relaxed">
//                 To become Uganda's and Africa's leading center of excellence in genomics, personalized medicine, and medical biotechnology.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="py-12 md:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 px-4">The principles that guide our work</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-full">
//             <ValueCard
//               icon={<Shield className="w-6 h-6 md:w-8 md:h-8" />}
//               title="Integrity and Ethics"
//               description="We maintain the highest standards of scientific integrity and ethical conduct."
//               color="blue"
//             />
//             <ValueCard
//               icon={<Heart className="w-6 h-6 md:w-8 md:h-8" />}
//               title="Scientific Innovation"
//               description="We push the boundaries of knowledge through cutting-edge research."
//               color="blue"
//             />
//             <ValueCard
//               icon={<Users className="w-6 h-6 md:w-8 md:h-8" />}
//               title="Collaboration"
//               description="We believe in the power of partnerships to solve complex challenges."
//               color="blue"
//             />
//             <ValueCard
//               icon={<Target className="w-6 h-6 md:w-8 md:h-8" />}
//               title="Local Empowerment"
//               description="We are committed to building local capacity in healthcare."
//               color="blue"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Institutional Alignment */}
//       <section className="py-12 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
//               Institutional Alignment
//             </h2>
//             <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
//               GGAU operates in alignment with Uganda's National Development Plan (NDP III), the Ministry of Science, Technology and Innovation (MoSTI), and continental science frameworks of the African Union (Agenda 2063).
//             </p>
//             <motion.a
//               href="/get-involved"
//               whileHover={{ scale: 1.05 }}
//               className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm md:text-base"
//             >
//               <HandHeart className="w-4 h-4 md:w-5 md:h-5" />
//               Partner With Us
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function ValueCard({ icon, title, description, color }: any) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all hover:scale-105 group w-full"
//     >
//       <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
//         {icon}
//       </div>
//       <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-800 transition-colors">{title}</h3>
//       <p className="text-sm md:text-base text-gray-600">{description}</p>
//     </motion.div>
//   )
// }
'use client'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Shield, ArrowDown, HandHeart, FlaskConical, Dna, Microscope, Brain } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enhanced Hero Section WITHOUT IMAGE - More Professional */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-lg rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 border border-white/25 max-w-full mx-2"
            >
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-semibold">Pioneering Genomics Research Since 2024</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Advancing Healthcare
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mt-2">
                Through Scientific Innovation
              </span>
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Leading Uganda's transformation in genetics research, diagnostic development, and sustainable healthcare solutions through evidence-based science.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-12 px-4">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-sm md:text-base"
              >
                <HandHeart className="w-4 h-4 md:w-5 md:h-5" />
                Support Our Mission
              </motion.a>
              
              <motion.a
                href="/research"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:bg-white/30 transition-all w-full sm:w-auto text-sm md:text-base"
              >
                <FlaskConical className="w-4 h-4 md:w-5 md:h-5" />
                Explore Research
              </motion.a>
            </div>

            {/* Scientific Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mt-12 md:mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 mx-4"
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">8+</div>
                <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">Research Domains</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">12+</div>
                <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">University Partners</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">5</div>
                <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">Continental Initiatives</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">25+</div>
                <div className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">Years Expertise</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section - IMPROVED WITHOUT IMAGES */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Scientific Leadership
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                The <span className="text-blue-600 font-semibold">Genetics and Genomics Association of Uganda (GGAU)</span> stands at the forefront of biomedical innovation, driving cutting-edge research that bridges laboratory discovery with real-world healthcare impact.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Our interdisciplinary team of scientists, researchers, and healthcare professionals collaborates across institutions to develop sustainable solutions for Uganda's most pressing health challenges.
              </p>
              
              {/* Research Focus Areas */}
              <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8">
                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                  <Dna className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-blue-900">Genomics</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-200">
                  <FlaskConical className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-purple-900">Diagnostics</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                  <Brain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-green-900">AI Integration</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-200">
                  <Microscope className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-orange-900">Research</p>
                </div>
              </div>
            </motion.div>
            
            {/* Scientific Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Scientific Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-blue-100 text-sm md:text-base">Pioneering local manufacturing of diagnostic equipment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-blue-100 text-sm md:text-base">Advanced genomic research in rare diseases</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-blue-100 text-sm md:text-base">International research collaborations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-blue-100 text-sm md:text-base">Capacity building for next-generation scientists</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Guiding Principles</h2>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto px-4">
              The foundation that drives our commitment to transforming healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 w-full"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center">Our Mission</h3>
              <p className="text-base md:text-lg text-blue-100 text-center leading-relaxed">
                To promote genetics and genomics research, capacity development, and local innovation for health and biotechnology transformation in Uganda and Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 w-full"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center">Our Vision</h3>
              <p className="text-base md:text-lg text-blue-100 text-center leading-relaxed">
                To become Uganda's and Africa's leading center of excellence in genomics, personalized medicine, and medical biotechnology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">The principles that guide our work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-full">
            <ValueCard
              icon={<Shield className="w-6 h-6 md:w-8 md:h-8" />}
              title="Integrity and Ethics"
              description="We maintain the highest standards of scientific integrity and ethical conduct."
              color="blue"
            />
            <ValueCard
              icon={<Heart className="w-6 h-6 md:w-8 md:h-8" />}
              title="Scientific Innovation"
              description="We push the boundaries of knowledge through cutting-edge research."
              color="blue"
            />
            <ValueCard
              icon={<Users className="w-6 h-6 md:w-8 md:h-8" />}
              title="Collaboration"
              description="We believe in the power of partnerships to solve complex challenges."
              color="blue"
            />
            <ValueCard
              icon={<Target className="w-6 h-6 md:w-8 md:h-8" />}
              title="Local Empowerment"
              description="We are committed to building local capacity in healthcare."
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Institutional Alignment */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Institutional Alignment
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              GGAU operates in alignment with Uganda's National Development Plan (NDP III), the Ministry of Science, Technology and Innovation (MoSTI), and continental science frameworks of the African Union (Agenda 2063).
            </p>
            <motion.a
              href="/get-involved"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              <HandHeart className="w-4 h-4 md:w-5 md:h-5" />
              Partner With Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// ValueCard component remains the same
function ValueCard({ icon, title, description, color }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all hover:scale-105 group w-full"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-800 transition-colors">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </motion.div>
  )
}