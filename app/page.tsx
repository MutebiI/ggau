// app/page.tsx - HOME PAGE
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Microscope, Heart, Dna } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with DNA Animation */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">
        <DNABackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Uganda through
              <span className="block text-blue-200">Genetics, Genomics</span>
              <span className="block">and Medical Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transforming healthcare through cutting-edge research, local pharmaceutical production, 
              and sustainable medical solutions for Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                Explore Our Research <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/umpr"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                UMPR Initiative <FlaskConical className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driving medical innovation and healthcare transformation across Uganda and Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InitiativeCard
              icon={<FlaskConical className="w-8 h-8" />}
              title="Uganda Medical Production Revolution"
              description="Establishing local pharmaceutical manufacturing to reduce dependency on imports and ensure affordable healthcare."
              link="/umpr"
              color="blue"
            />
            <InitiativeCard
              icon={<Microscope className="w-8 h-8" />}
              title="African Pillar Initiative"
              description="A continental vision to transform Africa into a biotechnology and medical innovation hub."
              link="/african-pillar-initiative"
              color="green"
            />
            <InitiativeCard
              icon={<Dna className="w-8 h-8" />}
              title="Genomics Research"
              description="Cutting-edge research in genetics, drug discovery, and personalized medicine for African populations."
              link="/projects"
              color="purple"
            />
          </div>
        </div>
      </section>
      {/* Scientific Credibility - For Funders */}
{/* Scientific Credibility - For Funders - UPDATED WITH GREEN */}
<section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Trusted Scientific Leadership
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Decades of combined expertise driving Uganda's healthcare transformation
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transition-shadow">
        <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
        <div className="text-gray-700 font-semibold">Years Medical Experience</div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transition-shadow">
        <div className="text-3xl font-bold text-emerald-600 mb-2">PhD</div>
        <div className="text-gray-700 font-semibold">London-Trained Scientists</div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transition-shadow">
        <div className="text-3xl font-bold text-emerald-600 mb-2">8+</div>
        <div className="text-gray-700 font-semibold">University Partnerships</div>
      </div>
    </div>
  </div>
</section>

{/* Urgent Problem Statement - UPDATED WITH GREEN */}
<section className="py-20 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Solving Africa's Healthcare Challenges
    </h2>
    <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
      Uganda imports over 90% of its medical supplies. We're changing that through local innovation, 
      reducing costs, and building sustainable healthcare infrastructure for future generations.
    </p>
    <motion.a
      href="/about"
      whileHover={{ scale: 1.05 }}
      className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors"
    >
      Our Impact Story <ArrowRight className="w-5 h-5" />
    </motion.a>
  </div>
</section>

{/* Funders/Partners Call-to-Action - UPDATED WITH GREEN */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Join Our Mission
    </h2>
    <p className="text-xl text-gray-600 mb-8">
      Partner with us to transform healthcare in Uganda through sustainable innovation
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Become a Partner
      </motion.a>
      <motion.a
        href="/ask-ggau"
        whileHover={{ scale: 1.05 }}
        className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
      >
        Ask Questions
      </motion.a>
    </div>
  </div>
</section>
    </div>
  )
}

// Free component - no external dependencies
function DNABackground() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute animate-float" style={{ animationDuration: '20s' }}>
        <Dna className="w-64 h-64 text-white" />
      </div>
    </div>
  )
}

// Fixed InitiativeCard Component
function InitiativeCard({ icon, title, description, link, color }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string; 
  color: string; 
}) {
  const colors: { [key: string]: string } = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600', 
    purple: 'bg-purple-100 text-purple-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-200"
    >
      <div className={`w-16 h-16 ${colors[color]} rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href={link} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
        Learn More →
      </a>
    </motion.div>
  )
}