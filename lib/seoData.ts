import { batch1 } from "./seoContent/batch1";
import { batch2 } from "./seoContent/batch2";
import { batch3 } from "./seoContent/batch3";
import { batch4 } from "./seoContent/batch4";
import { batch5 } from "./seoContent/batch5";
import { batch6 } from "./seoContent/batch6";
import { batch7_8 } from "./seoContent/batch78";
import { batch9_10 } from "./seoContent/batch910";

const ALL_CONTENT = {
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
  ...batch7_8,
  ...batch9_10,
};

export const CITIES = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
  "Brasília",
  "Campinas",
  "Ribeirão Preto",
  "São José dos Campos",
  "Sorocaba",
  "São Bernardo do Campo",
  "Guarulhos",
  "Osasco",
  "Joinville",
  "Blumenau",
  "Caxias do Sul",
  "Londrina",
  "Maringá",
  "Florianópolis",
  "Goiânia",
  "Uberlândia",
  "Salvador",
  "Recife",
  "Fortaleza",
  "Cuiabá"
];

export const SEO_TOPICS = [
  "como sair do operacional da empresa",
  "trabalho 12 horas por dia e a empresa não cresce",
  "como parar de apagar incêndio na empresa",
  "como sair do caos empresarial",
  "minha empresa depende 100% de mim o que fazer",
  "como ter tempo livre sendo dono de empresa",
  "como tirar férias sem a empresa parar",
  "como evitar retrabalho na prestação de serviços",
  "minha empresa está desorganizada por onde começar",
  "como organizar o tempo de um empresário",
  "como fazer a equipe trabalhar sozinha",
  "minha equipe não tem iniciativa o que fazer",
  "como delegar tarefas e não perder o controle",
  "equipe desmotivada e confusa como resolver",
  "como treinar funcionários em empresas pequenas",
  "como cobrar resultados da equipe sem ser chato",
  "como contratar certo para empresa pequena",
  "o que fazer quando a equipe erra muito",
  "como criar um organograma para pequena empresa",
  "como ser um líder melhor para minha equipe",
  "como organizar processos de uma pequena empresa",
  "como criar processos operacionais do zero",
  "como padronizar processos internos",
  "processos documentados como fazer",
  "sistema de gestão para pequenas empresas funciona",
  "consultoria de processos empresariais vale a pena",
  "como estruturar uma empresa B2B",
  "como estruturar um escritório de engenharia",
  "como organizar a operação de uma empresa de TI",
  "ferramentas gratuitas para organizar a empresa",
  "faturamento instável como resolver",
  "minha empresa fatura bem mas não dá lucro",
  "como ter previsibilidade financeira na empresa",
  "como aumentar a margem de lucro da prestação de serviços",
  "faturamento montanha russa o que fazer",
  "como dobrar o faturamento sem trabalhar mais",
  "como cobrar mais caro pelos meus serviços B2B",
  "como separar o financeiro pessoal da empresa",
  "por que minha empresa não cresce",
  "o que fazer quando concorrentes menores crescem mais rápido",
  "como parar de perder clientes por desorganização",
  "como organizar o setor comercial da empresa B2B",
  "como padronizar o atendimento ao cliente B2B",
  "como fazer o planejamento estratégico de uma PME",
  "como fazer a transição de autônomo para empresário",
  "como profissionalizar uma empresa familiar",
  "como escalar uma empresa de prestação de serviços",
  "métodos de gestão para pequenas e médias empresas",
  "o que fazer quando a empresa cresce rápido e desorganizada",
  "como ser referência no meu nicho de mercado"
];

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateSeoSlug(topic: string, city?: string): string {
  const baseSlug = slugify(topic);
  if (!city) return baseSlug;
  return `${baseSlug}-em-${slugify(city)}`;
}

export function parseSlug(slug: string): { topic: string | null; city: string | null } {
  for (const topic of SEO_TOPICS) {
    const baseSlug = slugify(topic);
    
    if (slug === baseSlug) {
      return { topic, city: null };
    }
    
    for (const city of CITIES) {
      if (slug === `${baseSlug}-em-${slugify(city)}`) {
        return { topic, city };
      }
    }
  }
  return { topic: null, city: null };
}

export function generateSeoContent(topic: string, city: string | null) {
  const isCity = city !== null;
  const locationText = isCity ? ` em ${city}` : "";

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const headline = `${capitalize(topic)}${locationText}`;
  const finalSlug = generateSeoSlug(topic, city ?? undefined);

  type ContentCreator = (loc: string, suf: string) => string;
  const contentGenerator = (ALL_CONTENT as Record<string, ContentCreator>)[topic];

  const htmlContent = contentGenerator 
    ? contentGenerator(locationText, "")
    : `
      <p class="lead">Conteúdo sobre: <strong>${headline}</strong> em breve.</p>
    `;

  return {
    title: headline,
    headline,
    topic,
    city,
    content: htmlContent,
    slug: finalSlug,
    excerpt: `Descubra como estruturar sua empresa B2B para resolver: ${topic}. Estratégias validadas de gestão.`,
    category: "Crescimento B2B",
    author: "Willian Pereira",
    date: new Date().toLocaleDateString("pt-BR", {day: "2-digit", month: "short", year: "numeric"}),
    readTime: "6 min",
    image: `https://picsum.photos/seed/${finalSlug}/1200/600`
  };
}



