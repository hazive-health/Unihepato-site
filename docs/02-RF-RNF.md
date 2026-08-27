# RF e RNF — Site Institucional Unihepato

*Baseado no documento 01-DIVISAO-SECOES.md. Site estático, sem backend, sem formulário.*

---

## Requisitos Funcionais (RF)

### Header & Navegação
- **RF01** — O site deve exibir um header fixo (sticky) com logo, nome da clínica e menu de navegação
- **RF02** — O menu deve conter âncoras para: Sobre, Especialidades, Equipe, Convênios, Localização, FAQ
- **RF03** — O header deve exibir um botão de CTA para WhatsApp, sempre visível
- **RF04** — Em telas mobile, o menu deve colapsar em um menu hambúrguer (off-canvas)
- **RF05** — Um botão flutuante de WhatsApp deve permanecer visível durante o scroll, em todas as resoluções

### Hero
- **RF06** — A seção Hero deve exibir a foto dos 4 médicos em destaque
- **RF07** — A seção Hero deve conter um título principal (H1) e subtítulo institucional
- **RF08** — A seção Hero deve conter um CTA primário para WhatsApp e um CTA secundário (ex: "Conhecer a equipe")

### Sobre a Clínica
- **RF09** — Deve exibir o texto institucional aprovado (identidade, missão, vínculo com Instituto do Fígado)
- **RF10** — Deve exibir fotos do ambiente físico (fachada, recepção)

### Especialidades
- **RF11** — Deve exibir 3 cards: Hepatologia, Gastroenterologia, Clínica Médica — cada um com título e descrição curta

### Equipe Médica
- **RF12** — Deve exibir 4 cards de médicos, cada um com: foto, nome completo, especialidade(s), CRM
- **RF13** — Os cards devem ser visualmente consistentes (mesmo tamanho, mesma estrutura)

### Convênios e Valores
- **RF14** — Deve exibir a lista completa dos 20 convênios aceitos
- **RF15** — Deve exibir o valor da consulta particular (R$ 500) e formas de pagamento aceitas (Pix, espécie)
- **RF16** — Deve exibir a regra de retorno (gratuito em até 30 dias)

### Localização
- **RF17** — Deve exibir o endereço completo por extenso
- **RF18** — Deve exibir um mapa do Google Maps incorporado (iframe), centrado no endereço da clínica
- **RF19** — Deve exibir informações práticas: instrução de chegada, estacionamento, serviço de maqueiro

### Prova Social
- **RF20** — Deve exibir a nota média de avaliação do Google (ex: "4.9 ★") com link clicável para o perfil do Google Meu Negócio da clínica
- **RF21** — Deve exibir o card institucional "1ª alta pós-transplante do Instituto do Fígado"
- **RF22** — Não deve reproduzir textualmente comentários/depoimentos de pacientes sem consentimento formal por escrito (restrição, não funcionalidade — ver RNF de conformidade)

### FAQ
- **RF23** — Deve exibir uma lista de perguntas frequentes em formato acordeão (expansível/recolhível)
- **RF24** — Mínimo de 5 perguntas, cobrindo: retorno, documentos necessários, estacionamento, maqueiro, nota fiscal

### Redes Sociais
- **RF25** — Deve exibir links para Instagram e Facebook da clínica, abrindo em nova aba

### Footer
- **RF26** — Deve exibir informações de contato (telefone fixo, WhatsApp, e-mail)
- **RF27** — Deve exibir o endereço resumido
- **RF28** — Deve exibir texto de copyright e assinatura discreta "tecnologia por Hazive Health"

### Geral
- **RF29** — Todos os links de WhatsApp devem abrir uma conversa pré-configurada com o número comercial da clínica
- **RF30** — O site deve ser uma única página (one page), com navegação via scroll e âncoras

---

## Requisitos Não-Funcionais (RNF)

### Performance
- **RNF01** — O site deve carregar em menos de 3 segundos em conexão 4G (teste real, conforme checklist de Processos.docx)
- **RNF02** — Imagens devem ser otimizadas/comprimidas para web (formato WebP quando possível, com fallback)
- **RNF03** — O site não deve ter nenhuma chamada de backend/API própria — 100% estático

### Responsividade
- **RNF04** — O site deve ser funcional e visualmente consistente em resoluções mobile (360px+), tablet e desktop (1440px+)
- **RNF05** — O site deve seguir abordagem mobile-first no desenvolvimento

### SEO
- **RNF06** — O site deve ter meta tags (title, description) otimizadas para "hepatologista Recife", "gastroenterologista Recife"
- **RNF07** — O site deve ter Open Graph tags para compartilhamento em redes sociais (imagem, título, descrição)
- **RNF08** — O site deve ter estrutura HTML semântica (header, main, section, footer) para melhor indexação
- **RNF09** — O site deve ser submetido ao Google Search Console após publicação (conforme Etapa 8.5 do processo Hazive)

### Acessibilidade
- **RNF10** — Todas as imagens devem ter atributo `alt` descritivo
- **RNF11** — O site deve ser navegável via teclado (foco visível em elementos interativos)
- **RNF12** — Contraste de cores deve atender WCAG AA mínimo (texto sobre fundo)

### Conformidade Legal
- **RNF13** — Nenhum depoimento de paciente com nome/identificação deve ser publicado sem consentimento formal por escrito
- **RNF14** — Nenhum conteúdo deve prometer resultado clínico ou cura (conformidade CFM)
- **RNF15** — Nenhum conteúdo deve usar comparação "antes/depois" de pacientes
- **RNF16** — O site deve conter texto de política de privacidade básica (conformidade LGPD mínima, mesmo sem formulário/coleta de dados)

### Manutenibilidade
- **RNF17** — O código deve ser organizado em arquivos separados (HTML, CSS, JS) — não inline
- **RNF18** — Toda atualização de conteúdo (novo médico, novo convênio) deve ser feita via edição direta de código pela Hazive, sem necessidade de painel administrativo nessa fase (decisão já tomada anteriormente)
- **RNF19** — O código deve ter comentários indicando onde cada seção começa, para facilitar manutenção futura

### Hospedagem & Infraestrutura
- **RNF20** — O site deve ser hospedado em serviço de hospedagem estática (Vercel, Netlify ou equivalente)
- **RNF21** — O site deve rodar sob domínio próprio da clínica com HTTPS configurado
- **RNF22** — O site deve ter backup automático via controle de versão (Git), independente da hospedagem

### Compatibilidade
- **RNF23** — O site deve funcionar corretamente nas versões mais recentes de Chrome, Safari e Firefox (desktop e mobile)

---

## Fora de escopo (explícito)

- ❌ Formulário de contato ou agendamento (fase futura)
- ❌ Painel administrativo de conteúdo (fase futura, junto com o painel de agendamento)
- ❌ Backend, banco de dados, API própria
- ❌ Área do paciente / login
- ❌ Depoimentos nomeados de pacientes sem consentimento coletado
- ❌ Blog ou conteúdo educativo (fase futura)

