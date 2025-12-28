"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Timeline } from "@/components/timeline";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-foreground selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
