import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reimer Campos - Desarrollador Frontend',
  description: 'Portafolio profesional de Reimer Alexander Campos Hernández, desarrollador frontend especializado en Next.js, React y TypeScript.',
  keywords: ['Desarrollador Frontend', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
  authors: [{ name: 'Reimer Alexander Campos Hernández' }],
  openGraph: {
    title: 'Reimer Campos - Desarrollador Frontend',
    description: 'Desarrollador frontend especializado en crear aplicaciones web modernas con Next.js, React y TypeScript.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}