import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t-4 border-primary py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image
            src="/logo.png"
            alt="English Fun Quest Logo"
            width={24}
            height={24}
          />
          <span className="font-heading text-lg">English Fun Quest</span>
        </div>
        <p className="text-muted-foreground mb-2">
          This educational platform is provided{' '}
          <strong className="text-primary">completely free</strong> by
        </p>
        <p className="text-xl font-heading text-gradient mb-4">
          English Fun Quest
        </p>
        <p className="text-sm text-muted-foreground">
          © 2024 English Fun Quest. All rights reserved. Made with ❤️ for kids
          learning English.
        </p>
      </div>
    </footer>
  );
}
