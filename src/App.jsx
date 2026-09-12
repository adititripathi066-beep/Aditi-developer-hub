import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-white transition hover:text-cyan-400"
        >
          Aditi<span className="text-cyan-400">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="rounded-lg border border-cyan-400/50 px-4 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}