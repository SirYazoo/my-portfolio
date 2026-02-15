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
      // Refined description to sound more professional
      desc: "Architected a high-throughput RESTful API. Implemented JWT authentication and optimized middleware for secure, sub-100ms request handling.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      link: "https://github.com/SirYazoo", // Pointing to your GitHub
    },
    {
      title: "Inventory Management System",
      role: "Full-stack Developer",
      // Highlighting the 'Logic' over just 'Real-time'
      desc: "Built a full-stack inventory suite with automated low-stock triggers. Focused on relational database integrity and efficient CRUD operations.",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      link: "https://github.com/SirYazoo",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-600">
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter uppercase">
            Rio
          </span>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
            <a
              href="#about"
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition duration-300"
            >
              Work
            </a>
            <a
              href="mailto:rioaurelio259@gmail.com"
              className="text-slate-900 hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            OPEN FOR OPPORTUNITIES
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
            I build robust <br />
            <span className="text-slate-300">server-side</span> <br />
            solutions.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
            Highly motivated Full-stack Developer specializing in Backend
            Architecture. Passionate about writing clean, maintainable code and
            optimizing database performance.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              View Projects
            </a>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SirYazoo"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition"
              >
                <Github size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/rio-aurelio-sumantri"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 tracking-tight text-slate-900">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-xl mb-6 shadow-md">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Backend
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Focusing on Node.js and Express to build high-performance APIs
                and microservices.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase text-blue-600">
                <span>Node.js</span> • <span>Express</span> •{" "}
                <span>REST API</span> • <span>JWT</span>
              </div>
            </div>
            <div>
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-xl mb-6 shadow-md">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Data
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Designing efficient database schemas and optimizing SQL queries
                for scalability.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase text-slate-900">
                <span>MySQL</span> • <span>PostgreSQL</span>
              </div>
            </div>
            <div>
              <div className="w-12 h-12 bg-slate-200 text-slate-600 flex items-center justify-center rounded-xl mb-6 shadow-md">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Frontend
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Creating responsive and interactive user interfaces using modern
                React patterns.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase text-slate-400">
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
          <h2 className="text-4xl font-black tracking-tight mb-16">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="group p-8 border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    {proj.role}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 group-hover:text-blue-600 transition"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition">
                  {proj.title}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-tighter"
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
      <footer className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Let's build something together.
          </h2>
          <p className="text-slate-400 mb-10">
            Available for full-time roles and collaborations.
          </p>
          <a
            href="mailto:rioaurelio259@gmail.com"
            className="text-xl font-bold text-blue-400 hover:underline flex items-center justify-center gap-2"
          >
            <Mail size={24} /> rioaurelio259@gmail.com
          </a>
          <div className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm uppercase tracking-widest font-medium">
            &copy; 2026 Rio Aurelio. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
