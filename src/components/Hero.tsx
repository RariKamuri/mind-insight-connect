
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/555180623580", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Decorative background elements with new images */}
      <div className="absolute top-10 left-4 md:top-20 md:left-10 w-24 h-32 md:w-32 md:h-40 opacity-30">
        <img 
          src="/lovable-uploads/801ac900-1b17-45bc-ba6b-409ee9901b7f.png" 
          alt="Decorative element" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-24 h-32 md:w-32 md:h-40 opacity-20">
        <img 
          src="/lovable-uploads/fd7a5c95-8d60-4ad5-b50b-86996ee9f893.png" 
          alt="Decorative element" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand - Updated to new logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/5cdb20db-7d74-434e-8b97-53d4eb3daad3.png" 
              alt="Gabriela Laux - Psicóloga" 
              className="mx-auto max-w-xs md:max-w-md w-full h-auto"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-slate-700 mb-6 leading-tight">
            Bem-vindo ao seu espaço de
            <span className="block text-teal-600 font-normal">autoconhecimento</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Através da psicanálise, oferecemos um ambiente seguro e acolhedor para você explorar seus pensamentos, sentimentos e comportamentos.
          </p>
          
          {/* CTA Button - Fixed for mobile */}
          <div className="px-4">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-sm md:w-auto"
            >
              <MessageCircle className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span className="truncate">Agendar Consulta via WhatsApp</span>
            </Button>
          </div>
          
          <p className="text-sm text-slate-500 mt-4">
            CRP 07/34563
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
