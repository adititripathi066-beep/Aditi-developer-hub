export default function About() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          About <span className="text-cyan-400">Me</span>
        </h1>

        <p className="mt-6 text-center text-slate-400 max-w-3xl mx-auto leading-8">
          Hi, I'm <span className="text-cyan-400 font-semibold">Aditi Tripathi</span>,
          a passionate Frontend Developer and AI enthusiast. I love creating
          modern web applications, solving DSA problems, and exploring Artificial
          Intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              🎓 Education
            </h2>

            <p className="text-slate-300">
              B.Tech – Computer Science & Data Science
            </p>

            <p className="text-slate-400 mt-2">
              Learning Frontend Development, AI, Python and DSA.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              💻 Skills
            </h2>

            <ul className="space-y-2 text-slate-300">
              <li>⚛ React</li>
              <li>🎨 Tailwind CSS</li>
              <li>🟨 JavaScript</li>
              <li>🐍 Python</li>
              <li>🤖 AI & Machine Learning</li>
              <li>🧠 DSA</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              🚀 Goals
            </h2>

            <p className="text-slate-300">
              Become an AI Engineer and Full Stack Developer while building
              impactful products.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              ❤️ Interests
            </h2>

            <p className="text-slate-300">
              Web Development • AI • Cricket • Learning New Technologies
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}