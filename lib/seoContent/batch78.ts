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

export const batch7_8: Record<string, (locationText: string, locationSuffix: string) => string> = {
  "faturamento instável como resolver": (loc, suf) => `
    <p class="lead">Resolver o <strong>faturamento instável como resolver${loc}</strong> é a cura da principal dor B2B.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Faturamento oscilante comprova a <strong>Síndrome do Gargalo Invisível</strong>: meses de venda intensa seguidos de meses de entrega caótica, com o dono preso no operacional sem tempo para prospectar novos clientes.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>Caixa imprevisível impossibilita investimentos, contratações e crescimento. O stress financeiro coloca o fundador em modo de sobrevivência permanente, afastando decisões estratégicas que gerariam lucro real.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> diagnostica os 3 pontos de sangramento do ciclo de vendas e entrega. O <strong>Protocolo de Desafogamento</strong> cria esteiras recorrentes que estabilizam o caixa mês a mês.</p>
    ${comparativo('Dono no modo sobrevivência', 'Gestor com Mapeamento MShift', [
      ['Alterna entre meses de vendas e meses de apagão financeiro sem previsibilidade.', 'Possui funil de vendas ativo mesmo durante entregas — caixa estável todo mês.'],
      ['Corta custos no mês ruim e endivida no mês bom, sem nunca sair do ciclo.', 'Margem protegida por processo permite reinvestimento contínuo e crescimento sustentável.']
    ])}
    ${faq([
      ['Por que meu faturamento oscila mesmo quando trabalho muito?', 'Porque vender e entregar simultaneamente é impossível sem processos delegados. A Síndrome do Gargalo Invisível prende o dono no operacional, zerando a prospecção nos meses de entrega.'],
      ['O Mapeamento cria vendas recorrentes?', 'Sim. Estruturamos funis de venda contínua paralelos à entrega — para que o pipeline nunca seque, independente do volume de projetos em andamento.'],
      ['Quanto tempo leva para estabilizar o faturamento?', 'Com o Protocolo de Desafogamento implementado, a maioria das empresas sente estabilização já no segundo mês — com previsibilidade real a partir do terceiro.'],
      ['Preciso contratar mais pessoas para ter faturamento estável?', 'Não necessariamente. O Mapeamento frequentemente revela que a instabilidade vem de processo, não de capacidade. Estrutura antes de contratar.'],
      ['Quanto custa o Mapeamento Estratégico?', 'R$ 97 na sessão de entrada — diagnóstico completo com mapa de rota para estabilizar seu faturamento B2B de forma definitiva.']
    ])}`,

  "minha empresa fatura bem mas não dá lucro": (loc, suf) => `
    <p class="lead">Entender que <strong>minha empresa fatura bem mas não dá lucro${loc}</strong> é o diagnóstico mais doloroso do B2B.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Faturamento alto com lucro baixo expõe que a empresa cresceu sem controle de margem. Retrabalho, precificação errada, despesas variáveis ocultas e escopo aberto corroem silenciosamente cada real que entra.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> financeira: o dono trabalha cada vez mais para faturar o suficiente que apenas cobre custos. O crescimento vira armadilha — mais clientes, mais despesa, mesma sobra miserável no final do mês.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> disséca a DRE real da empresa, expondo onde a margem vaza. O <strong>Protocolo de Desafogamento</strong> elimina os ralos invisíveis — retrabalho, desconto informal, escopo não faturado.</p>
    ${comparativo('Alto faturamento, baixo lucro', 'Mapeamento MShift: Margem Protegida', [
      ['Fatura 100k e sobra 8k — sem entender por onde o dinheiro sai.', 'Fatura 80k e sobra 25k — com visibilidade total de custo por entrega e margem real.'],
      ['Dá descontos informalmente para fechar vendas, corroendo a precificação.', 'Tabela de preços estruturada com custo mapeado elimina negociação de margem na base.']
    ])}
    ${faq([
      ['Como descobrir onde minha margem está vazando?', 'O Mapeamento cruza faturamento com custo real por projeto — identificando retrabalho não faturado, horas gastas não cobradas e despesas variáveis ocultas.'],
      ['Devo aumentar preços ou cortar custos?','Depende do diagnóstico. Frequentemente é os dois — mas na sequência certa. O Mapeamento define qual puxar primeiro para não perder clientes nem margem.'],
      ['O Protocolo ajuda na precificação correta?', 'Sim. Entregamos modelo de precificação baseada em custo real mais margem alvo — eliminando o achismo que destrói o lucro em prestação de serviços.'],
      ['Meu contador não está vendo esses problemas. Por quê?', 'Contador olha o passado. O Mapeamento olha o processo — identificando onde a operação diária sangra margem antes de aparecer no balanço.'],
      ['Quanto custa o diagnóstico financeiro do Mapeamento?', 'R$ 97 para a sessão completa — que revela exatamente onde seu lucro está sendo sabotado e entrega um plano prático para recuperá-lo.']
    ])}`,

  "como ter previsibilidade financeira na empresa": (loc, suf) => `
    <p class="lead">O abismo de não saber <strong>como ter previsibilidade financeira na empresa${loc}</strong> quebra PMEs B2B no primeiro vento desfavorável.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Previsibilidade não existe quando vendas, entregas e cobranças dependem do humor e da disponibilidade do fundador. Sem processo, cada mês é uma roleta — o caixa só fecha quando o dono corre atrás de tudo simultaneamente.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> financeira paralisa investimentos e crescimento. Sem previsibilidade, é impossível contratar, expandir ou planejar — a empresa fica presa em modo reativo permanente.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> estrutura funil, cobrança e entrega em processos independentes do dono. O <strong>Protocolo de Desafogamento</strong> cria a máquina de receita previsível que a Bona Studio usou para ir de 270k a 2 milhões.</p>
    ${comparativo('Caixa Imprevisível', 'Previsibilidade MShift', [
      ['Não sabe o faturamento do próximo mês — decisões de custo feitas no improviso.', 'Pipeline mapeado com taxa de conversão histórica permite projetar receita com 80% de precisão.'],
      ['Cobranças manuais atrasadas comprometem o fluxo de caixa constantemente.', 'Régua de cobrança automatizada garante recebimento pontual sem depender do dono lembrar.']
    ])}
    ${faq([
      ['Como ter previsibilidade de faturamento sem depender de novos clientes?', 'Estruturando recorrência com clientes atuais e mapeando o ciclo de renovação. O Mapeamento identifica quais clientes têm potencial de upsell e como abordar.'],
      ['Fluxo de caixa é diferente de faturamento. O Mapeamento trata os dois?', 'Sim. O diagnóstico separa faturamento de recebimento — e o Protocolo cria régua de cobrança que alinha os dois para evitar aperto de caixa mesmo com vendas boas.'],
      ['Quantos meses de reserva financeira uma PME B2B precisa?', 'O Mapeamento define a reserva ideal para seu ciclo específico — geralmente 2 a 3 meses de custo fixo — e o caminho para construí-la sem impactar o caixa imediato.'],
      ['Consigo planejar contratações com mais segurança depois do Mapeamento?', 'Sim. Com projeção de receita e margem mapeadas, a decisão de contratar deixa de ser emocional e passa a ser matemática — com data e perfil definidos.'],
      ['Quanto custa a sessão de Mapeamento para organizar meu financeiro?', 'R$ 97 pelo diagnóstico completo — com mapa de rota prático para construir previsibilidade financeira real em sua PME B2B.']
    ])}`,

  "como aumentar a margem de lucro da prestação de serviços": (loc, suf) => `
    <p class="lead">A resposta definitiva para <strong>como aumentar a margem de lucro da prestação de serviços${loc}</strong> não é aumentar preço aleatoriamente — é estancar os furos internos que drenam cada projeto.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Em prestação de serviços, margem é assassinada por retrabalho não cobrado, escopo que cresce sem aditivo e horas do dono embutidas no custo que nunca são faturadas. O projeto fecha, o cliente fica feliz — mas o caixa sangra.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> da margem: você trabalha mais para compensar o que perde em ineficiência. A empresa só cresce em volume de trabalho — nunca em lucratividade real por hora entregue.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> mapeia o custo real por entrega e identifica os ralos de margem. O <strong>Protocolo de Desafogamento</strong> implementa SLA de escopo, aprovação de aditivo e precificação baseada em custo real.</p>
    ${comparativo('Prestador com Margem Corroída', 'Prestador com Mapeamento MShift', [
      ['Absorve retrabalho silenciosamente para não "criar atrito" com cliente.', 'SLA contratual define critério de aceite — retrabalho por erro do cliente vira aditivo faturado.'],
      ['Precifica por feeling ou olhando concorrente — sem saber o custo real.', 'Precificação baseada em custo mapeado mais margem alvo — defendida com dados na negociação.']
    ])}
    ${faq([
      ['Como identificar quais projetos têm margem negativa sem saber?', 'O Mapeamento cruza horas gastas com valor cobrado por projeto — revelando os clientes que pagam pouco e consomem mais, invertendo a lógica de valor da carteira.'],
      ['Posso aumentar preço sem perder clientes?', 'Sim, quando a entrega é estruturada e previsível. O Mapeamento melhora a percepção de valor junto com a precificação — clientes pagam mais quando a entrega é confiável.'],
      ['Como cobrar aditivos sem prejudicar o relacionamento com clientes?', 'Com cláusula contratual definida no início. O Protocolo de Desafogamento inclui template de proposta com critério de aceite e tabela de aditivo — tirando o awkward da conversa.'],
      ['Retrabalho sempre vai existir em serviços. Como minimizá-lo?', 'Com briefing estruturado e aprovação formal por fase. O Mapeamento define o checklist de alinhamento que elimina o retrabalho por mal-entendido — o mais destrutivo de todos.'],
      ['Quanto custa mapear a margem da minha prestação de serviços?', 'R$ 97 na sessão do Mapeamento — que entrega análise de margem real da sua operação e o caminho para aumentá-la sem precisar faturar mais.']
    ])}`,

  "faturamento montanha russa o que fazer": (loc, suf) => `
    <p class="lead">O castigo do <strong>faturamento montanha russa o que fazer${loc}</strong> escraviza PMEs em ciclos onde o dono vende um mês e apaga fogo no próximo.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>O ciclo nasce da ausência de funil ativo. O dono vende intensamente até encher a capacidade, para de prospectar para entregar, termina os projetos — e acorda sem pipeline. O pico e o vale se repetem indefinidamente.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> do ciclo: planejamento é impossível, equipe contratada no pico fica ociosa no vale, e o estress de "mês ruim" domina a cultura da empresa, paralisando decisões de crescimento.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> destrava o funil paralelo à entrega. O <strong>Protocolo de Desafogamento</strong> delega a operação para que o dono mantenha prospecção ativa em qualquer fase do ciclo.</p>
    ${comparativo('Montanha Russa de Caixa', 'Estabilidade MShift', [
      ['Para de prospectar quando entra em modo de entrega — cria o vale inevitável.', 'Funil de prospecção delegado roda continuamente independente do volume de entregas.'],
      ['Cada mês é uma incógnita — impossível planejar equipe, custos ou crescimento.', 'Previsibilidade de 80% já no segundo mês com pipeline estruturado e taxa de conversão rastreada.']
    ])}
    ${faq([
      ['Como prospectar novos clientes enquanto estou no pico de entregas?', 'Delegando a operação com o Protocolo de Desafogamento — liberando o dono para manter pelo menos 2h diárias de prospecção estratégica, mesmo na fase mais intensa de entrega.'],
      ['Receita recorrente resolve o problema da montanha russa?', 'Parcialmente. O Mapeamento estrutura o modelo de recorrência adequado para seu negócio — e o processo para vender e entregar recorrência sem sobrecarregar o time.'],
      ['Como manter equipe motivada nos meses de vale do faturamento?', 'Com previsibilidade construída pelo Mapeamento, os vales diminuem progressivamente. Equipe estável em estrutura organizada retém talentos que fogem do caos.'],
      ['O Mapeamento ajuda a montar um funil de vendas B2B?', 'Sim. Mapeamos as fontes de cliente mais previsíveis para o seu perfil e estruturamos o processo de prospecção que pode ser parcialmente delegado — quebrando a dependência do dono na venda.'],
      ['Quanto custa parar com a montanha russa de faturamento?', 'R$ 97 na sessão diagnóstica — entregando plano prático para estabilizar o ciclo e construir previsibilidade real no seu B2B.']
    ])}`,

  "como dobrar o faturamento sem trabalhar mais": (loc, suf) => `
    <p class="lead">O segredo de <strong>como dobrar o faturamento sem trabalhar mais${loc}</strong> é arrancar o dono do chão de fábrica e colocar sistema no lugar das suas horas.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>O faturamento tem teto quando é limitado pela energia física do fundador. Cada real adicional exige mais horas — um modelo que colapsa biologicamente. A empresa cresce até o limite do corpo do dono, não além.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> do crescimento: para dobrar, o dono precisaria trabalhar 24h. Sem sistema, escala é fisicamente impossível — e a empresa fica presa num teto invisível por anos.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> identifica o que só o dono faz e por que — depois transfere por processo. O <strong>Protocolo de Desafogamento</strong> cria a alavanca: faturamento cresce enquanto as horas do fundador diminuem.</p>
    ${comparativo('Teto do Fundador', 'Alavanca MShift', [
      ['Cada novo cliente significa mais trabalho pessoal — impossível escalar sem adoecer.', 'Novos clientes entram no processo delegado — o dono supervisiona, não executa.'],
      ['Recusa projetos maiores por medo de não conseguir entregar — deixa dinheiro na mesa.', 'Estrutura operacional permite assumir projetos maiores com confiança e margem protegida.']
    ])}
    ${faq([
      ['O que preciso delegar primeiro para dobrar o faturamento?', 'O Mapeamento identifica as 3 atividades que o dono faz que poderiam ser delegadas imediatamente com processo definido — geralmente suporte, relatórios e gestão de tarefas recorrentes.'],
      ['Preciso contratar antes de delegar?', 'Não sempre. O Mapeamento frequentemente revela que a equipe atual pode absorver mais com processo claro — sem custo adicional de contratação.'],
      ['Como dobrar faturamento sem perder qualidade?', 'Qualidade cai quando depende do talento individual. Com processo padronizado, qualidade é sistêmica — e escala sem depender de quem executa.'],
      ['Quanto tempo leva para dobrar após o Mapeamento?', 'Depende do estágio da empresa. O Mapeamento define a sequência realista — a maioria das PMEs B2B atinge 70% a 100% de crescimento em 6 a 12 meses com a estrutura implementada.'],
      ['Quanto custa começar essa transformação com o Mapeamento?', 'R$ 97 pela sessão diagnóstica completa — que entrega o mapa exato de como dobrar seu faturamento sem adicionar horas ao seu dia.']
    ])}`,

  "como cobrar mais caro pelos meus serviços B2B": (loc, suf) => `
    <p class="lead">Saber <strong>como cobrar mais caro pelos meus serviços B2B${loc}</strong> é reflexo direto de entregar com consistência, processo e percepção de valor — não de simplesmente anunciar um preço maior.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Cobrar barato é sintoma da insegurança gerada pela entrega inconsistente. Quando o processo é informal e o resultado depende do humor do time, o dono não confia no preço alto — e o cliente também não paga.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> do valor: a empresa fica presa em clientes baratos que exigem muito e pagam pouco. Subir preço sem estrutura resulta em perda de clientes — mantendo o ciclo de margem baixa e trabalho excessivo.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> estrutura a entrega para que o preço alto seja justificável. O <strong>Protocolo de Desafogamento</strong> cria previsibilidade de resultado — o ativo que clientes premium pagam para ter.</p>
    ${comparativo('Serviço Barato sem Estrutura', 'Serviço Premium com Mapeamento MShift', [
      ['Negocia preço na base do concorrente — sem saber o próprio custo real de entrega.', 'Precifica com base em custo mapeado e margem alvo — defende o preço com dados concretos.'],
      ['Cliente questiona cada centavo porque a entrega é imprevisível e informal.', 'Cliente paga premium pela confiabilidade do processo — prazo cumprido, escopo respeitado, qualidade consistente.']
    ])}
    ${faq([
      ['Como aumentar preços sem perder clientes atuais?', 'Com transição gradual para novos contratos e comunicação do valor agregado pelo processo estruturado. O Mapeamento define a estratégia de reposicionamento por segmento de cliente.'],
      ['Clientes B2B pagam mais por processo ou por resultado?', 'Por previsibilidade de resultado. O Mapeamento estrutura exatamente isso — entrega confiável que justifica e sustenta o preço premium no mercado B2B.'],
      ['Como identificar quais clientes aceitariam pagar mais?', 'O Mapeamento analisa a carteira atual e identifica os perfis com maior potencial de ticket — e o approach correto para reposicionar o valor sem perder o relacionamento.'],
      ['Devo criar pacotes ou cobrar por hora?', 'Para B2B, pacote fechado é superior. O Mapeamento define a estrutura de pacotes baseada no valor entregue — eliminando a polarização da cobrança por hora que sempre favorece o cliente.'],
      ['Quanto custa estruturar meu serviço para cobrar mais?', 'R$ 97 na sessão do Mapeamento — diagnóstico completo com estratégia de reposicionamento de preço e estrutura de entrega que justifica ticket premium no B2B.']
    ])}`,

  "como separar o financeiro pessoal da empresa": (loc, suf) => `
    <p class="lead">Erradicar a confusão de <strong>como separar o financeiro pessoal da empresa${loc}</strong> é a base de qualquer empresa B2B que queira crescer com clareza e sobreviver a crises.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>A mistura nasce na fase de startup quando o dono usa o caixa da empresa como conta pessoal por necessidade. Mas o hábito persiste — e a empresa nunca consegue acumular capital real porque as retiradas são emocionais, não estruturadas.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> contábil: sem separação, é impossível saber o custo real da empresa, a margem verdadeira ou se o negócio é lucrativo. O dono vive da ilusão do faturamento — sem ver o buraco do lucro.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> diagnostica a estrutura financeira real e define o pró-labore correto. O <strong>Protocolo de Desafogamento</strong> implementa a separação com regime de retirada que protege o caixa.</p>
    ${comparativo('Financeiro Misturado', 'Separação Estruturada MShift', [
      ['Retira do caixa conforme necessidade pessoal — empresa nunca acumula reserva.', 'Pró-labore fixo definido por capacidade de caixa — empresa acumula reserva e investe no crescimento.'],
      ['Não sabe se o mês foi lucrativo porque despesas pessoais distorcem os números.', 'DRE real com custos separados revela margem verdadeira — decisões baseadas em dados, não em feeling.']
    ])}
    ${faq([
      ['Quanto devo retirar da empresa como pró-labore?', 'O Mapeamento define o pró-labore sustentável baseado na margem real da empresa — um valor que você pode retirar todos os meses sem comprometer o caixa operacional.'],
      ['Como separar o financeiro sem prejudicar minha renda pessoal?', 'Com planejamento gradual. O Protocolo define a transição em fases — sem impacto abrupto na renda pessoal, mas com clareza financeira crescente para o negócio.'],
      ['Contador já faz isso. Por que preciso do Mapeamento?', 'Contador registra o passado. O Mapeamento estrutura o processo diário de separação — para que a confusão pare de acontecer, não apenas de ser registrada.'],
      ['Empresa individual também precisa separar financeiro?', 'Especialmente ela. MEI e empresas solo têm mais propensão à mistura — e mais a perder, porque sem dados limpos é impossível crescer ou atrair sócios e investidores.'],
      ['Quanto custa estruturar o financeiro da minha empresa?', 'R$ 97 na sessão do Mapeamento — diagnóstico completo com plano de separação financeira e estrutura de pró-labore adequada para sua realidade B2B.']
    ])}`,

  "por que minha empresa não cresce": (loc, suf) => `
    <p class="lead">Atacar diretamente <strong>por que minha empresa não cresce${loc}</strong> é perceber que você parou de focar nas alavancas lucrativas e se prendeu nas urgências operacionais do dia a dia.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>A empresa para de crescer quando o dono não tem tempo de crescer ela. O paradoxo: quanto mais trabalha, menos cresce — porque as horas são consumidas pelo operacional que deveria estar delegado.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> do crescimento trava o potencial de escala. A empresa fica anos no mesmo patamar de faturamento porque o sistema que gera crescimento — vendas estratégicas, inovação, parcerias — nunca tem a atenção do dono.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> localiza exatamente onde o potencial de crescimento está sendo bloqueado. O <strong>Protocolo de Desafogamento</strong> libera o dono do operacional para focar nas alavancas que dobram o faturamento.</p>
    ${comparativo('Empresa que Não Sai do Lugar', 'Crescimento Estruturado MShift', [
      ['Dono trabalha no negócio — nunca no negócio. Operacional consome 100% do tempo estratégico.', 'Operacional delegado libera 30% do tempo do dono para estratégia, vendas e crescimento real.'],
      ['Faturamento oscila entre 30k e 50k há anos — sem entender por quê o teto existe.', 'Teto identificado e quebrado com processo: primeiro 80k estável, depois 150k com estrutura.']
    ])}
    ${faq([
      ['O que exatamente está me impedindo de crescer?', 'O Mapeamento revela os 3 gargalos específicos da sua empresa — geralmente centralização de decisão, ausência de processo comercial ativo e margem corroída por ineficiência.'],
      ['Preciso de mais clientes ou de melhores processos para crescer?', 'O Mapeamento responde exatamente isso para a sua realidade. Frequentemente, a empresa já tem capacidade de crescer em receita com os clientes atuais — apenas sem o processo que extrai esse potencial.'],
      ['Por que contratar mais vendedores não resolveu meu crescimento?', 'Porque venda sem processo de entrega estruturado cria crescimento com colapso. O Mapeamento estrutura primeiro a capacidade de entrega — depois o crescimento de vendas é sustentável.'],
      ['Quanto tempo leva para a empresa voltar a crescer?', 'Com o Protocolo implementado, os primeiros sinais de desbloqueio aparecem em 30 dias. Crescimento consistente começa a ser visto entre 60 e 120 dias após a estruturação.'],
      ['Quanto custa diagnosticar por que minha empresa não cresce?', 'R$ 97 na sessão do Mapeamento — raio X completo do seu negócio com plano prático para desbloquear o crescimento que está represado.']
    ])}`,

  "o que fazer quando concorrentes menores crescem mais rápido": (loc, suf) => `
    <p class="lead">Sentir que <strong>o que fazer quando concorrentes menores crescem mais rápido${loc}</strong> indica que o mercado evoluiu para um modelo ágil enquanto sua empresa ficou presa em complexidade operacional.${suf}</p>
    <h2>Entendendo a Raiz do Problema</h2>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">1. O Surgimento do Caos</h3>
    <p>Concorrentes menores crescem mais rápido porque têm menos gordura operacional e mais clareza de processo. Sua empresa, maior e mais estabelecida, carrega o peso da complexidade acumulada — burocracia interna, aprovações em cascata e operação centralizada no dono.</p>
    <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800">2. Consequências de Ignorar</h3>
    <p>A <strong>Síndrome do Gargalo Invisível</strong> da competitividade: sua empresa perde agilidade, mercado e talentos para quem tem processo claro e decisões descentralizadas. O tamanho vira desvantagem — não vantagem.</p>
    <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 text-secondary">3. A Solução: Mapeamento Estratégico</h3>
    <p>O <strong>Mapeamento Estratégico de Crescimento</strong> identifica onde a burocracia mata a agilidade. O <strong>Protocolo de Desafogamento</strong> reconfigura os fluxos para que sua empresa aja com a velocidade de quem cresce — mantendo a solidez de quem já chegou.</p>
    ${comparativo('Grande e Lento', 'Ágil e Estruturado com MShift', [
      ['Aprovações lentas perdem janelas de oportunidade de mercado que concorrentes aproveitam.', 'Alçadas delegadas com processo claro: equipe decide na própria camada sem depender do topo.'],
      ['Time desmotivado por excesso de burocracia — os melhores migram para empresas mais ágeis.', 'Cultura de autonomia com responsabilidade retém talentos e atrai os melhores do mercado.']
    ])}
    ${faq([
      ['Como uma empresa menor pode ser mais eficiente do que a minha?', 'Menos camadas, menos aprovações e mais clareza de processo. O Mapeamento identifica as burocracias que freiam sua agilidade e as elimina sem perder controle.'],
      ['Devo copiar o modelo dos concorrentes que crescem?', 'Não cegamente. O Mapeamento analisa o que funciona no mercado e adapta para sua realidade — aproveitando o aprendizado de quem cresce sem abrir mão das suas vantagens competitivas.'],
      ['Como recuperar agilidade sem perder o controle operacional?', 'Com alçadas bem definidas. O Protocolo de Desafogamento permite que a equipe decida dentro de limites claros — eliminando a lentidão das aprovações sem criar risco de desvio.'],
      ['Minha empresa tem vantagem de relacionamento. Como usar isso para crescer mais rápido?', 'O Mapeamento estrutura o processo de vendas baseado em relacionamento — transformando sua vantagem informal em sistema replicável que a equipe executa sem depender do dono.'],
      ['Quanto custa acelerar minha empresa com o Mapeamento?', 'R$ 97 na sessão diagnóstica — que entrega o plano de desburocratização e agilidade para sua empresa crescer tão rápido quanto os menores, com a solidez dos maiores.']
    ])}`
};

