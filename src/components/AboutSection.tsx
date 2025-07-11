
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Code, Camera } from 'lucide-react';

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
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div 
        ref={elementRef}
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto animate-scale-in"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image - Reduced Size */}
          <div className="relative group animate-fade-in-left">
            <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Animesh Anand"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce-slow group-hover:animate-pulse">
              <span className="text-primary-foreground font-bold text-lg">4+</span>
            </div>
            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float delay-500">
              <Camera className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="absolute top-10 -right-8 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center animate-float delay-1000">
              <Code className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* Bio and Skills */}
          <div className="space-y-8 animate-fade-in-right">
            <Card className="border-none shadow-xl bg-gradient-to-br from-card to-muted/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-primary">My Story</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm <span className="text-primary font-semibold animate-pulse">Animesh Anand</span> — a video editor, 
                  cinematographer, and visual storyteller from <span className="font-medium text-foreground">IIT Ropar</span>. 
                  With 4+ years of experience, I bring stories to life through cinematic cuts, color-rich frames, 
                  and smooth narrative flow. Whether it's a reel, short film, or corporate edit, I aim to craft 
                  visuals that feel alive.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="animate-fade-in-up delay-300">
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <div className="w-2 h-8 bg-primary rounded-full mr-3 animate-pulse"></div>
                  Tools I Master
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={tool} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in-up delay-500">
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <div className="w-2 h-8 bg-accent rounded-full mr-3 animate-pulse"></div>
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="px-4 py-2 text-sm border-2 border-primary text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg animate-fade-in-up"
                      style={{ animationDelay: `${index * 100 + 300}ms` }}
                    >
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
