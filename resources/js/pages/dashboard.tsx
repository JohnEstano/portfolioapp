import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Button } from '@/components/ui/button';
import { ConfettiButton } from "@/components/magicui/confetti";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { NumberTicker } from "@/components/magicui/number-ticker";


import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
const lines = [
  "[dev@portfolio]$ git clone https://github.com/yourname/portfolio.git",
  "Cloning into 'portfolio'... done.",
  "[dev@portfolio portfolio]$ npm run dev",
  "Dev server listening on http://localhost:3000",
  "[dev@portfolio portfolio]$ echo 'Welcome to my world of code!'",
  "Welcome to my world of code! 👋"
];

const baseDelay = 500; //

export default function Home() {
  const breadcrumbs = [
    { title: 'Home', href: '/' },
  ];



  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Home" />


      <section className="w-full min-h-[100dvh] bg-muted/50 rounded-4xl px-4 sm:px-6 pt-10 sm:pt-20 pb-12 text-center flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3">
            <h1>lobot</h1>
            <ConfettiButton>
              <img
                src="/storage/images/profilebird.png"
                alt="Profile Bird"
                className="w-12 h-12 rounded-md object-cover shadow hover:scale-105 transition-transform"
              />
            </ConfettiButton>
            <div className="text-left">
              <p className="text-muted-foreground text-sm">Hello 👋, I am</p>
              <p className="font-semibold text-lg">John Estano</p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black leading-snug tracking-tight text-balance">
            A New Gen Dev that doesn't yap much but delivers <NumberTicker value={100} />%
          </h1>
          <ShinyButton>Learn more about me</ShinyButton>




          <Terminal className="text-left mt-6">
            <TypingAnimation>&gt; pnpm dlx create-portfolio@latest init</TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-500">
              <span>✔ Preflight checks</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2000} className="text-green-500">
              <span>✔ Verifying framework (Next.js detected)</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-green-500">
              <span>✔ Validating Tailwind CSS</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-green-500">
              <span>✔ Setting up alias imports</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3500} className="text-green-500">
              <span>✔ Creating components config</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="text-green-500">
              <span>✔ Installing dependencies</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-blue-500">
              <span>ℹ Updated files:</span>
              <span className="pl-2">- tsconfig.json</span>
            </AnimatedSpan>

            <TypingAnimation delay={5000} className="text-muted-foreground">
              Portfolio setup complete!
            </TypingAnimation>
            <TypingAnimation delay={5500} className="text-muted-foreground">
              You’re ready to showcase your work 🚀
            </TypingAnimation>
          </Terminal>
        </div>
      </section>




    </AppLayout>
  );
}
