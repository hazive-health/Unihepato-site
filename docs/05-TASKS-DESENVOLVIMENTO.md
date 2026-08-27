# Tasks de Desenvolvimento
## Site Institucional One Page — Unihepato

*Convenção: T[nº task]H[nº história]. Cada task implementa parte de uma História de Usuário (documento 04-HISTORIAS-USUARIO.md). Organização em sprints fica a cargo do Trello.*

---

## HU01 — Encontrar a clínica e entender do que se trata

- **T1H1** — Criar estrutura base do `index.html` (boilerplate HTML5, meta tags, link para CSS/JS)
- **T2H1** — Construir seção Hero: HTML (título, subtítulo, imagem dos 4 médicos)
- **T3H1** — Estilizar seção Hero (CSS): layout, tipografia, paleta de cores
- **T4H1** — Adicionar texto institucional curto de abertura (especialidades + Recife) no Hero

---

## HU02 — Agendar consulta via WhatsApp

- **T5H2** — Criar componente de botão WhatsApp reutilizável (HTML + CSS)
- **T6H2** — Implementar botão WhatsApp no Hero, com link `wa.me` e número correto
- **T7H2** — Implementar botão WhatsApp flutuante fixo (JS/CSS position fixed, visível em todo scroll)
- **T8H2** — Testar abertura do link em mobile (app nativo) e desktop (WhatsApp Web)

---

## HU03 — Conhecer os médicos antes de escolher

- **T9H3** — Construir HTML da seção "Equipe Médica" com 4 cards
- **T10H3** — Estilizar cards de médico (CSS): foto, nome, especialidade, CRM
- **T11H3** — Inserir fotos otimizadas dos 4 médicos (compressão + nomenclatura correta)
- **T12H3** — Revisar e validar dados de cada médico (nome, especialidade, CRM) contra `conteudo-aprovado.md`

---

## HU04 — Verificar se meu convênio é aceito

- **T13H4** — Construir HTML da seção "Convênios" com lista completa (20 itens)
- **T14H4** — Estilizar lista de convênios (chips/badges, CSS)
- **T15H4** — Revisar lista de convênios contra fonte aprovada (evitar erro de digitação)

---

## HU05 — Entender o custo caso não tenha convênio aceito

- **T16H5** — Construir HTML da seção "Valores" (consulta particular)
- **T17H5** — Estilizar card de valor (CSS): preço em destaque, formas de pagamento
- **T18H5** — Adicionar texto de regra de retorno (30 dias) na mesma seção

---

## HU06 — Saber como chegar até a clínica

- **T19H6** — Construir HTML da seção "Localização" (endereço, texto prático)
- **T20H6** — Gerar embed do Google Maps (iframe) com endereço correto da clínica
- **T21H6** — Estilizar seção de localização (layout endereço + mapa, responsivo)
- **T22H6** — Adicionar informações de estacionamento e maqueiro (texto + ícones)

---

## HU07 — Tirar dúvidas comuns sem precisar ligar

- **T23H7** — Construir HTML da seção FAQ (estrutura de perguntas/respostas)
- **T24H7** — Implementar JS do acordeão (expandir/recolher ao clique)
- **T25H7** — Estilizar FAQ (CSS): ícone de +/-, transição suave de abertura
- **T26H7** — Redigir e validar as perguntas finais (mínimo 5, baseadas na Seção G/H do documento de coleta)

---

## HU08 — Confirmar que a clínica é confiável através de avaliações reais

- **T27H8** — Construir HTML da seção "Prova Social" (nota Google + card institucional)
- **T28H8** — Buscar e inserir nota média atual do Google Meu Negócio da Unihepato
- **T29H8** — Criar selo/botão linkando ao perfil real do Google Meu Negócio
- **T30H8** — Inserir card "1ª alta pós-transplante do Instituto do Fígado" com imagem

---

## HU09 — Usar o site no celular sem dificuldade

