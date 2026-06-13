import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  User,
  Send,
  Menu,
  X,
  ChevronDown,
  Award,
  Zap,
  Download,
  Phone
} from 'lucide-react';

// Optimised particle system — 45 particles, pauses when tab hidden
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!; // asserted non-null: canvas exists above

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number; y: number; size: number;
      speedX: number; speedY: number; opacity: number; color: string;
      constructor() {
        this.x = Math.random() * ctx.canvas.width;
        this.y = Math.random() * ctx.canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        const blueShades = [
          'rgba(59, 130, 246, ', 'rgba(37, 99, 235, ',
          'rgba(29, 78, 216, ',  'rgba(30, 64, 175, ',
          'rgba(147, 197, 253, ',
        ];
        this.color = blueShades[Math.floor(Math.random() * blueShades.length)];
      }
      update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > ctx.canvas.width)  this.x = 0;
        if (this.x < 0)                 this.x = ctx.canvas.width;
        if (this.y > ctx.canvas.height) this.y = 0;
        if (this.y < 0)                 this.y = ctx.canvas.height;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();
      }
    }

    const PARTICLE_COUNT = 45;
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    let rafId: number;
    let running = true;

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(o => {
          const dx = p.x - o.x, dy = p.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      rafId = requestAnimationFrame(animate);
    };

    const onVisibility = () => {
      if (document.hidden) { running = false; cancelAnimationFrame(rafId); }
      else { running = true; animate(); }
    };
    document.addEventListener('visibilitychange', onVisibility);
    animate();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: 'transparent' }} />
  );
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const personalInfo = {
  name: "Richa Thanekar",
  title: "Computer Engineering Student  ·  AI / ML & Full-Stack Developer",
  bio: "Building intelligent systems and data-driven applications — from forecasting models and LLM pipelines to full-stack web platforms.",
  status: "Open to Data / ML opportunities",
  aboutText: `I'm a Computer Engineering student at A. P. Shah Institute of Technology (CGPA 8.42) with a strong focus on AI/ML and full-stack development. I enjoy architecting end-to-end intelligent systems — from data pipelines and forecasting models to LLM-powered applications.\n\nI have hands-on experience with React, Flask, Django, Streamlit, and AWS, and I'm actively exploring the Data/AI/ML domain. Beyond tech, I serve as Ladies Representative on the Student Council and as Joint President of the Computer Students Association, where I drive technical workshops and student initiatives.`,
  email: "thanekarricha@gmail.com",
  phone: "+91 8104784252",
  location: "Thane, Maharashtra, India",
  resumeUrl: "/RICHA_THANEKAR.pdf",
};

const skills = [
  { name: 'Python',           category: 'Languages' },
  { name: 'Java',             category: 'Languages' },
  { name: 'SQL',              category: 'Languages' },

  { name: 'React.js',         category: 'Frameworks & Libraries' },
  { name: 'Flask',            category: 'Frameworks & Libraries' },
  { name: 'Django',           category: 'Frameworks & Libraries' },
  { name: 'Streamlit',        category: 'Frameworks & Libraries' },
  { name: 'NumPy',            category: 'Frameworks & Libraries' },
  { name: 'Pandas',           category: 'Frameworks & Libraries' },
  { name: 'Matplotlib',       category: 'Frameworks & Libraries' },
  { name: 'Scikit-learn',     category: 'Frameworks & Libraries' },
  { name: 'LangChain',        category: 'Frameworks & Libraries' },
  { name: 'HuggingFace Transformers', category: 'Frameworks & Libraries' },

  { name: 'OpenAI API',       category: 'AI / ML & Cloud' },
  { name: 'Google Gemini API',category: 'AI / ML & Cloud' },
  { name: 'AWS (EC2, RDS, S3)', category: 'AI / ML & Cloud' },
  { name: 'MySQL',            category: 'AI / ML & Cloud' },
  { name: 'MongoDB',          category: 'AI / ML & Cloud' },
  { name: 'Supabase',         category: 'AI / ML & Cloud' },

  { name: 'Jupyter Notebook', category: 'Tools' },
  { name: 'VS Code',          category: 'Tools' },
  { name: 'Postman',          category: 'Tools' },
  { name: 'Power BI',         category: 'Tools' },
  { name: 'Microsoft Excel',  category: 'Tools' },

  { name: 'Leadership',       category: 'Soft Skills' },
  { name: 'Team Collaboration', category: 'Soft Skills' },
  { name: 'Communication',    category: 'Soft Skills' },
  { name: 'Event Management', category: 'Soft Skills' },
  { name: 'Problem Solving',  category: 'Soft Skills' },
];

