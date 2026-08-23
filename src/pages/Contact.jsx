export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Let's{" "}
            <span className="text-cyan-400">
              Connect
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out. I'd love to hear from you.
          </p>

        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-8 md:grid-cols-2">


          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">

            <h2 className="mb-6 text-2xl font-semibold">
              Send Me a Message
            </h2>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>


              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Send Message →
              </button>

            </form>

          </div>



          {/* ================= YOUR INFO ================= */}
          <div className="space-y-6">


            {/* Work Together Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">

              <h2 className="mb-6 text-2xl font-semibold">
                Let's Work Together
              </h2>

              <p className="leading-7 text-slate-400">
                I'm always open to discussing new projects, creative ideas,
                internships, collaborations, and exciting opportunities.
              </p>

            </div>


            {/* Email Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">

              <p className="text-sm text-slate-500">
                Email
              </p>

              <a
                href="mailto:adititripathi066@gmail.com"
                className="mt-2 block text-cyan-400 transition hover:text-cyan-300"
              >
                adititripathi066@gmail.com
              </a>

            </div>


            {/* GitHub Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50">

              <p className="text-sm text-slate-500">
                GitHub
              </p>

              <a
                href="https://github.com/adititripathi066-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-purple-400 transition hover:text-purple-300"
              >
                GitHub Profile →
              </a>

            </div>


            {/* LinkedIn Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">

              <p className="text-sm text-slate-500">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/aditi-tripathi-0639822b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-cyan-400 transition hover:text-cyan-300"
              >
                LinkedIn Profile →
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}