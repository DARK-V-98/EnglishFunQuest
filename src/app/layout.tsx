import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Providers } from '@/components/Providers';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'English Fun Quest',
  description: 'Learn English with Fun!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <FirebaseClientProvider>
            {children}
            <Toaster />
          </FirebaseClientProvider>
        </Providers>
      </body>
    </html>
  );
}
