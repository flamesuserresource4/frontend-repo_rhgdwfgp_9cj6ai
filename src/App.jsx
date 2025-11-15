import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Github, Mail, ArrowRight, Smartphone, Cpu, Database, Globe, MapPin, ExternalLink } from 'lucide-react'

const skills = [
  { group: 'Programming Languages', items: ['Java', 'JavaScript', 'Python'] },
  { group: 'Frameworks', items: ['React', 'React Native', 'Node.js', 'Android'] },
  { group: 'Databases & APIs', items: ['Firebase', 'Supabase', 'MongoDB', 'Google Drive API'] },
  { group: 'Version Control', items: ['GitHub (active)'] },
]

const projects = [
  {
    title: 'AI Trip Planner App',
    description: 'Smart travel planner that leverages AI to organize trips, itineraries, and budgets.',
    tags: ['React Native', 'AI', 'Maps'],
    link: '#',
  },
  {
    title: 'Restaurant Management System',
    description: 'End-to-end system for managing restaurant operations, menus, and orders.',
    tags: ['Node.js', 'MongoDB', 'React'],
    link: '#',
  },
  {
    title: 'Food/Grocery Delivery App',
    description: 'Real-time delivery tracking with map integration and push notifications.',
    tags: ['React Native', 'Firebase', 'Maps'],
    link: '#',
  },
  {
    title: 'Fitness Food Tracker App',
    description: 'Track meals, macros, and fitness goals with clean, intuitive UX.',
    tags: ['Android', 'Java', 'Firebase'],
    link: '#',
  },
]

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-gray-900 tracking-tight">Mohamed M. Nour</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#skills" className="hover:text-gray-900 transition">Skills</a>
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </nav>
        <a href="#contact" className="md:inline-flex hidden items-center gap-2 text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Get in touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-2 items-center gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-gray-900 text-white/90">
            <Cpu className="h-3.5 w-3.5" /> Full Stack Developer
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Mohamed Mohamud Nour
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            I build responsive and scalable web and mobile applications. Passionate about AI, clean code, and creating seamless user experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow transition">
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2"><Smartphone className="h-4 w-4" /> Mobile-first</span>
            <span className="inline-flex items-center gap-2"><Database className="h-4 w-4" /> Data-driven</span>
            <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4" /> Scalable</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:justify-self-end">
          <div className="relative bg-white/70 backdrop-blur border border-white/60 rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-semibold">MN</div>
              <div>
                <p className="text-sm text-gray-500">Based in</p>
                <p className="flex items-center gap-2 font-medium text-gray-900"><MapPin className="h-4 w-4" /> Open to remote</p>
              </div>
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed">
              I aim to work as a Mobile Developer and specialize in AI-powered applications — blending intuitive UX with robust, scalable backends.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow transition">
                <Github className="h-4 w-4" /> View GitHub
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                Hire Me <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a Full Stack Developer focused on crafting clean, maintainable code and seamless user experiences. I love building AI-powered apps and shipping polished mobile interfaces.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              When I’m not coding, I explore new AI models, design systems, and performance tuning techniques.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((s) => (
                <div key={s.group} className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
                  <h3 className="font-semibold text-gray-900">{s.group}</h3>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    {s.items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-900 inline-block" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
            <p className="mt-2 text-gray-600">A selection of work across mobile and web.</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 via-gray-900/0 to-gray-900/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-900/90">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-500" />
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
        <p className="mt-3 text-gray-600">Open to roles and collaborations in mobile development and AI-driven products.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:mohamed@example.com" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow transition">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Mohamed Mohamud Nour. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
