export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Let's Connect
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project idea, collaboration opportunity, or just want to
            say hello? I'd love to hear from you.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur lg:col-span-2">

            <h2 className="text-2xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              I'm open to discussing frontend development, AI projects,
              internships, collaborations, and new opportunities.
            </p>

            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:your-email@gmail.com"
                className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-cyan-400/60"
              >
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-cyan-400">
                  your-email@gmail.com
                </p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-cyan-400/60"
              >
                <p className="text-sm text-slate-500">
                  GitHub
                </p>

                <p className="mt-1 text-slate-200">
                  GitHub Profile
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-cyan-400/60"
              >
                <p className="text-sm text-slate-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-slate-200">
                  LinkedIn Profile
                </p>
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <form
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur lg:col-span-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been submitted.");
            }}
          >

            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="What would you like to discuss?"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />

            </div>

            {/* Message */}
            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                rows="7"
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              ></textarea>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-bold transition hover:scale-[1.01] hover:from-cyan-400 hover:to-purple-500"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}