
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
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
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Endereço",
      details: "Travessa Mauricio Furtado, 30",
      link: "https://maps.google.com/?q=Travessa+Mauricio+Furtado,+30"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horário",
      details: "Segunda a Sexta, 8h às 18h",
      link: null
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/554799999112?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis.', '_blank');
  };

  return (
    <section id="contato" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Entre em contato conosco para orçamentos, consultoria ou esclarecimentos sobre nossos serviços contábeis.
            Estamos prontos para ajudar sua empresa a crescer.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/50 shadow-card animate-on-scroll">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  <p className="text-muted-foreground mb-8">
                    Para solicitar orçamentos, agendar consultorias ou esclarecer dúvidas sobre 
                    serviços contábeis, fiscais e assessoria financeira, utilize um dos canais abaixo.
                  </p>
                  
                  <div className="space-y-6 mb-8">
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
                  
                  <div className="bg-primary/5 rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3">Experiência que Faz a Diferença</h4>
                    <p className="text-muted-foreground text-sm">
                      Mais de 30 anos de experiência em contabilidade, ajudando empresários 
                      nas melhores escolhas tributárias e tomadas de decisões estratégicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-accent/5 rounded-xl max-w-md">
                    <div className="mb-4 text-accent">
                      <MessageCircle className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Atendimento via WhatsApp</h3>
                    <p className="text-muted-foreground mb-6">
                      Clique no botão do WhatsApp para falar diretamente com nossos especialistas 
                      em contabilidade e receber atendimento personalizado.
                    </p>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-[#25D366] hover:bg-[#20BD5C] text-white"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Falar no WhatsApp
                    </Button>
                    <div className="text-sm text-muted-foreground mt-4">
                      Tempo médio de resposta: <span className="font-medium text-foreground">30 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Card className="border border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                A Contabilidade Rebelo está pronta para ajudar sua empresa a alcançar seus objetivos. 
                Entre em contato conosco hoje mesmo e descubra como podemos fazer a diferença no seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('mailto:contabilidaderebelo@hotmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar E-mail
                </Button>
              </div>
            </CardContent>
          </Card>
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
    <div className="flex">
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

export default ContactSection;
