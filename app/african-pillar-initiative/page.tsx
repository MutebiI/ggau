// 'use client'
// import { motion } from 'framer-motion'
// import { Globe, Target, Users, Heart, ArrowRight, Shield } from 'lucide-react'

// export default function API() {
//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       {/* Hero Section WITH IMAGE */}
//       <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-900">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//           }}
//         >
//           <div className="absolute inset-0 bg-blue-900/40"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
//             >
//               <Globe className="w-5 h-5" />
//               <span className="text-sm font-semibold">Continental Vision</span>
//             </motion.div>

//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               African Pillar
//               <span className="block text-emerald-300">Initiative</span>
//             </h1>
            
//             <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
//               Transforming Africa into a global biotechnology and medical innovation hub through unified scientific collaboration.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
//               <motion.a
//                 href="/get-involved"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-lg"
//               >
//                 Join the Initiative
//               </motion.a>
              
//               <motion.a
//                 href="/projects"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white/30 transition-all"
//               >
//                 Our Research
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Vision Section - Different Color */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Continental Vision for Healthcare
//               </h2>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 The <span className="text-emerald-600 font-semibold">African Pillar Initiative (API)</span> is a groundbreaking continental vision to create a unified network of African-led medical and biotechnology innovations.
//               </p>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 This initiative positions Uganda as a model country for bio-industrialization through genomics and molecular innovation, forming a solid scientific foundation for Africa's health independence.
//               </p>
              
