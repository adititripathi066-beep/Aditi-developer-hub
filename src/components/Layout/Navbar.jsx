import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Aditi Developer Hub
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-cyan-400">
            About
          </Link>

          <Link to="/projects" className="hover:text-cyan-400">
            Projects
          </Link>

          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}