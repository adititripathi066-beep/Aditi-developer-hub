const skills = [
  {
    name: "React",
    level: "Advanced",
    percentage: 85,
    icon: "⚛️",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    percentage: 80,
    icon: "🟨",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    percentage: 85,
    icon: "🎨",
  },
  {
    name: "HTML & CSS",
    level: "Advanced",
    percentage: 90,
    icon: "🌐",
  },
  {
    name: "Python",
    level: "Intermediate",
    percentage: 70,
    icon: "🐍",
  },
  {
    name: "DSA",
    level: "Learning",
    percentage: 60,
    icon: "🧠",
  },
  {
    name: "AI & Machine Learning",
    level: "Learning",
    percentage: 55,
    icon: "🤖",
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    percentage: 70,
    icon: "🔧",
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Expertise
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Technologies and tools I'm learning and using to build modern
            web applications and AI-powered projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >

              {/* Top */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-2xl">
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {skill.level}
                    </p>
                  </div>

                </div>

                <span className="font-bold text-cyan-400">
                  {skill.percentage}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-1000 group-hover:from-cyan-300 group-hover:to-purple-400"
                  style={{ width: `${skill.percentage}%` }}
                ></div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Tech Stack */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center">

          <h3 className="text-xl font-bold">
            Currently <span className="text-cyan-400">Learning</span>
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            {[
              "Python",
              "DSA",
              "Artificial Intelligence",
              "Machine Learning",
              "REST APIs",
              "Docker",
              "AWS",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-950 px-5 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}