
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PhotoSlider } from '@/components/PhotoSlider';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground">
        {/* Theme Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

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
        <footer className="bg-muted py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Animesh Anand. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
