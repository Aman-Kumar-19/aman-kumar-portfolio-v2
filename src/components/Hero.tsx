'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import SystemStack from './SystemStack'

export default function Hero() {

    // 🔒 Always start at top (fix auto-scroll to About)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [])

    // 🔒 Freeze Canvas lifecycle (no remounts)
    const CanvasScene = useMemo(() => (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={[1, 1.5]}
        >
            {/*
              No ambientLight
              No directionalLight
              Environment acts as light source
            */}
            <Environment preset="city" />

            <SystemStack />
        </Canvas>
    ), [])

    return (
        <section className="relative h-screen overflow-hidden">

            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                {CanvasScene}
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 isolate flex h-full items-center justify-center">
                <motion.div
                    initial={false}   // 🚫 hydration-safe
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center px-6 max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
                        Building intelligent hardware systems
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-neutral-300">
                        Specializing in embedded architectures, IoT infrastructure,
                        and real-time systems.
                    </p>
                </motion.div>
            </div>

        </section>
    )
}
