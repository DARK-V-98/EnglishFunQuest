'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { KidButton } from '@/components/ui/kid-button';
import { useUser, useFirestore, errorEmitter, FirestorePermissionError } from '@/firebase';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { toast } from 'sonner';
import { ArrowLeft, Save } from 'lucide-react';

const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is too short.' }),
  lastName: z.string().min(2, { message: 'Last name is too short.' }),
  country: z.string({ required_error: 'Please select a country.' }),
});

const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'IN', name: 'India' },
];

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
    },
  });

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
    if (user && firestore) {
      const fetchUserData = async () => {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          form.reset({
            firstName: userData.firstName,
            lastName: userData.lastName,
            country: userData.country,
          });
        }
      };
      fetchUserData();
    }
  }, [user, isUserLoading, router, firestore, form]);

  const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
    setError(null);
    if (!user || !firestore) {
      setError("User or database not available.");
      toast.error("User or database not available.");
      return;
    }
    
    const userDocRef = doc(firestore, 'users', user.uid);
    setDoc(userDocRef, values, { merge: true })
      .then(() => {
          toast.success('Profile updated successfully!');
          router.push('/dashboard');
      })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'update',
          requestResourceData: values,
        });
        errorEmitter.emit('permission-error', permissionError);
        setError("Failed to update profile. You might not have permission.");
        toast.error("Failed to update profile. You might not have permission.");
      });
  };

  if (isUserLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        Loading...
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
          <h1 className="text-3xl font-heading">Edit Profile</h1>
        </div>
      </header>
      <main className="max-w-xl mx-auto p-4 sm:p-8">
        <div className="w-full p-8 space-y-8 bg-card rounded-3xl card-shadow border-4 border-muted">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map(c => <SelectItem key={c.code} value={c.name}>{c.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error && <p className="text-sm font-medium text-destructive">{error}</p>}
                <KidButton type="submit" className="w-full" size="lg">
                    <Save className="w-5 h-5"/>
                    Save Changes
                </KidButton>
            </form>
            </Form>
        </div>
      </main>
    </div>
  );
}
