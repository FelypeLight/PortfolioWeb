import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, ExternalLink, Code2, Linkedin, Mail, Phone, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import projectAutomation from "@/assets/project.jpeg";
import projectAi from "@/assets/project-n8n.jpeg";
import projectVet from "@/assets/project-vet.png";
import me from "@/assets/me.jpeg";
import connexa from "@/assets/connexa.png";
import gustavo from "@/assets/gustavo.png";
import arthur from "@/assets/arthur.png";
import robson from "@/assets/robson.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felype Silveira Dantas — Engenheiro de Software" },
      { name: "description", content: "Portfólio de Felype Silveira Dantas, Engenheiro de Software em formação. Projetos em automação, IA, QA e desenvolvimento web." },
      { property: "og:title", content: "Felype Silveira Dantas — Engenheiro de Software" },
      { property: "og:description", content: "Portfólio com projetos em automação, IA e desenvolvimento web." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Interface de Cadastro para plataforma de grupos de alunos — Connexa",
    desc: "Interface de cadastro para projeto de Sistema de grupos de alunos. Desenvolvido em grupo, com apoio de ferramentas como Azure Devops e Github Copilot.",
    img: connexa,
    tags: ["MVP", "JavaScript", "Azure DevOps", "GitHub Copilot"],
    link: "https://github.com/FelypeLight/Connexa-MVP-Felype",
  },
  {
    title: "Professor de Inglês - Agente de IA local N8n",
    desc: "Desenvolvido com a tecnologia Phi3 da Llama AI e integrado via Docker, este agente é capaz de simular um professor de Inglês via conversas por um chat nativo no N8n.",
    img: projectAi,
    tags: ["N8n", "Docker", "LLM", "Agente de IA", "Phi3"],
    link: "https://github.com/FelypeLight/Tutor-de-Ingles---N8n",
  },
  {
    title: "Sistema Web — Vida4Pets",
    desc: "Solução WEB focada em agilizar o acesso a serviços de clínicas veterinárias remotamente, evitando filas e obstáculos para tutores de pets.",
    img: projectVet,
    tags: ["Web", "PHP", "SQL", "JavaScript"],
    link: "https://github.com/FelypeLight/TCC---BANCA-FINAL-ETEC",
  },
];

const stack = [
  { title: "QA & Testing", items: ["Playwright", "Codegen", "Selenium", "JUnit"] },
  { title: "DevOps & Automation", items: ["Selenium", "Docker", "N8n", "Python", "Pyautogui", ".bat / .sh / PowerShell"] },
  { title: "Backend & Core", items: ["Python", "Java", "PHP", "SQL"] },
  { title: "Front-End & Design", items: ["Bootstrap", "ReactJs", "Angular", "Tailwind CSS"] },
  { title: "Versionamento de Código", items: ["Git", "GitHub"] },
  { title: "Redes & Cybersecurity", items: ["Wireshark", "Nmap", "Bash/Terminal"] },
];

