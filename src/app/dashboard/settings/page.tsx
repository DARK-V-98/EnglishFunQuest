'use client';

import Link from 'next/link';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Settings as SettingsIcon, Volume2, VolumeX, Sun, Moon, Laptop } from 'lucide-react';
import { useSettings } from '@/hooks/use-settings';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export default function SettingsPage() {
  const { theme, setTheme, soundEnabled, setSoundEnabled, isMounted } = useSettings();

  if (!isMounted) {
    // Return a skeleton or loading state to avoid hydration mismatch
    return (
       <div className="min-h-screen bg-background">
        <header className="bg-gradient-to-r from-purple to-pink p-6 text-white">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <Link href="/dashboard">
              <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-6 h-6" />
              </KidButton>
            </Link>
            <SettingsIcon className="w-8 h-8" />
            <h1 className="text-3xl font-heading">Settings</h1>
          </div>
        </header>
        <main className="max-w-xl mx-auto p-4 sm:p-8">
            <div className="w-full p-8 space-y-8 bg-card rounded-3xl card-shadow border-4 border-muted">
                <div className="space-y-4">
                    <Skeleton className="h-8 bg-muted rounded w-1/2" />
                    <Skeleton className="h-16 bg-muted rounded-2xl" />
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-8 bg-muted rounded w-1/3" />
                    <Skeleton className="h-16 bg-muted rounded-2xl" />
                </div>
                 <div className="space-y-4 opacity-50">
                    <Skeleton className="h-8 bg-muted rounded w-1/2" />
                    <Skeleton className="h-16 bg-muted rounded-2xl" />
                </div>
            </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-purple to-pink p-6 text-white">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/dashboard">
            <KidButton variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-6 h-6" />
            </KidButton>
          </Link>
          <SettingsIcon className="w-8 h-8" />
          <h1 className="text-3xl font-heading">Settings</h1>
        </div>
      </header>
      <main className="max-w-xl mx-auto p-4 sm:p-8">
        <div className="w-full p-8 space-y-8 bg-card rounded-3xl card-shadow border-4 border-muted">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-heading">Appearance</h2>
            <div className="flex items-center justify-between p-4 rounded-2xl border-2">
              <Label className="font-bold text-lg">Theme</Label>
               <RadioGroup
                  value={theme}
                  onValueChange={setTheme}
                  className="flex items-center gap-1 rounded-2xl bg-muted p-1"
              >
                  <Label htmlFor="light-theme" className={cn("p-2 rounded-xl cursor-pointer transition-colors", theme === 'light' && 'bg-background shadow-sm')}>
                      <RadioGroupItem value="light" id="light-theme" className="sr-only" />
                      <Sun className="w-6 h-6" />
                  </Label>
                  <Label htmlFor="dark-theme" className={cn("p-2 rounded-xl cursor-pointer transition-colors", theme === 'dark' && 'bg-background shadow-sm')}>
                      <RadioGroupItem value="dark" id="dark-theme" className="sr-only" />
                      <Moon className="w-6 h-6" />
                  </Label>
                   <Label htmlFor="system-theme" className={cn("p-2 rounded-xl cursor-pointer transition-colors", theme === 'system' && 'bg-background shadow-sm')}>
                      <RadioGroupItem value="system" id="system-theme" className="sr-only" />
                      <Laptop className="w-6 h-6" />
                  </Label>
              </RadioGroup>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-heading">Sound</h2>
             <div className="flex items-center justify-between p-4 rounded-2xl border-2">
               <div className='flex items-center gap-3'>
                {soundEnabled ? <Volume2 className="w-6 h-6 text-primary"/> : <VolumeX className="w-6 h-6 text-muted-foreground"/>}
                <Label htmlFor="sound-effects" className="font-bold text-lg">Sound Effects</Label>
               </div>
              <Switch
                id="sound-effects"
                checked={soundEnabled}
                onCheckedChange={setSoundEnabled}
              />
            </div>
          </div>

          <div className="space-y-4 opacity-50">
            <h2 className="text-2xl font-heading">Notifications</h2>
             <div className="flex items-center justify-between p-4 rounded-2xl border-2">
                <Label htmlFor="email-reminders" className="font-bold text-lg">Weekly Progress Reports</Label>
              <Switch id="email-reminders" disabled />
            </div>
             <div className="flex items-center justify-between p-4 rounded-2xl border-2">
                <Label htmlFor="new-lessons" className="font-bold text-lg">New Lesson Alerts</Label>
              <Switch id="new-lessons" disabled />
            </div>
            <p className="text-sm text-muted-foreground text-center">Notification settings are coming soon!</p>
          </div>

        </div>
      </main>
    </div>
  );
}
