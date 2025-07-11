
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Mail, Sparkles } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

export const HeroSection = () => {
  const titles = [
    'Video Editor',
    'Visual Storyteller', 
    'Cinematographer',
    'Director',
    'Engineer'
  ];

  const displayText = useTypingEffect({ 
    texts: titles,
    typingSpeed: 150,
    deletingSpeed: 100,
    pauseDuration: 2000 
  });

  const scrollToWork = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-primary/20 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/10 transform -translate-y-1/2 animate-bounce-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-8 animate-fade-in-up">
          {/* Sparkle Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="h-12 w-12 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-ping"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground animate-scale-in">
            <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent animate-gradient">
              Animesh Anand
            </span>
          </h1>
          
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-primary typing-cursor min-h-[1.2em] animate-fade-in-right">
              {displayText}
            </h2>
          </div>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-300">
            Crafting visuals that feel alive
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up delay-500">
            <Button 
              onClick={scrollToWork}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <Play className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Let's Collaborate
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="h-10 w-10 text-primary/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
