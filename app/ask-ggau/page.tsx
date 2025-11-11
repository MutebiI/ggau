// 'use client'
// import { motion } from 'framer-motion'
// import { ChevronDown, ChevronUp, Mail, Phone, Users, FlaskConical, Dna, Microscope, Building2 } from 'lucide-react'
// import { useState } from 'react'

// interface FAQItem {
//   question: string
//   answer: string
//   category: string
// }

// export default function AskGGAU() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null)
  
//   const faqData: FAQItem[] = [
//     {
//       category: "Research & Projects",
//       question: "What genetics research does GGAU focus on?",
//       answer: "GGAU specializes in genomics, molecular diagnostics, and biotechnology innovation. Our research includes rare disease genetics, diagnostic equipment development (including the UMPR project for local vacutainer manufacturing), and medicinal plant research for drug discovery."
//     },
//     {
//       category: "Research & Projects", 
//       question: "What is the UMPR project?",
//       answer: "The Uganda Medical Production Revolution (UMPR) is our flagship initiative to establish local manufacturing of diagnostic equipment, including Uganda's first vacutainer blood collection tube factory. This reduces dependency on imports and builds local healthcare capacity."
//     },
//     {
//       category: "Research & Projects",
//       question: "What diagnostic equipment are you developing?",
//       answer: "We're pioneering local manufacturing of vacutainer tubes through our UMPR initiative, developing AI-integrated diagnostic systems, and working on portable genetic testing equipment suitable for Uganda's healthcare infrastructure."
//     },
//     {
//       category: "Team & Collaboration",
//       question: "How can I collaborate with GGAU?",
//       answer: "We welcome research collaborations, academic partnerships, and industry alliances. Please contact us through our partnership portal or email Mr. Mwesige Nelson directly to discuss potential collaboration opportunities."
//     },
//     {
//       category: "Team & Collaboration",
//       question: "Do you offer research internships or training?",
//       answer: "Yes! We offer internships for students and young researchers in genetics, laboratory technology, and biomedical research. Our Youth & Future Scientists program nurtures the next generation of Ugandan scientists."
//     },
//     {
//       category: "Team & Collaboration", 
//       question: "Who are your key scientists and researchers?",
//       answer: "Our team includes Mr. Mwesige Nelson (Founder & CEO), Dr. Ogaram David Akuban (Senior Research Consultant), Sr. Namutebi Erinah (Clinical Coordinator), Allan Akandwanaho (Research Scientist), and emerging young scientists through our mentorship programs."
//     },
//     {
//       category: "Contact & Partnerships",
//       question: "How can I contact specific team members?",
//       answer: "Visit our Team page to download CVs with contact information. For general inquiries, email mwesinelie@yahoo.com or call +256-760-051963. Specific research inquiries can be directed to relevant team members based on their expertise."
//     },
//     {
//       category: "Contact & Partnerships",
//       question: "Which universities and institutions do you partner with?",
//       answer: "We collaborate with Makerere University, Mbarara University, Gulu University, Busitema University, and international partners including University of California, Lifenity Genomics Laboratory (UAE), and Endeavour DNA Laboratories (USA)."
//     },
//     {
//       category: "Contact & Partnerships",
//       question: "Are there funding or grant opportunities available?",
//       answer: "We pursue research grants, philanthropic funding, and strategic partnerships. Funders can support specific projects like the UMPR initiative, youth science education, or general research operations. Contact us to discuss funding opportunities."
//     }
//   ]

//   const categories = Array.from(new Set(faqData.map(item => item.category)))

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 md:py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-8 md:mb-12"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Ask GGAU
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Frequently asked questions about our research, team, and collaboration opportunities
//           </p>
//         </motion.div>

//         {/* FAQ Sections */}
//         <div className="space-y-8">
//           {categories.map((category, categoryIndex) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
//               className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
//             >
//               <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
//                 <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
//                   {getCategoryIcon(category)}
//                   {category}
//                 </h2>
//               </div>
              
