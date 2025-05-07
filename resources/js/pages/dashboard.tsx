import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

export default function Home() {
  const breadcrumbs = [
    { title: 'Home', href: '/' },
  ];



  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Home" />

      {/* Hero Section */}
      <section className="w-full h-screen bg-muted/50 rounded-4xl p-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
         
        A New Gen Dev  that doesn't yap much but delivers 10/10's
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
         Rizz up your projects with me.
        </p>
       
      </section>


   
    </AppLayout>
  );
}
