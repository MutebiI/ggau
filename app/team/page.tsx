'use client'
import { motion } from 'framer-motion'
import { Award, GraduationCap, BookOpen, Users, Target, Microscope, FlaskConical, Dna, Brain, Heart, ArrowRight, Building2, Calendar, BarChart3 } from 'lucide-react'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-4 bg-white/15 backdrop-blur-lg rounded-2xl px-8 py-5 mb-12 border border-white/25 shadow-2xl"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-purple-200">Scientific Excellence</div>
                <div className="text-sm text-pink-100">Leading Researchers & Innovators</div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our Scientific
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Leadership
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light">
              Pioneering minds driving <span className="text-purple-300 font-semibold">genomics innovation</span> and <span className="text-pink-300 font-semibold">medical research</span> across Africa
            </p>

            {/* Expertise Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16"
            >
              <ExpertiseStat number="50+" label="Years Combined Experience" icon={<Award className="w-6 h-6" />} />
              <ExpertiseStat number="15+" label="Advanced Degrees" icon={<GraduationCap className="w-6 h-6" />} />
              <ExpertiseStat number="100+" label="Publications" icon={<BookOpen className="w-6 h-6" />} />
              <ExpertiseStat number="8" label="Research Domains" icon={<Target className="w-6 h-6" />} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core <span className="text-purple-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visionary leaders and experts driving our research initiatives forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Mr. Mwesige Nelson"
              role="Founder & Chief Executive Officer"
              education="MBA Public Health Management"
              experience="24+ Years in Medical Diagnostics"
              expertise={["Medical Innovation", "Genomics Research", "Healthcare Entrepreneurship"]}
              achievements={["DNA Awareness Pioneer", "UMPR Lead Innovator", "Healthviber Diagnostics Founder"]}
              icon={<Dna className="w-8 h-8" />}
              color="purple"
            />
            <TeamMember
              name="Dr. Ogaram David"
              role="Research Lead & Senior Scientist"
              education="PhD in Molecular Biology"
              experience="15+ Years Research Experience"
              expertise={["Drug Discovery", "Clinical Trials", "Molecular Diagnostics"]}
              achievements={["20+ Publications", "International Collaborations", "Patent Holder"]}
              icon={<FlaskConical className="w-8 h-8" />}
              color="pink"
            />
            <TeamMember
              name="Sr. Namutebi Erinah"
              role="Principal Investigator - Pediatric Genetics"
              education="MSc Medical Genetics"
              experience="12+ Years Clinical Genetics"
              expertise={["Pediatric Genomics", "Genetic Counseling", "Rare Diseases"]}
              achievements={["Community Health Programs", "Genetic Education", "Research Mentorship"]}
              icon={<Heart className="w-8 h-8" />}
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* Team Expertise Matrix */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Team <span className="text-purple-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive capabilities across genetics and medical research domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Expertise Areas */}
            <div className="space-y-6">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Credentials</h3>
              <div className="space-y-6">
                <CredentialItem
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Peer-Reviewed Publications"
                  count="100+"
                  description="In international scientific journals"
                />
                <CredentialItem
                  icon={<Award className="w-6 h-6" />}
                  title="Research Grants"
                  count="$2.5M+"
                  description="Competitively awarded funding"
                />
                <CredentialItem
                  icon={<Building2 className="w-6 h-6" />}
                  title="University Partnerships"
                  count="8+"
                  description="Collaborations with leading institutions"
                />
                <CredentialItem
                  icon={<Calendar className="w-6 h-6" />}
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advisory & <span className="text-purple-600">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading institutions and experts worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* University Partners */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">University Collaborations</h3>
              <div className="grid grid-cols-2 gap-4">
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
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <Building2 className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">{university}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* International Partners */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">International Partners</h3>
              <div className="space-y-4">
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
      <section className="py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join Our <span className="text-pink-300">Research Team</span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contribute to groundbreaking genetics research and help transform healthcare in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-white text-purple-700 px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                <span>View Opportunities</span>
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-transparent text-white border-2 border-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300"
              >
                <span>Submit CV</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-purple-200 font-medium">{label}</div>
    </motion.div>
  )
}

// Team Member Component (No Photo)
function TeamMember({ name, role, education, experience, expertise, achievements, icon, color }: TeamMemberProps) {
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
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 ${colorStyles[color]} rounded-2xl flex items-center justify-center text-white`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{name}</h3>
          <p className="text-purple-600 font-semibold">{role}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <GraduationCap className="w-4 h-4" />
          <span>{education}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Award className="w-4 h-4" />
          <span>{experience}</span>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill: string, index: number) => (
            <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {achievements.map((achievement: string, index: number) => (
            <li key={achievement} className="flex items-start gap-2">
              <div className={`w-1.5 h-1.5 ${colorStyles[color]} rounded-full mt-2 flex-shrink-0`} />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
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
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="text-sm font-semibold text-gray-500">{projects} projects</span>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Team Proficiency</span>
          <span>{proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-2 rounded-full ${colorStyles[color]}`}
          />
        </div>
      </div>
      
      <p className="text-sm text-gray-600">{description}</p>
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
      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
        {icon}
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">{count}</span>
          <span className="text-lg font-semibold text-gray-700">{title}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
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
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{focus}</p>
      </div>
      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
        {location}
      </span>
    </motion.div>
  )
}