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
      title: "Atendimento no Local do Cliente",
      details: "Vamos até você para melhor atendê-lo.",
      link: null
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Telefone", 
      details: "(47) 99991-1209",
      link: "tel:+5547999911209"
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
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Atendimento no Local do Cliente
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Atendimento no Local do Cliente
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll text-sm sm:text-base">
            Nosso diferencial é ir até você para melhor atendê-lo. Agende uma visita ou fale conosco.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="animate-on-scroll">
              <h3 className="text-lg sm:text-xl font-bold mb-6">Informações de Contato</h3>
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
              
              <div className="mt-8 p-4 sm:p-6 bg-primary/5 rounded-xl">
                <h4 className="font-bold text-sm sm:text-base mb-3">Horário de Atendimento</h4>
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
            
          </div>

          <div className="text-center animate-on-scroll">
            <Card className="border border-border/50 shadow-card">
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4 text-primary">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 mx-auto" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-4">Vamos até Você</h3>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                  Nosso diferencial é ir até o cliente para melhor atendê-lo. Atendemos em toda a região.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                  <a
                    href="https://wa.me/5547999911209?text=Olá!%20Gostaria%20de%20solicitar%20um%20atendimento%20no%20meu%20endereço."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm w-full sm:w-auto"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Solicitar Atendimento
                  </a>
                  <a
                    href="https://wa.me/5547999911209?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20escritório."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors text-sm w-full sm:w-auto"
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
      <div className="min-w-0 flex-1">
        <h4 className="font-medium text-sm sm:text-base">{title}</h4>
        <p className="text-muted-foreground mt-1 text-sm break-words">{details}</p>
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
