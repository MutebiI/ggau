
// 'use client'
// import { motion } from 'framer-motion'
// import { Award, GraduationCap, BookOpen, Users, Target, Microscope, FlaskConical, Dna, Brain, Heart, ArrowRight, Building2, Calendar, BarChart3, FileText, Mail, Phone, Download } from 'lucide-react'
// import { ReactNode } from 'react'

// // Define types for our components
// type ColorKey = 'purple' | 'pink' | 'indigo' | 'teal'

// interface ExpertiseStatProps {
//   number: string
//   label: string
//   icon: ReactNode
// }

// interface TeamMemberProps {
//   name: string
//   role: string
//   education: string
//   experience: string
//   expertise: string[]
//   achievements: string[]
//   icon: ReactNode
//   color: ColorKey
//   cvUrl: string
// }

// interface ExpertiseAreaProps {
//   title: string
//   proficiency: number
//   description: string
//   projects: number
//   color: ColorKey
// }

// interface CredentialItemProps {
//   icon: ReactNode
//   title: string
//   count: string
//   description: string
// }

// interface PartnerItemProps {
//   name: string
//   location: string
//   focus: string
// }

// export default function Team() {
//   return (
//     <div className="min-h-screen bg-gray-50 overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-3 md:gap-4 bg-white/15 backdrop-blur-lg rounded-2xl px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 mb-8 md:mb-12 border border-white/25 shadow-2xl max-w-full mx-2"
//             >
//               <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
//                 <Users className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
//               </div>
//               <div className="text-left min-w-0">
//                 <div className="text-sm md:text-base lg:text-lg font-bold text-purple-200 leading-tight">Scientific Excellence</div>
//                 <div className="text-xs md:text-sm text-pink-100 leading-tight">Leading Researchers & Innovators</div>
//               </div>
//             </motion.div>

//             <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight px-2">
//               Our Scientific
//               <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mt-2">
//                 Leadership
//               </span>
//             </h1>
            
//             <p className="text-lg md:text-2xl lg:text-3xl mb-8 md:mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
//               Pioneering minds driving <span className="text-purple-300 font-semibold">genomics innovation</span> and <span className="text-pink-300 font-semibold">medical research</span> across Africa
//             </p>

//             {/* Expertise Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto mt-8 md:mt-16 px-4"
//             >
//               <ExpertiseStat number="50+" label="Years Combined Experience" icon={<Award className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
//               <ExpertiseStat number="15+" label="Advanced Degrees" icon={<GraduationCap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
//               <ExpertiseStat number="100+" label="Publications" icon={<BookOpen className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
//               <ExpertiseStat number="8" label="Research Domains" icon={<Target className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Core Leadership Team */}
//       <section className="py-12 md:py-20 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16 lg:mb-20"
//           >
//             <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
//               Core <span className="text-purple-600">Leadership</span>
//             </h2>
//             <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//               Visionary leaders and experts driving our research initiatives forward
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-full">
//             <TeamMember
//               name="Mr. Mwesige Nelson"
//               role="Founder & Chief Executive Officer"
//               education="MBA Public Health Management"
//               experience="24+ Years in Medical Diagnostics"
//               expertise={["Medical Innovation", "Genomics Research", "Healthcare Entrepreneurship"]}
//               achievements={["DNA Awareness Pioneer", "UMPR Lead Innovator", "Healthviber Diagnostics Founder"]}
//               icon={<Dna className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
//               color="purple"
//               cvUrl="/cvs/mwesige-nelson-cv.pdf"
//             />
//             <TeamMember
//               name="Dr. Ogaram David Akuban"
//               role="Senior Research Consultant & Environmental Safety Expert"
//               education="PhD, DIC, FRCS - University of London"
//               experience="40+ Years in Occupational Health & Toxicology"
//               expertise={["Occupational Health", "Environmental Safety", "Chemical Toxicology", "Policy Development"]}
//               achievements={[
//                 "Lead Developer of Uganda's Labour Laws", 
//                 "Former Commissioner for Labour", 
//                 "Environmental Policy Architect",
//                 "International Chemical Safety Expert"
//               ]}
//               icon={<FlaskConical className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
//               color="pink"
//               cvUrl="/cvs/ogaram-david-cv.pdf"
//             />
//             <TeamMember
//               name="Sr. Namutebi Erinah"
//               role="Senior Nursing Officer & Clinical Coordinator"
//               education="Advanced Diploma in General Nursing"
//               experience="20+ Years in Clinical Care & HIV Management"
//               expertise={["HIV/AIDS Care", "Palliative Care", "Pediatric Nursing", "Clinical Supervision"]}
//               achievements={[
//                 "Integrated Management of Acute Malnutrition", 
//                 "Pediatric HIV/AIDS Specialist", 
//                 "Clinical Team Leadership",
//                 "Community Health Programs"
//               ]}
//               icon={<Heart className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
//               color="indigo"
//               cvUrl="/cvs/namutebi-erinah-cv.pdf"
//             />
//           </div>

