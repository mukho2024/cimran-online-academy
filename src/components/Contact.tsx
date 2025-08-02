import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Github,
  Send,
  Calendar,
  Coffee
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Farriinta la diray!",
      description: "Mahadsanid soo xiriirka. Waanu kugu jawaabi doonaa dhaqso.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@cimraanacademy.com",
      href: "mailto:info@cimraanacademy.com"
    },
    {
      icon: Phone,
      label: "Telefoon",
      value: "+252 63 463 8497",
      href: "tel:+252634638497"
    },
    {
      icon: MapPin,
      label: "Meel",
      value: "Onlayn Platform",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/cimraanacademy",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/cimraanacademy",
      color: "text-pink-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/cimraanacademy",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-xl text-primary">Nala Soo Xiriir</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Waxaan had iyo jeer ku faraxsan nahay inaan kala hadalno mashruucyo cusub, fikrado hal-abuur leh, ama fursado aan u noqon karno qayb ka mid ah.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h3 className="heading-lg text-card-foreground">Nala Xiriir</h3>
              
              {contactInfo.map((info) => (
                <Card key={info.label} className="p-4 soft-shadow hover:shadow-medium smooth-transition">
                  <a 
                    href={info.href}
                    className="flex items-center gap-4 text-card-foreground hover:text-accent smooth-transition"
                  >
                    <div className="p-3 accent-gradient rounded-lg">
                      <info.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="p-6 soft-shadow">
              <h4 className="font-semibold text-card-foreground mb-4">Nagu Raac</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-background rounded-lg hover:scale-110 smooth-transition ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 soft-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <h4 className="font-semibold text-card-foreground">Hadda Diyaar</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Diyaar u ah fursado waxbarasho, mashruucyo freelance, iyo shaqo iskaashi. 
                  Inta badan waan jawaabaa gudaha 24-48 saacadood.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-3 w-3" />
                    Ballan Call
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Coffee className="mr-2 h-3 w-3" />
                    Sheeko Gaaban
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 soft-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="heading-lg text-card-foreground mb-6">Dir Fariin</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Magac</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Magacaaga"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="emailkaaga@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Mawduuc</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Maxaa ku saabsan?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Fariin</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Noo sheeg mashruucaaga ama su'aashaada..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Dir Fariinta
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Waan ixtiraamaa sirnaanta. Macluumaadkaaga lama wadaagi doono cid kale.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;