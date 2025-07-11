
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PhotoSlider } from '@/components/PhotoSlider';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Photo Slider */}
        <PhotoSlider />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-muted to-muted/50 py-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-muted-foreground text-lg animate-fade-in-up">
              © 2024 Animesh Anand. All rights reserved.
            </p>
            <p className="text-primary/70 mt-2 animate-fade-in-up delay-300">
              Crafting visuals that feel alive ✨
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
