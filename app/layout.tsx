import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'RoboSim - Robot Simulation Platform', description: 'Scene editor, physics simulation, and digital twins' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className="dark"><body className="min-h-screen bg-[#0a0805] text-gray-100 antialiased">{children}</body></html>);
}
