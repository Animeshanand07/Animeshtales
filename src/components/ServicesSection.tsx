
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Film, Camera, Zap, Clock, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ServicesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "Reel & Shorts Edit",
      description: "Professional short-form content editing optimized for social media platforms with engaging transitions and effects.",
      price: "Starting from ₹700",
      features: ["Beat-synced editing", "Color correction", "Motion graphics", "Quick turnaround"],
      popular: true
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Cinematic Travel Videos",
      description: "High-quality cinematic content creation with professional storytelling and visual aesthetics.",
      price: "Starting from ₹2,500",
      features: ["Cinematic look", "Story-driven editing", "Professional grading", "Custom music"],
      popular: false
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Talking Head Videos",
      description: "Professional editing for corporate videos, interviews, and educational content with clean presentation.",
      price: "Starting from ₹800",
      features: ["Clean editing", "Subtitle integration", "Brand consistency", "Multiple cuts"],
      popular: false
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div 
        ref={elementRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-300">
            Professional video editing services tailored to bring your vision to life with cinematic quality and creative excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full group-hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
