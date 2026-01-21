'use client'

import { Float } from '@react-three/drei'

function Layer({
                   position,
                   color,
                   opacity = 1,
               }: {
    position: [number, number, number]
    color: string
    opacity?: number
}) {
    return (
        <Float speed={1.2} floatIntensity={0.35}>
            <mesh position={position} castShadow receiveShadow>
                <boxGeometry args={[3, 0.25, 3]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.3}
                    metalness={0.5}
                    transparent={opacity < 1}
                    opacity={opacity}
                />
            </mesh>
        </Float>
    )
}

export default function SystemStack() {
    return (
        <>
            {/* Hardware */}
            <Layer position={[0, -1.3, 0]} color="#0f172a" />

            {/* Firmware */}
            <Layer position={[0, -0.45, 0]} color="#1e40af" />

            {/* Network */}
            <Layer position={[0, 0.45, 0]} color="#2563eb" opacity={0.95} />

            {/* Cloud */}
            <Layer position={[0, 1.3, 0]} color="#93c5fd" opacity={0.9} />
        </>
    )
}
