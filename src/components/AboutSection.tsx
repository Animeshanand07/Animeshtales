
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const tools = [
    'Adobe Premiere Pro',
    'Final Cut Pro', 
    'Adobe After Effects',
    'DaVinci Resolve'
  ];

  const skills = [
    'Color Grading',
    'Sound Design',
    'Motion Graphics'
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div 
        ref={elementRef}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                alt="Animesh Anand"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">4+</span>
            </div>
          </div>

          {/* Bio and Skills */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm <span className="text-primary font-semibold">Animesh Anand</span> — a video editor, 
                  cinematographer, and visual storyteller from <span className="font-medium">IIT Ropar</span>. 
                  With 4+ years of experience, I bring stories to life through cinematic cuts, color-rich frames, 
                  and smooth narrative flow. Whether it's a reel, short film, or corporate edit, I aim to craft 
                  visuals that feel alive.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Tools I Master</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="px-3 py-1 text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 text-sm border-primary text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
