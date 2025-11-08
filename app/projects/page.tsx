'use client'
import { motion } from 'framer-motion'
import { FlaskConical, Microscope, Dna, Heart, Brain, TestTube, ArrowRight, Calendar, Users, Target } from 'lucide-react'
import { ReactNode } from 'react'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section - New Design */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Scientific Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 md:gap-4 bg-white/15 backdrop-blur-lg rounded-2xl px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 mb-8 md:mb-12 border border-white/25 shadow-2xl max-w-full mx-2"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <FlaskConical className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm md:text-base lg:text-lg font-bold text-emerald-200 leading-tight">Cutting-Edge Research</div>
                <div className="text-xs md:text-sm text-cyan-100 leading-tight">Transforming Healthcare Through Innovation</div>
              </div>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight px-2">
              Pioneering
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mt-2">
                Research Projects
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl lg:text-3xl mb-8 md:mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Advancing <span className="text-emerald-300 font-semibold">genomics</span>, developing <span className="text-cyan-300 font-semibold">therapeutics</span>, and building <span className="text-teal-300 font-semibold">healthcare solutions</span> for Africa
            </p>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto mt-8 md:mt-16 px-4"
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
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Featured <span className="text-emerald-600">Research</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Groundbreaking projects addressing Africa's most pressing healthcare challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-full">
            <ProjectCard
              icon={<TestTube className="w-6 h-6 md:w-8 md:h-8" />}
              title="Ocimum gratissimum Hepatoprotective Study"
              description="Investigating the liver-protective properties of African basil for drug development"
              status="Phase 2"
              progress={65}
              color="emerald"
              team={8}
            />
            <ProjectCard
              icon={<Dna className="w-6 h-6 md:w-8 md:h-8" />}
              title="Tamarindus indica Prostate Cancer Research"
              description="Exploring tamarind compounds for targeted prostate cancer therapy"
              status="Phase 1"
              progress={35}
              color="teal"
              team={12}
            />
            <ProjectCard
              icon={<Brain className="w-6 h-6 md:w-8 md:h-8" />}
              title="AI Diagnostics Integration"
              description="Developing hybrid AI systems for rapid medical diagnosis in rural areas"
              status="Development"
              progress={80}
              color="cyan"
              team={6}
            />
            <ProjectCard
              icon={<Heart className="w-6 h-6 md:w-8 md:h-8" />}
              title="Blood Donation Genomics"
              description="Genetic markers for improved blood transfusion compatibility in African populations"
              status="Data Analysis"
              progress={45}
              color="rose"
              team={10}
            />
            <ProjectCard
              icon={<Microscope className="w-6 h-6 md:w-8 md:h-8" />}
              title="Pharmacogenomics Africa"
              description="Personalized medicine based on African genetic variations in drug metabolism"
              status="Phase 3"
              progress={90}
              color="violet"
              team={15}
            />
            <ProjectCard
              icon={<Target className="w-6 h-6 md:w-8 md:h-8" />}
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
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Research <span className="text-emerald-600">Domains</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Specialized areas of focus in genetics and medical innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-full">
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
              icon={<Microscope className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />}
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
              icon={<FlaskConical className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />}
              color="teal"
            />
          </div>
        </div>
      </section>

      {/* Professional Research Partnership */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 px-2">
              Advance <span className="text-cyan-300">Medical Research</span> With Us
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-emerald-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Explore partnership opportunities to accelerate healthcare innovation and transform patient outcomes across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-white text-emerald-700 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg w-full sm:w-auto text-sm md:text-base"
              >
                <span>Explore Partnerships</span>
                <Users className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-transparent text-white border-2 border-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-sm md:text-base"
              >
                <span>View Opportunities</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
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
      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">{number}</div>
      <div className="text-xs md:text-sm text-emerald-200 font-medium leading-tight">{label}</div>
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
      className={`bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg border-2 border-gray-200 ${bgStyles[color]} transition-all duration-300 group cursor-pointer w-full`}
    >
      <div className="flex items-start justify-between mb-4 md:mb-6">
        <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${colorStyles[color]} rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
          {icon}
        </div>
        <div className="text-right ml-2">
          <span className={`inline-block px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold ${colorStyles[color]} text-white`}>
            {status}
          </span>
          <div className="text-xs md:text-sm text-gray-500 mt-1">{team} researchers</div>
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-gray-800 transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
        {description}
      </p>

      {/* Progress Bar */}
      <div className="mb-3 md:mb-4">
        <div className="flex justify-between text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 md:h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-1 md:h-2 rounded-full ${colorStyles[color]}`}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
          <span>Active</span>
        </div>
        <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1">
          Learn More <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
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
      className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 w-full"
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${colorStyles[color]} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 flex-shrink-0`}>
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{description}</p>
      
      <div className="space-y-2 md:space-y-3">
        <h4 className="font-semibold text-gray-900 text-sm md:text-base">Key Areas:</h4>
        <ul className="space-y-1 md:space-y-2">
          {tests.map((test: string, index: number) => (
            <motion.li
              key={test}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 md:gap-3 text-gray-600 text-xs md:text-sm"
            >
              <div className={`w-1.5 h-1.5 md:w-2 md:h-2 ${colorStyles[color].split(' ')[1]} rounded-full flex-shrink-0`} />
              <span className="leading-tight">{test}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}