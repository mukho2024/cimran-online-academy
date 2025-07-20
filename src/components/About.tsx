import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="heading-xl text-primary">About Me</h2>
              <div className="w-16 h-1 accent-gradient rounded-full" />
            </div>

            <div className="space-y-6 body-md text-muted-foreground">
              <p>
                I'm a passionate graphic design student currently pursuing my degree at [Your Institution]. 
                My journey in design began with a fascination for how visual elements can tell powerful stories 
                and create meaningful connections with audiences.
              </p>
              
              <p>
                Through my coursework and personal projects, I've developed a strong foundation in design 
                principles, typography, color theory, and digital tools. I believe that great design should 
                not only look beautiful but also solve problems and communicate effectively.
              </p>

              <p>
                When I'm not designing, you'll find me exploring art galleries, experimenting with new 
                creative techniques, or collaborating with fellow students on exciting projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="minimal" size="lg">
                View LinkedIn
              </Button>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid gap-6">
            <Card className="p-6 soft-shadow hover:shadow-medium smooth-transition">
              <div className="flex items-start gap-4">
                <div className="p-3 accent-gradient rounded-lg">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="heading-md text-card-foreground">Passionate</h3>
                  <p className="body-md text-muted-foreground">
                    Driven by a genuine love for visual storytelling and creating meaningful design solutions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 soft-shadow hover:shadow-medium smooth-transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="heading-md text-card-foreground">Creative</h3>
                  <p className="body-md text-muted-foreground">
                    Always exploring new ideas, techniques, and approaches to push creative boundaries.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 soft-shadow hover:shadow-medium smooth-transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="heading-md text-card-foreground">Collaborative</h3>
                  <p className="body-md text-muted-foreground">
                    Believe in the power of teamwork and learning from peers, mentors, and industry professionals.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;