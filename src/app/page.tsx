'use client';
import About from '@/components/About';
import ContactCTA from '@/components/ContactCTA';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import GalleryDesktop from '@/components/GalleryDesktop';
import HeroDesktop from '@/components/HeroDesktop';
import Navbar from '@/components/Navbar';
import PricingTable from '@/components/PricingTable';
import Testimonials from '@/components/Testimonials';
import { useAnimateOnScroll } from '@/hooks/useAnimationOnScroll';
import React from 'react';

export default function Page() {
  useAnimateOnScroll();
  return (
    <>
      <Navbar />
      <main suppressHydrationWarning className="font-sans text-gray-900">
        <HeroDesktop />
        <Features />
        <About />
        <PricingTable />
        <Testimonials />
        <GalleryDesktop />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
