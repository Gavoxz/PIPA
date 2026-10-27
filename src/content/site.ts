// Conteúdo central. Textos provisórios, sem dados inventados.
export const site = {
  name: "PIPA",
  // PENDENTE: domínio definitivo e e-mail/WhatsApp de contato.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  instagram: "https://www.instagram.com/pipa.etc",
  lead: "A PIPA une construção de marca, visão de negócio e soluções digitais para empresas e pessoas que querem evoluir com clareza, sem copiar o caminho de ninguém.",
};
export const nav = [
  { href: "#pipa", label: "A PIPA" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];
export const areas = [
  { n: "01", t: "Marca e posicionamento", d: "Definimos o que a marca diz, como soa e como se apresenta, para que cada peça pareça parte da mesma ideia.", b: "Uma marca que você consegue explicar e sustentar." },
  { n: "02", t: "Experiências digitais", d: "Sites e páginas pensados para comunicar com precisão, carregar rápido e funcionar bem em qualquer tela.", b: "Um site que apresenta o negócio, não apenas decora." },
  { n: "03", t: "Sistemas e soluções digitais", d: "Ferramentas sob medida que organizam processos e dão forma digital à operação.", b: "Menos improviso, mais controle sobre o que importa." },
];
export const steps = [
  { t: "Escutar", d: "Entendemos o negócio, o público e o que precisa mudar." },
  { t: "Direcionar", d: "Transformamos o contexto em uma direção clara, antes de desenhar qualquer coisa." },
  { t: "Construir", d: "Design e desenvolvimento andam juntos, com você acompanhando." },
  { t: "Refinar", d: "Ajustamos detalhes, testamos e entregamos com documentação para evoluir depois." },
];
export const diffs = [
  { t: "Pensamento antes do pixel", d: "Cada decisão visual parte de uma decisão de posicionamento." },
  { t: "Design e código sob o mesmo teto", d: "O que é desenhado é o que vai ao ar, sem perda no caminho." },
  { t: "Entrega documentada", d: "Você recebe a identidade e a arquitetura registradas, para o projeto crescer sem se descaracterizar." },
];
