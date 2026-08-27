# Histórias de Usuário
## Site Institucional One Page — Unihepato

*Formato: Como [persona], quero [ação], para que [benefício]. Com critérios de aceitação.*

---

## Persona principal: Dona Marta (Paciente em potencial)

Busca um hepatologista/gastroenterologista, provavelmente via Google ou indicação. Está no celular na maior parte das vezes. Quer confiança rápida e um caminho claro para agendar.

### HU01 — Encontrar a clínica e entender do que se trata
**Como** paciente buscando um hepatologista em Recife,
**quero** ver rapidamente do que a clínica trata e quem são os médicos,
**para que** eu decida se é o lugar certo para mim, sem precisar ligar primeiro.

**Critérios de aceitação:**
- Ao abrir o site, em até 5 segundos entendo: nome da clínica, especialidades (hepatologia/gastro/clínica médica), e que fica em Recife
- A seção Hero comunica isso sem que eu precise rolar a página

---

### HU02 — Agendar consulta via WhatsApp
**Como** paciente decidido a marcar uma consulta,
**quero** um caminho direto e óbvio para falar com a clínica,
**para que** eu não perca tempo procurando telefone ou formulário.

**Critérios de aceitação:**
- Existe um botão de WhatsApp visível assim que o site carrega (Hero)
- Existe um botão de WhatsApp flutuante, sempre visível, em qualquer ponto do scroll
- Ao clicar, abre o WhatsApp já com o número correto preenchido
- Funciona tanto em mobile (abre o app) quanto desktop (abre WhatsApp Web)

---

### HU03 — Conhecer os médicos antes de escolher
**Como** paciente,
**quero** ver o nome, especialidade e CRM de cada médico,
**para que** eu sinta confiança na credibilidade profissional antes de agendar.

**Critérios de aceitação:**
- Vejo os 4 médicos com foto, nome completo, especialidade e número do CRM
- As informações são visualmente organizadas e fáceis de comparar

---

### HU04 — Verificar se meu convênio é aceito
**Como** paciente com plano de saúde,
**quero** ver se meu convênio está na lista de aceitos,
**para que** eu não perca tempo agendando algo que não vou conseguir usar.

**Critérios de aceitação:**
- A lista de convênios está completa e legível (20 itens)
- Caso meu convênio não esteja lá, vejo claramente a opção particular com valor

---

### HU05 — Entender o custo caso não tenha convênio aceito
**Como** paciente sem convênio aceito pela clínica,
**quero** saber o valor da consulta particular e formas de pagamento,
**para que** eu possa decidir se cabe no meu orçamento antes de agendar.

**Critérios de aceitação:**
- O valor (R$ 500) está visível e claro
- As formas de pagamento aceitas (Pix, espécie) estão listadas
- A regra de retorno gratuito (30 dias) está explicada

---

### HU06 — Saber como chegar até a clínica
**Como** paciente que nunca foi à clínica,
**quero** ver o endereço, um mapa e instruções práticas,
**para que** eu não me perca ou tenha surpresas no dia da consulta.

**Critérios de aceitação:**
- Endereço completo em texto
- Mapa do Google incorporado, mostrando a localização exata
- Informações sobre estacionamento (pago, sem manobrista) e serviço de maqueiro visíveis

---

### HU07 — Tirar dúvidas comuns sem precisar ligar
**Como** paciente com dúvidas operacionais (documentos, nota fiscal, retorno),
**quero** uma seção de perguntas frequentes,
**para que** eu resolva minhas dúvidas sozinho, sem depender da recepção.

**Critérios de aceitação:**
- Existe uma seção FAQ com no mínimo 5 perguntas reais (baseadas no que a recepção mais recebe)
- Cada pergunta expande/recolhe a resposta ao clicar
- As perguntas cobrem: retorno, documentos, estacionamento, maqueiro, nota fiscal

---

### HU08 — Confirmar que a clínica é confiável através de avaliações reais
**Como** paciente em dúvida sobre qual clínica escolher,
**quero** ver evidências de que outros pacientes tiveram boas experiências,
**para que** eu me sinta mais seguro em agendar.

**Critérios de aceitação:**
- Vejo a nota média do Google (ex.: "4.9 ★")
- Posso clicar e ser levado ao perfil real do Google Meu Negócio para ler avaliações completas
- Vejo o marco institucional "1ª alta pós-transplante do Instituto do Fígado"

---

### HU09 — Usar o site no celular sem dificuldade
**Como** paciente acessando pelo celular (maioria dos casos),
**quero** que o site seja fácil de navegar e ler no mobile,
**para que** eu não desista por causa de uma má experiência técnica.

**Critérios de aceitação:**
- Todos os textos são legíveis sem dar zoom
- Todos os botões são fáceis de tocar (não muito pequenos/próximos)
- O menu mobile funciona corretamente (abre/fecha)
- O site carrega rápido mesmo em 4G

---

### HU10 — Seguir a clínica nas redes sociais
**Como** paciente interessado em conteúdo/novidades da clínica,
**quero** encontrar facilmente o Instagram e Facebook,
**para que** eu possa acompanhar a clínica antes ou depois da consulta.

**Critérios de aceitação:**
- Links para Instagram e Facebook visíveis (footer e/ou seção dedicada)
- Links abrem em nova aba, sem sair do site atual

---

## Persona secundária: Dr. Tibério (Gestor/sócio da clínica)

Não usa o site no dia a dia, mas é quem aprova o conteúdo e se importa com a imagem profissional transmitida.

### HU11 — Aprovar que o site representa a clínica com credibilidade
**Como** gestor da clínica,
**quero** que o site transmita profissionalismo e seriedade médica,
**para que** ele gere confiança e não passe imagem amadora.

**Critérios de aceitação:**
- Identidade visual consistente com a marca já usada nas redes sociais (cores, logo)
- Nenhuma promessa de cura ou resultado clínico é feita em nenhum texto
- Nenhum depoimento de paciente é publicado sem consentimento formal

---

### HU12 — Não depender de terceiros para pequenas atualizações no futuro
**Como** gestor da clínica,
**quero** entender que qualquer alteração de conteúdo depende da Hazive nessa fase,
**para que** eu saiba o que esperar em termos de autonomia e prazo de mudanças.

**Critérios de aceitação:**
- Documentado explicitamente (RNF18) que atualizações são feitas pela Hazive via edição de código
- Não há expectativa de painel administrativo nessa fase

---

## Persona: Eduardo (Desenvolvedor/Hazive)

Quem constrói e mantém o site.

### HU13 — Manter o site facilmente após o lançamento
**Como** desenvolvedor responsável pela manutenção,
**quero** um código organizado e documentado,
**para que** eu consiga adicionar um médico novo ou trocar uma foto rapidamente, sem precisar reler tudo do zero.

**Critérios de aceitação:**
- Estrutura de pastas segue o documento de Arquitetura
- Código tem comentários indicando cada seção
- Existe um arquivo único de conteúdo aprovado como referência

---

### HU14 — Publicar o site com confiança de que está tecnicamente saudável
**Como** desenvolvedor,
**quero** seguir o checklist de pós-publicação,
**para que** o site esteja indexado, monitorado e performático desde o primeiro dia.

**Critérios de aceitação:**
- Checklist da Etapa 8.5 (Processos.docx) executado e confirmado
- Site aparece no Google ao buscar "Unihepato"
- PageSpeed Insights sem alertas críticos

