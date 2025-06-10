
const About = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-6">
              Sobre Gabriela Laux
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo Section */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/5f38bee5-f532-4004-88eb-a335d6c83d91.png" 
                    alt="Gabriela Laux - Psicóloga" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-30"></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Psicóloga formada com especialização em Psicanálise, dedico-me a proporcionar 
                  um espaço terapêutico seguro e acolhedor para meus pacientes.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  Acredito que cada pessoa possui dentro de si os recursos necessários para 
                  superar suas dificuldades. Meu papel é facilitar esse processo de 
                  autoconhecimento e crescimento pessoal.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
                  <h3 className="text-xl font-medium text-slate-700 mb-4">Formação</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Graduação em Psicologia</li>
                    <li>• Especialização em Psicanálise</li>
                    <li>• CRP 07/34563</li>
                    <li>• Formação continuada em técnicas psicanalíticas</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                  <h3 className="text-xl font-medium text-slate-700 mb-4">
                    Abordagem Terapêutica
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Utilizo a psicanálise como base para compreender os processos inconscientes 
                    que influenciam nossos comportamentos e emoções, promovendo insights 
                    profundos e duradouros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
