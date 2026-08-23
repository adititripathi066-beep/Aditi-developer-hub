export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">

      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-7xl">
        💻
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-3 text-slate-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white hover:bg-cyan-400"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-5 py-2 font-semibold text-white hover:border-cyan-400"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}