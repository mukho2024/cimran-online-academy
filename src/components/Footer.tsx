import { Button } from '@/components/ui/button';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Cimraan Akadeemi</h3>
            <p className="text-primary-foreground/80 text-sm">
              Akadeemi waxbarasho oo ku takhasustay siinta koorsooyin casri ah iyo horumarinta xirfadaha mustaqbalka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Xiriirro Dhaqso ah</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['Naga', 'Mashruucyo', 'Xirfado', 'Waxbarasho', 'Xiriir'].map((item, index) => {
                const ids = ['about', 'projects', 'skills', 'education', 'contact'];
                return (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(ids[index]);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-primary-foreground/80 hover:text-accent smooth-transition"
                >
                  {item}
                </button>
              );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Nala Soo Xiriir</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>info@cimraanacademy.com</p>
              <p>Onlayn Platform</p>
              <p>Diyaar u ah fursado</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20">
          <div className="flex items-center gap-1 text-sm text-primary-foreground/80 mb-4 sm:mb-0">
            <span>© {currentYear} La sameeyay</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>Cimraan Akadeemi Onlayn</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Kor u Laabo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;