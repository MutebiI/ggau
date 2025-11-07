'use client'
import { motion } from 'framer-motion'
import { Factory, Microscope, FlaskConical, Target, Building, Users, ArrowRight } from 'lucide-react'

export default function UMPR() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <Factory className="w-5 h-5" />
              <span className="text-sm font-semibold">National Initiative</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Uganda Medical Production
              <span className="block text-blue-300">Revolution</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A transformative national initiative to establish Uganda's self-reliance in pharmaceutical and laboratory manufacturing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-blue-50 transition-all"
              >
                Support UMPR
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white/30 transition-all"
              >
                Partner With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Uganda's Medical Industry
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The <span className="text-blue-600 font-semibold">Uganda Medical Production Revolution (UMPR)</span> is a landmark initiative spearheaded by Ugandan innovators to localize medical, pharmaceutical, and laboratory manufacturing capacity.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Inspired by Singapore's biomedical model, UMPR aims to establish Uganda as a regional production and innovation hub for medical and diagnostic products, reducing dependency on imports and creating sustainable healthcare solutions.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-semibold">Budget: UGX 36 Billion</p>
                <p className="text-blue-700 text-sm mt-2">For Vacutainer Tube Factory at Nakasongola Industrial Hub</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 h-96 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <Factory className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl font-semibold">Medical Manufacturing</p>
                <p className="text-blue-100 text-sm mt-2">Local Production Hub</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Objectives</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Building Uganda's capacity in medical production and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ObjectiveCard
              icon={<Factory className="w-8 h-8" />}
              title="Local Production"
              description="Strengthen local manufacturing of medical supplies and diagnostic products"
            />
            <ObjectiveCard
              icon={<Microscope className="w-8 h-8" />}
              title="Research Innovation"
              description="Promote research-to-industry linkages between universities and innovators"
            />
            <ObjectiveCard
              icon={<Target className="w-8 h-8" />}
              title="Self-Reliance"
              description="Enhance Uganda's independence in biotechnology and pharmaceuticals"
            />
            <ObjectiveCard
              icon={<Users className="w-8 h-8" />}
              title="Employment Creation"
              description="Create skilled employment opportunities in the biomedical sector"
            />
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Components
            </h2>
            <p className="text-xl text-gray-600">Key pillars of the UMPR initiative</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              National Partners
            </h2>
            <p className="text-xl text-gray-600">Strategic collaborations driving UMPR forward</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
              >
                <Building className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 text-sm">{partner}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Medical Production Revolution
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Be part of Uganda's journey towards healthcare sovereignty and medical innovation.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Involved <ArrowRight className="w-5 h-5" />
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
      className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30 text-center hover:bg-blue-800/70 transition-colors"
    >
      <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-blue-200 text-sm">{description}</p>
    </motion.div>
  )
}

function ComponentCard({ number, title, description, budget }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:border-blue-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
            {budget}
          </div>
        </div>
      </div>
    </motion.div>
  )
}