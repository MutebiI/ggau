'use client'
import { motion } from 'framer-motion'
import { Factory, Microscope, FlaskConical, Target, Building, Users, ArrowRight } from 'lucide-react'

export default function UMPR() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
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
              <Factory className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-semibold">National Initiative</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Uganda Medical Production
              <span className="block text-blue-300 mt-2">Revolution</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
              A transformative national initiative to establish Uganda's self-reliance in pharmaceutical and laboratory manufacturing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-12 px-4">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:bg-blue-50 transition-all w-full sm:w-auto text-sm md:text-base"
              >
                Support UMPR
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:bg-white/30 transition-all w-full sm:w-auto text-sm md:text-base"
              >
                Partner With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
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
                Revolutionizing Uganda's Medical Industry
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                The <span className="text-blue-600 font-semibold">Uganda Medical Production Revolution (UMPR)</span> is a landmark initiative spearheaded by Ugandan innovators to localize medical, pharmaceutical, and laboratory manufacturing capacity.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Inspired by Singapore's biomedical model, UMPR aims to establish Uganda as a regional production and innovation hub for medical and diagnostic products, reducing dependency on imports and creating sustainable healthcare solutions.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 rounded-r-lg">
                <p className="text-blue-800 font-semibold text-sm md:text-base">Budget: UGX 36 Billion</p>
                <p className="text-blue-700 text-xs md:text-sm mt-2">For Vacutainer Tube Factory at Nakasongola Industrial Hub</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 md:p-8 h-64 md:h-96 flex items-center justify-center w-full"
            >
              <div className="text-center text-white">
                <Factory className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
                <p className="text-lg md:text-xl font-semibold">Medical Manufacturing</p>
                <p className="text-blue-100 text-xs md:text-sm mt-2">Local Production Hub</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-12 md:py-20 bg-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Strategic Objectives</h2>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto px-4">
              Building Uganda's capacity in medical production and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-full">
            <ObjectiveCard
              icon={<Factory className="w-6 h-6 md:w-8 md:h-8" />}
              title="Local Production"
              description="Strengthen local manufacturing of medical supplies and diagnostic products"
            />
            <ObjectiveCard
              icon={<Microscope className="w-6 h-6 md:w-8 md:h-8" />}
              title="Research Innovation"
              description="Promote research-to-industry linkages between universities and innovators"
            />
            <ObjectiveCard
              icon={<Target className="w-6 h-6 md:w-8 md:h-8" />}
              title="Self-Reliance"
              description="Enhance Uganda's independence in biotechnology and pharmaceuticals"
            />
            <ObjectiveCard
              icon={<Users className="w-6 h-6 md:w-8 md:h-8" />}
              title="Employment Creation"
              description="Create skilled employment opportunities in the biomedical sector"
            />
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Core Components
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">Key pillars of the UMPR initiative</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-full">
            <ComponentCard
              number="1"
              title="Vacutainer Tube Factory"
              description="Establishment of a local factory at Nakasongola Industrial Hub to manufacture blood collection tubes and laboratory consumables"
              budget="UGX 36 Billion"
            />
            <ComponentCard
              number="2"
              title="AI-Integrated Diagnostics"
              description="Developing hybrid manual-AI systems to modernize Uganda's medical testing infrastructure"
              budget="Advanced Technology"
            />
            <ComponentCard
              number="3"
              title="Medicinal Research"
              description="Drug discovery projects using indigenous medicinal plants (Ocimum gratissimum and Tamarindus indica)"
              budget="Research & Development"
            />
            <ComponentCard
              number="4"
              title="Partnership Framework"
              description="Collaboration with leading universities to strengthen research capacity and innovation"
              budget="Multi-Institutional"
            />
          </div>
        </div>
      </section>

      {/* National Partners */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              National Partners
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">Strategic collaborations driving UMPR forward</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-full">
            {[
              'Office of the President',
              'Uganda Investment Authority',
              'Ministry of Science & Technology', 
              'Makerere University',
              'Healthviber Diagnostics'
            ].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow w-full"
              >
                <Building className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-gray-900 text-xs md:text-sm leading-tight">{partner}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
              Join the Medical Production Revolution
            </h2>
            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Be part of Uganda's journey towards healthcare sovereignty and medical innovation.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 md:gap-3 bg-white text-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm md:text-base"
            >
              Get Involved <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ObjectiveCard({ icon, title, description }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-700/30 text-center hover:bg-blue-800/70 transition-colors w-full"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{title}</h3>
      <p className="text-blue-200 text-xs md:text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

function ComponentCard({ number, title, description, budget }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:border-blue-300 group w-full"
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-lg md:text-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">{title}</h3>
          <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{description}</p>
          <div className="bg-blue-50 text-blue-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold inline-block">
            {budget}
          </div>
        </div>
      </div>
    </motion.div>
  )
}