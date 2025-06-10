
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psicanálise Individual",
      description: "Sessões personalizadas para autoconhecimento e desenvolvimento pessoal através do método psicanalítico."
    },
    {
      icon: Heart,
      title: "Terapia para Ansiedade",
      description: "Tratamento especializado para transtornos de ansiedade, utilizando técnicas psicanalíticas modernas."
    },
    {
      icon: Users,
      title: "Orientação Familiar",
      description: "Suporte e orientação para famílias que buscam melhorar a comunicação e os relacionamentos."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-4">
            Serviços Especializados
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Oferecemos atendimento psicológico baseado na abordagem psicanalítica, 
            proporcionando um espaço de escuta e reflexão.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
