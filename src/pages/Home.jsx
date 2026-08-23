import AboutSection from "../components/home/AboutSection";
import SkillsSection from "../components/home/SkillsSection";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between px-6 py-20 md:flex-row">

          {/* ================= LEFT SIDE ================= */}

          <div className="max-w-xl">

            <p className="mb-4 text-lg text-cyan-400">
              👋 Hello, I'm
            </p>

            <h1 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">
              Aditi Tripathi
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-300">
              Frontend Developer • AI Learner • DSA Explorer
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I love building modern web applications, learning Artificial
              Intelligence, improving my DSA skills, and sharing my developer
              journey with the world.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-400">
                🚀 View Projects
              </button>

              <button className="rounded-xl border border-slate-600 px-7 py-3 font-semibold transition duration-300 hover:border-cyan-400 hover:bg-slate-900">
                📄 Download Resume
              </button>

            </div>

            {/* Currently Learning */}

            <div className="mt-12">

              <h3 className="mb-5 text-xl font-bold">
                🚀 Currently Learning
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 backdrop-blur">
                  🐍 Python
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 backdrop-blur">
                  ⚛️ React
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 backdrop-blur">
                  🧠 DSA
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 backdrop-blur">
                  🤖 AI
                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative mb-16 flex items-center justify-center md:mb-0">

            <div className="flex h-96 w-96 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-8xl shadow-[0_0_120px_rgba(6,182,212,0.35)]">
              👩‍💻
            </div>

            {/* Floating Cards */}

            <div className="absolute -left-10 top-12 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 backdrop-blur">
              ⚛️ React
            </div>

            <div className="absolute -right-10 top-32 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 backdrop-blur">
              🐍 Python
            </div>

            <div className="absolute bottom-10 left-10 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 backdrop-blur">
              🤖 AI
            </div>

            <div className="absolute bottom-0 right-0 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 backdrop-blur">
              💻 DSA
            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <AboutSection />

      {/* ================= SKILLS SECTION ================= */}

      <SkillsSection />

    </>
  );
}