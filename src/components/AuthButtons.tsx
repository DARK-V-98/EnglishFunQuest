'use client';

import { useUser, useAuth, useFirestore } from '@/firebase';
import Link from 'next/link';
import { KidButton } from './ui/kid-button';
import { LogOut, UserPlus, LogIn, LayoutDashboard, User as UserIcon, Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SheetClose } from './ui/sheet';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';

export function AuthButtons({ isMobile = false }: { isMobile?: boolean }) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (user && firestore) {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(firestore, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setFirstName(userDoc.data().firstName || '');
          }
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };
      fetchUserData();
    }
  }, [user, firestore]);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };

  const getInitials = () => {
    return firstName ? firstName.charAt(0).toUpperCase() : (user?.email?.charAt(0).toUpperCase() || 'U');
  };

  if (isUserLoading) {
    return <div className={cn("rounded-full animate-pulse", isMobile ? "w-full h-24 bg-muted" : "w-10 h-10 bg-white/20")} />;
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
                  <SheetClose asChild>
                      <Link href="/dashboard/profile">
                          <KidButton variant="outline" className="w-full justify-start">
                              <UserIcon className="w-5 h-5"/>
                              Profile
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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <KidButton variant="ghost" className="relative h-10 w-10 rounded-full !shadow-none">
                    <Avatar className="h-10 w-10 border-2 border-white/50">
                        <AvatarImage src={user.photoURL || ''} alt={firstName || 'User'} />
                        <AvatarFallback className="bg-secondary text-secondary-foreground">{getInitials()}</AvatarFallback>
                    </Avatar>
                </KidButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{firstName || 'Welcome'}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                 <DropdownMenuItem asChild>
                   <Link href="/dashboard" className="w-full cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                     <Link href="/dashboard/profile" className="w-full cursor-pointer">
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4" />
                          <span>Theme</span>
                          <Moon className="h-4 w-4" />
                      </div>
                      <Switch
                          checked={theme === 'dark'}
                          onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
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
