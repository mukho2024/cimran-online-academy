import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  PenTool, 
  Type, 
  Layout, 
  Camera, 
  Monitor,
  BookOpen,
  Award
} from 'lucide-react';

const Skills = () => {
  const softwareSkills = [
    { name: "Adobe Photoshop", level: 85, category: "Image Editing" },
    { name: "Adobe Illustrator", level: 90, category: "Vector Graphics" },
    { name: "Adobe InDesign", level: 80, category: "Layout Design" },
    { name: "Figma", level: 75, category: "UI/UX Design" },
    { name: "Adobe XD", level: 70, category: "Prototyping" },
    { name: "Procreate", level: 65, category: "Digital Illustration" }
  ];

  const designSkills = [
    {
      icon: Type,
      title: "Typography",
      description: "Font pairing, hierarchy, and typographic systems",
      skills: ["Type Classification", "Hierarchy Design", "Custom Lettering"]
    },
    {
      icon: Palette,
      title: "Color Theory",
      description: "Color psychology, palettes, and brand applications",
      skills: ["Color Harmony", "Brand Palettes", "Psychology"]
    },
    {
      icon: Layout,
      title: "Layout Design",
      description: "Grid systems, composition, and visual hierarchy",
      skills: ["Grid Systems", "Composition", "Visual Flow"]
    },
    {
      icon: PenTool,
      title: "Brand Identity",
      description: "Logo design, brand systems, and visual identity",
      skills: ["Logo Design", "Brand Guidelines", "Visual Systems"]
    },
    {
      icon: Monitor,
      title: "Digital Design",
      description: "Web design, mobile interfaces, and user experience",
      skills: ["Web Design", "Mobile UI", "User Experience"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Product photography, composition, and image editing",
      skills: ["Product Photos", "Composition", "Retouching"]
    }
  ];

  const coursework = [
    "Graphic Design Fundamentals",
    "Typography & Layout",
    "Visual Identity Design",
    "Package Design",
    "Digital Interface Design",
    "Art History & Theory",
    "Color Theory",
    "Print Production"
  ];

  const certifications = [
    { name: "Adobe Certified Associate - Photoshop", issuer: "Adobe", year: "2024" },
    { name: "Graphic Design Specialization", issuer: "Coursera", year: "2023" },
    { name: "Typography Fundamentals", issuer: "Online Course", year: "2023" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-primary">Skills & Software</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and design competencies developed through coursework and hands-on practice.
          </p>
        </div>

        {/* Software Skills */}
        <div className="mb-16">
          <h3 className="heading-lg text-center mb-8">Software Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareSkills.map((skill) => (
              <Card key={skill.name} className="p-6 soft-shadow hover:shadow-medium smooth-transition">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-card-foreground">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.category}</p>
                    </div>
                    <span className="text-sm font-medium text-accent">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Skills */}
        <div className="mb-16">
          <h3 className="heading-lg text-center mb-8">Design Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSkills.map((skill) => (
              <Card key={skill.title} className="p-6 soft-shadow hover:shadow-medium smooth-transition group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 accent-gradient rounded-lg group-hover:scale-110 smooth-transition">
                      <skill.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-card-foreground">{skill.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Coursework & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Relevant Coursework */}
          <Card className="p-6 soft-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading-md text-card-foreground">Relevant Coursework</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coursework.map((course) => (
                  <div key={course} className="flex items-center gap-2">
                    <div className="w-2 h-2 accent-gradient rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 soft-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <h3 className="heading-md text-card-foreground">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="border-l-2 border-accent pl-4">
                    <h4 className="font-medium text-card-foreground text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;