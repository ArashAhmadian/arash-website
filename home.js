import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";

// Single-file React component suitable for Next.js (pages/) or Vite React app.
// - Uses Tailwind CSS for styling. Ensure Tailwind is set up in your project.
// - Put your photo at `/public/photo.jpg` or change the path below.
// - Put your resume PDF at `/public/Arash_Resume.pdf` (or change link).

export default function Home() {
  const socials = [
    { name: "Email", href: "mailto:arash.ahmadian2001@gmail.com", icon: Mail },
    { name: "LinkedIn", href: "https://linkedin.com/in/arash-ahmadian", icon: Linkedin },
    { name: "Scholar", href: "https://scholar.google.ca/citations?user=T-xossMAAAAJ&hl=en", icon: Github },
    { name: "Resume", href: "/Arash_Resume.pdf", icon: FileText },
  ];

  const publications = [
    {
      title:
        "Back to basics: Revisiting REINFORCE style optimization for learning from human feedback in LLMs",
      venue: "ACL 2024",
    },
    { title: "Intriguing Properties of Quantization at Scale", venue: "NeurIPS 2023" },
    { title: "Aya Expanse: Combining research breakthroughs for a new multilingual frontier", venue: "(multi-author)" },
    { title: "Self-improving robust preference optimization", venue: "ICLR 2025" },
    { title: "Extremely parameter efficient MoE for instruction tuning", venue: "ICLR 2024" },
    {
      title:
        "RLHF can speak many languages: Unlocking multilingual preference optimization for LLMs",
      venue: "EMNLP 2024 (Oral)",
    },
  ];

  const experiences = [
    {
      role: "Senior Research Scientist",
      org: "Google DeepMind",
      date: "June 2025 - present",
      details:
        "Scalable RL & post-training; core post-training for released Gemini models.",
    },
    {
      role: "Senior Member of Technical Staff",
      org: "Cohere",
      date: "Sept 2024 - June 2025",
      details:
        "Research: RL, Preference Training, Model Merging. Technical lead on multiple model releases.",
    },
    {
      role: "Researcher / Intern roles",
      org: "Vector Institute, Univ. of Toronto, Cerebras"
    },
  ];

  const skills = [
    "Python", "PyTorch", "JAX", "TensorFlow", "HuggingFace", "C++", "C", "Assembly",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Arash Ahmadian</h1>
            <p className="text-sm text-gray-600">Computer Engineer · Researcher in RL & Large Models</p>
          </div>
          <nav className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <s.icon size={16} />
                <span className="hidden sm:inline">{s.name}</span>
              </a>
            ))}
          </nav>
        </header>

        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Photo & contact */}
          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* replace /photo.jpg with your uploaded photo filename */}
              <img
                src="/photo.jpg"
                alt="Arash Ahmadian"
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-medium">Contact</h2>
                <p className="mt-2 text-sm text-gray-600">arash.ahmadian2001@gmail.com</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <a
                    className="text-xs px-3 py-2 rounded-full border border-gray-200"
                    href="mailto:arash.ahmadian2001@gmail.com"
                  >
                    Email
                  </a>
                  <a
                    className="text-xs px-3 py-2 rounded-full border border-gray-200"
                    href="/Arash_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>

            <section className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-sm font-medium">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1 text-xs border rounded-full">{s}</span>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-sm font-medium">Education</h3>
              <p className="mt-2 text-sm text-gray-600">University of Toronto — B.A.Sc, Computer Engineering (2019 — 2024)</p>
              <p className="mt-1 text-xs text-gray-500">Reinforcement Learning Specialization</p>
            </section>
          </aside>

          {/* Right column - Main content */}
          <section className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">About</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                I work at the intersection of reinforcement learning and large models — focusing on scalable
                RL, preference training, and post-training techniques for deployed models. My work spans model
                training, efficiency at scale, and practical post-training recipes for large language and
                multimodal models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium">Experience</h3>
                <ul className="mt-4 space-y-4">
                  {experiences.map((e) => (
                    <li key={e.org} className="">
                      <p className="text-sm font-semibold">{e.role} — {e.org}</p>
                      {e.date && <p className="text-xs text-gray-500">{e.date}</p>}
                      {e.details && <p className="mt-1 text-sm text-gray-600">{e.details}</p>}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium">Awards & Scholarships</h3>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li>NSERC Research Award (2020)</li>
                  <li>Google Summer of Code (2021)</li>
                  <li>Multiple Academic In-course Scholarships (2020–2022)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-medium">Select Publications</h3>
              <ol className="mt-4 list-decimal list-inside space-y-2 text-sm text-gray-700">
                {publications.map((p, i) => (
                  <li key={i}>
                    <strong>{p.title}</strong>
                    {p.venue && <span className="text-xs text-gray-500"> — {p.venue}</span>}
                  </li>
                ))}
              </ol>
            </div>

            <footer className="text-center text-sm text-gray-500 mt-4">
              <p>Built with ♥ — Arash Ahmadian • <a href="mailto:arash.ahmadian2001@gmail.com" className="underline">arash.ahmadian2001@gmail.com</a></p>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