const testimonials = [
  { name: "Gustavo Sena", img: gustavo, role: "Recomendação", text: "O Felype Silveira é a definição de obstinação e entrega. É um profissional de uma dedicação rara, que mergulha de cabeça nos desafios e não descansa enquanto não atinge o melhor resultado possível. Sua busca constante pela perfeição faz com que ele eleve o padrão de tudo o que toca. O Felype não aceita a zona de conforto; ele questiona, aprimora e executa com uma intensidade que impulsiona todo o projeto. Para quem busca alguém que entrega com excelência e comprometimento total, o Felype é a escolha certa." },
  { name: "Arthur Oliveira", img: arthur, role: "Recomendação", text: "Conheço Felype Silveira desde nosso período na FATEC Rubens Lara, onde fomos colegas em disciplinas e projetos. Felype se destaca por unir pensamento analítico a uma postura prática: transforma problemas vagos em planos de ação objetivos, priorizando qualidade e prazo. Tem ótima capacidade de comunicação — sabe expor ideias técnicas de forma clara e envolvente, o que facilita o alinhamento do time e acelera decisões.Além disso, demonstra curiosidade intelectual e vontade contínua de aprender novas ferramentas e abordagens, sem perder a atenção aos detalhes na entrega. Em momentos de pressão mantém a calma, reavalia possibilidades e sugere alternativas realistas, sempre com espírito colaborativo.É um profissional íntegro, confiável e orientado a resultados; acredito que agrega valor tanto em times que precisam de execução eficiente quanto em ambientes que buscam melhorias e inovação. Recomendo Felype sem reservas para posições que exijam responsabilidade, pensamento crítico e boa comunicação." },
  { name: "Robson Damasceno", img: robson, role: "Recomendação", text: "Recomendo o Felype com total confiança para o mercado de trabalho. Ele é um profissional que se destaca pela sua capacidade de resolver problemas de forma eficiente e criativa, sempre mantendo uma postura tranquila e equilibrada, mesmo diante de desafios e situações de pressão.Felype possui grande facilidade para trabalhar em equipe, contribuindo com diálogo, colaboração e respeito, além de se destacar por sempre trazer ideias novas, agregando inovação e melhorias contínuas aos projetos dos quais participa. Sua atitude proativa e visão criativa fazem dele um profissional valioso para qualquer organização.Sem dúvida, é alguém que contribui tanto para os resultados quanto para um ambiente de trabalho positivo e produtivo." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Portfólio</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Felype Silveira Dantas</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="mt-6 text-xl md:text-2xl text-muted-foreground font-light">
              Engenheiro de Software em formação.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/FelypeLight?tab=repositories"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Ver meus projetos
                <ArrowRight size={18} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Entrar em contato
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={me}
                alt="Foto de Felype Silveira"
                className="w-40 h-40 md:w-56 md:h-56 rounded-lg object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">Sobre mim</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Curiosidade e aprendizado constante.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sou um profissional curioso e em aprendizado constante. Tenho uma vasta experiência acadêmica
                  (técnico e superior), onde conheci inúmeras ferramentas e práticas para um desenvolvimento de
                  sistema eficaz. Atuei como Testador de Sistemas Voluntário, e Help Desk voluntário.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">Estudos de caso</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Projetos em destaque</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="card-hover h-full bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={924}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
                    <div className="flex gap-3">
          
                      <a href={p.link} className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow transition-colors">
                        <ExternalLink size={14} /> Github
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 text-center">
              <a
                href="https://github.com/FelypeLight"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github size={18} />
                Ver outros projetos no GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">Stack técnica</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Tecnologias com as quais trabalho</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stack.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 100}>
                <div className="card-hover h-full bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gradient">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((it) => (
                      <span
                        key={it}
                        className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">Prova social</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Depoimentos & recomendações</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card-hover h-full bg-card border border-border rounded-xl p-6 flex flex-col">
                  <Quote size={28} className="text-primary mb-4 opacity-60" />
                  <div className="w-full mb-4 flex items-center justify-center">
                    <div className="w-88 h-56 rounded-lg overflow-hidden border border-dashed border-border bg-muted/40 flex-shrink-0">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTATO */}
      <footer id="contato" className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="text-gradient">conversar?</span>
            </h2>
            <p className="text-muted-foreground mb-12">Estou disponível para novas oportunidades e parcerias.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a
                href="https://www.linkedin.com/in/felypedantas/"
                target="_blank"
                rel="noreferrer"
                className="card-hover bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2"
              >
                <Linkedin size={22} className="text-primary" />
                <span className="text-xs text-muted-foreground">LinkedIn</span>
                <span className="text-sm font-medium">felypedantas</span>
              </a>
              <a
                href="mailto:dantas.felype.pro@gmail.com"
                className="card-hover bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2"
              >
                <Mail size={22} className="text-primary" />
                <span className="text-xs text-muted-foreground">E-mail</span>
                <span className="text-sm font-medium break-all">dantas.felype.pro@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5513991958949"
                target="_blank"
                rel="noreferrer"
                className="card-hover bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2"
              >
                <Phone size={22} className="text-primary" />
                <span className="text-xs text-muted-foreground">WhatsApp</span>
                <span className="text-sm font-medium">(+55) 13 99195-8949</span>
              </a>
            </div>
          </Reveal>
          <p className="mt-16 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Felype Silveira Dantas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
