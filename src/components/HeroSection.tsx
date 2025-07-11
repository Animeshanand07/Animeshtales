
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Mail } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-black/20 via-transparent to-black/30">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-background/10 to-background"></div>
        </div>
        {/* Placeholder video background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
            Animesh Anand
          </h1>
          
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary typing-cursor min-h-[1.2em]">
              {displayText}
            </h2>
          </div>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Crafting visuals that feel alive
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={scrollToWork}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Collaborate
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};
