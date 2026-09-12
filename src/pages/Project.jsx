import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Developer Portfolio",
      description:
        "Modern portfolio website built with React, Tailwind CSS and Vite.",
      tech: ["React", "Tailwind", "Vite"],
      github: "#",
      live: "#",
    },

    {
      title: "AI Sports Talent Platform",
      description:
        "AI-based cricket talent detection system using Python, OpenCV and MediaPipe.",
      tech: ["Python", "OpenCV", "AI"],
      github: "#",
      live: "#",
    },

    {
      title: "Project Tracker",
      description:
        "Beautiful task management application with a modern user interface.",
      tech: ["React", "Vite"],
      github: "#",
      live: "#",
    },

    {
      title: "Spotify Clone",
      description:
        "Responsive Spotify UI clone built using HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      title: "Creamy Adda",
      description:
        "Ice cream shop landing page with responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      title: "Blogger Zone",
      description:
        "Clean and responsive blogging website interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },

    {
      title: "My Calculator",
      description:
        "A modern and responsive calculator built using HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "/projects/my-calculator/index.html",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-center text-5xl font-bold text-white">
          My <span className="text-cyan-400">Projects</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400">
          Here are some projects I've built while learning Frontend
          Development, Artificial Intelligence and Full Stack Development.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}