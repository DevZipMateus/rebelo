
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiferencialSection = () => {
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547999911209?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20no%20meu%20local.', '_blank');
  };

  const diferenciais = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Atendimento Personalizado",
      description: "Vamos até você para oferecer um atendimento mais próximo e eficiente"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Relacionamento Próximo",
      description: "Construímos uma relação de confiança conhecendo sua empresa de perto"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Flexibilidade de Horários",
      description: "Agendamos o atendimento conforme sua disponibilidade e necessidade"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nosso Diferencial
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Vamos Até Você
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto animate-on-scroll text-base sm:text-lg leading-relaxed px-4">
            Nosso grande diferencial é ir até o cliente para melhor atendê-lo. 
            Acreditamos que o atendimento presencial faz toda a diferença na qualidade 
            dos serviços contábeis e na construção de um relacionamento sólido.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-on-scroll">
            {diferenciais.map((item, index) => (
              <Card key={index} className="border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border border-border/50 shadow-card animate-on-scroll">
            <CardContent className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Atendimento no Seu Local de Trabalho
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Economia de tempo - você não precisa se deslocar até nosso escritório
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Conhecimento aprofundado do seu negócio e necessidades específicas
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Atendimento mais eficiente com análise in loco dos processos
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        Flexibilidade de horários para não interferir na sua rotina
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-accent/5 rounded-lg p-4 mb-6">
                    <p className="text-sm text-muted-foreground font-medium">
                      "Ir até o cliente demonstra nosso compromisso em oferecer 
                      um serviço diferenciado e de qualidade superior."
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/5 rounded-xl p-6 sm:p-8">
                    <div className="mb-4 text-primary flex justify-center">
                      <MapPin className="h-12 w-12" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-3">
                      Agende Sua Visita
                    </h4>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                      Entre em contato conosco e agende um atendimento no seu local. 
                      Vamos até você para conhecer melhor suas necessidades e oferecer 
                      as melhores soluções contábeis.
                    </p>
                    <Button 
                      onClick={handleWhatsAppClick}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <MapPin className="h-5 w-5 mr-2" />
                      Agendar Atendimento
                    </Button>
                    <div className="text-xs text-muted-foreground mt-3">
                      Atendimento gratuito para avaliação inicial
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiferencialSection;
