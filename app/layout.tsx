import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/app/contexts/AuthProvider';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import SiteFooter from '@/app/components/SiteFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmartStudy AI',
  description: 'AI-powered study support for students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
              <GoogleAnalytics />
              <SiteFooter />
      </body>
    </html>
  );
}
