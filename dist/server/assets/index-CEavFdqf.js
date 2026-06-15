import { r as reactExports, V as jsxRuntimeExports } from "./server-B0wV173V.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$8 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "font-semibold tracking-tight text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "FSD" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: l.href,
          className: "text-sm text-muted-foreground hover:text-primary transition-colors",
          children: l.label
        },
        l.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "md:hidden text-foreground",
          onClick: () => setOpen(!open),
          "aria-label": "Menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        onClick: () => setOpen(false),
        className: "text-sm text-muted-foreground hover:text-primary transition-colors",
        children: l.label
      },
      l.href
    )) })
  ] });
}
function Reveal({ children, delay = 0, className = "" }) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`
      },
      children
    }
  );
}
const heroBg = "/assets/hero-bg-D99MKMqU.jpg";
const projectAi = "/assets/project-n8n-CbOgEUaT.jpeg";
const projectVet = "/assets/project-vet-BirLvHr2.png";
const me = "/assets/me-C8RCEyMa.jpeg";
const connexa = "/assets/connexa-Dr_xaV4j.png";
const gustavo = "/assets/gustavo-ClXRULzQ.png";
const arthur = "/assets/arthur-BQ4NNK_l.png";
const robson = "/assets/robson-D_pJIfbp.png";
const projects = [{
  title: "Interface de Cadastro para plataforma de grupos de alunos — Connexa",
  desc: "Interface de cadastro para projeto de Sistema de grupos de alunos. Desenvolvido em grupo, com apoio de ferramentas como Azure Devops e Github Copilot.",
  img: connexa,
  tags: ["MVP", "JavaScript", "Azure DevOps", "GitHub Copilot"],
  link: "https://github.com/FelypeLight/Connexa-MVP-Felype"
}, {
  title: "Professor de Inglês - Agente de IA local N8n",
  desc: "Desenvolvido com a tecnologia Phi3 da Llama AI e integrado via Docker, este agente é capaz de simular um professor de Inglês via conversas por um chat nativo no N8n.",
  img: projectAi,
  tags: ["N8n", "Docker", "LLM", "Agente de IA", "Phi3"],
  link: "https://github.com/FelypeLight/Tutor-de-Ingles---N8n"
}, {
  title: "Sistema Web — Vida4Pets",
  desc: "Solução WEB focada em agilizar o acesso a serviços de clínicas veterinárias remotamente, evitando filas e obstáculos para tutores de pets.",
  img: projectVet,
  tags: ["Web", "PHP", "SQL", "JavaScript"],
  link: "https://github.com/FelypeLight/TCC---BANCA-FINAL-ETEC"
}];
const stack = [{
  title: "QA & Testing",
  items: ["Playwright", "Codegen", "Selenium", "JUnit"]
}, {
  title: "DevOps & Automation",
  items: ["Selenium", "Docker", "N8n", "Python", "Pyautogui", ".bat / .sh / PowerShell"]
}, {
  title: "Backend & Core",
  items: ["Python", "Java", "PHP", "SQL"]
}, {
  title: "Front-End & Design",
  items: ["Bootstrap", "ReactJs", "Angular", "Tailwind CSS"]
}, {
  title: "Versionamento de Código",
  items: ["Git", "GitHub"]
}, {
  title: "Redes & Cybersecurity",
  items: ["Wireshark", "Nmap", "Bash/Terminal"]
}];
const testimonials = [{
  name: "Gustavo Sena",
  img: gustavo,
  role: "Recomendação",
  text: "O Felype Silveira é a definição de obstinação e entrega. É um profissional de uma dedicação rara, que mergulha de cabeça nos desafios e não descansa enquanto não atinge o melhor resultado possível. Sua busca constante pela perfeição faz com que ele eleve o padrão de tudo o que toca. O Felype não aceita a zona de conforto; ele questiona, aprimora e executa com uma intensidade que impulsiona todo o projeto. Para quem busca alguém que entrega com excelência e comprometimento total, o Felype é a escolha certa."
}, {
  name: "Arthur Oliveira",
  img: arthur,
  role: "Recomendação",
  text: "Conheço Felype Silveira desde nosso período na FATEC Rubens Lara, onde fomos colegas em disciplinas e projetos. Felype se destaca por unir pensamento analítico a uma postura prática: transforma problemas vagos em planos de ação objetivos, priorizando qualidade e prazo. Tem ótima capacidade de comunicação — sabe expor ideias técnicas de forma clara e envolvente, o que facilita o alinhamento do time e acelera decisões.Além disso, demonstra curiosidade intelectual e vontade contínua de aprender novas ferramentas e abordagens, sem perder a atenção aos detalhes na entrega. Em momentos de pressão mantém a calma, reavalia possibilidades e sugere alternativas realistas, sempre com espírito colaborativo.É um profissional íntegro, confiável e orientado a resultados; acredito que agrega valor tanto em times que precisam de execução eficiente quanto em ambientes que buscam melhorias e inovação. Recomendo Felype sem reservas para posições que exijam responsabilidade, pensamento crítico e boa comunicação."
}, {
  name: "Robson Damasceno",
  img: robson,
  role: "Recomendação",
  text: "Recomendo o Felype com total confiança para o mercado de trabalho. Ele é um profissional que se destaca pela sua capacidade de resolver problemas de forma eficiente e criativa, sempre mantendo uma postura tranquila e equilibrada, mesmo diante de desafios e situações de pressão.Felype possui grande facilidade para trabalhar em equipe, contribuindo com diálogo, colaboração e respeito, além de se destacar por sempre trazer ideias novas, agregando inovação e melhorias contínuas aos projetos dos quais participa. Sua atitude proativa e visão criativa fazem dele um profissional valioso para qualquer organização.Sem dúvida, é alguém que contribui tanto para os resultados quanto para um ambiente de trabalho positivo e produtivo."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "", "aria-hidden": true, width: 1920, height: 1080, className: "absolute inset-0 w-full h-full object-cover opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-primary mb-6", children: "Portfólio" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Felype Silveira Dantas" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-xl md:text-2xl text-muted-foreground font-light", children: "Engenheiro de Software em formação." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/FelypeLight?tab=repositories", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all", children: [
            "Ver meus projetos",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors", children: "Entrar em contato" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center md:items-start gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: me, alt: "Foto de Felype Silveira", className: "w-40 h-40 md:w-56 md:h-56 rounded-lg object-cover flex-shrink-0", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-primary mb-3", children: "Sobre mim" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-8", children: "Curiosidade e aprendizado constante." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Sou um profissional curioso e em aprendizado constante. Tenho uma vasta experiência acadêmica (técnico e superior), onde conheci inúmeras ferramentas e práticas para um desenvolvimento de sistema eficaz. Atuei como Testador de Sistemas Voluntário, e Help Desk voluntário." })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projetos", className: "py-24 px-6 bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-primary mb-3", children: "Estudos de caso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-12", children: "Projetos em destaque" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-hover h-full bg-card border border-border rounded-xl overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 924, height: 768, className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6 flex-1", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.link, className: "inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 }),
            " Github"
          ] }) })
        ] })
      ] }) }, p.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/FelypeLight", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 18 }),
        "Ver outros projetos no GitHub"
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-primary mb-3", children: "Stack técnica" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-12", children: "Tecnologias com as quais trabalho" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: stack.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-hover h-full bg-card border border-border rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4 text-gradient", children: cat.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: cat.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-colors", children: it }, it)) })
      ] }) }, cat.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "depoimentos", className: "py-24 px-6 bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-primary mb-3", children: "Prova social" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-12", children: "Depoimentos & recomendações" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-hover h-full bg-card border border-border rounded-xl p-6 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { size: 28, className: "text-primary mb-4 opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-88 h-56 rounded-lg overflow-hidden border border-dashed border-border bg-muted/40 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, className: "w-full h-full object-cover" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1 italic", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contato", className: "py-24 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
          "Vamos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "conversar?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-12", children: "Estou disponível para novas oportunidades e parcerias." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.linkedin.com/in/felypedantas/", target: "_blank", rel: "noreferrer", className: "card-hover bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 22, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "LinkedIn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "felypedantas" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:dantas.felype.pro@gmail.com", className: "card-hover bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 22, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "E-mail" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium break-all", children: "dantas.felype.pro@gmail.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/5513991958949", target: "_blank", rel: "noreferrer", className: "card-hover bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 22, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "(+55) 13 99195-8949" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-16 text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Felype Silveira Dantas. Todos os direitos reservados."
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
