import { ThemeProvider } from '@/components/global/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { nunito } from './fonts';

export const metadata: Metadata = {
  title: 'Portfolio for Onembes',
  description: 'Portfolio for Onembes',
  icons: {
    icon: '/signature.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${nunito.variable} font-nunito`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
