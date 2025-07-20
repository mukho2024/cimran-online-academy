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
              <h2 className="heading-xl text-primary">Naga</h2>
              <div className="w-16 h-1 accent-gradient rounded-full" />
            </div>

            <div className="space-y-6 body-md text-muted-foreground">
              <p>
                Cimraan Akadeemi Onlayn waa hay'ad waxbarasho oo ku takhasustay bixinta koorsyo 
                casri ah oo ku saabsan teknoolajiyada, ganacsiga, iyo xirfadaha shaqsiga ah. Himiladeenu 
                waa in aan ardayda siino aqoonta ugu muhiimsan ee ku habboonta suuqa shaqada maanta.
              </p>
              
              <p>
                Waxaan leennahay takhasuus dheer oo ku saabsan bixinta waxbarasho tayo sare leh 
                iyadoo la adeegsanayo farsamooyinka ugu dambeeyay ee teknoolajiyada. Aqoontayadu 
                waxay ku dhisan tahay khibrad dheer iyo fahanka qoto dheer ee baahida ardayda.
              </p>

              <p>
                Marki aynan waxbarasho bixin, waxaan ku hawlan nahay horumarinta barnaamijyo cusub, 
                xiriir la dhiska shaqaalaha warshadaha kala duwan, iyo hubinta in ardaydeenu helaan 
                fursado shaqo oo tayo sare leh.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Soo Daji Curiculum
              </Button>
              <Button variant="minimal" size="lg">
                Eeg LinkedIn
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
                  <h3 className="heading-md text-card-foreground">Xamaasad</h3>
                  <p className="body-md text-muted-foreground">
                    Waxaan ku shaqaynaynaa xamaasad weyn oo ku saabsan siinta waxbarasho tayo sare leh iyo dhisidda mustaqbal fiican.
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
                  <h3 className="heading-md text-card-foreground">Hal-abuurnimo</h3>
                  <p className="body-md text-muted-foreground">
                    Waxaan had iyo jeer raadshaa habab cusub oo waxbarasho ah iyo farsamooyin casri ah oo ku habboon ardayda.
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
                  <h3 className="heading-md text-card-foreground">Iskaashi</h3>
                  <p className="body-md text-muted-foreground">
                    Waxaan rumaysan nahay awoodda iskaashiga iyo barashada dadka khibradda leh ee warshadaha kala duwan.
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