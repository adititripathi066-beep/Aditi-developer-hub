export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

      <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-7xl">
        💻
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-3 text-slate-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
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
            className="rounded-lg bg-cyan-500 px-4 py-2 text-white"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 text-white"
          >
            Live Demo
          </a>
        </div>
      </div>

    </div>
  );
}