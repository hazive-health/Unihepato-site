# Arquitetura, Stack e Estrutura de Pastas
## Site Institucional One Page — Unihepato

---

## Stack Técnica

| Camada | Tecnologia | Motivo |
|---|---|---|
| **Estrutura** | HTML5 semântico | Sem necessidade de framework — site estático de 1 página |
| **Estilo** | CSS3 puro (custom properties) | Sem necessidade de Tailwind/Sass — projeto pequeno, controle total |
| **Interatividade** | JavaScript vanilla (ES6+) | Só precisa de: menu mobile, acordeão FAQ, scroll suave — não justifica framework |
| **Fontes** | Google Fonts (Fraunces + Inter) | Já validado no protótipo, carregadas via CDN |
| **Ícones** | SVG inline | Sem dependência externa, leve, customizável via CSS |
| **Hospedagem** | Vercel ou Netlify (a definir com Eduardo) | Deploy via Git, HTTPS automático, gratuito para esse volume |
| **Versionamento** | Git + GitHub | Histórico, backup, possibilidade de deploy automático |

**Por que não usar framework (React/Vue) ou gerador de site estático (Next.js/Astro)?**
Site de 1 página, sem estado complexo, sem necessidade de build step. Framework aqui seria over-engineering — mais complexidade de manutenção sem benefício real. Se no futuro a landing crescer para múltiplas páginas com conteúdo dinâmico (fase Agendamento), reavaliamos.

---

## Estrutura de Pastas

```
unihepato-site/
│
├── index.html                 # Página única (one page)
├── README.md                  # Instruções de manutenção para a equipe
│
├── assets/
│   ├── css/
│   │   └── style.css          # Todo o CSS do site
│   │
│   ├── js/
│   │   └── main.js            # Toda a interatividade (menu, FAQ, scroll)
│   │
│   ├── img/
│   │   ├── logo/
│   │   │   └── logo-unihepato.png
│   │   ├── equipe/
│   │   │   ├── dr-tiberio.jpg
│   │   │   ├── dra-lilian.jpg
│   │   │   ├── dra-rebecca.jpg
│   │   │   └── dra-carolina.jpg
│   │   ├── institucional/
│   │   │   ├── fachada.jpg
│   │   │   ├── recepcao.jpg
│   │   │   └── alta-transplante.jpg
│   │   └── favicon/
│   │       ├── favicon.ico
│   │       └── apple-touch-icon.png
│   │
│   └── fonts/                 # (vazio — usando Google Fonts via CDN;
│                                pasta reservada caso precise self-host no futuro)
│
├── docs/                       # Documentação do projeto (não vai para produção)
│   ├── 01-divisao-secoes.md
│   ├── 02-rf-rnf.md
│   ├── 03-arquitetura.md
│   └── conteudo-aprovado.md    # Fonte única de verdade dos textos (evita divergência)
│
└── .gitignore
```

### Por que essa organização?

- **`index.html` na raiz**: hospedagem estática (Vercel/Netlify) espera isso por padrão, zero configuração
- **`assets/` separado por tipo**: CSS, JS e imagens isolados facilita achar o que precisa editar rápido
- **`img/` subdividido por contexto** (logo, equipe, institucional): quando entrar um médico novo ou trocar uma foto, fica óbvio onde mexer
- **`docs/` dentro do repo**: mantém a documentação (RF/RNF, decisões) versionada junto com o código — se outro dev pegar o projeto, o contexto está ali
- **`conteudo-aprovado.md`**: um arquivo único com todos os textos validados (evita que alguém edite "no olho" e destoe do que foi aprovado)

---

## Convenções de Código

### HTML
- Tags semânticas obrigatórias: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Cada `<section>` deve ter um `id` correspondente à âncora do menu (ex: `id="equipe"`)
- Comentários HTML marcando início de cada seção: `<!-- ===== EQUIPE MÉDICA ===== -->`

### CSS
- Custom properties (`:root`) para toda a paleta de cores — nunca hardcodar hex fora das variáveis
- Mobile-first: estilos base para mobile, `@media (min-width: ...)` para desktop
- Nomenclatura de classes: kebab-case (`medico-card`, `btn-whatsapp`)

### JavaScript
- Vanilla JS, sem dependências
- Um único arquivo `main.js`, organizado por funcionalidade com comentários:
  ```js
  // ===== MENU MOBILE =====
  // ===== FAQ ACORDEÃO =====
  // ===== SCROLL SUAVE =====
  ```

### Imagens
- Formato: JPG para fotos, PNG para logo (transparência)
- Nomenclatura descritiva em português, sem espaços: `dr-tiberio.jpg`, não `IMG_2024.jpg`
- Otimização: compressão antes do deploy (TinyPNG ou similar) — meta de performance (RNF01/RNF02)

---

## Fluxo de Deploy

1. Código versionado no GitHub (repositório da Hazive)
2. Conectar repositório à Vercel/Netlify
3. Deploy automático a cada `push` na branch principal
4. Domínio próprio da Unihepato apontado para a hospedagem (Eduardo cuida do DNS)
5. HTTPS configurado automaticamente pela plataforma de hospedagem

---

## Checklist de Pós-Publicação (herdado do Processos.docx, Etapa 8.5)

Isso já estava definido no processo geral da Hazive — reaplicando aqui para este projeto específico:

- [ ] Configurar monitor de uptime
- [ ] Configurar rastreamento de erros (ex: console de erros do navegador, ou serviço simples)
- [ ] Validar HTTPS
- [ ] Testar performance real em 4G
- [ ] Rodar PageSpeed Insights e corrigir alertas críticos
- [ ] Cadastrar no Google Search Console
- [ ] Confirmar indexação (buscar "Unihepato" no Google)
- [ ] Cadastrar/atualizar Google Meu Negócio
- [ ] Confirmar palavras-chave no conteúdo ("hepatologista Recife", "gastroenterologista Recife")

