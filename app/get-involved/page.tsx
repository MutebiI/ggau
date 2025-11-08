'use client'
import { motion } from 'framer-motion'
import { Users, GraduationCap, Heart, Target, ArrowRight, Mail, Phone, Building2, Microscope, FlaskConical, BookOpen, Shield, Globe, Zap, HeartHandshake } from 'lucide-react'
import { ReactNode } from 'react'

export default function GetInvolved() {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-16 md:py-24 overflow-hidden">
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
              <HeartHandshake className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-semibold">Join Our Mission</span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Get Involved with
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mt-2">
                GGAU
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-emerald-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Partner with us to advance genomics research, build healthcare capacity, and transform medical innovation across Africa
            </p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-700 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 shadow-lg mx-auto"
            >
              <Mail className="w-5 h-5" />
              Start Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Engagement Pathways */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Pathways to <span className="text-emerald-600">Engagement</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover multiple ways to contribute to groundbreaking genetics research and healthcare innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-full">
            <EngagementCard
              icon={<Microscope className="w-6 h-6 md:w-8 md:h-8" />}
              title="Research Collaboration"
              description="Partner with our scientific team on cutting-edge genomics projects, clinical trials, and drug discovery initiatives"
              audience="Universities, Research Institutions, Pharmaceutical Companies"
              benefits={[
                "Access to African genetic data",
                "Joint publication opportunities", 
                "Clinical trial partnerships",
                "Technology transfer"
              ]}
              color="emerald"
              contactSubject="Research Collaboration Inquiry"
            />
            <EngagementCard
              icon={<Building2 className="w-6 h-6 md:w-8 md:h-8" />}
              title="Academic Partnerships"
              description="Establish formal partnerships for student exchanges, joint degrees, and capacity building programs"
              audience="Universities, Colleges, Training Institutions"
              benefits={[
                "Student internship programs",
                "Faculty exchange opportunities",
                "Curriculum development",
                "Research mentorship"
              ]}
              color="blue"
              contactSubject="Academic Partnership Inquiry"
            />
            <EngagementCard
              icon={<Zap className="w-6 h-6 md:w-8 md:h-8" />}
              title="Investment Opportunities"
              description="Support sustainable growth through strategic investments in infrastructure, technology, and research programs"
              audience="Investors, Donors, Philanthropic Organizations"
              benefits={[
                "Medical equipment funding",
                "Research infrastructure", 
                "Technology acquisition",
                "Capacity building initiatives"
              ]}
              color="purple"
              contactSubject="Investment Opportunity Inquiry"
            />
            <EngagementCard
              icon={<GraduationCap className="w-6 h-6 md:w-8 md:h-8" />}
              title="Career Development"
              description="Join our team through fellowships, internships, and research positions in genetics and biotechnology"
              audience="Students, Researchers, Healthcare Professionals"
              benefits={[
                "Research fellowships",
                "Laboratory internships",
                "PhD opportunities",
                "Post-doctoral positions"
              ]}
              color="amber"
              contactSubject="Career Opportunity Inquiry"
            />
            <EngagementCard
              icon={<Heart className="w-6 h-6 md:w-8 md:h-8" />}
              title="Volunteer Programs"
              description="Contribute your skills and time to support community outreach, education, and research activities"
              audience="Professionals, Students, Community Members"
              benefits={[
                "Community health outreach",
                "Scientific communication",
                "Event organization", 
                "Data analysis support"
              ]}
              color="rose"
              contactSubject="Volunteer Program Inquiry"
            />
            <EngagementCard
              icon={<Shield className="w-6 h-6 md:w-8 md:h-8" />}
              title="Equipment & Resource Support"
              description="Donate laboratory equipment, books, or resources to enhance our research capabilities"
              audience="Companies, Institutions, Individuals"
              benefits={[
                "Laboratory equipment",
                "Scientific literature",
                "Computing resources",
                "Research materials"
              ]}
              color="teal"
              contactSubject="Resource Support Inquiry"
            />
          </div>
        </div>
      </section>

      {/* Current Priority Initiatives */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Current <span className="text-emerald-600">Priority Initiatives</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Focus areas where your support can make immediate impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-full">
            <InitiativeCard
              title="Uganda Medical Production Revolution"
              description="Establishing local manufacturing capacity for medical supplies and laboratory consumables"
              status="Active"
              progress={65}
              needs={["Equipment Funding", "Technical Expertise", "Industry Partnerships"]}
            />
            <InitiativeCard
              title="African Genomics Database"
              description="Building comprehensive genetic database for African populations to advance personalized medicine"
              status="Development" 
              progress={40}
              needs={["Computing Resources", "Data Scientists", "Storage Infrastructure"]}
            />
            <InitiativeCard
              title="Medicinal Plant Research"
              description="Investigating indigenous plants for drug discovery and therapeutic development"
              status="Research"
              progress={75}
              needs={["Laboratory Equipment", "Research Funding", "Botanical Experts"]}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              Partnership <span className="text-emerald-600">Success Stories</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See how collaboration drives impact in African healthcare innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-full">
            <SuccessStory
              partner="Makerere University College of Health Sciences"
              collaboration="Joint Research on Genetic Markers for Malaria Resistance"
              outcome="Published 3 papers, trained 15 graduate students, secured $500K follow-up funding"
              duration="2022-Present"
            />
            <SuccessStory
              partner="Lifenity Genomics Laboratory, UAE"
              collaboration="Technology Transfer and Capacity Building"
              outcome="Established advanced sequencing capabilities, trained 8 Ugandan scientists"
              duration="2023-Present"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-section" className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 px-2">
              Ready to Make <span className="text-emerald-300">Impact?</span>
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Let's discuss how you can contribute to advancing genetics research and healthcare innovation in Africa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <motion.a
                href="mailto:mwesinelie@yahoo.com?subject=GGAU Partnership Inquiry&body=Hello GGAU Team, I'm interested in learning more about partnership opportunities."
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-white text-emerald-700 px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:shadow-2xl transition-all duration-300 shadow-lg w-full sm:w-auto text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Email Our Team
              </motion.a>
              
              <motion.a
                href="tel:+256760051963"
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-transparent text-white border-2 border-white px-6 py-4 md:px-10 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 md:gap-4 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call Us Directly
              </motion.a>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
              <ContactInfo
                icon={<Mail className="w-4 h-4 md:w-5 md:h-5" />}
                label="Email"
                value="mwesinelie@yahoo.com"
              />
              <ContactInfo
                icon={<Phone className="w-4 h-4 md:w-5 md:h-5" />}
                label="Phone"
                value="+256 760 051963"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Engagement Card Component
interface EngagementCardProps {
  icon: ReactNode
  title: string
  description: string
  audience: string
  benefits: string[]
  color: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose' | 'teal'
  contactSubject: string
}

function EngagementCard({ icon, title, description, audience, benefits, color, contactSubject }: EngagementCardProps) {
  const colorStyles = {
    emerald: 'bg-emerald-500 hover:border-emerald-300',
    blue: 'bg-blue-500 hover:border-blue-300', 
    purple: 'bg-purple-500 hover:border-purple-300',
    amber: 'bg-amber-500 hover:border-amber-300',
    rose: 'bg-rose-500 hover:border-rose-300',
    teal: 'bg-teal-500 hover:border-teal-300'
  }

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer w-full"
    >
      <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
        <div className={`w-10 h-10 md:w-12 md:h-12 ${colorStyles[color]} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-emerald-600 font-semibold text-xs md:text-sm mt-1 leading-tight">
            For: {audience}
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-4 md:mb-6">
        <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2 md:mb-3">Key Benefits:</h4>
        <ul className="space-y-1 md:space-y-2">
          {benefits.map((benefit, index) => (
            <motion.li
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-600 text-xs md:text-sm"
            >
              <div className={`w-1.5 h-1.5 ${colorStyles[color].split(' ')[0]} rounded-full flex-shrink-0`} />
              <span className="leading-tight">{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.button
        onClick={scrollToContact}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gray-100 text-gray-700 py-2 md:py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-200 text-sm md:text-base"
      >
        Discuss {title.split(' ')[0]}
        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
      </motion.button>
    </motion.div>
  )
}

// Initiative Card Component
interface InitiativeCardProps {
  title: string
  description: string
  status: string
  progress: number
  needs: string[]
}

function InitiativeCard({ title, description, status, progress, needs }: InitiativeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 w-full"
    >
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <span className="text-xs md:text-sm font-semibold text-gray-700">Status: {status}</span>
        <span className="text-xs md:text-sm font-semibold text-emerald-600">{progress}% Complete</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4 md:mb-6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-2 rounded-full bg-emerald-500"
        />
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2 md:mb-3">Current Needs:</h4>
        <div className="flex flex-wrap gap-1 md:gap-2">
          {needs.map((need, index) => (
            <span key={need} className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
              {need}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Success Story Component
interface SuccessStoryProps {
  partner: string
  collaboration: string
  outcome: string
  duration: string
}

function SuccessStory({ partner, collaboration, outcome, duration }: SuccessStoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 md:p-6 rounded-2xl border border-emerald-200 w-full"
    >
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
          <Users className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{partner}</h3>
          <p className="text-emerald-600 text-xs md:text-sm mt-1">{duration}</p>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Collaboration:</h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">{collaboration}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Outcomes:</h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">{outcome}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Contact Info Component
interface ContactInfoProps {
  icon: ReactNode
  label: string
  value: string
}

function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white/80 text-xs md:text-sm">{label}</p>
        <p className="text-white font-semibold text-sm md:text-base break-all">{value}</p>
      </div>
    </motion.div>
  )
}