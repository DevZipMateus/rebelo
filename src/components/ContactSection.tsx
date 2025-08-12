import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const contactInfo = [{
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Telefone",
    details: "(47) 99991-1209",
    link: "tel:+5547999911209"
  }, {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "E-mail",
    details: "contabilidaderebelo@hotmail.com",
    link: "mailto:contabilidaderebelo@hotmail.com"
  }, {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    title: "Atendimento no Local do Cliente",
    details: "Nosso diferencial é ir até você para melhor atendê-lo.",
    link: null
  }, {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Horário",
    details: "Segunda a Sexta, 8h às 18h",
    link: null
  }];
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547999911209?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis.', '_blank');
  };
  return <section id="contato" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Atendimento no Local do Cliente
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-on-scroll px-2">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll text-sm sm:text-base px-4">
            Vamos até você para melhor atendê-lo. Entre em contato conosco para orçamentos, consultoria ou esclarecimentos sobre nossos serviços contábeis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/50 shadow-card animate-on-scroll">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">Informações de Contato</h3>
                  <p className="text-muted-foreground mb-8 text-sm sm:text-base">
                    Para solicitar orçamentos, agendar consultorias ou esclarecer dúvidas sobre 
                    serviços contábeis, fiscais e assessoria financeira, utilize um dos canais abaixo.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => <ContactInfoItem key={index} icon={item.icon} title={item.title} details={item.details} link={item.link} />)}
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-4 sm:p-6">
                    <h4 className="font-bold text-base sm:text-lg mb-3">Experiência que Faz a Diferença</h4>
                    <p className="text-muted-foreground text-sm">
                      Mais de 25 anos de experiência em contabilidade, ajudando empresários 
                      nas melhores escolhas tributárias e tomadas de decisões estratégicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-8 lg:mt-0">
                  <div className="text-center p-4 sm:p-6 bg-accent/5 rounded-xl w-full max-w-sm mx-auto">
                    <div className="mb-4 text-accent flex justify-center">
                      <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">Atendimento via WhatsApp</h3>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                      Clique no botão do WhatsApp para falar diretamente com nossos especialistas 
                      em contabilidade e receber atendimento personalizado.
                    </p>
                    <Button onClick={handleWhatsAppClick} className="w-full bg-[#25D366] hover:bg-[#20BD5C] text-white text-sm sm:text-base py-2.5 sm:py-3">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Falar no WhatsApp
                    </Button>
                    
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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

        <div className="mt-12 sm:mt-16 text-center animate-on-scroll">
          <Card className="border border-border/50 shadow-card">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Pronto para Começar?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
                A Contabilidade Rebelo está pronta para ajudar sua empresa a alcançar seus objetivos. 
                Entre em contato conosco hoje mesmo e descubra como podemos fazer a diferença no seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('mailto:contabilidaderebelo@hotmail.com', '_blank')} className="w-full sm:w-auto">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Enviar E-mail
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}
const ContactInfoItem = ({
  icon,
  title,
  details,
  link
}: ContactInfoItemProps) => {
  const content = <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div className="min-w-0 flex-1">
        <h4 className="font-medium text-sm sm:text-base">{title}</h4>
        <p className="text-muted-foreground mt-1 text-sm break-words">{details}</p>
      </div>
    </div>;
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
        {content}
      </a>;
  }
  return content;
};
export default ContactSection;