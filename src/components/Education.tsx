import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  BookOpen,
  Users,
  ExternalLink
} from 'lucide-react';

const Education = () => {
  const education = {
    institution: "Design Institute University",
    degree: "Bachelor of Fine Arts in Graphic Design",
    period: "2022 - 2026 (Expected)",
    location: "San Francisco, CA",
    gpa: "3.8/4.0",
    status: "Junior Year",
    focus: ["Visual Communication", "Brand Identity", "Digital Design"]
  };

  const achievements = [
    {
      title: "Dean's List",
      period: "Fall 2023, Spring 2024",
      description: "Academic excellence recognition for maintaining high GPA"
    },
    {
      title: "Design Competition Winner",
      period: "Spring 2024",
      description: "First place in annual student poster design competition"
    },
    {
      title: "Design Club President",
      period: "2023 - Present",
      description: "Leading campus design community and organizing workshops"
    }
  ];

  const relevantProjects = [
    {
      course: "Brand Identity Design",
      project: "Sustainable Coffee Company Rebrand",
      grade: "A+",
      semester: "Fall 2023"
    },
    {
      course: "Typography & Layout",
      project: "Fashion Magazine Editorial Spread",
      grade: "A",
      semester: "Spring 2024"
    },
    {
      course: "Package Design",
      project: "Artisanal Tea Collection Packaging",
      grade: "A+",
      semester: "Fall 2024"
    }
  ];

  const extracurricular = [
    "Graphic Design Student Association - Member",
    "Campus Art Gallery - Volunteer Curator",
    "Design Mentorship Program - Peer Mentor",
    "Annual Design Exhibition - Organizing Committee"
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-primary">Education</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in graphic design, highlighting coursework, achievements, and learning experiences.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="mb-12">
          <Card className="p-8 soft-shadow hover:shadow-medium smooth-transition">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Institution Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 hero-gradient rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="heading-lg text-card-foreground">{education.degree}</h3>
                    <h4 className="heading-md text-accent">{education.institution}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {education.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {education.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Current Status</p>
                    <p className="font-semibold text-card-foreground">{education.status}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground mb-1">GPA</p>
                    <p className="font-semibold text-card-foreground">{education.gpa}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-card-foreground mb-3">Areas of Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {education.focus.map((area) => (
                      <Badge key={area} variant="secondary">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="bg-accent-soft p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">3.8</div>
                  <div className="text-sm text-muted-foreground">Current GPA</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary-foreground">2</div>
                  <div className="text-sm text-muted-foreground">Years Remaining</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements & Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Academic Achievements */}
          <Card className="p-6 soft-shadow">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 accent-gradient rounded-lg">
                  <Award className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="heading-md text-card-foreground">Academic Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-card-foreground">{achievement.title}</h4>
                      <span className="text-xs text-accent bg-accent-soft px-2 py-1 rounded">
                        {achievement.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Notable Projects */}
          <Card className="p-6 soft-shadow">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading-md text-card-foreground">Notable Course Projects</h3>
              </div>
              
              <div className="space-y-4">
                {relevantProjects.map((project, index) => (
                  <div key={index} className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-card-foreground text-sm">{project.course}</h4>
                      <Badge variant="outline" className="text-xs">
                        {project.grade}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{project.project}</p>
                    <p className="text-xs text-accent">{project.semester}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Extracurricular Activities */}
        <Card className="p-6 soft-shadow">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary rounded-lg">
                  <Users className="h-5 w-5 text-secondary-foreground" />
                </div>
                <h3 className="heading-md text-card-foreground">Extracurricular Activities</h3>
              </div>
              
              <div className="space-y-3">
                {extracurricular.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 accent-gradient rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Looking Forward</h4>
              <p className="text-sm text-muted-foreground">
                As I continue my studies, I'm focusing on developing advanced skills in digital design, 
                sustainable design practices, and building a strong professional network in the design industry.
              </p>
              <div className="flex gap-3">
                <Button variant="minimal" size="sm">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View Transcript
                </Button>
                <Button variant="ghost" size="sm">
                  Course Portfolio
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;