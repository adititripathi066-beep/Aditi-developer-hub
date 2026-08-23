export default function AboutSection() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h3 className="text-2xl font-bold">
            Hi, I'm <span className="text-cyan-400">Aditi Tripathi</span>
          </h3>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A passionate Frontend Developer and AI enthusiast. I love creating
            modern web applications, solving DSA problems, and exploring
            Artificial Intelligence.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <div className="text-3xl">🎓</div>
            <h3 className="mt-4 text-xl font-bold">Education</h3>
            <p className="mt-3 font-semibold text-cyan-400">
              B.Tech – Computer Science & Data Science
            </p>
            <p className="mt-3 text-slate-400">
              Learning Frontend Development, AI, Python and DSA.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <div className="text-3xl">💻</div>
            <h3 className="mt-4 text-xl font-bold">Skills</h3>

            <div className="mt-5 flex flex-wrap gap-3 text-slate-300">
              <span>⚛️ React</span>
              <span>🎨 Tailwind CSS</span>
              <span>🟨 JavaScript</span>
              <span>🐍 Python</span>
              <span>🤖 AI & Machine Learning</span>
              <span>🧠 DSA</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <div className="text-3xl">🚀</div>
            <h3 className="mt-4 text-xl font-bold">Goals</h3>
            <p className="mt-3 text-slate-400">
              Become an AI Engineer and Full Stack Developer while building
              impactful products.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <div className="text-3xl">❤️</div>
            <h3 className="mt-4 text-xl font-bold">Interests</h3>
            <p className="mt-3 text-slate-400">
              Web Development • AI • Cricket • Learning New Technologies
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}