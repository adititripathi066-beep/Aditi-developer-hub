export default function AboutSection() {
  return (
    <section className="bg-[#111827] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
          Hi, I'm Aditi Tripathi, a Frontend Developer and AI learner.
          I enjoy building modern web applications, solving DSA problems,
          and continuously learning new technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="bg-[#1F2937] p-8 rounded-2xl">
            <h3 className="text-cyan-400 text-2xl font-bold">🎓 Education</h3>
            <p className="mt-4 text-gray-300">
              B.Tech in Computer Science & Data Science
            </p>
          </div>

          <div className="bg-[#1F2937] p-8 rounded-2xl">
            <h3 className="text-cyan-400 text-2xl font-bold">💻 Focus</h3>
            <p className="mt-4 text-gray-300">
              React, JavaScript, Python, AI & DSA
            </p>
          </div>

          <div className="bg-[#1F2937] p-8 rounded-2xl">
            <h3 className="text-cyan-400 text-2xl font-bold">🚀 Goal</h3>
            <p className="mt-4 text-gray-300">
              Become an AI Engineer & Full Stack Developer
            </p>
          </div>

          <div className="bg-[#1F2937] p-8 rounded-2xl">
            <h3 className="text-cyan-400 text-2xl font-bold">📍 Location</h3>
            <p className="mt-4 text-gray-300">
              Jabalpur, Madhya Pradesh
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}