import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maximo Solutions - Data Annotation Services',
  description: 'Professional data annotation services for AI and machine learning projects',
  keywords: 'data annotation, AI, machine learning, data labeling, computer vision',
  authors: [{ name: 'Maximo Solutions' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth font-sans">
      <body className="maximo-bg-overlay">
        {children}
      </body>
    </html>
  );
}