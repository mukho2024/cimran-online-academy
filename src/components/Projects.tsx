import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import projectBranding from '@/assets/project-branding.jpg';
import projectEditorial from '@/assets/project-editorial.jpg';
import projectPackaging from '@/assets/project-packaging.jpg';
import projectUI from '@/assets/project-ui.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      subtitle: "Visual Identity Course Project",
      description: "Complete brand identity system for a fictional sustainable coffee company, including logo design, color palette, typography, and brand guidelines.",
      image: projectBranding,
      tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
      category: "Branding",
      course: "Visual Identity Design",
      process: ["Research & Strategy", "Logo Exploration", "Brand System", "Application Design"]
    },
    {
      id: 2,
      title: "Editorial Magazine Layout",
      subtitle: "Typography & Layout Course",
      description: "Double-page magazine spread focusing on sustainable fashion, emphasizing typography hierarchy, grid systems, and visual storytelling.",
      image: projectEditorial,
      tools: ["Adobe InDesign", "Photoshop", "Typography"],
      category: "Editorial",
      course: "Typography & Layout",
      process: ["Content Analysis", "Grid Development", "Typography Selection", "Layout Refinement"]
    },
    {
      id: 3,
      title: "Product Packaging Design",
      subtitle: "Package Design Course",
      description: "Eco-friendly packaging system for artisanal tea collection, focusing on sustainable materials and consumer experience.",
      image: projectPackaging,
      tools: ["Adobe Illustrator", "Photoshop", "3D Mockups"],
      category: "Packaging",
      course: "Package Design Fundamentals",
      process: ["Market Research", "Concept Development", "Structural Design", "Visual Application"]
    },
    {
      id: 4,
      title: "Mobile App UI Design",
      subtitle: "Digital Design Course",
      description: "User interface design for a plant care mobile application, focusing on user experience and modern design patterns.",
      image: projectUI,
      tools: ["Figma", "Adobe XD", "Prototyping"],
      category: "UI/UX",
      course: "Digital Interface Design",
      process: ["User Research", "Wireframing", "Visual Design", "Prototyping"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-primary">Course Projects</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of academic projects that demonstrate my learning journey and growing expertise in graphic design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card overflow-hidden soft-shadow hover:shadow-strong group"
            >
              {/* Project Image */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="project-overlay">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="hero" size="lg" className="opacity-0 group-hover:opacity-100 smooth-transition">
                      <Eye className="mr-2 h-4 w-4" />
                      View Process
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="heading-md text-card-foreground">{project.title}</h3>
                  <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                  <p className="body-md text-muted-foreground">{project.description}</p>
                </div>

                {/* Course Info */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">Course: {project.course}</p>
                </div>

                {/* Process Steps */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-card-foreground">Design Process:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.process.map((step, stepIndex) => (
                      <span 
                        key={stepIndex}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {stepIndex + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-card-foreground">Tools Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="minimal" size="sm" className="flex-1">
                    <Eye className="mr-2 h-3 w-3" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="body-md text-muted-foreground mb-6">
            Interested in seeing more projects or discussing collaboration opportunities?
          </p>
          <Button variant="accent" size="lg">
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;