//           {/* Additional Research Team Member */}
//           <div className="mt-12 md:mt-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-full">
//               <TeamMember
//                 name="Allan Akandwanaho, MSc"
//                 role="Research Scientist & PhD Candidate"
//                 education="MSc Cell & Molecular Biology - University of Turin"
//                 experience="5+ Years in Developmental Biology Research"
//                 expertise={["Developmental Biology", "Molecular Genetics", "Microscopy", "CRISPR Technology"]}
//                 achievements={[
//                   "PhD Candidate at Charles University", 
//                   "Published in Frontiers in Immunology", 
//                   "International Conference Presenter",
//                   "CRISPR Genome Editing Expert"
//                 ]}
//                 icon={<Microscope className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
//                 color="teal"
//                 cvUrl="/cvs/allan-akandwanaho-cv.pdf"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Expertise Matrix */}
//       <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
//               Team <span className="text-purple-600">Expertise</span>
//             </h2>
//             <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//               Comprehensive capabilities across genetics and medical research domains
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-full">
//             {/* Expertise Areas */}
//             <div className="space-y-4 md:space-y-6">
//               <ExpertiseArea
//                 title="Genomics & Sequencing"
//                 proficiency={90}
//                 description="Whole genome sequencing, exome analysis, and genetic variant interpretation"
//                 projects={8}
//                 color="purple"
//               />
//               <ExpertiseArea
//                 title="Drug Discovery & Development"
//                 proficiency={85}
//                 description="Medicinal plant research, compound analysis, and therapeutic development"
//                 projects={5}
//                 color="pink"
//               />
//               <ExpertiseArea
//                 title="AI & Diagnostic Integration"
//                 proficiency={75}
//                 description="Machine learning applications in medical diagnostics and healthcare"
//                 projects={3}
//                 color="indigo"
//               />
//               <ExpertiseArea
//                 title="Clinical Research & Trials"
//                 proficiency={80}
//                 description="Study design, patient recruitment, and clinical trial management"
//                 projects={6}
//                 color="teal"
//               />
//             </div>

