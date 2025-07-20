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
    institution: "Cimraan Akadeemi Onlayn",
    degree: "Shahaado Casri ah & Koorsooyin Takhasuska ah",
    period: "2020 - Hadda (Si joogto ah)",
    location: "Onlayn Platform",
    gpa: "Tayo Sare",
    status: "Ka mid ah Akadeemiyada ugu Fiican",
    focus: ["Teknoolajiyad", "Ganacsi", "Luuqadaha Ajnabiga"]
  };

  const achievements = [
    {
      title: "Akadeemi Fiican",
      period: "2023 - 2024",
      description: "Aqoonsi dheera oo ku saabsan siinta waxbarasho tayo sare leh"
    },
    {
      title: "Tartanka Ugu Fiican",
      period: "2024",
      description: "Meel koowaad ku tartanka ardayda ugu fiican ee sanadka"
    },
    {
      title: "Hogaamiyaha Akadeemi",
      period: "2020 - Hadda",
      description: "Hoggaaminta akadeemiga iyo nidaaminta workshops-ka"
    }
  ];

  const relevantProjects = [
    {
      course: "Teknoolajiyad",
      project: "Web Development & Programming",
      grade: "Fiican",
      semester: "2023"
    },
    {
      course: "Ganacsi",
      project: "Business Management & Marketing",
      grade: "Fiican",
      semester: "2024"
    },
    {
      course: "Luuqad",
      project: "English Communication Skills",
      grade: "Fiican",
      semester: "2024"
    }
  ];

  const extracurricular = [
    "Shirka Ardayda Teknoolajiyada - Xubin",
    "Barnaamijka Career Support - Volunteer",
    "Nidaamka Mentorship - Hogaamiye",
    "Bandhigga Sanadlaha ah - Guddiga Abaabulka"
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-primary">Waxbarasho</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Socdaalka aqooneed ee akadeemigayaga, siinta koorsooyin, guulo, iyo waaya-aragnimo waxbarasho.
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
                    <p className="text-sm font-medium text-muted-foreground mb-1">Xaalada Hadda</p>
                    <p className="font-semibold text-card-foreground">{education.status}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Tayada</p>
                    <p className="font-semibold text-card-foreground">{education.gpa}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-card-foreground mb-3">Meelaha aan Diiradda Saarnay</p>
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
                  <div className="text-2xl font-bold text-accent">A+</div>
                  <div className="text-sm text-muted-foreground">Tayada Hadda</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Koorsooyin La Dhammeeyay</div>
                </div>
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary-foreground">∞</div>
                  <div className="text-sm text-muted-foreground">Koorsooyin Cusub</div>
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
                <h3 className="heading-md text-card-foreground">Guulaha Waxbarasho</h3>
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
                <h3 className="heading-md text-card-foreground">Mashruucyada Muhiimka ah</h3>
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
                <h3 className="heading-md text-card-foreground">Hawlaha Dheeriga ah</h3>
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
              <h4 className="font-semibold text-card-foreground">Mustaqbalka</h4>
              <p className="text-sm text-muted-foreground">
                Sidaan sii wadno, waxaan diiradda saaryaa horumarinta xirfado casri ah, nidaamyo waxbarasho 
                joogto ah, iyo dhisidda shabakad xirfadeed oo adag oo warshadaha kala duwan.
              </p>
              <div className="flex gap-3">
                <Button variant="minimal" size="sm">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  Eeg Natiijada
                </Button>
                <Button variant="ghost" size="sm">
                  Portfolio Koorsada
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