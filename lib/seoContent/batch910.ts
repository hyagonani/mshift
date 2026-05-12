const faq = (items: [string, string][]) => `
  <h2 class="!text-3xl md:!text-4xl !font-black !mt-16 !mb-8 !text-slate-900 !border-b-4 !border-secondary !pb-4">Dúvidas Frequentes (FAQ)</h2>
  <div class="space-y-6 mt-8">
    ${items.map(([q, a], i) => `
    <details open class="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer mb-4">
      <summary class="text-lg font-bold text-slate-900 m-0 pb-2 list-none flex justify-between items-center">
        <span>${i + 1}. ${q}</span>
      </summary>
      <p class="mt-4 pt-0 text-slate-600">${a}</p>
    </details>`).join('')}
  </div>`;

const comparativo = (l: string, r: string, rows: [string, string][]) => `
  <h2>O Comparativo Definitivo: Quem Contrata vs Quem Não Contrata</h2>
  <div class="not-prose my-8 overflow-hidden rounded-xl border border-slate-200">
    <table class="w-full text-left text-sm">
      <thead class="bg-slate-50 text-slate-800">
        <tr>
          <th class="p-4 font-bold border-b border-slate-200 w-1/2">${l}</th>
          <th class="p-4 font-bold border-b border-slate-200 w-1/2 bg-yellow-50">${r}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        ${rows.map(([a, b]) => `<tr><td class="p-4">${a}</td><td class="p-4 font-medium text-slate-900 bg-yellow-50/50">${b}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>`;

export const batch9_10: Record<string, (locationText: string, locationSuffix: string) => string> = {
  "como parar de perder clientes por desorganização": (loc, suf) => `
    <p class="lead">Para cravar <strong>como parar de perder clientes por desorganização${loc}</strong> é forçoso matar os rombos de suporte e entrega que destroem silenciosamente sua reputação B2B.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Clientes não saem pelo preço — saem pela imprevisibilidade. Prazo furado, comunicação confusa e suporte demorado criam a percepção de que a empresa não tem controle. Uma vez instalada essa percepção, o cancelamento é questão de tempo.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> da retenção: a empresa gasta energia captando novos clientes para repor os que saem pela porta dos fundos. CAC alto, LTV baixo e reputação deteriorada que dificulta crescimento orgânico.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> audita e reestrutura os pontos de contato com o cliente. O <strong>Protocolo de Desafogamento</strong> cria SLA de atendimento, comunicação proativa e entrega padronizada — convertendo desorganização em confiança.</p>
    ${comparativo('Empresa que Perde Clientes', 'Retenção Estruturada MShift', [
      ['Cliente descobre problemas por conta própria — percepção de descaso e falta de controle.', 'Comunicação proativa por fase de projeto mantém cliente informado — aumenta percepção de valor.'],
      ['Cada renovação é incerta porque a experiência foi inconsistente ao longo do contrato.', 'Entrega padronizada e previsível transforma satisfação em renovação automática e indicações.']
    ])}
    ${faq([
      ['Como identificar por que meus clientes estão cancelando?', 'O Mapeamento inclui análise dos pontos de atrito mais comuns na jornada do cliente — revelando os momentos críticos onde a desorganização gera insatisfação e cancelamento.'],
      ['Comunicação proativa com cliente exige contratar alguém?', 'Não necessariamente. O Protocolo de Desafogamento estrutura templates de comunicação por fase que qualquer membro do time executa — sem depender de contratação.'],
      ['Como recuperar clientes que já saíram?', 'O Mapeamento define a abordagem de reativação baseada na causa real do cancelamento — com script e timing corretos para retomar sem parecer desesperado.'],
      ['NPS baixo indica o que exatamente no meu processo?', 'O Mapeamento cruza feedback de NPS com as etapas do projeto para identificar onde especificamente a experiência quebra — transformando dado emocional em ação processual.'],
      ['Quanto custa estruturar a retenção de clientes com o Mapeamento?', 'R$ 97 na sessão completa — com diagnóstico dos pontos de atrito e plano de implementação de processo de retenção para parar de perder clientes pela porta dos fundos.']
    ])}`,

  "como organizar o setor comercial da empresa B2B": (loc, suf) => `
    <p class="lead">Entender <strong>como organizar o setor comercial da empresa B2B${loc}</strong> anula a dependência do "vendedor mágico" e constrói uma máquina de vendas que funciona com processo.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>O comercial B2B sem processo depende de talentos individuais que levam a carteira embora quando saem. Cada vendedor tem seu jeito, seu CRM mental e seus critérios — tornando resultado imprevisível e crescimento impossível de escalar.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> comercial: meses bons que dependem de sorte e meses ruins que dependem de azar. Sem processo comercial, a empresa não sabe seu CAC, não projeta receita e não consegue replicar o que funciona.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> estrutura o funil com etapas claras, critérios de avanço e script defensável. O <strong>Protocolo de Desafogamento</strong> cria o playbook comercial B2B — tornando resultado de vendas um processo, não um talento.</p>
    ${comparativo('Comercial Dependente de Herói', 'Máquina Comercial MShift', [
      ['Vendedor sai e leva a carteira — empresa começa do zero toda vez.', 'CRM estruturado com relacionamento documentado: carteira pertence ao processo, não ao vendedor.'],
      ['Não sabe a taxa de conversão real — mês bom e mês ruim sem entender o padrão.', 'Funil rastreado com conversão por etapa — previsão de receita com 80% de precisão.']
    ])}
    ${faq([
      ['Como estruturar um funil de vendas B2B do zero?', 'O Mapeamento define as etapas específicas para o seu ciclo de venda B2B — com critério de avanço, script de abordagem e processo de follow-up que qualquer pessoa do time executa.'],
      ['Preciso de CRM caro para organizar meu comercial?', 'Não. O Protocolo de Desafogamento funciona com qualquer ferramenta — inclusive planilha. O processo vem antes da ferramenta, e o Mapeamento define o processo primeiro.'],
      ['Como treinar a equipe de vendas sem um gerente comercial?', 'Com playbook documentado. O Mapeamento entrega o manual de vendas B2B com script, objeções mapeadas e critérios de qualificação — que o time usa de forma autônoma.'],
      ['Como saber se meu preço está impedindo as vendas?', 'O Mapeamento analisa as conversões por etapa do funil. Se a quebra ocorre no fechamento, o problema é preço ou proposta. Se é mais cedo, é qualificação ou abordagem — e a solução é diferente.'],
      ['Quanto custa estruturar o setor comercial com o Mapeamento?', 'R$ 97 na sessão diagnóstica — com mapa de rota para organizar seu comercial B2B, estruturar funil e criar o playbook de vendas replicável.']
    ])}`,

  "como padronizar o atendimento ao cliente B2B": (loc, suf) => `
    <p class="lead">Cravar <strong>como padronizar o atendimento ao cliente B2B${loc}</strong> é transformar relacionamento de talento individual em processo replicável que escala sem depender de quem atende.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Atendimento B2B informal cria experiências inconsistentes. Um cliente tem resposta em 1h, outro em 2 dias. Um gestor resolve com empatia, outro com frieza. A percepção de qualidade varia — e no B2B, inconsistência destrói contratos de longo prazo.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> do relacionamento: o dono vira o "atendente premium" que todos os clientes querem falar. Escalabilidade zero — cada novo cliente exige mais horas pessoais do fundador.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> estrutura o atendimento em SLAs formais com categorias de urgência. O <strong>Protocolo de Desafogamento</strong> cria o manual de atendimento que qualquer pessoa executa com qualidade consistente.</p>
    ${comparativo('Atendimento Dependente do Dono', 'Atendimento Padronizado MShift', [
      ['Cliente aciona o fundador diretamente — impossível escalar sem virar suporte pessoal.', 'Canal oficial com SLA definido educa o cliente e protege o tempo do fundador.'],
      ['Cada interação depende do humor e disponibilidade de quem atende.', 'Protocolo de atendimento garante qualidade consistente independente de quem executa.']
    ])}
    ${faq([
      ['Como criar SLA de atendimento sem parecer frio para o cliente?', 'O Mapeamento define níveis de urgência com comunicação transparente — o cliente sabe o prazo, entende a categoria e se sente respeitado. SLA bem comunicado aumenta, não diminui, a percepção de cuidado.'],
      ['Como impedir que clientes acionem direto o sócio no WhatsApp?', 'Com canal oficial e SLA claro estabelecidos desde o onboarding. O Protocolo inclui a comunicação de canais na integração do cliente — com tom que educa sem alienar.'],
      ['Quantas pessoas preciso para ter atendimento estruturado?', 'O Mapeamento define o modelo correto para o tamanho do seu time. Uma pessoa com processo claro atende melhor do que cinco pessoas no improviso.'],
      ['Como medir se o atendimento melhorou após a padronização?', 'Com métricas de first response time (FRT) e satisfaction score. O Mapeamento define os indicadores corretos para o seu modelo e como rastreá-los sem complexidade.'],
      ['Quanto custa padronizar o atendimento com o Mapeamento?', 'R$ 97 na sessão diagnóstica — com mapa de rota para criar SLA de atendimento, manual de suporte e processo de escalada que protege o tempo do dono.']
    ])}`,

  "como fazer o planejamento estratégico de uma PME": (loc, suf) => `
    <p class="lead">Mudar a escala de <strong>como fazer o planejamento estratégico de uma PME${loc}</strong> requer parar de confundir planejamento com planilha e começar com diagnóstico real do negócio.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>PMEs criam planos estratégicos bonitos em janeiro que morrem em fevereiro. O motivo: o planejamento é feito sem diagnóstico — metas criadas no vácuo sem entender os gargalos reais que impedem o crescimento.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> do planejamento: a empresa trabalha muito para atingir a meta, mas os gargalos não diagnosticados sabotam cada iniciativa. Muito esforço, pouco resultado — e ninguém entende por quê.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> começa onde o planejamento deveria: no diagnóstico real. O <strong>Protocolo de Desafogamento</strong> converte o diagnóstico em plano de ação com prioridades, responsáveis e indicadores concretos.</p>
    ${comparativo('Planejamento sem Diagnóstico', 'Mapeamento com Plano de Ação', [
      ['Metas criadas na esperança sem entender o que impediu de atingi-las no ano anterior.', 'Diagnóstico dos 3 gargalos reais de crescimento — plano ataca exatamente o que trava.'],
      ['Plano bonito que ninguém executa porque não tem responsável nem prazo.', 'Protocolo com dono, prazo e indicador para cada iniciativa — plano que realmente acontece.']
    ])}
    ${faq([
      ['Como definir metas realistas para minha PME?', 'O Mapeamento cruza capacidade operacional atual com potencial de crescimento identificado — gerando metas desafiadoras mas alcançáveis com o processo correto implementado.'],
      ['Com que frequência devo revisar o planejamento?', 'O Protocolo de Desafogamento inclui ritual de revisão trimestral com indicadores claros — mantendo o plano vivo e ajustado à realidade sem perder o foco anual.'],
      ['Como engajar a equipe no planejamento estratégico?', 'Com plano traduzido em ações claras por área. O Mapeamento define o que cada função contribui para a meta — transformando planejamento abstrato em objetivo concreto para cada pessoa.'],
      ['O Mapeamento substitui o planejamento estratégico anual?', 'Complementa. O Mapeamento é o diagnóstico que torna o planejamento real — revelando os bloqueios que planos genéricos ignoram. De lá, o Protocolo cria a execução trimestral.'],
      ['Quanto custa desenvolver o planejamento estratégico com o Mapeamento?', 'R$ 97 na sessão completa — diagnóstico real da sua PME com mapa de crescimento e prioridades de execução para o próximo ciclo.']
    ])}`,

  "como fazer a transição de autônomo para empresário": (loc, suf) => `
    <p class="lead">Enfrentar <strong>como fazer a transição de autônomo para empresário${loc}</strong> é deixar de ser um funcionário VIP do próprio CNPJ e construir uma empresa que funciona sem depender exclusivamente de você.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>O autônomo virou "empresário" mas continua executando tudo sozinho. A transição não aconteceu de verdade — apenas o CNPJ mudou. Sem processos, time e delegação, o negócio ainda é um serviço pessoal disfarçado de empresa.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> da identidade: o autônomo tem teto de renda no limite físico do seu tempo. Sem a transição real para empresário, o crescimento é impossível — e o burnout, inevitável.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> mapeia o que só você faz e por quê — depois constrói o processo que permite transferir. O <strong>Protocolo de Desafogamento</strong> cria a estrutura que transforma o autônomo em dono que pensa e não apenas executa.</p>
    ${comparativo('Autônomo com CNPJ', 'Empresário com Estrutura MShift', [
      ['Para de ganhar quando para de trabalhar — renda limitada ao tempo físico disponível.', 'Processos delegados geram receita independente da presença física do dono.'],
      ['Todo projeto passa pelo dono — não escala além da capacidade individual.', 'Equipe com playbook executa padrão de qualidade do fundador sem precisar dele em cada etapa.']
    ])}
    ${faq([
      ['Por onde começar a transição de autônomo para empresário?', 'Pelo Mapeamento — que identifica as 3 primeiras funções que você pode transferir com processo definido. A transição real começa quando o primeiro processo roda sem você.'],
      ['Quanto tempo leva para fazer a transição completa?', 'Depende do modelo de negócio. O Mapeamento define o caminho em fases — com marcos claros de quando você para de executar cada função e começa a supervisionar.'],
      ['Preciso de sócios para fazer a transição?', 'Não. O Mapeamento estrutura a transição possível com os recursos atuais — primeiro delegando para time, depois para processos. Sócio é uma decisão posterior, não um pré-requisito.'],
      ['Como manter qualidade quando delegar para o time?', 'Com processo documentado e checklist de qualidade. O Protocolo de Desafogamento garante que o padrão do fundador seja replicável por qualquer pessoa treinada no processo.'],
      ['Quanto custa iniciar a transição com o Mapeamento?', 'R$ 97 na sessão diagnóstica — que revela o que te prende no operacional e entrega o plano para a transição real de autônomo para empresário estratégico.']
    ])}`,

  "como profissionalizar uma empresa familiar": (loc, suf) => `
    <p class="lead">O atrito letal em <strong>como profissionalizar uma empresa familiar${loc}</strong> não é o parentesco — é a ausência de regras de negócio claras que separem o pessoal do profissional.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Empresas familiares confundem lealdade com competência e afeto com critério de decisão. Sem organograma formal, salários definidos por processo e papéis claros, a gestão vira terreno emocional — e os conflitos destroem tanto o negócio quanto a família.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> familiar: decisões por afeto bloqueiam crescimento, talentos externos não são atraídos e os membros familiares mais capazes se frustram com a falta de meritocracia e processo.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> separa papéis por função, não por parentesco. O <strong>Protocolo de Desafogamento</strong> implementa governança básica — reuniões estruturadas, alçadas formais e critérios de decisão que protegem o negócio e preservam a família.</p>
    ${comparativo('Empresa Familiar sem Processo', 'Empresa Familiar Profissionalizada MShift', [
      ['Decisões misturadas com emoção familiar — conflitos de gestão viram brigas pessoais.', 'Papéis e alçadas formais separam decisão de negócio de relação familiar.'],
      ['Talentos externos não ficam — percebem que critério de promoção é sobrenome, não resultado.', 'Meritocracia estruturada atrai e retém talentos externos que profissionalizam a operação.']
    ])}
    ${faq([
      ['Como conversar com família sobre profissionalizar sem criar conflito?', 'O Mapeamento entrega dados objetivos sobre os pontos de melhoria — tornando a conversa sobre processo, não sobre pessoas. É mais fácil discutir uma planilha do que um julgamento pessoal.'],
      ['Membros familiares que não performam devem sair?', 'O Mapeamento define primeiro se o problema é competência ou processo. Frequentemente, o familiar não performa porque a função não está bem definida — não por falta de capacidade.'],
      ['Como definir remuneração de familiares de forma justa?', 'O Protocolo estrutura tabela de remuneração por cargo e responsabilidade — desvinculando salário do parentesco e criando critério defensável para todos os envolvidos.'],
      ['Consórcio familiar funciona como governança inicial?', 'O Mapeamento define o modelo de governança adequado para o tamanho atual — desde reunião semanal estruturada até acordo de sócios formal, com implementação gradual.'],
      ['Quanto custa profissionalizar minha empresa familiar com o Mapeamento?', 'R$ 97 na sessão diagnóstica — com diagnóstico dos pontos de conflito e plano de implementação de governança que protege o negócio e preserva a harmonia familiar.']
    ])}`,

  "como escalar uma empresa de prestação de serviços": (loc, suf) => `
    <p class="lead">Desmistificando <strong>como escalar uma empresa de prestação de serviços${loc}</strong>: vender mais sem estrutura é crescer em trabalho sem crescer em lucro.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Escalar serviços é diferente de escalar produto. Cada novo cliente exige entrega人工 — e sem processo, cada novo cliente exige o mesmo esforço do primeiro. A escala é bloqueada pela ausência de sistema que replique qualidade sem aumentar proporcionalmente o trabalho.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> da escala: mais clientes geram mais caos, mais retrabalho e mais dependência do fundador — até o colapso de entrega que destrói a reputação construída.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> constrói a esteira de entrega escalável. O <strong>Protocolo de Desafogamento</strong> padroniza a qualidade do serviço — permitindo escalar carteira sem escalar horas do fundador.</p>
    ${comparativo('Escala sem Processo (Caos)', 'Escala Estruturada MShift', [
      ['Dobra de clientes, dobra de problemas — mais trabalho sem mais margem.', 'Dobra de clientes com processo: mesma margem por entrega, time executa com autonomia.'],
      ['Fundador vira ponto único de falha — cliente liga para ele diretamente em toda crise.', 'SLA protege o fundador: cliente escalona por processo, não por telefone pessoal.']
    ])}
    ${faq([
      ['Qual o limite de crescimento sem processo em prestação de serviços?', 'O limite é a capacidade física do seu time atual. O Mapeamento define a capacidade real de atendimento e o processo para expandir essa capacidade sem degradar qualidade.'],
      ['Como manter qualidade ao escalar com novos colaboradores?', 'Com playbook documentado. O Mapeamento entrega o manual de entrega do seu serviço — para que novos colaboradores atinjam o padrão do fundador em semanas, não em meses.'],
      ['Preciso abrir filial ou franquia para escalar?', 'Não necessariamente. O Mapeamento explora primeiro o potencial de escala no modelo atual — aumentando capacidade de entrega e ticket médio antes de estruturas mais complexas.'],
      ['Como precificar serviços para suportar crescimento?', 'O Protocolo de Desafogamento inclui análise de precificação para escala — garantindo que a margem por cliente se mantém ou aumenta conforme o volume cresce.'],
      ['Quanto custa estruturar a escala da minha prestação de serviços?', 'R$ 97 na sessão completa do Mapeamento — diagnóstico real com mapa de crescimento para escalar com lucro e sem colapso de entrega.']
    ])}`,

  "métodos de gestão para pequenas e médias empresas": (loc, suf) => `
    <p class="lead">A busca por <strong>métodos de gestão para pequenas e médias empresas${loc}</strong> atrai donos exaustos para teorias que não foram construídas para a realidade do dia a dia de uma PME B2B.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>PMEs aplicam métodos corporativos — OKR, Balanced Scorecard, PDCA — sem adaptação para sua realidade. O resultado é burocracia que consome mais energia do que gera resultado, e o dono que abandona tudo na terceira semana.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> metodológica: a PME fica sem gestão real por ter tentado métodos inadequados e concluído que "gestão não funciona para mim". O caos continua — e a empresa fica presa no improviso indefinido.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> foi construído para PMEs — diagnóstico rápido, ação imediata, sem complexidade corporativa desnecessária. O <strong>Protocolo de Desafogamento</strong> é o método certo para quem tem 5 a 50 pessoas e precisa de resultado em semanas.</p>
    ${comparativo('Método Corporativo mal adaptado', 'Gestão PME com Mapeamento MShift', [
      ['OKR e PDCA consomem 3h semanais de reunião sem gerar clareza operacional.', 'Check semanal de 30 minutos com indicadores simples — decisões rápidas, ação imediata.'],
      ['Consultor entrega framework que o time não implementa por complexidade excessiva.', 'Protocolo construído para a realidade PME — implementação em dias, não em meses.']
    ])}
    ${faq([
      ['OKR funciona para PME de 10 pessoas?', 'Com adaptação sim, sozinho não. O Mapeamento define quais elementos do OKR fazem sentido para seu tamanho e simplifica o que gera burocracia sem resultado.'],
      ['Preciso de software de gestão para organizar minha PME?', 'Não inicialmente. O Mapeamento define o processo primeiro — depois a ferramenta que melhor o suporta. Processo simples em planilha bate processo complexo em software caro.'],
      ['Como criar cultura de gestão numa empresa que nunca teve?', 'Com ritual semanal simples e indicadores claros. O Protocolo de Desafogamento cria a rotina de gestão que o time absorve naturalmente — começando pequeno e ampliando conforme matura.'],
      ['Qual indicador financeiro toda PME deveria acompanhar?', 'Margem por projeto, CAC e ticket médio. O Mapeamento define os 3 a 5 indicadores corretos para o seu modelo — sem a proliferação de dashboards que ninguém olha.'],
      ['Quanto custa implementar gestão real na minha PME?', 'R$ 97 na sessão do Mapeamento — com diagnóstico do estado atual e plano de implementação de gestão adaptada para sua realidade, tamanho e recursos.']
    ])}`,

  "o que fazer quando a empresa cresce rápido e desorganizada": (loc, suf) => `
    <p class="lead">A crise de <strong>o que fazer quando a empresa cresce rápido e desorganizada${loc}</strong> é o campo minado onde 60% das PMEs que mais crescem acabam implodindo.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>O crescimento rápido sem estrutura é a armadilha do sucesso. Vendas crescem, novos clientes entram, time expande — mas os processos que eram "suficientes" para 10 clientes colapsam com 30. O que funcionava no improviso vira desastre em escala.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> do crescimento: qualidade cai, clientes saem, time entra em colapso de moral — e a empresa que crescia 30% ao mês começa a perder o que construiu. O sucesso vira a causa do fracasso.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> diagnostica onde a estrutura atual vai quebrar com o crescimento projetado. O <strong>Protocolo de Desafogamento</strong> constrói os processos que suportam escala — antes que o colapso aconteça.</p>
    ${comparativo('Crescimento sem Estrutura (Bomba Relógio)', 'Crescimento Estruturado MShift', [
      ['Qualidade despenca com volume — primeiros clientes insatisfeitos anunciam o colapso.', 'Processo de entrega escalado antes do crescimento: qualidade mantida independente do volume.'],
      ['Time sobrecarregado sem processo claro — turnover acelera justo na fase de maior necessidade.', 'Onboarding estruturado absorve novos colaboradores rapidamente — time escala com o negócio.']
    ])}
    ${faq([
      ['O que estruturar primeiro quando a empresa está crescendo rápido?', 'O Mapeamento prioriza — geralmente entrega e suporte primeiro, depois comercial. A sequência certa evita que o crescimento quebre o que já funciona.'],
      ['Como contratar rápido sem comprometer a cultura?', 'Com onboarding documentado e critérios de contratação claros. O Protocolo de Desafogamento inclui o checklist de integração que mantém o padrão cultural independente da velocidade de expansão.'],
      ['Devo frear as vendas enquanto estruturo o processo?', 'Não necessariamente. O Mapeamento define o ritmo sustentável de crescimento — e o Protocolo estrutura em paralelo às vendas, impedindo que a entrega colapse.'],
      ['Como manter qualidade enquanto o time ainda está aprendendo?', 'Com checklist de entrega por fase. O Mapeamento define os critérios de qualidade que qualquer membro do time verifica — tornando a consistência sistêmica, não dependente de experiência individual.'],
      ['Quanto custa estruturar o crescimento com o Mapeamento antes que colapse?', 'R$ 97 na sessão diagnóstica — que identifica os pontos de fragilidade no crescimento atual e entrega o plano de estruturação para escalar com segurança.']
    ])}`,

  "como ser referência no meu nicho de mercado": (loc, suf) => `
    <p class="lead">Almejar <strong>como ser referência no meu nicho de mercado${loc}</strong> sem consistência operacional interna é construir reputação sobre areia — cada entrega inconsistente desfaz o que o marketing construiu.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Referência de mercado não se constrói com presença digital — se constrói com consistência de entrega. Empresas que tentam ser referência sem processo criam expectativas que a operação não sustenta, acelerando a queda da reputação.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> da reputação: marketing promete o que a operação não entrega. Clientes indicados chegam com expectativa alta e saem com experiência inconsistente — destruindo a referência antes de construí-la.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> constrói a base operacional que sustenta a reputação. O <strong>Protocolo de Desafogamento</strong> padroniza a entrega para que cada cliente tenha a experiência que justifica a indicação — tornando referência uma consequência natural do processo.</p>
    ${comparativo('Referência sem Estrutura (Frágil)', 'Referência com Consistência MShift', [
      ['Marketing forte, operação fraca — decepção do cliente que chegou por indicação.', 'Entrega consistente gera indicações orgânicas — referência construída por resultado, não por marketing.'],
      ['Cases de sucesso dependem de sorte e do cliente certo — não são replicáveis.', 'Processo padronizado replica o resultado positivo em qualquer cliente do perfil ideal.']
    ])}
    ${faq([
      ['O que constroí referência de mercado mais rápido: conteúdo ou entrega consistente?', 'Entrega consistente é a base — conteúdo acelera. O Mapeamento estrutura a operação primeiro para que os cases e depoimentos gerados pelo bom resultado alimentem o conteúdo com credibilidade real.'],
      ['Como transformar clientes satisfeitos em promotores ativos da marca?', 'Com processo de coleta de feedback e pedido estruturado de indicação e depoimento. O Protocolo inclui o ritual de encerramento de projeto que ativa o cliente satisfeito como promotor.'],
      ['Como me posicionar como especialista sem perder clientes de menor ticket?', 'O Mapeamento define a estratégia de nicho — identificando o perfil de cliente onde você gera mais resultado e pode cobrar mais, sem necessariamente abandonar a base atual.'],
      ['Cases de sucesso são suficientes para construir referência?', 'Quando são consistentes e documentados, sim. O Mapeamento inclui o formato de documentação de resultado que transforma cada entrega bem feita em material de vendas e credibilidade de mercado.'],
      ['Quanto custa construir a base operacional para ser referência com o Mapeamento?', 'R$ 97 na sessão diagnóstica — que estrutura a consistência de entrega que transforma sua empresa na referência do nicho, com processo que sustenta a reputação a longo prazo.']
    ])}`
};