//               <div className="divide-y divide-gray-100">
//                 {faqData
//                   .filter(item => item.category === category)
//                   .map((item, index) => {
//                     const globalIndex = faqData.findIndex(faq => faq === item)
//                     return (
//                       <div key={globalIndex} className="px-6 py-4">
//                         <button
//                           onClick={() => toggleFAQ(globalIndex)}
//                           className="flex justify-between items-center w-full text-left group"
//                         >
//                           <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
//                             {item.question}
//                           </span>
//                           {openIndex === globalIndex ? (
//                             <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                           ) : (
//                             <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
//                           )}
//                         </button>
                        
//                         {openIndex === globalIndex && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="mt-3"
//                           >
//                             <p className="text-gray-700 leading-relaxed text-base md:text-lg">
//                               {item.answer}
//                             </p>
//                           </motion.div>
//                         )}
//                       </div>
//                     )
//                   })}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Contact CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-center text-white mt-8 md:mt-12"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Still Have Questions?
//           </h3>
//           <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
//             Contact our research team directly for specific inquiries about collaborations, research opportunities, or detailed project information.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="mailto:mwesinelie@yahoo.com?subject=GGAU Inquiry"
//               className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
//             >
//               <Mail className="w-5 h-5" />
//               Email Our Team
//             </a>
//             <a
//               href="tel:+256760051963"
//               className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
//             >
//               <Phone className="w-5 h-5" />
//               Call Us
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// function getCategoryIcon(category: string) {
//   switch (category) {
//     case "Research & Projects":
//       return <FlaskConical className="w-6 h-6" />
//     case "Team & Collaboration":
//       return <Users className="w-6 h-6" />
//     case "Contact & Partnerships":
//       return <Building2 className="w-6 h-6" />
//     default:
//       return <Dna className="w-6 h-6" />
//   }
// }
'use client'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Mail, Phone, Users, FlaskConical, Dna, Heart, Shield, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function AskGGAU() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqData: FAQItem[] = [
    {
      category: "Research & Innovation",
      question: "What genetics research does GGAU focus on?",
      answer: "GGAU specializes in genomics, molecular diagnostics, and biotechnology innovation. Our research includes rare disease genetics, diagnostic equipment development (including the UMPR project for local vacutainer manufacturing), and medicinal plant research for drug discovery."
    },
    {
      category: "Research & Innovation", 
      question: "What is the UMPR project?",
      answer: "The Uganda Medical Production Revolution (UMPR) is our flagship initiative to establish local manufacturing of diagnostic equipment, including Uganda's first vacutainer blood collection tube factory. This reduces dependency on imports and builds local healthcare capacity."
    },
    {
      category: "Research & Innovation",
      question: "What diagnostic equipment are you developing?",
      answer: "We're pioneering local manufacturing of vacutainer tubes through our UMPR initiative, developing AI-integrated diagnostic systems, and working on portable genetic testing equipment suitable for Uganda's healthcare infrastructure."
    },
    {
      category: "Team & Collaboration",
      question: "How can I collaborate with GGAU?",
      answer: "We welcome research collaborations, academic partnerships, and industry alliances. Please contact us through our partnership portal or email Mr. Mwesige Nelson directly to discuss potential collaboration opportunities."
    },
    {
      category: "Team & Collaboration",
      question: "Do you offer research internships or training?",
      answer: "Yes! We offer internships for students and young researchers in genetics, laboratory technology, and biomedical research. Our Youth & Future Scientists program nurtures the next generation of Ugandan scientists."
    },
    {
      category: "Team & Collaboration", 
      question: "Who are your key scientists and researchers?",
      answer: "Our team includes Mr. Mwesige Nelson (Founder & CEO), Dr. Ogaram David Akuban (Senior Research Consultant), Sr. Namutebi Erinah (Clinical Coordinator), Allan Akandwanaho (Research Scientist), and emerging young scientists through our mentorship programs."
    },
    {
      category: "Partnerships & Funding",
      question: "How can I contact specific team members?",
      answer: "Visit our Team page to download CVs with contact information. For general inquiries, email mwesinelie@yahoo.com or call +256-760-051963. Specific research inquiries can be directed to relevant team members based on their expertise."
    },
    {
      category: "Partnerships & Funding",
      question: "Which universities and institutions do you partner with?",
      answer: "We collaborate with Makerere University, Mbarara University, Gulu University, Busitema University, and international partners including University of California, Lifenity Genomics Laboratory (UAE), and Endeavour DNA Laboratories (USA)."
    },
    {
      category: "Partnerships & Funding",
      question: "Are there funding or grant opportunities available?",
      answer: "We pursue research grants, philanthropic funding, and strategic partnerships. Funders can support specific projects like the UMPR initiative, youth science education, or general research operations. Contact us to discuss funding opportunities."
    }
  ]

  const categories = Array.from(new Set(faqData.map(item => item.category)))

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 md:py-12">
      {/* Modern Header */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg rounded-2xl px-6 py-4 mb-8 border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-purple-600">Information Center</div>
                <div className="text-xs text-gray-600">Expert Answers • Professional Guidance</div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ask
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mt-2">
                GGAU
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Direct answers about our <span className="text-purple-600 font-semibold">research</span>, <span className="text-blue-600 font-semibold">partnerships</span>, and <span className="text-pink-600 font-semibold">innovation</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern FAQ Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-purple-600" />
                Topics
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => {
                      const element = document.getElementById(`category-${index}`)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full text-left p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md transition-all duration-300 group border border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(category)}
                      <span className="font-semibold text-gray-700 group-hover:text-purple-700 transition-colors">
                        {category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <div className="lg:col-span-2 space-y-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                id={`category-${categoryIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="scroll-mt-8"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-4">
                      {getCategoryIcon(category)}
                      {category}
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {faqData
                      .filter(item => item.category === category)
                      .map((item, index) => {
                        const globalIndex = faqData.findIndex(faq => faq === item)
                        return (
                          <motion.div
                            key={globalIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-8 py-6 hover:bg-gray-50 transition-colors group"
                          >
                            <button
                              onClick={() => toggleFAQ(globalIndex)}
                              className="flex justify-between items-start w-full text-left group"
                            >
                              <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-relaxed">
                                  {item.question}
                                </h3>
                                {openIndex === globalIndex && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4"
                                  >
                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg bg-blue-50 rounded-xl p-4 border border-blue-200">
                                      {item.answer}
                                    </p>
                                  </motion.div>
                                )}
                              </div>
                              <div className="ml-4 mt-1 flex-shrink-0">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                  openIndex === globalIndex 
                                    ? 'bg-purple-100 text-purple-600' 
                                    : 'bg-gray-100 text-gray-400 group-hover:bg-purple-100 group-hover:text-purple-600'
                                }`}>
                                  {openIndex === globalIndex ? (
                                    <ChevronUp className="w-5 h-5" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5" />
                                  )}
                                </div>
                              </div>
                            </button>
                          </motion.div>
                        )
                      })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modern Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          {/* Simple Prompt */}
<div className="text-center mt-12">
  <p className="text-gray-600 text-lg mb-4">
    Didn't find your answer? Our team is ready to help.
  </p>
  <a 
    href="/contact" 
    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-lg"
  >
    Contact Our Research Team
    <ArrowRight className="w-5 h-5" />
  </a>
</div>
        </motion.div>
      </div>
    </div>
  )
}

function getCategoryIcon(category: string) {
  const iconClass = "w-6 h-6"
  
  switch (category) {
    case "Research & Innovation":
      return <FlaskConical className={`${iconClass} text-purple-600`} />
    case "Team & Collaboration":
      return <Users className={`${iconClass} text-blue-600`} />
    case "Partnerships & Funding":
      return <Heart className={`${iconClass} text-pink-600`} />
    default:
      return <Dna className={`${iconClass} text-purple-600`} />
  }
}