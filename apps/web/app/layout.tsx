import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vyoris AI | Lead Intelligence Platform',
  description: 'AI-powered lead intelligence platform to discover, enrich, and analyze business opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FFFFFF] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
