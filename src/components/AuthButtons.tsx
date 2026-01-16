'use client';

import { useUser, useAuth } from '@/firebase';
import Link from 'next/link';
import { KidButton } from './ui/kid-button';
import { LogOut, UserPlus, LogIn, LayoutDashboard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SheetClose } from './ui/sheet';
import { cn } from '@/lib/utils';

export function AuthButtons({ isMobile = false }: { isMobile?: boolean }) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };

  if (isUserLoading) {
    return <div className={cn("rounded-full animate-pulse", isMobile ? "w-full h-24 bg-muted" : "w-40 h-10 bg-white/20")} />;
  }

  if (isMobile) {
      if (user) {
          return (
              <div className="flex w-full flex-col gap-2">
                  <SheetClose asChild>
                      <Link href="/dashboard">
                          <KidButton variant="outline" className="w-full justify-start">
                              <LayoutDashboard className="w-5 h-5"/>
                              Dashboard
                          </KidButton>
                      </Link>
                  </SheetClose>
                  <KidButton onClick={handleLogout} variant="outline" className="w-full justify-start">
                      <LogOut className="w-5 h-5" />
                      Logout
                  </KidButton>
              </div>
          )
      }
      return (
          <div className="flex w-full flex-col gap-2">
              <SheetClose asChild>
                  <Link href="/login">
                      <KidButton variant="outline" className="w-full justify-start">
                          <LogIn className="w-5 h-5" />
                          Login
                      </KidButton>
                  </Link>
              </SheetClose>
              <SheetClose asChild>
                  <Link href="/signup">
                      <KidButton variant="secondary" className="w-full justify-start">
                          <UserPlus className="w-5 h-5" />
                          Sign Up
                      </KidButton>
                  </Link>
              </SheetClose>
          </div>
      )
  }

  // Desktop
  if (user) {
    return (
        <div className="flex items-center gap-2">
            <Link href="/dashboard">
                <KidButton variant="ghost" className="text-white hover:bg-white/20">
                    <LayoutDashboard className="w-5 h-5"/>
                    Dashboard
                </KidButton>
            </Link>
            <KidButton onClick={handleLogout} variant="ghost" className="text-white hover:bg-white/20">
                <LogOut className="w-5 h-5" />
                Logout
            </KidButton>
        </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/login">
        <KidButton variant="ghost" className="text-white hover:bg-white/20">
          <LogIn className="w-5 h-5" />
          Login
        </KidButton>
      </Link>
      <Link href="/signup">
        <KidButton variant="secondary">
          <UserPlus className="w-5 h-5" />
          Sign Up
        </KidButton>
      </Link>
    </div>
  );
}
