import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'Aman Kumar — Embedded & IoT Engineer',
    description: 'Engineering intelligent systems from silicon to cloud.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-neutral-950 text-neutral-100 antialiased pt-16">
        <Navbar />
        {children}
        </body>
        </html>
    )
}
