import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';
import AnimationProvider from '@/providers/AnimationProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'PORTOFOLIO EKA',
  description: 'AI Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#040d1a] text-[#f0f0f0] font-sans antialiased min-h-screen">
        <SmoothScrollProvider>
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
