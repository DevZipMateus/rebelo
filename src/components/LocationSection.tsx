
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Endereço",
      details: "Travessa Mauricio Furtado, 30",
      link: "https://maps.google.com/?q=Travessa+Mauricio+Furtado,+30"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Telefone",
      details: "(47) 99999-112",
      link: "tel:+554799999112"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "E-mail",
      details: "contabilidaderebelo@hotmail.com",
      link: "mailto:contabilidaderebelo@hotmail.com"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horário de Atendimento",
      details: "Segunda a Sexta, 8h às 18h",
      link: null
    }
  ];

  return (
    <section id="localizacao" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Encontre a Contabilidade Rebelo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Visite nosso escritório ou entre em contato conosco através dos canais disponíveis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ContactInfoItem 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    details={item.details}
                    link={item.link}
                  />
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Horário de Atendimento</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <Card className="border border-border/50 shadow-card overflow-hidden">
                <div className="h-[400px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.234567890!2d-48.8765432!3d-26.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjQiUyA0OMKwNTInMzUuNSJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de localização - Contabilidade Rebelo"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <Card className="border border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="mb-4 text-primary">
                  <MapPin className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visite Nosso Escritório</h3>
                <p className="text-muted-foreground mb-6">
                  Estamos localizados na Travessa Mauricio Furtado, 30. 
                  Agende uma visita ou entre em contato conosco para mais informações.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://maps.google.com/?q=Travessa+Mauricio+Furtado,+30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Ver no Google Maps
                  </a>
                  <a
                    href="https://wa.me/554799999112?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20escritório."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Agendar Visita
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground mt-1">{details}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

export default LocationSection;
