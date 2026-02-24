/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";

const speakers = [
  {
    name: "Matheus Carvalho",
    role: "Procurador da Fazenda Nacional",
    bio: "Uma das principais referências nacionais em Direito Público e contratações públicas. Mestre em Políticas Sociais e Cidadania, especialista em Direito e graduado pela UFBA.",
    image: "/images/matheus-carvalho.png",
  },
  {
    name: "Tatiana Camarão",
    role: "Mestre em Direito Administrativo",
    bio: "Diretora de Gestão e Relações Institucionais da Meta 5. Professora e coordenadora da LEC. Coautora de obras de referência sobre licitações e contratos.",
    image: "/images/tatiana-camarao.png",
  },
  {
    name: "Carlos Cox",
    role: "Promotor de Justiça",
    bio: "Sólida atuação na área de contratações públicas, com visão estratégica e domínio técnico da Nova Lei de Licitações. Referência na análise de riscos.",
    image: "/images/carlos-cox.png",
  },
  {
    name: "Geane Benevides",
    role: "Contadora e Advogada",
    bio: "Especialista em Contratações Públicas. Membro da Comissão de Direito Público da OAB-BA e Contabilidade Aplicada ao Setor Público do CRC-BA.",
    image: "/images/geane-benevides.png",
  },
  {
    name: "Alessandro Macedo",
    role: "Auditor de Controle Externo do TCM/BA",
    bio: "Mestre em Administração e Pós-graduado em Direito Público. Autor do livro 'Modelos de Gestão Pública e Cultura Organizacional no TCM-BA'.",
    image: "/images/alessandro-macedo.png",
  },
  {
    name: "Renata Ramos",
    role: "Advogada, Especialista em Direito Público",
    bio: "Pós-graduação em Licitações e Contratações Públicas. Especializações em Direito do Trabalho e Controle Interno. Mestranda em Direito Administrativo.",
    image: "/images/renata-ramos.png",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand selection:text-black">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <img src="/images/logo-igp.png" alt="IGP" className="h-8 md:h-10 object-contain" />
              <span className="w-px h-6 bg-white/20 hidden md:block"></span>
              <img src="/images/logo-insmac.png" alt="INSMAC" className="h-6 md:h-8 object-contain hidden md:block" />
            </div>
            <div className="hidden lg:flex items-center gap-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              <button
                onClick={() => scrollToSection("sobre")}
                className="hover:text-brand transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("programacao")}
                className="hover:text-brand transition-colors"
              >
                Programação
              </button>
              <button
                onClick={() => scrollToSection("palestrantes")}
                className="hover:text-brand transition-colors"
              >
                Palestrantes
              </button>
              <button
                onClick={() => scrollToSection("investimento")}
                className="hover:text-brand transition-colors"
              >
                Investimento
              </button>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("investimento")}
            className="bg-brand hover:bg-brand-hover text-black font-bold uppercase text-xs md:text-sm px-6 py-3 transition-all transform hover:scale-105"
          >
            Inscreva-se
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
            alt="City background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#050505]"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-bold tracking-widest uppercase mb-4 block">
              Curso Presencial
            </span>
            <h1 className="text-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-6">
              LEI 14.133/21
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-zinc-300 mb-2 uppercase tracking-tight">
              Os gargalos, soluções e o poder da
            </h2>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-brand mb-8">
              INTELIGÊNCIA ARTIFICIAL
            </h2>

            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
              Um curso prático voltado à realidade do servidor público, com foco
              na aplicação efetiva da Nova Lei de Licitações.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="text-brand" />
                <span className="font-semibold uppercase tracking-wider">
                  Feira de Santana - BA
                </span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Calendar className="text-brand" />
                <span className="font-semibold uppercase tracking-wider">
                  09 a 11 de Abril
                </span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("investimento")}
              className="bg-brand hover:bg-brand-hover text-black font-bold text-lg uppercase tracking-wider px-10 py-5 transition-all transform hover:scale-105 hover:-rotate-1 flex items-center gap-3 mx-auto shadow-[0_0_40px_rgba(234,179,8,0.3)]"
            >
              Faça sua inscrição agora
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section
        id="sobre"
        className="py-24 bg-[#050505] relative border-t border-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-display text-5xl md:text-7xl mb-8">
                SOBRE O <span className="text-brand">CURSO</span>
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  A Lei nº 14.133/2021 já faz parte da rotina da Administração
                  Pública. No entanto, a prática tem mostrado que o verdadeiro
                  desafio não está apenas em conhecer a norma, mas em aplicá-la
                  com segurança, eficiência e resultados concretos.
                </p>
                <p>
                  É nesse contexto que surge esta capacitação inovadora, que
                  propõe ir além da teoria e enfrentar, de forma direta, os
                  entraves que ainda marcam as contratações públicas.
                </p>
                <p>
                  Como diferencial, a capacitação incorpora o uso da{" "}
                  <strong className="text-white">
                    Inteligência Artificial
                  </strong>{" "}
                  como ferramenta de apoio ao planejamento, à gestão das
                  contratações e à mitigação de riscos, sempre sob a ótica da
                  legalidade e da boa governança.
                </p>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => scrollToSection("investimento")}
                  className="border-2 border-brand text-brand hover:bg-brand hover:text-black font-bold uppercase tracking-wider px-8 py-4 transition-all flex items-center gap-2"
                >
                  Garantir minha vaga <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#111] p-8 border border-white/5 hover:border-brand/30 transition-colors">
                <Users className="text-brand mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Público-Alvo
                </h3>
                <ul className="space-y-3 text-zinc-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-brand shrink-0 mt-0.5"
                    />{" "}
                    Gestores e Servidores Públicos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-brand shrink-0 mt-0.5"
                    />{" "}
                    Agentes de Contratação e Pregoeiros
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-brand shrink-0 mt-0.5"
                    />{" "}
                    Membros de Comissões de Licitação
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-brand shrink-0 mt-0.5"
                    />{" "}
                    Controladores, Procuradores e Advogados
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-[#111] p-8 border border-white/5 hover:border-brand/30 transition-colors">
                  <Clock className="text-brand mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-2 uppercase">
                    Carga Horária
                  </h3>
                  <p className="text-3xl text-display text-white">20 HORAS</p>
                </div>

                <div className="bg-[#111] p-8 border border-white/5 hover:border-brand/30 transition-colors">
                  <BookOpen className="text-brand mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-2 uppercase">Material</h3>
                  <p className="text-zinc-400 text-sm">
                    Apostila digital com conteúdo exclusivo e certificado de
                    participação.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programação */}
      <section
        id="programacao"
        className="py-24 bg-[#0A0A0A] border-t border-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display text-5xl md:text-7xl mb-4">
              PROGRAMAÇÃO
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Três dias de imersão profunda com especialistas de referência
              nacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-[#111] border border-white/5 p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 group-hover:bg-brand transition-colors"></div>
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase">
                Credenciamento
              </h3>
              <p className="text-zinc-400">A partir das 7h30</p>
            </motion.div>

            <motion.div
              className="bg-[#111] border border-brand/30 p-8 text-center relative overflow-hidden group transform md:-translate-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase">Horários</h3>
              <p className="text-zinc-400">
                Início: 8h30
                <br />
                Almoço: 12h30 às 14h
                <br />
                Término: 18h
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] border border-white/5 p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 group-hover:bg-brand transition-colors"></div>
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase">
                Carga Horária
              </h3>
              <p className="text-zinc-400">20 horas totais de imersão</p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => scrollToSection("investimento")}
              className="bg-brand hover:bg-brand-hover text-black font-bold text-lg uppercase tracking-wider px-10 py-5 transition-all transform hover:scale-105 flex items-center gap-3 mx-auto"
            >
              Faça sua inscrição agora
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Palestrantes */}
      <section
        id="palestrantes"
        className="py-24 bg-[#050505] border-t border-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display text-5xl md:text-7xl mb-4">
              UM TIME DE <span className="text-brand">REFERÊNCIA</span>
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Especialistas que estão entre as maiores referências do Brasil em
              licitações e contratos administrativos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="bg-[#111] border border-white/5 group hover:border-brand/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10"></div>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105 ${
                      speaker.name === "Geane Benevides" || speaker.name === "Renata Ramos" 
                        ? "object-top" 
                        : "object-[center_10%]"
                    }`}
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-display text-3xl text-white">
                      {speaker.name}
                    </h3>
                    <p className="text-brand font-semibold text-sm uppercase tracking-wider">
                      {speaker.role}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Fotos - Carrossel */}
      <section className="py-16 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="text-display text-4xl md:text-5xl mb-2">
            EDIÇÕES <span className="text-brand">ANTERIORES</span>
          </h2>
          <p className="text-zinc-400">
            Veja como foram nossos últimos encontros
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden">
          {/* Fading edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
          
          <div className="flex w-[calc(250px*26)] animate-scroll">
            {/* First set of images */}
            {[...Array(13)].map((_, i) => (
              <div key={`img1-${i}`} className="w-[250px] h-[200px] flex-shrink-0 px-2">
                <div className="w-full h-full rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={`/cursos/imagem-curso (${i + 1}).png`} 
                    alt={`Curso edição anterior ${i + 1}`}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Second set of images (duplicate for infinite scroll) */}
            {[...Array(13)].map((_, i) => (
              <div key={`img2-${i}`} className="w-[250px] h-[200px] flex-shrink-0 px-2">
                <div className="w-full h-full rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={`/cursos/imagem-curso (${i + 1}).png`} 
                    alt={`Curso edição anterior ${i + 1}`}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-display text-5xl md:text-7xl mb-4">
              FEEDBACK DE <span className="text-brand">CLIENTES</span>
            </h2>
            <p className="text-zinc-400">
              O que dizem os participantes de edições anteriores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-[#111] p-8 border border-white/5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Star
                className="text-brand absolute top-6 right-6 opacity-20"
                size={48}
              />
              <div className="text-zinc-300 italic mb-6 relative z-10 text-sm space-y-3">
                <p>
                  "A organização do evento se mostrou extremamente satisfatória e
                  adequada às questões práticas que este momento requer com
                  apresentações dinâmicas e interativas, possibilitando salutar
                  troca de experiências entre os participantes.
                </p>
                <p>
                  Parabéns a todos os envolvidos e um agradecimento especial aos
                  mestres Matheus Carvalho e Tatiana Camarão, cujas competência e
                  expertise dispensam comentários.
                </p>
                <p>
                  A Controladoria Geral de Curionópolis está honrada e agradecida
                  por fazer parte deste evento! ⚓"
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-bold text-brand uppercase tracking-wider">
                  Curinópolis - PA
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 border border-white/5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Star
                className="text-brand absolute top-6 right-6 opacity-20"
                size={48}
              />
              <div className="text-zinc-300 italic mb-6 relative z-10 text-sm space-y-3">
                <p>
                  "Passando para agradecer aos organizadores, palestrantes e toda
                  equipe envolvida.
                </p>
                <p>
                  Representados pela Familia DJ _ Fofos D+<br />
                  Eu e todos os participantes do Município central -Ba
                </p>
                <p>
                  Tivemos a oportunidade de desfrutar do conhecimento, boas
                  condutas a serem inseridas em nossas atividades e da Forma
                  generosidade de cada um de vocês aí ao nos recepcionar com
                  excelência. Ficamos felizes por participar e conviver estes dias
                  com todos vocês.
                </p>
                <p>
                  Nosso abraço fraterno em cada um de vocês. Pela dedicação,
                  determinação e desejo de mudanças."
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-bold text-brand uppercase tracking-wider">
                  Central - BA
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 border border-white/5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Star
                className="text-brand absolute top-6 right-6 opacity-20"
                size={48}
              />
              <div className="text-zinc-300 italic mb-6 relative z-10 text-sm space-y-3">
                <p>
                  "Estou muito feliz com todo conteúdo que nos foi repassado,
                  tenho certeza voltaremos para nossos Órgãos mais animados e
                  confiantes, pois estamos com uma bagagem enorme de
                  conhecimento.
                </p>
                <p>
                  Confiem em vocês e façam valer toda experiência.
                </p>
                <p>
                  Obrigada aos mestres e a equipe (todas as meninas envolvidas)!
                  Obrigada
                </p>
                <p>
                  Parabéns a todos!"
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-bold text-brand uppercase tracking-wider">
                  TCM - PA
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section
        id="investimento"
        className="py-24 bg-[#050505] border-t border-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display text-5xl md:text-7xl mb-4">
              SEU <span className="text-brand">INVESTIMENTO</span>
            </h2>
            <p className="text-zinc-400">
              Garanta sua vaga com antecedência e aproveite os melhores valores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-[#111] border border-white/10 p-8 text-center flex flex-col">
              <h3 className="text-xl font-bold uppercase text-zinc-400 mb-2">
                Lote 01
              </h3>
              <p className="text-sm text-zinc-500 mb-6">Individual</p>
              <p className="text-display text-4xl text-white mb-8">
                R$ 2.249,00
              </p>
              <button className="mt-auto w-full border border-white/20 hover:border-brand text-white hover:text-brand font-bold uppercase py-3 transition-colors">
                Selecionar
              </button>
            </div>

            <div className="bg-[#111] border border-white/10 p-8 text-center flex flex-col">
              <h3 className="text-xl font-bold uppercase text-zinc-400 mb-2">
                Lote 02
              </h3>
              <p className="text-sm text-zinc-500 mb-6">Individual</p>
              <p className="text-display text-4xl text-white mb-8">
                R$ 2.429,00
              </p>
              <button className="mt-auto w-full border border-white/20 hover:border-brand text-white hover:text-brand font-bold uppercase py-3 transition-colors">
                Selecionar
              </button>
            </div>

            <div className="bg-[#111] border border-white/10 p-8 text-center flex flex-col">
              <h3 className="text-xl font-bold uppercase text-zinc-400 mb-2">
                Lote 03
              </h3>
              <p className="text-sm text-zinc-500 mb-6">Individual</p>
              <p className="text-display text-4xl text-white mb-8">
                R$ 2.600,00
              </p>
              <button className="mt-auto w-full border border-white/20 hover:border-brand text-white hover:text-brand font-bold uppercase py-3 transition-colors">
                Selecionar
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-[#111] border border-white/5 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold uppercase mb-6 text-brand">
                  Formas de Pagamento
                </h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand" /> Nota de
                    Empenho
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand" /> Depósito
                    em conta
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand" /> Boleto
                    Bancário
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand" /> Pix
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand" /> Cartão de
                    Crédito
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-brand/10 border border-brand/20 rounded-sm">
                  <p className="text-brand font-bold uppercase text-sm mb-1">
                    Pacote para 05 pessoas
                  </p>
                  <p className="text-white">
                    20% de desconto no valor do lote.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold uppercase mb-6 text-brand">
                  Dados Bancários
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-white mb-2">Banco do Brasil</p>
                    <p className="text-sm text-zinc-400 font-mono">
                      Agência: 2971-8
                    </p>
                    <p className="text-sm text-zinc-400 font-mono">
                      Conta Corrente: 16.644-8
                    </p>
                    <p className="text-sm text-zinc-400 font-mono">
                      CNPJ: 13.292.261/0001-74
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      INSTITUTO DE EDUCAÇÃO MATHEUS CARVALHO - INSMAC
                    </p>
                  </div>

                  <div className="w-full h-px bg-white/10"></div>

                  <div>
                    <p className="font-bold text-white mb-2">Bradesco</p>
                    <p className="text-sm text-zinc-400 font-mono">
                      Agência: 236-4
                    </p>
                    <p className="text-sm text-zinc-400 font-mono">
                      Conta Corrente: 13.5870-7
                    </p>
                    <p className="text-sm text-zinc-400 font-mono">
                      CNPJ: 59.851.176/0001-08
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      INSTITUTO DE GESTÃO PÚBLICA - IGP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <img src="/images/logo-igp.png" alt="IGP" className="h-10 object-contain" />
              <div className="w-px h-6 bg-white/20"></div>
              <img src="/images/logo-insmac.png" alt="INSMAC" className="h-8 object-contain" />
            </div>

            <div className="text-center md:text-right">
              <p className="text-zinc-400 text-sm mb-2">Contato e Inscrições</p>
              <p className="text-white font-bold">(71) 992628754</p>
              <p className="text-zinc-500 text-sm">
                igpinstitutodegestaopublica@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-zinc-600 text-xs">
            <p>
              &copy; {new Date().getFullYear()} IGP & INSMAC. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
