'use client'

import { useEffect, useState } from 'react'

type Label = {
    text: string
    y: number
}

const LABELS: Label[] = [
    { text: 'Hardware', y: -1.3 },
    { text: 'Firmware', y: -0.45 },
    { text: 'Network', y: 0.45 },
    { text: 'Cloud', y: 1.3 },
]

export default function SystemLabels({
                                         cameraY,
                                     }: {
    cameraY: number
}) {
    return (
        <div className="pointer-events-none absolute inset-0">
            {LABELS.map((label) => {
                const distance = Math.abs(cameraY - label.y)

                // Fade logic
                const opacity = Math.max(0, 1 - distance * 1.2)

                return (
                    <div
                        key={label.text}
                        style={{
                            opacity,
                            transform: `translateY(${-(label.y * 120)}px)`,
                        }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2
                       text-sm tracking-widest uppercase text-neutral-300"
                    >
                        {label.text}
                    </div>
                )
            })}
        </div>
    )
}