- **T31H9** — Revisar breakpoints CSS mobile-first em todas as seções já construídas
- **T32H9** — Implementar menu mobile (hambúrguer + painel off-canvas, HTML/CSS/JS)
- **T33H9** — Testar área de toque de todos os botões/links em mobile (mínimo 44x44px)
- **T34H9** — Testar performance real em conexão 4G (throttling no DevTools + teste físico)
- **T35H9** — Otimizar/comprimir todas as imagens do site (checar peso final de página)

---

## HU10 — Seguir a clínica nas redes sociais

- **T36H10** — Construir HTML da seção/bloco de redes sociais (ícones Instagram/Facebook)
- **T37H10** — Estilizar ícones sociais (CSS, hover states)
- **T38H10** — Validar links corretos e abertura em nova aba (`target="_blank" rel="noopener"`)

---

## HU11 — Aprovar que o site representa a clínica com credibilidade

- **T39H11** — Revisão geral de identidade visual (paleta, tipografia) comparando com material de marca já existente (Instagram)
- **T40H11** — Revisão de todo o texto do site: nenhuma promessa de cura/resultado clínico (checklist CFM)
- **T41H11** — Confirmar com Eduardo/Caio que nenhum depoimento nomeado foi incluído sem consentimento

---

## HU12 — Não depender de terceiros para pequenas atualizações no futuro

- **T42H12** — Redigir seção no `README.md` explicando processo de atualização de conteúdo (quem aciona, como)

---

## HU13 — Manter o site facilmente após o lançamento

- **T43H13** — Criar `conteudo-aprovado.md` com todos os textos finais em um único arquivo de referência
- **T44H13** — Adicionar comentários de seção em todo o `index.html` (`<!-- ===== SEÇÃO ===== -->`)
- **T45H13** — Organizar estrutura final de pastas conforme documento de Arquitetura
- **T46H13** — Escrever `README.md` com instruções básicas de manutenção (trocar foto, adicionar médico, editar convênio)

---

## HU14 — Publicar o site com confiança de que está tecnicamente saudável

- **T47H14** — Criar repositório Git e configurar `.gitignore`
- **T48H14** — Conectar repositório à Vercel e realizar primeiro deploy
- **T49H14** — Configurar domínio próprio da Unihepato na Vercel (DNS)
- **T50H14** — Validar HTTPS ativo
- **T51H14** — Rodar Google PageSpeed Insights e corrigir alertas críticos
- **T52H14** — Cadastrar site no Google Search Console
- **T53H14** — Confirmar indexação (buscar "Unihepato" no Google após alguns dias)
- **T54H14** — Confirmar/atualizar perfil do Google Meu Negócio com link do novo site
- **T55H14** — Revisar palavras-chave no conteúdo ("hepatologista Recife", "gastroenterologista Recife")
- **T56H14** — Configurar monitor de uptime (ferramenta a definir — pendência já registrada em Processos.docx)

---

## Resumo quantitativo

| História | Nº de Tasks |
|---|---|
| HU01 | 4 |
| HU02 | 4 |
| HU03 | 4 |
| HU04 | 3 |
| HU05 | 3 |
| HU06 | 4 |
| HU07 | 4 |
| HU08 | 4 |
| HU09 | 5 |
| HU10 | 3 |
| HU11 | 3 |
| HU12 | 1 |
| HU13 | 4 |
| HU14 | 10 |
| **Total** | **56 tasks** |

---

## Sugestão de agrupamento em sprints (opcional — você organiza no Trello)

Só como referência inicial, sem obrigação de seguir à risca:

- **Sprint 1 — Fundação**: T1H1 a T12H3 (estrutura base + Hero + Equipe)
- **Sprint 2 — Conteúdo institucional**: T13H4 a T30H8 (Convênios, Valores, Localização, FAQ, Prova Social)
- **Sprint 3 — Polimento e Mobile**: T31H9 a T41H11 (responsividade, redes sociais, revisão de credibilidade)
- **Sprint 4 — Documentação e Deploy**: T42H12 a T56H14 (manutenibilidade, publicação, SEO)

