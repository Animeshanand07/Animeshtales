
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  tools: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  featured: boolean;
}

export const PortfolioSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Talking-Head Video (Client Work)',
      category: 'Talking-head Videos',
      role: 'Editor',
      tools: 'Adobe Premiere Pro',
      description: 'A clean, corporate-style edit crafted to retain viewer attention and visual clarity for professional use.',
      videoUrl: 'https://drive.google.com/file/d/1nwsPSa2IZxOql6ceP-QH2PcEhBgC_5YY/view?usp=drive_link',
      thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Short Film – Inter IIT Bronze Medal Winner',
      category: 'Short Films',
      role: 'Editor',
      tools: 'Adobe Premiere Pro, DaVinci Resolve',
      description: 'Edited for emotion and pacing, this short film helped the team secure a Bronze medal at Inter IIT.',
      videoUrl: 'https://drive.google.com/file/d/1D70DOznD3n0zaMHe4G77juBBfLFf_QBg/view?usp=drive_link',
      thumbnailUrl: 'https://drive.google.com/file/d/1I3tN7pJ4c7K9sk_yquH9s1hi4JLpgx3i/view?usp=sharing',
      featured: true
    },
    {
      id: 3,
      title: '51-Hour Filmmaking Challenge',
      category: 'Direction Projects',
      role: 'Director',
      tools: 'Adobe Premiere Pro, DaVinci Resolve',
      description: 'Shot, directed, and edited in just 51 hours — a high-pressure project that showcases direction and execution skills.',
      videoUrl: 'https://drive.google.com/file/d/1C63vt6C5Mp86WiBKdn4IpcViv-G-Lrk9/view?usp=drive_link',
      thumbnailUrl: 'https://drive.google.com/file/d/1w3DEWV6ZxobTa88Lu-ZkDvTkBPjvxCO2/view?usp=drive_link',
      featured: true
    },
    {
      id: 4,
      title: 'Cinematic Reel',
      category: 'Instagram Reels',
      role: 'Cinematographer',
      tools: 'Adobe Premiere Pro',
      description: 'A personal reel focused on aesthetic visuals, composition, and natural light to tell visual stories.',
      videoUrl: 'https://drive.google.com/file/d/1eE3EuFvFBvTaP-A3EeEgBqMfXBVibDet/view?usp=sharing',
      thumbnailUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Content Creation (Social Media Edit)',
      category: 'Social Media Edits',
      role: 'Content Creator',
      tools: 'Adobe Premiere Pro',
      description: 'Beat-synced transitions and engaging pacing crafted for maximum impact across social platforms.',
      videoUrl: 'https://drive.google.com/file/d/1p51qo4UqwhK18aJKO9iEmk8wgMy1a5HK/view?usp=sharing',
      thumbnailUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = [
    'All',
    'Instagram Reels',
    'Short Films', 
    'Event Aftermovies',
    'Talking-head Videos',
    'Direction Projects',
    'Social Media Edits'
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayProjects = showAll 
    ? filteredProjects 
    : filteredProjects.filter(project => project.featured).slice(0, 3);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div 
        ref={elementRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.videoUrl, '_blank')}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(project.videoUrl, '_blank')}
                    className="shrink-0 h-8 w-8"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{project.role}</Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.tools}</p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredProjects.length > 3 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Projects ({filteredProjects.length - displayProjects.length} more)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
