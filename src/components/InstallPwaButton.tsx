'use client';

import { usePwaInstall } from '@/hooks/usePwaInstall';
import { KidButton } from './ui/kid-button';
import { Download } from 'lucide-react';
import { SheetClose } from './ui/sheet';

export function InstallPwaButton() {
  const { canInstall, promptInstall } = usePwaInstall();

  if (!canInstall) {
    return null;
  }

  // We don't use SheetClose here because the promptInstall action
  // will cause the sheet to lose focus and close anyway.
  return (
    <KidButton variant="secondary" className="w-full justify-start" onClick={promptInstall}>
      <Download className="w-5 h-5" />
      Install App
    </KidButton>
  );
}
