# Noryx - UX, Mobile e Criterios de Implementacao

## Objetivo de UX

O site deve fazer o visitante entender a Noryx rapidamente, escolher uma frente de interesse e chegar a uma conversa qualificada com o minimo de friccao.

A experiencia deve ser corporativa, mas nao fria. Premium, mas nao distante. Tecnologica, mas sem parecer laboratorio.

## Navegacao

### Desktop

Header fixo com:

- logo Noryx;
- `Inicio`;
- `Servicos`;
- `Midia IA`;
- `Sites Premium`;
- `Operacao & IA`;
- `Sobre`;
- CTA `Conversar`.

Regras:

- manter header compacto;
- evitar dropdown complexo no primeiro ciclo;
- links com hover underline laranja;
- CTA sempre visivel.

### Mobile

Opcoes recomendadas:

1. Header com logo + botao de menu + CTA sticky inferior.
2. Menu em sheet lateral ou drawer inferior.

Prioridade mobile:

- CTA sticky: `Conversar com a Noryx`;
- links principais em lista vertical;
- ebook como link pequeno no final do menu.

## Estrutura de Conversao

### CTAs por contexto

Home:

- Primario: `Diagnosticar meu projeto`;
- Secundario: `Ver servicos`.

Servicos:

- Primario: `Comparar caminhos`;
- Secundario: `Conversar com a Noryx`.

Midia IA:

- Primario: `Criar minha midia`;
- Secundario: `Ver formatos`.

Sites Premium:

- Primario: `Construir meu site`;
- Secundario: `Ver estrutura`.

Operacao & IA:

- Primario: `Auditar minha operacao`;
- Secundario: `Ver solucoes`.

Ebook:

- Primario: `Acessar ebook`;
- Secundario: `Falar sobre uma solucao`.

Contato:

- Primario: `Enviar diagnostico`.

### Regra de repeticao

Cada pagina deve ter:

- CTA no hero;
- CTA apos explicacao principal;
- CTA final;
- sticky CTA no mobile.

## Formularios

### Principios

- Formularios curtos;
- perguntas em chips sempre que possivel;
- poucos campos abertos;
- validacao clara;
- mensagem de sucesso objetiva.

### Formulario principal

Campos:

- nome;
- WhatsApp;
- empresa;
- frente de interesse;
- problema atual;
- observacao curta.

UX:

- usar labels sempre visiveis;
- placeholders apenas como exemplo;
- botao disabled durante envio;
- erro em bloco acima do botao;
- sucesso com proximo passo e prazo de retorno.

## Mobile

### Layout

Breakpoints praticos:

- ate `640px`: mobile;
- `641px` a `1024px`: tablet;
- acima de `1024px`: desktop.

Mobile deve usar:

- uma coluna;
- padding lateral `16px`;
- secoes com `48px` a `64px` de padding vertical;
- H1 de `2.6rem` a `4.2rem`;
- H2 de `2rem` a `2.75rem`;
- cards full width;
- botoes full width;
- altura minima de toque `48px`.

### Ordem de conteudo

Em mobile, cada pagina deve seguir:

1. promessa;
2. beneficio imediato;
3. CTA;
4. prova/explicacao;
5. detalhes;
6. CTA final.

Nao colocar tabela larga em mobile. Converter tabelas para cards.

### Sticky CTA

Usar em:

- home;
- servicos;
- paginas de servico;
- contato.

Nao usar ou suavizar em:

- ebook, se a experiencia de leitura for prioridade.

Padrao:

- fixo no rodape;
- fundo branco com blur;
- sombra superior;
- safe area iOS;
- botao preto com hover/active laranja.

## Acessibilidade

Requisitos:

- contraste AA minimo;
- foco visivel em botoes, inputs e links;
- `aria-label` em icones sem texto;
- alt text descritivo em imagens;
- hierarquia correta de heading;
- uma unica H1 por pagina;
- formularios com labels associados;
- respeitar `prefers-reduced-motion`.

## SEO e Metadados

Cada pagina deve ter:

- title unico;
- meta description unica;
- OG title;
- OG description;
- OG image quando houver asset;
- canonical se necessario.

Titles sugeridos:

- Home: `Noryx - Inteligencia aplicada a imagem, venda e operacao`
- Servicos: `Servicos Noryx - Midia IA, Sites Premium e Operacao`
- Midia IA: `Midia Comercial com IA - Noryx`
- Sites Premium: `Sites e Landing Pages Premium - Noryx`
- Operacao & IA: `Operacao, Sistemas e Governanca de IA - Noryx`
- Ebook: `Ebook Noryx - IA para conteudo, venda e operacao`
- Sobre: `Sobre a Noryx`
- Contato: `Contato - Noryx`

## Performance

Metas:

- evitar imagens pesadas sem compressao;
- usar `webp`/`avif` quando possivel;
- lazy load para imagens abaixo da primeira dobra;
- nao carregar lottie/script externo acima da dobra sem necessidade;
- reduzir dependencias visuais externas;
- usar `content-visibility` em secoes longas quando fizer sentido;
- evitar animacoes caras em mobile.

Observacao atual:

As imagens em `public/social-proof` sao grandes. Antes de usa-las no novo site, gerar versoes otimizadas para web.

## Componentizacao Recomendada

Criar componentes compartilhados:

- `SiteShell`;
- `SiteNav`;
- `Footer`;
- `MobileStickyCTA`;
- `SectionHeader`;
- `PrimaryButton`;
- `SecondaryButton`;
- `ServiceCard`;
- `FeatureCard`;
- `ProcessSteps`;
- `ContactForm`;
- `PageHero`;

Beneficio:

- manter consistencia visual;
- evitar copy duplicada;
- facilitar novas paginas.

## Conteudo e Tom

Evitar termos como:

- "revolucionario";
- "automatize tudo";
- "IA de ultima geracao";
- "solucao completa 360";
- "tecnologia disruptiva".

Preferir:

- `clareza`;
- `estrutura`;
- `presenca`;
- `percepcao de valor`;
- `operacao`;
- `controle`;
- `execucao`;
- `venda`;
- `rotina`;
- `decisao`.

Regra de copy:

> Comecar pela dor percebida e pelo resultado desejado. So depois citar a ferramenta.

Exemplo ruim:

`Criamos VSLs com avatares fotorealistas usando IA generativa.`

Exemplo melhor:

`Damos rosto, ritmo e narrativa para sua oferta vender melhor em video.`

## Criterios de Aceite Visual

Antes de considerar o site pronto:

- home comunica as tres frentes sem parecer catalogo;
- ebook aparece de forma discreta;
- todos os CTAs principais levam a contato/diagnostico;
- paginas de servico seguem a mesma familia visual;
- mobile nao tem texto estourando;
- cards nao mudam tamanho de forma brusca no hover;
- contraste esta legivel em secoes escuras;
- marca aparece como Noryx em header, metas, footer e formularios;
- nao ha textos com encoding quebrado;
- imagens estao otimizadas;
- formulario funciona;
- build passa.

## Sequencia de Implementacao Recomendada

1. Corrigir branding e encoding da pagina atual.
2. Criar componentes compartilhados de layout.
3. Implementar Home nova.
4. Implementar pagina Servicos.
5. Implementar tres paginas de servico.
6. Implementar Contato.
7. Implementar Ebook discreto.
8. Implementar Sobre.
9. Revisar SEO/metas.
10. Rodar build e revisar mobile com screenshots.
