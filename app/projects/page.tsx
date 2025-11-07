'use client'
import { motion } from 'framer-motion'
import { FlaskConical, Microscope, Dna, Heart, Brain, TestTube, ArrowRight, Calendar, Users, Target } from 'lucide-react'
import { ReactNode } from 'react'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - New Design */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Scientific Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-4 bg-white/15 backdrop-blur-lg rounded-2xl px-8 py-5 mb-12 border border-white/25 shadow-2xl"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-emerald-200">Cutting-Edge Research</div>
                <div className="text-sm text-cyan-100">Transforming Healthcare Through Innovation</div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Pioneering
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Research Projects
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light">
              Advancing <span className="text-emerald-300 font-semibold">genomics</span>, developing <span className="text-cyan-300 font-semibold">therapeutics</span>, and building <span className="text-teal-300 font-semibold">healthcare solutions</span> for Africa
            </p>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16"
            >
              <StatCard number="8+" label="Active Projects" delay={0.1} />
              <StatCard number="15+" label="Researchers" delay={0.2} />
              <StatCard number="3" label="Continents" delay={0.3} />
              <StatCard number="2021" label="Since" delay={0.4} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Card Grid with Hover Effects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-emerald-600">Research</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Groundbreaking projects addressing Africa's most pressing healthcare challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProjectCard
              icon={<TestTube className="w-8 h-8" />}
              title="Ocimum gratissimum Hepatoprotective Study"
              description="Investigating the liver-protective properties of African basil for drug development"
              status="Phase 2"
              progress={65}
              color="emerald"
              team={8}
            />
            <ProjectCard
              icon={<Dna className="w-8 h-8" />}
              title="Tamarindus indica Prostate Cancer Research"
              description="Exploring tamarind compounds for targeted prostate cancer therapy"
              status="Phase 1"
              progress={35}
              color="teal"
              team={12}
            />
            <ProjectCard
              icon={<Brain className="w-8 h-8" />}
              title="AI Diagnostics Integration"
              description="Developing hybrid AI systems for rapid medical diagnosis in rural areas"
              status="Development"
              progress={80}
              color="cyan"
              team={6}
            />
            <ProjectCard
              icon={<Heart className="w-8 h-8" />}
              title="Blood Donation Genomics"
              description="Genetic markers for improved blood transfusion compatibility in African populations"
              status="Data Analysis"
              progress={45}
              color="rose"
              team={10}
            />
            <ProjectCard
              icon={<Microscope className="w-8 h-8" />}
              title="Pharmacogenomics Africa"
              description="Personalized medicine based on African genetic variations in drug metabolism"
              status="Phase 3"
              progress={90}
              color="violet"
              team={15}
            />
            <ProjectCard
              icon={<Target className="w-8 h-8" />}
              title="Malaria Resistance Genomics"
              description="Identifying genetic factors in natural immunity to malaria"
              status="Publication"
              progress={100}
              color="amber"
              team={9}
            />
          </div>
        </div>
      </section>

      {/* Research Areas - Interactive Tabs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research <span className="text-emerald-600">Domains</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized areas of focus in genetics and medical innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Diagnostic Research */}
            <ResearchDomain
              title="Diagnostic Genetics"
              description="Advanced testing methods for early disease detection and prevention"
              tests={[
                "Whole Genome Sequencing",
                "Pharmacogenomics Testing",
                "Carrier Screening",
                "Predictive Genetic Testing"
              ]}
              icon={<Microscope className="w-12 h-12" />}
              color="emerald"
            />
            
            {/* Therapeutic Research */}
            <ResearchDomain
              title="Therapeutic Development"
              description="Drug discovery and development from African medicinal plants"
              tests={[
                "Plant Compound Analysis",
                "Clinical Trial Design",
                "Drug Formulation",
                "Safety Profiling"
              ]}
              icon={<FlaskConical className="w-12 h-12" />}
              color="teal"
            />
          </div>
        </div>
      </section>

      {/* Professional Research Partnership */}
      <section className="py-24 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Advance <span className="text-cyan-300">Medical Research</span> With Us
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore partnership opportunities to accelerate healthcare innovation and transform patient outcomes across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-white text-emerald-700 px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                <span>Explore Partnerships</span>
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-transparent text-white border-2 border-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300"
              >
                <span>View Opportunities</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Fixed Stat Card Component
function StatCard({ number, label, delay }: { 
  number: string; 
  label: string; 
  delay: number; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-sm text-emerald-200 font-medium">{label}</div>
    </motion.div>
  )
}

// Fixed Project Card with Progress
function ProjectCard({ icon, title, description, status, progress, color, team }: { 
  icon: ReactNode; 
  title: string; 
  description: string; 
  status: string; 
  progress: number; 
  color: string; 
  team: number; 
}) {
  const colorStyles: { [key: string]: string } = {
    emerald: 'bg-emerald-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    rose: 'bg-rose-500',
    violet: 'bg-violet-500',
    amber: 'bg-amber-500'
  }

  const bgStyles: { [key: string]: string } = {
    emerald: 'hover:border-emerald-300',
    teal: 'hover:border-teal-300',
    cyan: 'hover:border-cyan-300',
    rose: 'hover:border-rose-300',
    violet: 'hover:border-violet-300',
    amber: 'hover:border-amber-300'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className={`bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 ${bgStyles[color]} transition-all duration-300 group cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 ${colorStyles[color]} rounded-xl flex items-center justify-center text-white`}>
          {icon}
        </div>
        <div className="text-right">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colorStyles[color]} text-white`}>
            {status}
          </span>
          <div className="text-sm text-gray-500 mt-1">{team} researchers</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-2 rounded-full ${colorStyles[color]}`}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>Active</span>
        </div>
        <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1">
          Learn More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

// Fixed Research Domain Component
function ResearchDomain({ title, description, tests, icon, color }: { 
  title: string; 
  description: string; 
  tests: string[]; 
  icon: ReactNode; 
  color: string; 
}) {
  const colorStyles: { [key: string]: string } = {
    emerald: 'text-emerald-600 bg-emerald-100',
    teal: 'text-teal-600 bg-teal-100'
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-16 h-16 ${colorStyles[color]} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Key Areas:</h4>
        <ul className="space-y-2">
          {tests.map((test: string, index: number) => (
            <motion.li
              key={test}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-600"
            >
              <div className={`w-2 h-2 ${colorStyles[color].split(' ')[1]} rounded-full`} />
              {test}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}