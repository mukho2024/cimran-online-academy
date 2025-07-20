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
      title: "Koorsada Teknoolajiyada",
      subtitle: "Programming iyo Web Development",
      description: "Koorso dhameystiran oo ku saabsan barashada luuqadaha programming-ka, dhisidda website-yada, iyo app-yada mobile-ka.",
      image: projectBranding,
      tools: ["HTML", "CSS", "JavaScript", "React"],
      category: "Teknoolajiyad",
      course: "Full Stack Development",
      process: ["Asaasiyaasha Programming", "Frontend Development", "Backend Development", "Project Building"]
    },
    {
      id: 2,
      title: "Koorsada Ganacsiga",
      subtitle: "Business iyo Maamulka",
      description: "Koorsooyin ku saabsan dhisidda ganacsi, maamulka lacagta, suuq-geynta, iyo horumarinta xirfadaha hogaaminta.",
      image: projectEditorial,
      tools: ["Excel", "PowerPoint", "Marketing Tools"],
      category: "Ganacsi",
      course: "Business Administration",
      process: ["Business Planning", "Financial Management", "Marketing Strategy", "Leadership Skills"]
    },
    {
      id: 3,
      title: "Koorsada Luuqadaha",
      subtitle: "English iyo Communication Skills",
      description: "Horumarinta xirfadaha luuqadda English-ka, qoraalka, hadalka, iyo isdhexgalka dadka.",
      image: projectPackaging,
      tools: ["Grammar Tools", "Speaking Practice", "Writing Exercises"],
      category: "Luuqad",
      course: "English Communication",
      process: ["Grammar Basics", "Vocabulary Building", "Speaking Practice", "Writing Skills"]
    },
    {
      id: 4,
      title: "Koorsada Digital Skills",
      subtitle: "Computer iyo Internet Skills",
      description: "Barashada adeegsiga kombiyuutarka, internet-ka, social media-da, iyo qalabka dijital-ka.",
      image: projectUI,
      tools: ["Microsoft Office", "Internet Tools", "Social Media"],
      category: "Dijital",
      course: "Digital Literacy",
      process: ["Computer Basics", "Internet Navigation", "Email Management", "Digital Communication"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-primary">Koorsoyinkeenu</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Koorsooyin kala duwan oo ku saabsan waxbarasho casri ah, teknoolajiyad, ganacsi, iyo xirfado muhiim ah.
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
                      Eeg Nidaamka
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
                  <p className="text-sm font-medium text-muted-foreground">Koorso: {project.course}</p>
                </div>

                {/* Process Steps */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-card-foreground">Nidaamka Waxbarashada:</p>
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
                  <p className="text-sm font-medium text-card-foreground">Qalabka La Isticmaalo:</p>
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
                    Eeg Faahfaahin
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
            Ma doonaysaa inaad aragto koorsooyin badan ama aad nala wadaagto ra'yigaaga?
          </p>
          <Button variant="accent" size="lg">
            Aan Wada Shaqayno
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;