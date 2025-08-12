import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Calculator, Shield, TrendingUp } from 'lucide-react';
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  const scrollToNextSection = () => {
    const sobreSection = document.getElementById('sobre');
    if (sobreSection) {
      sobreSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547999911209?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis.', '_blank');
  };
  return <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(1, 69, 88, 0.8), rgba(1, 69, 88, 0.9)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
      }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-md rounded-full text-white font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                Mais de 30 anos de experiência
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                Sua <span className="text-accent">Contabilidade</span> em Boas Mãos
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Desde 2010 ajudando empresários nas melhores escolhas tributárias e tomadas de decisões. Serviços fiscais, contábeis e assessoria financeira personalizada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button size="lg" onClick={handleWhatsAppClick} className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-lg group">
                  Solicite um Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('servicos')?.scrollIntoView({
                behavior: 'smooth'
              })} className="border-white text-white rounded-md bg-[014558] bg-[#014558]">
                  Nossos Serviços
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-white/80 text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Atendimento personalizado
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Assessoria completa
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Calculator className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Contabilidade Fiscal</h3>
                        <p className="text-white/70 text-sm">Gestão completa de obrigações fiscais</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Assessoria Financeira</h3>
                        <p className="text-white/70 text-sm">Consultoria especializada em finanças</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Consultoria Tributária</h3>
                        <p className="text-white/70 text-sm">Melhores escolhas para sua empresa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>;
};
export default HeroSection;
