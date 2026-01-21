import SectionReveal from "./SectionReveal";

export default function Contact() {
    return (
        <section id="contact" className="relative py-40 px-6">
            <SectionReveal>
                <div className="max-w-3xl mx-auto text-center relative">
                    {/* Section Label */}
                    <span className="text-xs tracking-widest uppercase text-cyan-400/70 mb-4 block">
            Contact
          </span>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-light mb-8 text-white leading-tight">
                        Let’s Build Something <br className="hidden sm:block" />
                        <span className="text-cyan-400">Impactful</span>
                    </h2>

                    {/* Description */}
                    <p className="text-slate-400 text-lg mb-14 leading-relaxed">
                        I’m interested in roles and projects involving{" "}
                        <span className="text-slate-200">embedded systems</span>,{" "}
                        <span className="text-slate-200">IoT</span>, and{" "}
                        <span className="text-slate-200">production-grade engineering</span>.
                        If my work aligns with what you’re building, I’d love to connect.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-5">
                        <a
                            href="mailto:amankr20001@gmail.com"
                            className="relative px-10 py-4 text-sm font-medium text-white
                         border border-slate-700 rounded-full
                         hover:border-cyan-500/50 hover:text-cyan-400
                         transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                        >
                            Email Me
                        </a>

                        <a
                            href="https://github.com/Aman-Kumar-19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-10 py-4 text-sm font-medium text-white
                         border border-slate-700 rounded-full
                         hover:border-cyan-500/50 hover:text-cyan-400
                         transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/aman-kumar-413838239"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-10 py-4 text-sm font-medium text-white
                         border border-slate-700 rounded-full
                         hover:border-cyan-500/50 hover:text-cyan-400
                         transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
