
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/555180623580", "_blank");
  };

  return (
    <section className="py-20 bg-teal-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            Pronto para começar sua jornada?
          </h2>
          
          <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
            Entre em contato para agendar sua primeira consulta. Estou aqui para 
            ajudá-lo em seu processo de autoconhecimento e crescimento pessoal.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">WhatsApp</h3>
              <p className="text-teal-100">(51) 98062-3580</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Localização</h3>
              <p className="text-teal-100">Atendimento presencial e online</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-white font-medium mb-2">Horários</h3>
              <p className="text-teal-100">Segunda a sexta, 8h às 18h</p>
            </div>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Agendar Consulta Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
