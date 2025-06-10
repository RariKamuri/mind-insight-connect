
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/555180623580", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8aa85462-3d9d-4a7e-8b62-6fec4428d317.png" 
              alt="Gabriela Laux - Psicóloga" 
              className="mx-auto max-w-md w-full h-auto"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-light text-slate-700 mb-6 leading-tight">
            Bem-vindo ao seu espaço de
            <span className="block text-teal-600 font-normal">autoconhecimento</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Através da psicanálise, oferecemos um ambiente seguro e acolhedor para você explorar seus pensamentos, sentimentos e comportamentos.
          </p>
          
          {/* CTA Button */}
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Agendar Consulta via WhatsApp
          </Button>
          
          <p className="text-sm text-slate-500 mt-4">
            CRP 07/34563
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
