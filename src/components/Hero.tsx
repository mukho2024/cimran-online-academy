import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import heroImage from '/lovable-uploads/b03d5c8a-dae2-4a20-955a-39bfd36210dd.png';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="display-text bg-gradient-primary bg-clip-text text-transparent">
              Akadeemi Onlayn
            </h1>
            <h2 className="heading-lg text-muted-foreground">
              Waxbarasho Casri ah & Aqoon Ballaaran
            </h2>
          </div>

          {/* Description */}
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Waxbarashada casriga ah oo loogu talagalay mustaqbalka. Waa meel ay ku helaan 
            ardayda aqoonta teknoolajiyada casriga ah iyo xirfadaha ku habboon suuqa shaqada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProjects}
              className="min-w-[180px]"
            >
              Eeg Shaqadayada
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="minimal" 
              size="lg"
              onClick={scrollToContact}
              className="min-w-[180px]"
            >
              <Mail className="mr-2 h-4 w-4" />
              Nala Soo Xiriir
            </Button>
          </div>

          {/* Skills Preview */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Hadda waan la shaqaynaynaa</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Waxbarasho Online', 'Video Courses', 'Live Classes', 'Certificates', 'Career Support'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToProjects}
          className="animate-bounce p-2 text-muted-foreground hover:text-accent smooth-transition"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;