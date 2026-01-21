import SectionReveal from './SectionReveal'

export default function About() {
    return (
        <section id="about" className="max-w-5xl mx-auto px-6 py-32">
            <div className="grid md:grid-cols-2 gap-16 items-start">

                {/* Left column */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            About
                        </h2>
                        <p className="mt-6 text-neutral-400 leading-relaxed">
                            I engineer systems where hardware, firmware, and intelligent software
                            converge — from bare-metal devices to secure cloud platforms.
                        </p>
                    </div>

                    {/* Recognition */}
                    <div className="border-l border-l-white pl-6">
                        <div className="text-sm text-white mb-2">
                            Recognition
                        </div>
                        <div className="text-xl font-light mb-2">
                            Top 0.18% National Ranking
                        </div>
                        <div className="text-slate-400 text-sm">
                            Naukri Campus Young Turks Aptitude Exam (96.5%)
                        </div>
                        <div className="text-slate-400 text-sm mt-1">
                            Rank &lt;900 / 500,000 in Electronics
                        </div>
                    </div>

                    {/* ORCID */}
                    <div className="border-l border-l-white pl-6">
                        <div className="text-sm text-white mb-2">
                            ORCID iD
                        </div>
                        <a
                            href="https://orcid.org/0009-0004-9007-4771"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                        >
                            View Research Profile →
                        </a>
                    </div>
                </div>

                {/* Right column */}
                <div className="space-y-6 text-neutral-300 leading-relaxed">
                    <p>
                        Electronics and Communication Engineering graduate from VIT with a focus
                        on embedded systems, IoT architecture, and real-time processing. My work
                        sits at the intersection of hardware and intelligent software.
                    </p>

                    <p>
                        I’ve developed production systems ranging from assistive wearables with
                        <span className="text-white font-medium"> 95% reliability </span>
                        to smart lighting infrastructures deployed in commercial environments.
                        Currently working on IoT telematics systems with bare-metal firmware and
                        secure cloud connectivity.
                    </p>

                    <p>
                        My expertise spans from low-level driver development
                        <span className="text-neutral-400">
                            {' '} (GPIO, UART, SPI, I2C)
                        </span>
                        to cloud integration with Azure IoT Hub, implementing enterprise-grade
                        security using TLS/mTLS and certificate-based authentication.
                    </p>
                </div>

            </div>
        </section>
    )
}
