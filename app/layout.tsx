import type { Metadata } from 'next';
import { Outfit, STIX_Two_Text } from 'next/font/google';
import SmoothScrolling from './_providers/SmoothScrolling';
import './globals.css';

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
  display: 'swap',
});

const stixTwoTextSerif = STIX_Two_Text({
  variable: '--font-stix-serif',
  subsets: ['latin'],
  style: 'italic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Allan Silva — Desenvolvedor Front-End & UX/UI Designer',
  description: 'Portfolio de Allan Silva - Dev Front-end & UX/UI Designer.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfitSans.variable} ${stixTwoTextSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