//             {/* Research Credentials */}
//             <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-gray-200 w-full">
//               <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Research Credentials</h3>
//               <div className="space-y-4 md:space-y-6">
//                 <CredentialItem
//                   icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6" />}
//                   title="Peer-Reviewed Publications"
//                   count="100+"
//                   description="In international scientific journals"
//                 />
//                 <CredentialItem
//                   icon={<Award className="w-5 h-5 md:w-6 md:h-6" />}
//                   title="Research Grants"
//                   count="$2.5M+"
//                   description="Competitively awarded funding"
//                 />
//                 <CredentialItem
//                   icon={<Building2 className="w-5 h-5 md:w-6 md:h-6" />}
//                   title="University Partnerships"
//                   count="8+"
//                   description="Collaborations with leading institutions"
//                 />
//                 <CredentialItem
//                   icon={<Calendar className="w-5 h-5 md:w-6 md:h-6" />}
//                   title="Conference Presentations"
//                   count="50+"
//                   description="International scientific conferences"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Advisory & Partnerships */}
//       <section className="py-12 md:py-20 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
//               Advisory & <span className="text-purple-600">Partnerships</span>
//             </h2>
//             <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//               Collaborating with leading institutions and experts worldwide
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-full">
//             {/* University Partners */}
//             <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 md:p-6 lg:p-8 w-full">
//               <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">University Collaborations</h3>
//               <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
//                 {[
//                   "Makerere University",
//                   "Mbarara University", 
//                   "Gulu University",
//                   "Busitema University",
//                   "Kyambogo University",
//                   "Kabale University"
//                 ].map((university, index) => (
//                   <motion.div
//                     key={university}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-center gap-2 p-2 md:p-3 bg-white rounded-lg shadow-sm border border-gray-200"
//                   >
//                     <Building2 className="w-4 h-4 md:w-5 md:h-5 text-purple-600 flex-shrink-0" />
//                     <span className="text-xs md:text-sm font-medium text-gray-700 leading-tight">{university}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* International Partners */}
//             <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 md:p-6 lg:p-8 w-full">
//               <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">International Partners</h3>
//               <div className="space-y-3 md:space-y-4">
//                 <PartnerItem name="Lifenity Genomics Laboratory" location="UAE" focus="Genomics Testing" />
//                 <PartnerItem name="Endeavour DNA Laboratories" location="USA" focus="Research Collaboration" />
//                 <PartnerItem name="University of California" location="USA" focus="Academic Exchange" />
//                 <PartnerItem name="Uganda Red Cross Society" location="Uganda" focus="Community Health" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Join Our Team */}
//       <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 px-2">
//               Join Our <span className="text-pink-300">Research Team</span>
//             </h2>
//             <p className="text-base md:text-lg lg:text-xl text-purple-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
//               Contribute to groundbreaking genetics research and help transform healthcare in Africa.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 mb-8 md:mb-12">
//               <motion.a
//                 href="/get-involved"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 className="group bg-white text-purple-700 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg w-full sm:w-auto text-sm md:text-base"
//               >
//                 <span>View Opportunities</span>
//                 <Users className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
//               </motion.a>
              
//               {/* WORKING CV SUBMISSION BUTTON */}
//               <motion.a
//                 href="mailto:mwesinelie@yahoo.com,mneliah1978@gmail.com?subject=CV Submission - GGAU Research Team Application&body=Hello GGAU Research Team,%0D%0A%0D%0AI am interested in joining your research team and have attached my CV for your consideration.%0D%0A%0D%0APosition of Interest: [Please specify research area or position]%0D%0A%0D%0A---%0D%0A[Your Full Name]%0D%0A[Your Phone Number]%0D%0A[Your Current Role/Institution]%0D%0A[Your Research Interests]"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 className="group bg-amber-500 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:bg-amber-600 hover:shadow-2xl transition-all duration-300 shadow-lg w-full sm:w-auto text-sm md:text-base"
//               >
//                 <FileText className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
//                 Submit Your CV
//               </motion.a>
//             </div>

//             {/* Additional Contact Options */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
//               <motion.a
//                 href="mailto:mwesinelie@yahoo.com,mneliah1978@gmail.com?subject=GGAU Team Inquiry"
//                 whileHover={{ scale: 1.02 }}
//                 className="flex items-center justify-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
//               >
//                 <Mail className="w-4 h-4" />
//                 <span className="text-sm font-medium">Email Team</span>
//               </motion.a>
//               <motion.a
//                 href="tel:+256760051963"
//                 whileHover={{ scale: 1.02 }}
//                 className="flex items-center justify-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
//               >
//                 <Phone className="w-4 h-4" />
//                 <span className="text-sm font-medium">Call Team</span>
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Expertise Stat Component
// function ExpertiseStat({ number, label, icon }: ExpertiseStatProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       className="text-center"
//     >
//       <div className="flex justify-center mb-2 md:mb-3">
//         <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center">
//           {icon}
//         </div>
//       </div>
//       <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{number}</div>
//       <div className="text-xs md:text-sm text-purple-200 font-medium leading-tight">{label}</div>
//     </motion.div>
//   )
// }

// // Team Member Component (No Photo)
// function TeamMember({ name, role, education, experience, expertise, achievements, icon, color, cvUrl }: TeamMemberProps) {
//   const colorStyles: Record<ColorKey, string> = {
//     purple: 'bg-purple-500',
//     pink: 'bg-pink-500',
//     indigo: 'bg-indigo-500',
//     teal: 'bg-teal-500'
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group w-full flex flex-col h-full"
//     >
//       <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
//         <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${colorStyles[color]} rounded-xl md:rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
//           {icon}
//         </div>
//         <div className="min-w-0 flex-1">
//           <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">{name}</h3>
//           <p className="text-purple-600 font-semibold text-sm md:text-base leading-tight">{role}</p>
//         </div>
//       </div>

