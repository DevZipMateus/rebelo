
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-bg text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/a8a1d887-958d-4406-a72a-80a2ee56269c.png" 
                alt="Contabilidade Rebelo" 
                className="h-12 w-auto mr-4"
              />
              <h3 className="text-xl font-bold">
                <span className="text-secondary">Contabilidade</span> Rebelo
              </h3>
            </div>
            <p className="text-white/80 max-w-xs">
              Mais de 30 anos de experiência em serviços contábeis, fiscais e assessoria financeira.
            </p>
            <div className="text-sm text-white/70">
              <p>Desde 2010 trabalhando pelo seu sucesso</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#inicio">Início</FooterNavItem>
              <FooterNavItem href="#sobre">Sobre</FooterNavItem>
              <FooterNavItem href="#servicos">Serviços</FooterNavItem>
              <FooterNavItem href="#localizacao">Localização</FooterNavItem>
              <FooterNavItem href="#contato">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#servicos">Serviços Fiscais</FooterNavItem>
              <FooterNavItem href="#servicos">Serviços Contábeis</FooterNavItem>
              <FooterNavItem href="#servicos">Assessoria Financeira</FooterNavItem>
              <FooterNavItem href="#servicos">Consultoria Tributária</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(47) 99999-112</li>
              <li>contabilidaderebelo@hotmail.com</li>
              <li>Travessa Mauricio Furtado, 30</li>
              <li>Segunda a Sexta, 8h às 18h</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Contabilidade Rebelo. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-secondary/80 border-secondary/20 hover:bg-secondary/90 text-primary-foreground"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;
