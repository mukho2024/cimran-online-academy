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
    { name: "Qoraal & Hadalka", level: 85, category: "Luuqadda English" },
    { name: "Kombiyuutarka", level: 90, category: "Microsoft Office" },
    { name: "Internet-ka", level: 80, category: "Online Tools" },
    { name: "Programming", level: 75, category: "Web Development" },
    { name: "Ganacsiga", level: 70, category: "Business Skills" },
    { name: "Marketing", level: 65, category: "Digital Marketing" }
  ];

  const designSkills = [
    {
      icon: Type,
      title: "Waxbarasho Online",
      description: "Koorsooyin online ah oo tayo sare leh",
      skills: ["Video Lessons", "Live Classes", "Interactive Learning"]
    },
    {
      icon: Palette,
      title: "Career Support",
      description: "Taageero mustaqbal iyo shaqo-helitaan",
      skills: ["CV Writing", "Interview Prep", "Job Placement"]
    },
    {
      icon: Layout,
      title: "Expert Instructors",
      description: "Macalimiin khibrad dheer leh",
      skills: ["Industry Experience", "Teaching Skills", "Mentorship"]
    },
    {
      icon: PenTool,
      title: "Practical Skills",
      description: "Xirfado la isticmaalo shaqada",
      skills: ["Real Projects", "Hands-on Learning", "Portfolio Building"]
    },
    {
      icon: Monitor,
      title: "Technology Focus",
      description: "Teknoolajiyada ugu dambeeyay",
      skills: ["Modern Tools", "Latest Software", "Digital Skills"]
    },
    {
      icon: Camera,
      title: "Flexible Learning",
      description: "Waxbarasho la qabsado waqtiga aad doonto",
      skills: ["Self-paced", "Part-time Options", "Weekend Classes"]
    }
  ];

  const coursework = [
    "Asaasiyaasha Programming",
    "Web Development",
    "Business Administration",
    "English Communication",
    "Digital Marketing",
    "Computer Skills",
    "Microsoft Office",
    "Data Analysis"
  ];

  const certifications = [
    { name: "Microsoft Office Specialist", issuer: "Microsoft", year: "2024" },
    { name: "Digital Marketing Certificate", issuer: "Google", year: "2023" },
    { name: "Programming Fundamentals", issuer: "Cimraan Academy", year: "2023" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-primary">Xirfadaha & Aqoonta</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Xirfado teknoolajiyad ah iyo aqoon ganacsi oo lagu helo koorsoyinkeenu iyo tababarro gacanta lagu hayo.
          </p>
        </div>

        {/* Software Skills */}
        <div className="mb-16">
          <h3 className="heading-lg text-center mb-8">Xirfadaha Muhiimka ah</h3>
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
          <h3 className="heading-lg text-center mb-8">Adeegyadaayada</h3>
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
                <h3 className="heading-md text-card-foreground">Koorsoyinkeenu</h3>
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
                <h3 className="heading-md text-card-foreground">Shahaadooyinka</h3>
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