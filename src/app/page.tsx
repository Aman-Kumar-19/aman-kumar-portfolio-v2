import dynamic from 'next/dynamic'

import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

const Hero = dynamic(() => import('@/components/Hero'), {
    ssr: false,
})

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </main>
    )
}