//               <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
//                 <p className="text-emerald-800 font-semibold">"Science must serve humanity. Our generation's task is to empower Africa to innovate, produce, and heal using its own knowledge and resources."</p>
//                 <p className="text-emerald-700 text-sm mt-2">— Mwesige Nelson, Founder</p>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 h-96 flex items-center justify-center"
//             >
//               <div className="text-center text-white">
//                 <Globe className="w-16 h-16 mx-auto mb-4" />
//                 <p className="text-xl font-semibold">Pan-African Collaboration</p>
//                 <p className="text-purple-100 text-sm mt-2">United in Innovation</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Objectives Section - Different Color */}
//       <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Objectives</h2>
//             <p className="text-xl text-purple-200 max-w-2xl mx-auto">
//               Building Africa's capacity in biotechnology and medical innovation
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <ObjectiveCard
//               icon={<Users className="w-8 h-8" />}
//               title="Unite African Institutions"
//               description="Create a network of African research institutions for joint genomics and biotechnology programs"
//               color="purple"
//             />
//             <ObjectiveCard
//               icon={<Target className="w-8 h-8" />}
//               title="Establish Centers of Excellence"
//               description="Build continental centers in molecular medicine, herbal research, and drug production"
//               color="indigo"
//             />
//             <ObjectiveCard
//               icon={<Heart className="w-8 h-8" />}
//               title="Promote Intra-African Trade"
//               description="Facilitate trade in medical products and biotechnology within African markets"
//               color="pink"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Key Focus Areas - Clean White */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Key Focus Areas
//             </h2>
//             <p className="text-xl text-gray-600">Pillars of our continental strategy</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <FocusCard
//               icon={<Shield className="w-8 h-8" />}
//               title="Genomics Research"
//               description="Advanced genetic studies tailored to African populations and healthcare challenges"
//               color="blue"
//             />
//             <FocusCard
//               icon={<Target className="w-8 h-8" />}
//               title="Drug Discovery"
//               description="Developing pharmaceuticals from African medicinal plants and natural resources"
//               color="emerald"
//             />
//             <FocusCard
//               icon={<Users className="w-8 h-8" />}
//               title="Capacity Building"
//               description="Training the next generation of African scientists and researchers"
//               color="purple"
//             />
//             <FocusCard
//               icon={<Globe className="w-8 h-8" />}
//               title="Technology Transfer"
//               description="Bridging innovation from research labs to industrial production"
//               color="orange"
//             />
//             <FocusCard
//               icon={<Heart className="w-8 h-8" />}
//               title="Healthcare Access"
//               description="Ensuring affordable medical solutions reach all African communities"
//               color="red"
//             />
//             <FocusCard
//               icon={<ArrowRight className="w-8 h-8" />}
//               title="Innovation Ecosystem"
//               description="Creating sustainable environments for medical innovation and entrepreneurship"
//               color="indigo"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Call to Action - Different Color */}
//       <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Build Africa's Healthcare Future With Us
//             </h2>
//             <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
//               Join the movement to position Africa as a global leader in biotechnology and medical innovation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
//               >
//                 Partner With API <ArrowRight className="w-5 h-5" />
//               </motion.a>
//               <motion.a
//                 href="/get-involved"
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-flex items-center gap-3 bg-transparent text-white border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
//               >
//                 Support the Vision
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function ObjectiveCard({ icon, title, description, color }: any) {
//   const colorStyles = {
//     purple: 'bg-purple-700',
//     indigo: 'bg-indigo-700', 
//     pink: 'bg-pink-700'
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-colors"
//     >
//       <div className={`w-12 h-12 ${colorStyles[color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
//         {icon}
//       </div>
//       <h3 className="text-lg font-bold mb-3">{title}</h3>
//       <p className="text-purple-100 text-sm">{description}</p>
//     </motion.div>
//   )
// }

// function FocusCard({ icon, title, description, color }: any) {
//   const colorStyles = {
//     blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white',
//     emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white',
//     purple: 'bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white',
//     orange: 'bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white',
//     red: 'bg-red-100 text-red-600 hover:bg-red-600 hover:text-white',
//     indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white'
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all group"
//     >
//       <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${colorStyles[color]}`}>
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </motion.div>
//   )
// }
'use client'
import { motion } from 'framer-motion'
import { Globe, Target, Users, Heart, ArrowRight, Shield, MapPin, Building2 } from 'lucide-react'

export default function AfricanPillarInitiative() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Fixed Margin & New Design */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-indigo-800/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* New Badge Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 mb-12 border border-white/20 shadow-2xl"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-purple-200">Continental Vision</div>
                <div className="text-xs text-gray-300">African Healthcare Transformation</div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              African Pillar
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Initiative
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light">
              Uniting Africa through <span className="text-purple-300 font-semibold">biotechnology innovation</span> and <span className="text-pink-300 font-semibold">medical sovereignty</span>
            </p>

            {/* New Button Design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                <span>Join the Movement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-white/20 transition-all duration-300"
              >
                <span>Explore Research</span>
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Timeline Section - Different Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Continental <span className="text-purple-600">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A strategic journey to position Africa at the forefront of global healthcare innovation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-16">
              <TimelineItem
                number="1"
                title="Foundation Building"
                description="Establishing core research centers and partnerships across key African nations"
                icon={<Building2 className="w-6 h-6" />}
                side="left"
                color="purple"
              />
              <TimelineItem
                number="2"
                title="Capacity Development"
                description="Training 10,000 African scientists in genomics and biotechnology by 2026"
                icon={<Users className="w-6 h-6" />}
                side="right"
                color="pink"
              />
              <TimelineItem
                number="3"
                title="Innovation Hub"
                description="Launching continental centers of excellence in medical research"
                icon={<Target className="w-6 h-6" />}
                side="left"
                color="indigo"
              />
              <TimelineItem
                number="4"
                title="Global Leadership"
                description="Positioning Africa as a net exporter of medical innovations by 2030"
                icon={<Globe className="w-6 h-6" />}
                side="right"
                color="purple"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Interactive Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pan-African <span className="text-purple-600">Network</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building connections across the continent for collaborative innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-12 h-[500px] flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative text-center text-white z-10">
                <MapPin className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Continental Reach</h3>
                <p className="text-purple-100 text-lg mb-6">Partner institutions across Africa</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>🇺🇬 Uganda</div>
                  <div>🇰🇪 Kenya</div>
                  <div>🇳🇬 Nigeria</div>
                  <div>🇿🇦 South Africa</div>
                  <div>🇬🇭 Ghana</div>
                  <div>🇹🇿 Tanzania</div>
                </div>
              </div>
            </motion.div>

            {/* Network Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <NetworkStat
                number="15+"
                title="African Countries"
                description="Active partnerships and collaborations"
                color="purple"
              />
              <NetworkStat
                number="50+"
                title="Research Institutions"
                description="Universities and research centers involved"
                color="pink"
              />
              <NetworkStat
                number="1000+"
                title="Scientists"
                description="African researchers in the network"
                color="indigo"
              />
              <NetworkStat
                number="$10M+"
                title="Research Funding"
                description="Invested in continental projects"
                color="purple"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Shape Africa's <span className="text-pink-300">Healthcare Future</span>
            </h2>
            <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us in building a continent where African innovation drives global healthcare solutions and medical sovereignty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-white text-purple-900 px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-transparent text-white border-2 border-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300"
              >
                <span>Support the Vision</span>
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// New Timeline Component
function TimelineItem({ number, title, description, icon, side, color }: any) {
  const colorStyles = {
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} w-full`}
    >
      <div className={`flex-1 ${side === 'left' ? 'pr-12 text-right' : 'pl-12'}`}>
        <div className={`inline-block ${side === 'left' ? 'text-right' : 'text-left'}`}>
          <div className={`w-16 h-16 ${colorStyles[color]} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto`}>
            {number}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className="relative">
        <div className={`w-8 h-8 ${colorStyles[color]} rounded-full flex items-center justify-center text-white relative z-10`}>
          {icon}
        </div>
      </div>
      
      <div className="flex-1"></div>
    </motion.div>
  )
}

// New Network Stat Component
function NetworkStat({ number, title, description, color }: any) {
  const colorStyles = {
    purple: 'text-purple-600',
    pink: 'text-pink-600',
    indigo: 'text-indigo-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <div className="text-center">
        <div className={`text-4xl font-bold ${colorStyles[color]} mb-2 group-hover:scale-110 transition-transform`}>
          {number}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}