//       <div className="space-y-2 md:space-y-4 flex-1">
//         <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
//           <GraduationCap className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
//           <span className="leading-tight">{education}</span>
//         </div>
//         <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
//           <Award className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
//           <span className="leading-tight">{experience}</span>
//         </div>
      
//         <div className="mt-4 md:mt-6">
//           <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2 md:mb-3">Areas of Expertise</h4>
//           <div className="flex flex-wrap gap-1 md:gap-2">
//             {expertise.map((skill: string, index: number) => (
//               <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium leading-tight">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4 md:mt-6">
//           <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2 md:mb-3">Key Qualifications</h4>
//           <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
//             {achievements.map((achievement: string, index: number) => (
//               <li key={achievement} className="flex items-start gap-2">
//                 <div className={`w-1.5 h-1.5 ${colorStyles[color]} rounded-full mt-1.5 md:mt-2 flex-shrink-0`} />
//                 <span className="leading-tight">{achievement}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* CV Download Button */}
//       <motion.a
//         href={cvUrl}
//         download
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200 group/download"
//       >
//         <Download className="w-4 h-4 group-hover/download:scale-110 transition-transform" />
//         Download CV
//       </motion.a>
//     </motion.div>
//   )
// }

// // Expertise Area Component
// function ExpertiseArea({ title, proficiency, description, projects, color }: ExpertiseAreaProps) {
//   const colorStyles: Record<ColorKey, string> = {
//     purple: 'bg-purple-500',
//     pink: 'bg-pink-500',
//     indigo: 'bg-indigo-500',
//     teal: 'bg-teal-500'
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200 w-full"
//     >
//       <div className="flex justify-between items-start mb-3 md:mb-4">
//         <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">{title}</h3>
//         <span className="text-xs md:text-sm font-semibold text-gray-500">{projects} projects</span>
//       </div>
      
//       <div className="mb-3 md:mb-4">
//         <div className="flex justify-between text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
//           <span>Team Proficiency</span>
//           <span>{proficiency}%</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: `${proficiency}%` }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className={`h-1.5 md:h-2 rounded-full ${colorStyles[color]}`}
//           />
//         </div>
//       </div>
      
//       <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{description}</p>
//     </motion.div>
//   )
// }

// // Credential Item Component
// function CredentialItem({ icon, title, count, description }: CredentialItemProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-full"
//     >
//       <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
//         {icon}
//       </div>
//       <div className="min-w-0">
//         <div className="flex items-baseline gap-1 md:gap-2">
//           <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{count}</span>
//           <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 leading-tight">{title}</span>
//         </div>
//         <p className="text-xs md:text-sm text-gray-600 leading-tight">{description}</p>
//       </div>
//     </motion.div>
//   )
// }

// // Partner Item Component
// function PartnerItem({ name, location, focus }: PartnerItemProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="flex items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-full"
//     >
//       <div className="min-w-0">
//         <h4 className="font-semibold text-gray-900 text-sm md:text-base leading-tight">{name}</h4>
//         <p className="text-xs md:text-sm text-gray-600 leading-tight">{focus}</p>
//       </div>
//       <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium flex-shrink-0 ml-2">
//         {location}
//       </span>
//     </motion.div>
//   )
// }
'use client'
import { motion } from 'framer-motion'
import { Award, GraduationCap, BookOpen, Users, Target, Microscope, FlaskConical, Dna, Brain, Heart, ArrowRight, Building2, Calendar, BarChart3, FileText, Mail, Phone, Download } from 'lucide-react'
import { ReactNode } from 'react'

// Define types for our components
type ColorKey = 'purple' | 'pink' | 'indigo' | 'teal'

interface ExpertiseStatProps {
  number: string
  label: string
  icon: ReactNode
}

interface TeamMemberProps {
  name: string
  role: string
  education: string
  experience: string
  expertise: string[]
  achievements: string[]
  icon: ReactNode
  color: ColorKey
  cvUrl: string
}