const skillCategories = ['Languages', 'Frameworks & Libraries', 'AI / ML & Cloud', 'Tools'];

const categoryColors: Record<string, string> = {
  'Languages':             'bg-blue-600/20 text-blue-300 border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-400/50',
  'Frameworks & Libraries':'bg-cyan-600/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-600/30 hover:border-cyan-400/50',
  'AI / ML & Cloud':       'bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-400/50',
  'Tools':                 'bg-indigo-600/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-600/30 hover:border-indigo-400/50',
  'Soft Skills':           'bg-green-600/20 text-green-300 border-green-500/30 hover:bg-green-600/30 hover:border-green-400/50',
};

const education = [
  {
    degree: "Bachelor of Engineering — Computer Engineering",
    school: "A. P. Shah Institute of Technology",
    period: "2022 – 2026",
    description: "CGPA: 8.42 (up to Sem VII). Focused on software engineering, AI/ML, data structures, and full-stack development.",
  },
  {
    degree: "H.S.C. (XII) — Science",
    school: "K. J. Somaiya College of Science and Commerce",
    period: "2022",
    description: "Percentage: 77.50%",
  },
];

const projects = [
  {
    title: "Financial Intelligence & Insurance Decision Platform",
    description: "Full-stack platform integrating Prophet & ARIMA forecasting with Gemini LLM for automated insurance policy analysis and personalized risk-based recommendations.",
    technologies: ["React", "Flask", "MongoDB", "Prophet", "ARIMA", "Gemini LLM"],
    github: "https://github.com/richathanekar/financial-intelligence-platform",
    demo: "",
  },
  {
    title: "AI Knowledge Extraction & Document Summarization",
    description: "Multi-modal AI pipeline using Whisper + BART/LSA for hierarchical PDF and video summarization, with auto-generated flashcards and Q&A pairs via Gemini.",
    technologies: ["Django", "Supabase", "Whisper", "BART", "HuggingFace", "Gemini"],
    github: "https://github.com/richathanekar/ai-knowledge-extraction",
    demo: "",
  },
  {
    title: "StockPulse — Time-Series Forecasting & Market Analysis",
    description: "LSTM deep learning model for stock price forecasting with live Financial API ingestion, RSI/moving-average features, and an interactive Streamlit dashboard.",
    technologies: ["Python", "LSTM", "Streamlit", "Financial APIs", "Pandas", "Scikit-learn"],
    github: "https://github.com/richathanekar/stockpulse",
    demo: "",
  },
  {
    title: "Real-Time Food Redistribution & Donation Matching",
    description: "Full-stack platform connecting restaurants and NGOs through real-time surplus food matching, with live donation tracking and a responsive multi-party coordination UI.",
    technologies: ["Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/richathanekar/food-redistribution-platform",
    demo: "",
  },
];

const certifications = [
  { title: "AWS Academy Graduate — Cloud Foundations", issuer: "Amazon Web Services", icon: "☁️" },
  { title: "AWS — Data Engineering",                   issuer: "Amazon Web Services", icon: "🔧" },
  { title: "Google AI / ML — AICTE",                   issuer: "Google / AICTE",      icon: "🤖" },
  { title: "Process Mining Fundamentals",               issuer: "Celonis",             icon: "⚙️" },
  { title: "Data Analysis with Python",                 issuer: "IBM SkillsBuild",     icon: "📊" },
];

const leadership = [
  {
    role: "Ladies Representative — The Student Council",
    organization: "A. P. Shah Institute of Technology (APSIT)",
    period: "2024 – 2025",
    description: "Led initiatives representing female students by organising soft-skills sessions and mentorship programs. Collaborated with faculty to improve participation and student engagement.",
  },
  {
    role: "Joint President — Computer Students Association (CSA)",
    organization: "A. P. Shah Institute of Technology (APSIT)",
    period: "2023 – 2024",
    description: "Directed CSA activities by organising technical workshops and events. Managed end-to-end planning from requirement gathering to execution, significantly increasing student participation.",
  },
];

const socialLinks = [
  { name: 'GitHub',   icon: Github,   url: 'https://github.com/richathanekar' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/richathanekar' },
  { name: 'Email',    icon: Mail,     url: 'mailto:thanekarricha@gmail.com' },
];

const NAV_SECTIONS = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

// ─── APP ─────────────────────────────────────────────────────────────────────

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [formData, setFormData]           = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors]       = useState<Record<string, string>>({});

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 120;
      NAV_SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const validateForm = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim())    e.name    = 'Name is required';
    if (!formData.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Email is invalid';
    if (!formData.message.trim()) e.message = 'Message is required';
    setFormErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validateForm()) {
      alert("Thank you! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    }
  };

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (formErrors[name]) setFormErrors(p => ({ ...p, [name]: '' }));
  };

  // ── NAV LABEL helper
  const navLabel = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <ParticleBackground />

      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-white">{personalInfo.name}</span>

            {/* Desktop */}
            <div className="hidden md:flex items-baseline space-x-1">
              {NAV_SECTIONS.map(s => (
                <button key={s} onClick={() => scrollToSection(s)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === s ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-blue-800/50'
                  }`}>
                  {navLabel(s)}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setIsMenuOpen(o => !o)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md px-2 pt-2 pb-3 space-y-1">
            {NAV_SECTIONS.map(s => (
              <button key={s} onClick={() => scrollToSection(s)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === s ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-blue-800/50'
                }`}>
                {navLabel(s)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center px-6 z-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-24">

          {/* LEFT — text */}
          <div className="flex flex-col items-start">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block"></span>
              {personalInfo.status}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-5">{personalInfo.title}</p>
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              {personalInfo.bio}
            </p>

            {/* Social + Resume download */}
            <div className="flex items-center flex-wrap gap-5">
              {socialLinks.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
                  <s.icon size={28} />
                </a>
              ))}
              <a href={personalInfo.resumeUrl} download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Scroll cue — bottom of left col */}
            <div className="animate-bounce mt-16 hidden md:block">
              <ChevronDown size={28} className="text-blue-400" />
            </div>
          </div>

          {/* RIGHT — photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 scale-110"></div>
              <div className="absolute inset-0 rounded-full border border-blue-400/20 scale-125"></div>

              {/* Photo — replace /profile.jpg with your actual filename */}
              <img
                src="/profile.jpg"
                alt="Richa Thanekar"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl relative z-10"
                onError={(e) => {
                  /* fallback to initials if photo not found */
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = 'none';
                  const fb = t.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              {/* Initials fallback (hidden once photo loads) */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500 shadow-2xl bg-gradient-to-br from-blue-700 to-blue-900 items-center justify-center relative z-10"
                style={{ display: 'none' }}>
                <span className="text-6xl font-bold text-blue-200 select-none">RT</span>
              </div>

              {/* Floating accent dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bio */}
            <div className="md:col-span-2 bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-blue-800/30">
              <div className="flex items-center mb-5">
                <User className="text-blue-400 mr-3" size={26} />
                <h3 className="text-xl font-semibold text-white">Get to know me</h3>
              </div>
              {personalInfo.aboutText.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-300 text-base leading-relaxed mb-4 last:mb-0">{para}</p>
              ))}
            </div>

            {/* Quick facts + Leadership + Certs */}
            <div className="space-y-5">
              {/* Quick info */}
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-blue-800/30">
                <h3 className="text-white font-semibold mb-4">Quick info</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><span className="text-blue-400">📍</span> {personalInfo.location}</li>
                  <li><span className="text-blue-400">🎓</span> BE Computer Engineering</li>
                  <li><span className="text-blue-400">📊</span> CGPA 8.42 (Sem VII)</li>
                  <li>
                    <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      ✉️ {personalInfo.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${personalInfo.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      📞 {personalInfo.phone}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Leadership (folded into about column) */}
              {/* <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-purple-800/30">
                <div className="flex items-center mb-4">
                  <Award className="text-purple-400 mr-2" size={20} />
                  <h3 className="text-white font-semibold">Leadership</h3>
                </div>
                {leadership.map((l, i) => (
                  <div key={i} className={i < leadership.length - 1 ? 'mb-4 pb-4 border-b border-purple-800/30' : ''}>
                    <p className="text-white text-sm font-medium leading-snug">{l.role}</p>
                    <p className="text-purple-400 text-xs mt-0.5">{l.period}</p>
                  </div>
                ))}
              </div> */}

              {/* Certifications (folded into about column) */}
              
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </div>

          {/* Technical skills grouped by category */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-blue-800/30 mb-10">
            {skillCategories.map(cat => (
              <div key={cat} className="mb-7 last:mb-0">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === cat).map((sk, i) => (
                    <span key={i}
                      className={`px-4 py-1.5 rounded-full border text-sm transition-all duration-300 cursor-default transform hover:scale-105 ${categoryColors[cat]}`}>
                      {sk.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-md rounded-3xl p-8 border border-green-500/30">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Soft Skills</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skills.filter(s => s.category === 'Soft Skills').map((sk, i) => (
                <div key={i}
                  className="bg-green-600/10 rounded-xl p-4 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 text-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="text-white" size={16} />
                  </div>
                  <p className="text-white text-sm font-medium">{sk.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((p, i) => (
              <div key={i}
                className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-800/30 hover:border-blue-600/50 flex flex-col">
                <div className="flex items-start mb-3">
                  <Briefcase className="text-blue-400 mr-3 mt-0.5 shrink-0" size={22} />
                  <h3 className="text-lg font-semibold text-white leading-snug">{p.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.technologies.map((t, ti) => (
                    <span key={ti} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs">{t}</span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors">
                    <Github size={17} className="mr-1.5" /> Code
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors">
                      <ExternalLink size={17} className="mr-1.5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={22} />
                  </div>
                </div>
                <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 shadow-lg flex-1 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
                {i < education.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-blue-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      
      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-blue-800/30 hover:border-blue-500/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4 text-center">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">{cert.title}</h3>
                <p className="text-blue-400 text-sm text-center">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 shadow-lg flex-1 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.role}</h3>
                    <p className="text-purple-400 font-medium mb-2">{item.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{item.period}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                {index < leadership.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-purple-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Direct contact info */}
            <div className="md:col-span-2 space-y-5">
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-7 border border-blue-800/30 h-full">
                <h3 className="text-white font-semibold text-lg mb-6">Get in touch directly</h3>
                <div className="space-y-5">
                  <a href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Email</p>
                      <p className="text-sm">{personalInfo.email}</p>
                    </div>
                  </a>
                  <a href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                      <Phone size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                      <p className="text-sm">{personalInfo.phone}</p>
                    </div>
                  </a>
                  <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                      <Linkedin size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">LinkedIn</p>
                      <p className="text-sm">richathanekar</p>
                    </div>
                  </a>
                  <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                      <Github size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">GitHub</p>
                      <p className="text-sm">richathanekar</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-blue-800/30">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInput}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 bg-slate-700 border ${formErrors.name ? 'border-red-500' : 'border-blue-600/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`} />
                    {formErrors.name && <p className="mt-1 text-xs text-red-400">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInput}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 bg-slate-700 border ${formErrors.email ? 'border-red-500' : 'border-blue-600/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`} />
                    {formErrors.email && <p className="mt-1 text-xs text-red-400">{formErrors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInput}
                    rows={6} placeholder="Your message..."
                    className={`w-full px-4 py-3 bg-slate-700 border ${formErrors.message ? 'border-red-500' : 'border-blue-600/30'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none`}></textarea>
                  {formErrors.message && <p className="mt-1 text-xs text-red-400">{formErrors.message}</p>}
                </div>
                <div className="text-right">
                  <button type="submit"
                    className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200 transform hover:scale-105">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900/90 backdrop-blur-md py-8 px-4 relative z-10 border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
