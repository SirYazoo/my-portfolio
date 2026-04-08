import { Code2, Database, ExternalLink, Mail, Server } from "lucide-react";

const App = () => {
  const projects = [
    {
      title: "Full-Stack Task Manager",
      role: "Full-Stack Developer",
      desc: "A complete task management system engineered with a secure, decoupled architecture. Features a React UI with optimistic updates, backed by a Node/PostgreSQL server handling strict JWT/Bcrypt authentication and middleware endpoint protection.",
      tech: ["Node.js", "Express", "PostgreSQL", "React.js"],
      link: "https://github.com/SirYazoo/task-manager-api",
    },
    {
      title: "Advanced Movie API",
      role: "Backend Developer",
      desc: "A robust RESTful API demonstrating advanced backend implementation. Features dynamic MySQL database querying (search, filter, sort), secure multipart file uploads using Multer, and automated one-time-use email verification via Nodemailer.",
      tech: ["Node.js", "Express", "MySQL", "Multer", "Nodemailer"],
      link: "https://github.com/SirYazoo/advanced-movie-api",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1120] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full top-0 bg-[#0a1120]/80 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter uppercase text-white">
            Rio
          </span>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a
              href="#about"
              className="text-slate-400 hover:text-amber-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-400 hover:text-amber-500 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-amber-500 transition duration-300"
            >
              Work
            </a>
            <a
              href="mailto:rioaurelio259@gmail.com"
              className="text-white hover:text-amber-500 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold mb-6 border border-amber-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>OPEN FOR OPPORTUNITIES</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
              I build robust <br />
              <span className="text-slate-700">server-side</span> <br />
              solutions.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Highly motivated Full-stack Developer specializing in Backend
              Architecture. Passionate about writing clean, maintainable code
              and optimizing database performance.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-amber-500 text-[#0a1120] font-bold rounded-full hover:bg-amber-400 transition shadow-lg shadow-amber-500/10"
              >
                View Projects
              </a>
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/SirYazoo"
                  className="p-3 bg-slate-900 text-slate-400 border border-slate-800 rounded-full hover:bg-amber-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/rio-aurelio-sumantri"
                  className="p-3 bg-slate-900 text-slate-400 border border-slate-800 rounded-full hover:bg-amber-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* PHOTO INTERGRATION */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-amber-500/40 to-slate-800 animate-[spin_10s_linear_infinite] blur-md"></div>
            <div className="relative w-full h-full rounded-full p-1 bg-[#0a1120] border border-slate-800 overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.15)] group">
              <img
                src="/Rio_Aurelio_Sumantri-Foto.png"
                alt="Rio Sumantri"
                className="w-full h-full object-cover grayscale opacity-80 group-hove:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section id="skills" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 tracking-tight text-white">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-amber-500/50 transition duration-300">
              <div className="w-12 h-12 bg-amber-500 text-[#0a1120] flex items-center justify-center rounded-xl mb-6 shadow-md shadow-amber-500/20">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">
                Backend
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Focusing on Node.js and Express to build high-performance APIs
                and microservices.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase text-amber-500">
                <span>Node.js</span> • <span>Express</span> •{" "}
                <span>REST API</span> • <span>JWT</span>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-amber-500/50 transition duration-300">
              <div className="w-12 h-12 bg-amber-500 text-[#0a1120] flex items-center justify-center rounded-xl mb-6 shadow-md shadow-amber-500/20">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">
                Data
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Designing efficient database schemas and optimizing SQL queries
                for scalability.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase text-amber-500">
                <span>MySQL</span> • <span>PostgreSQL</span>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-amber-500/50 transition duration-300">
              <div className="w-12 h-12 bg-amber-500 text-[#0a1120] flex items-center justify-center rounded-xl mb-6 shadow-md shadow-amber-500/20">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">
                Frontend
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Creating responsive and interactive user interfaces using modern
                React patterns.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase text-amber-500">
                <span>React.js</span> • <span>Tailwind CSS</span> •{" "}
                <span>JavaScript ES6</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight mb-16 text-white">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="group p-8 bg-[#0d1629] border border-slate-800 rounded-3xl hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-black text-amber-500 uppercase tracking-widest">
                    {proj.role}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 group-hover:text-amber-500 transition"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-500 transition">
                  {proj.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-900 text-amber-500 text-[10px] font-bold rounded-full uppercase tracking-tighter border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 bg-[#070c18] text-white text-center border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Let's build something together.
          </h2>
          <p className="text-slate-400 mb-10">
            Available for full-time roles and collaborations.
          </p>
          <a
            href="mailto:rioaurelio259@gmail.com"
            className="text-xl font-bold text-amber-500 hover:underline flex items-center justify-center gap-2"
          >
            <Mail size={24} /> rioaurelio259@gmail.com
          </a>
          <div className="mt-20 pt-8 border-t border-slate-900 text-slate-600 text-sm uppercase tracking-widest font-medium">
            &copy; 2026 Rio Aurelio. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