interface ExpertiseAreaProps {
  title: string
  proficiency: number
  description: string
  projects: number
  color: ColorKey
}

interface CredentialItemProps {
  icon: ReactNode
  title: string
  count: string
  description: string
}

interface PartnerItemProps {
  name: string
  location: string
  focus: string
}

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
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
              className="inline-flex items-center gap-3 md:gap-4 bg-white/15 backdrop-blur-lg rounded-2xl px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 mb-8 md:mb-12 border border-white/25 shadow-2xl max-w-full mx-2"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm md:text-base lg:text-lg font-bold text-purple-200 leading-tight">Scientific Excellence</div>
                <div className="text-xs md:text-sm text-pink-100 leading-tight">Leading Researchers & Innovators</div>
              </div>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight px-2">
              Our Scientific
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mt-2">
                Leadership
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl lg:text-3xl mb-8 md:mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Pioneering minds driving <span className="text-purple-300 font-semibold">genomics innovation</span> and <span className="text-pink-300 font-semibold">medical research</span> across Africa
            </p>

            {/* Expertise Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto mt-8 md:mt-16 px-4"
            >
              <ExpertiseStat number="50+" label="Years Combined Experience" icon={<Award className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
              <ExpertiseStat number="15+" label="Advanced Degrees" icon={<GraduationCap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
              <ExpertiseStat number="100+" label="Publications" icon={<BookOpen className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
              <ExpertiseStat number="8" label="Research Domains" icon={<Target className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Leadership Team */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Core <span className="text-purple-600">Leadership</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Visionary leaders and experts driving our research initiatives forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-full">
            <TeamMember
              name="Mr. Mwesige Nelson"
              role="Founder & Chief Executive Officer"
              education="MBA Public Health Management"
              experience="24+ Years in Medical Diagnostics"
              expertise={["Medical Innovation", "Genomics Research", "Healthcare Entrepreneurship"]}
              achievements={["DNA Awareness Pioneer", "UMPR Lead Innovator", "Healthviber Diagnostics Founder"]}
              icon={<Dna className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
              color="purple"
              cvUrl="/cvs/mwesige-nelson-cv.pdf"
            />
            <TeamMember
              name="Dr. Ogaram David Akuban"
              role="Senior Research Consultant & Environmental Safety Expert"
              education="PhD, DIC, FRCS - University of London"
              experience="40+ Years in Occupational Health & Toxicology"
              expertise={["Occupational Health", "Environmental Safety", "Chemical Toxicology", "Policy Development"]}
              achievements={[
                "Lead Developer of Uganda's Labour Laws", 
                "Former Commissioner for Labour", 
                "Environmental Policy Architect",
                "International Chemical Safety Expert"
              ]}
              icon={<FlaskConical className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
              color="pink"
              cvUrl="/cvs/ogaram-david-cv.pdf"
            />
            <TeamMember
              name="Sr. Namutebi Erinah"
              role="Senior Nursing Officer & Clinical Coordinator"
              education="Advanced Diploma in General Nursing"
              experience="20+ Years in Clinical Care & HIV Management"
              expertise={["HIV/AIDS Care", "Palliative Care", "Pediatric Nursing", "Clinical Supervision"]}
              achievements={[
                "Integrated Management of Acute Malnutrition", 
                "Pediatric HIV/AIDS Specialist", 
                "Clinical Team Leadership",
                "Community Health Programs"
              ]}
              icon={<Heart className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
              color="indigo"
              cvUrl="/cvs/namutebi-erinah-cv.pdf"
            />
          </div>

          {/* Additional Research Team Member */}
          <div className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-full">
              <TeamMember
                name="Allan Akandwanaho, MSc"
                role="Research Scientist & PhD Candidate"
                education="MSc Cell & Molecular Biology - University of Turin"
                experience="5+ Years in Developmental Biology Research"
                expertise={["Developmental Biology", "Molecular Genetics", "Microscopy", "CRISPR Technology"]}
                achievements={[
                  "PhD Candidate at Charles University", 
                  "Published in Frontiers in Immunology", 
                  "International Conference Presenter",
                  "CRISPR Genome Editing Expert"
                ]}
                icon={<Microscope className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
                color="teal"
                cvUrl="/cvs/allan-akandwanaho-cv.pdf"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Youth & Future Scientists Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Youth & <span className="text-purple-600">Future Scientists</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Nurturing the next generation of scientific leaders and innovators
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <TeamMember
              name="Mwesige Elizabeth"
              role="Young Science Scholar & Research Intern"
              education="Kisubi High School - Ordinary Level (Science)"
              experience="Student Researcher & IT Assistant"
              expertise={["Biology Research", "Computer Literacy", "Science Communication", "Team Leadership"]}
              achievements={[
                "President - Biology & Chemistry Club", 
                "Secretary - Computer Science Club", 
                "GGAU Research & IT Assistant",
                "Football for Friendship Diploma Recipient"
              ]}
              icon={<GraduationCap className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
              color="teal"
              cvUrl="/cvs/mwesige-elizabeth-cv.pdf"
            />
          </div>
        </div>
      </section>

      {/* Team Expertise Matrix */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Team <span className="text-purple-600">Expertise</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive capabilities across genetics and medical research domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-full">
            {/* Expertise Areas */}
            <div className="space-y-4 md:space-y-6">
              <ExpertiseArea
                title="Genomics & Sequencing"
                proficiency={90}
                description="Whole genome sequencing, exome analysis, and genetic variant interpretation"
                projects={8}
                color="purple"
              />
              <ExpertiseArea
                title="Drug Discovery & Development"
                proficiency={85}
                description="Medicinal plant research, compound analysis, and therapeutic development"
                projects={5}
                color="pink"
              />
              <ExpertiseArea
                title="AI & Diagnostic Integration"
                proficiency={75}
                description="Machine learning applications in medical diagnostics and healthcare"
                projects={3}
                color="indigo"
              />
              <ExpertiseArea
                title="Clinical Research & Trials"
                proficiency={80}
                description="Study design, patient recruitment, and clinical trial management"
                projects={6}
                color="teal"
              />
            </div>

            {/* Research Credentials */}
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-gray-200 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Research Credentials</h3>
              <div className="space-y-4 md:space-y-6">
                <CredentialItem
                  icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6" />}
                  title="Peer-Reviewed Publications"
                  count="100+"
                  description="In international scientific journals"
                />
                <CredentialItem
                  icon={<Award className="w-5 h-5 md:w-6 md:h-6" />}
                  title="Research Grants"
                  count="$2.5M+"
                  description="Competitively awarded funding"
                />
                <CredentialItem
                  icon={<Building2 className="w-5 h-5 md:w-6 md:h-6" />}
                  title="University Partnerships"
                  count="8+"
                  description="Collaborations with leading institutions"
                />
                <CredentialItem
                  icon={<Calendar className="w-5 h-5 md:w-6 md:h-6" />}
                  title="Conference Presentations"
                  count="50+"
                  description="International scientific conferences"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Partnerships */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Advisory & <span className="text-purple-600">Partnerships</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Collaborating with leading institutions and experts worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-full">
            {/* University Partners */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 md:p-6 lg:p-8 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">University Collaborations</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
                {[
                  "Makerere University",
                  "Mbarara University", 
                  "Gulu University",
                  "Busitema University",
                  "Kyambogo University",
                  "Kabale University"
                ].map((university, index) => (
                  <motion.div
                    key={university}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 p-2 md:p-3 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <Building2 className="w-4 h-4 md:w-5 md:h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-gray-700 leading-tight">{university}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* International Partners */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 md:p-6 lg:p-8 w-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">International Partners</h3>
              <div className="space-y-3 md:space-y-4">
                <PartnerItem name="Lifenity Genomics Laboratory" location="UAE" focus="Genomics Testing" />
                <PartnerItem name="Endeavour DNA Laboratories" location="USA" focus="Research Collaboration" />
                <PartnerItem name="University of California" location="USA" focus="Academic Exchange" />
                <PartnerItem name="Uganda Red Cross Society" location="Uganda" focus="Community Health" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 px-2">
              Join Our <span className="text-pink-300">Research Team</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-purple-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Contribute to groundbreaking genetics research and help transform healthcare in Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 mb-8 md:mb-12">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-white text-purple-700 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg w-full sm:w-auto text-sm md:text-base"
              >
                <span>View Opportunities</span>
                <Users className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              
              {/* WORKING CV SUBMISSION BUTTON */}
              <motion.a
                href="mailto:mwesinelie@yahoo.com,mneliah1978@gmail.com?subject=CV Submission - GGAU Research Team Application&body=Hello GGAU Research Team,%0D%0A%0D%0AI am interested in joining your research team and have attached my CV for your consideration.%0D%0A%0D%0APosition of Interest: [Please specify research area or position]%0D%0A%0D%0A---%0D%0A[Your Full Name]%0D%0A[Your Phone Number]%0D%0A[Your Current Role/Institution]%0D%0A[Your Research Interests]"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-amber-500 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:bg-amber-600 hover:shadow-2xl transition-all duration-300 shadow-lg w-full sm:w-auto text-sm md:text-base"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                Submit Your CV
              </motion.a>
            </div>

            {/* Additional Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
              <motion.a
                href="mailto:mwesinelie@yahoo.com,mneliah1978@gmail.com?subject=GGAU Team Inquiry"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email Team</span>
              </motion.a>
              <motion.a
                href="tel:+256760051963"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Team</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Expertise Stat Component
function ExpertiseStat({ number, label, icon }: ExpertiseStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="flex justify-center mb-2 md:mb-3">
        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-xs md:text-sm text-purple-200 font-medium leading-tight">{label}</div>
    </motion.div>
  )
}

// Team Member Component (No Photo)
function TeamMember({ name, role, education, experience, expertise, achievements, icon, color, cvUrl }: TeamMemberProps) {
  const colorStyles: Record<ColorKey, string> = {
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500',
    teal: 'bg-teal-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group w-full flex flex-col h-full"
    >
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${colorStyles[color]} rounded-xl md:rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">{name}</h3>
          <p className="text-purple-600 font-semibold text-sm md:text-base leading-tight">{role}</p>
        </div>
      </div>

      <div className="space-y-2 md:space-y-4 flex-1">
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
          <GraduationCap className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="leading-tight">{education}</span>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
          <Award className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="leading-tight">{experience}</span>
        </div>
      
        <div className="mt-4 md:mt-6">
          <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2 md:mb-3">Areas of Expertise</h4>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {expertise.map((skill: string, index: number) => (
              <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium leading-tight">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 md:mt-6">
          <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2 md:mb-3">Key Qualifications</h4>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
            {achievements.map((achievement: string, index: number) => (
              <li key={achievement} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 ${colorStyles[color]} rounded-full mt-1.5 md:mt-2 flex-shrink-0`} />
                <span className="leading-tight">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CV Download Button */}
      <motion.a
        href={cvUrl}
        download
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200 group/download"
      >
        <Download className="w-4 h-4 group-hover/download:scale-110 transition-transform" />
        Download CV
      </motion.a>
    </motion.div>
  )
}

// Expertise Area Component
function ExpertiseArea({ title, proficiency, description, projects, color }: ExpertiseAreaProps) {
  const colorStyles: Record<ColorKey, string> = {
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500',
    teal: 'bg-teal-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200 w-full"
    >
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">{title}</h3>
        <span className="text-xs md:text-sm font-semibold text-gray-500">{projects} projects</span>
      </div>
      
      <div className="mb-3 md:mb-4">
        <div className="flex justify-between text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
          <span>Team Proficiency</span>
          <span>{proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-1.5 md:h-2 rounded-full ${colorStyles[color]}`}
          />
        </div>
      </div>
      
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

// Credential Item Component
function CredentialItem({ icon, title, count, description }: CredentialItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-full"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-1 md:gap-2">
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{count}</span>
          <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 leading-tight">{title}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-600 leading-tight">{description}</p>
      </div>
    </motion.div>
  )
}

// Partner Item Component
function PartnerItem({ name, location, focus }: PartnerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-full"
    >
      <div className="min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm md:text-base leading-tight">{name}</h4>
        <p className="text-xs md:text-sm text-gray-600 leading-tight">{focus}</p>
      </div>
      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium flex-shrink-0 ml-2">
        {location}
      </span>
    </motion.div>
  )
}