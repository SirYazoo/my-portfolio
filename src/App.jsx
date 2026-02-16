import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Server,
  ExternalLink,
} from "lucide-react";

const App = () => {
  const projects = [
    {
      title: "Scalable API Gateway",
      role: "Backend Developer",
      desc: "Architected a high-throughput RESTful API. Implemented JWT authentication and optimized middleware for secure, sub-100ms request handling.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      link: "https://github.com/SirYazoo",
    },
    {
      title: "Inventory Management System",
      role: "Full-stack Developer",
      desc: "Built a full-stack inventory suite with automated low-stock triggers. Focused on relational database integrity and efficient CRUD operations.",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      link: "https://github.com/SirYazoo",
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
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold mb-6 border border-amber-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            OPEN FOR OPPORTUNITIES
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
            I build robust <br />
            <span className="text-slate-700">server-side</span> <br />
            solutions.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Highly motivated Full-stack Developer specializing in Backend
            Architecture. Passionate about writing clean, maintainable code and
            optimizing database performance.
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
                <Github size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/rio-aurelio-sumantri"
                className="p-3 bg-slate-900 text-slate-400 border border-slate-800 rounded-full hover:bg-amber-500 transition"
              >
                <Linkedin size={20} />
              </a>
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
            {projects.map((proj, i) => (
              <div
                key={i}
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
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
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
