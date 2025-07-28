
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, TrendingUp, Shield, Users, Clock, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Serviços Fiscais",
      description: "Gestão completa de obrigações fiscais, apuração de impostos e acompanhamento das mudanças na legislação tributária.",
      features: [
        "Apuração de impostos federais, estaduais e municipais",
        "Escrituração fiscal digital",
        "Entrega de obrigações acessórias",
        "Planejamento tributário"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Serviços Contábeis",
      description: "Escrituração contábil, elaboração de demonstrações financeiras e relatórios gerenciais para sua empresa.",
      features: [
        "Escrituração contábil completa",
        "Balanço patrimonial e DRE",
        "Conciliação bancária",
        "Relatórios gerenciais"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Assessoria Financeira",
      description: "Consultoria especializada para otimizar a gestão financeira e auxiliar na tomada de decisões estratégicas.",
      features: [
        "Análise de fluxo de caixa",
        "Controle de custos e despesas",
        "Projeções financeiras",
        "Consultoria em investimentos"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Segurança e Confiabilidade",
      description: "Processos seguros e confiáveis para proteger sua empresa"
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção dedicada e soluções sob medida"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Agilidade nos Processos",
      description: "Prazos cumpridos e processos otimizados para sua empresa"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/554799999112?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis.', '_blank');
  };

  return (
    <section id="servicos" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Completas para sua Empresa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos uma gama completa de serviços contábeis, fiscais e de assessoria financeira 
            para atender todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="service-card animate-on-scroll border border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="outline" 
                    className="w-full group"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 mb-16 animate-on-scroll">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Por que escolher a Contabilidade Rebelo?</h3>
              <p className="text-muted-foreground">
                Mais de 30 anos de experiência trabalhando para o sucesso do seu negócio
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <Card className="border border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer 
                  com segurança e eficiência.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
