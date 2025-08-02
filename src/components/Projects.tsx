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
      title: "Koorsada Graphic Design",
      subtitle: "Adobe Photoshop, Illustrator & Digital Design",
      description: "Koorso dhameystiran oo ku saabsan barashada Graphic Design, Adobe Photoshop, Adobe Illustrator, iyo Pixel Lap. Baro xirfadaha samaynta sawirrada iyo nashqadaha casriga ah.",
      image: "/lovable-uploads/044385de-ca2e-4311-8ec7-f4b61fa77640.png",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Pixel Lap"],
      category: "Design",
      course: "Graphic Design Course",
      process: ["Photoshop Basics", "Illustrator Fundamentals", "Design Principles", "Portfolio Creation"]
    },
    {
      id: 2,
      title: "Koorsada Video Editing & Software",
      subtitle: "Adobe Premiere Pro, After Effects & Professional Tools",
      description: "Waxaan idiin diyaarinay courses dhameystiran oo aad muhiim u ah waxa aad ku soo biir kartaa ama aad iska duwaan galisa nember ka hoos ku qoran.",
      image: "/lovable-uploads/05d1bce7-cacb-4a1f-91a0-dd16c78f52ae.png",
      tools: ["Adobe Premiere Pro", "After Effects", "Adobe Illustrator", "Adobe Photoshop"],
      category: "Video",
      course: "Video Production & Editing",
      process: ["Basic Video Editing", "Advanced Effects", "Color Grading", "Professional Output"]
    },
    {
      id: 3,
      title: "Koorsada Camera Training",
      subtitle: "Professional Photography & Videography",
      description: "Baro xirfad si aad uga baxdid faqriga - camera training iyo drawn training oo dhameystiran.",
      image: "/lovable-uploads/ab6b2379-1dc4-41a9-a79a-5d1c9b582890.png",
      tools: ["Professional Cameras", "Lighting Equipment", "Editing Software"],
      category: "Photography",
      course: "Camera & Photography Training",
      process: ["Camera Basics", "Composition Techniques", "Lighting Setup", "Post Processing"]
    },
    {
      id: 4,
      title: "Koorsada Fursada Chuma Ah",
      subtitle: "Complete Academy Program",
      description: "Courses dhameystiran oo graphic design ah ayaan ugu talagalay macamisha ku xidhan bartayda telegram 10 arday ee u horeya ayaan heli doona.",
      image: "/lovable-uploads/ccb36333-8db8-48a3-a9e4-a70c9af21f13.png",
      tools: ["All Software Packages", "Design Tools", "Project Management"],
      category: "Complete Package",
      course: "Full Academy Experience",
      process: ["Foundation Course", "Skill Development", "Project Work", "Certification"]
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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