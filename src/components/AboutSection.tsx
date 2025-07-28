
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
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

  const highlights = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Desde 2010",
      description: "Mais de 14 anos atendendo empresários com excelência"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "30+ Anos de Experiência",
      description: "Profissional experiente e qualificado"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para cada empresa"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Consultoria Estratégica",
      description: "Ajudamos na tomada de decisões importantes"
    }
  ];

  return (
    <section id="sobre" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Contabilidade Rebelo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Tradição e confiança em serviços contábeis há mais de uma década
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6">Nossa História</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Contabilidade Rebelo está em atividade desde 24 de junho de 2010, 
                  com um profissional que possui mais de 30 anos de experiência no 
                  mercado contábil.
                </p>
                <p>
                  Nossa missão é ajudar empresários nas melhores escolhas tributárias 
                  e tomadas de decisões, oferecendo um atendimento personalizado e 
                  soluções eficazes para cada necessidade.
                </p>
                <p>
                  Ao longo dos anos, construímos uma reputação sólida baseada na 
                  confiança, transparência e excelência nos serviços prestados.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <Card className="border border-border/50 shadow-card overflow-hidden">
                <div className="bg-primary/10 p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="/lovable-uploads/a8a1d887-958d-4406-a72a-80a2ee56269c.png" 
                      alt="Contabilidade Rebelo" 
                      className="h-16 w-auto mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg">Contabilidade Rebelo</h4>
                      <p className="text-muted-foreground">Desde 2010</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comprometimento com a excelência e inovação em serviços contábeis, 
                    sempre focando no sucesso dos nossos clientes.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 service-card animate-on-scroll border border-border/50 shadow-card">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
