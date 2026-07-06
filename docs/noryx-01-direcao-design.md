# Noryx - Direcao de Design

## Objetivo

Transformar a landing atual em um site corporativo completo sem perder a linha visual existente: minimalista, direta, premium, com contraste alto, fundo claro, preto profundo, acento quente e componentes de vidro/papel.

A marca deve parecer menos "agencia de IA" e mais uma empresa de inteligencia aplicada a imagem, venda e operacao. O visual precisa comunicar:

- precisao;
- confianca;
- tecnologia sem excesso tecnico;
- maturidade corporativa;
- execucao premium;
- decisao clara.

## Personalidade Visual

Direcao principal:

> Corporativo inteligente, visualmente limpo, com energia de tecnologia aplicada.

O site deve evitar uma estetica generica de IA baseada em gradientes roxos, orbes, hologramas e excesso futurista. A Noryx deve parecer uma empresa que organiza o caos, nao uma empresa que vende novidade.

## Paleta

### Cores Base

`Ink`

- Hex: `#0D0D0D`
- Uso: texto principal, secoes escuras, botoes primarios, superficies de alto contraste.
- Sensacao: decisao, autoridade, precisao.

`Paper`

- Hex: `#F4F4F4`
- Uso: fundo principal do site.
- Sensacao: clareza, respiro, espaco editorial.

`White Glass`

- Hex: `#FFFFFF` com opacidade entre `80%` e `94%`
- Uso: nav fixa, cards, formularios, paineis.
- Sensacao: leveza premium.

`Graphite`

- Hex: `#5C5C5C`
- Uso: textos secundarios, descricoes, links neutros.
- Sensacao: equilibrio e sobriedade.

### Cor de Acao

`Noryx Signal`

- Hex recomendado: `#FF5722`
- Uso: CTA hover, pontos de destaque, indicadores, labels, estados ativos.
- Sensacao: urgencia, energia comercial, foco.

Essa cor ja existe na landing atual e deve continuar como o principal acento de conversao.

### Cor Tecnologica Secundaria

`Noryx Electric`

- Hex aproximado: `#2361FE`
- Origem: logo atual possui azul eletrico.
- Uso: detalhes secundarios, graficos, chips de tecnologia, paginas de operacao/sistemas.
- Regra: usar com moderacao para nao quebrar a assinatura quente atual.

### Cores Semanticas

`Success`

- Hex: `#047857`
- Uso: checks, validacoes, entregas confirmadas.

`Risk`

- Hex: `#B91C1C`
- Uso: riscos, perdas, alertas pontuais.

`Warm Risk`

- Hex: `#C2410C`
- Uso: custo, gargalos, friccao comercial.

## Proporcao de Cor

Recomendacao por tela:

- 60% Paper/White;
- 25% Ink/Graphite;
- 10% preto em blocos de autoridade;
- 5% Signal/Electric.

Regra pratica: o laranja deve guiar a acao, nao pintar o site inteiro.

## Tipografia

Fonte principal:

- `Geist`, ja carregada no projeto.

Fonte editorial opcional:

- `Instrument Serif`, ja carregada no projeto.
- Uso discreto em palavras de apoio, frases curtas ou detalhes institucionais.

### Hierarquia por escala

Hero H1 desktop:

- `clamp(3.6rem, 8vw, 6.8rem)`
- Peso: `900`
- Line-height: `0.9` a `0.96`
- Tracking: entre `-0.06em` e `-0.075em`
- Uso: uma unica promessa por pagina.

Hero H1 mobile:

- `clamp(2.6rem, 13vw, 4.2rem)`
- Line-height: `0.92` a `1`
- Maximo de 5 a 7 palavras por linha visual.

Section H2 desktop:

- `clamp(2.2rem, 5vw, 4.6rem)`
- Peso: `900`
- Line-height: `0.96` a `1`

Section H2 mobile:

- `2rem` a `2.75rem`
- Evitar frases longas demais.

Card title:

- `1.15rem` a `1.6rem`
- Peso: `800` ou `900`
- Tracking: `-0.035em`

Body:

- Desktop: `1rem` a `1.25rem`
- Mobile: `0.95rem` a `1.05rem`
- Line-height: `1.55` a `1.75`

Kicker/eyebrow:

- `0.75rem`
- Uppercase
- Peso `900`
- Letter spacing positivo: `0.14em` a `0.18em`

## Layout e Grid

Container principal:

- `max-width: 1120px` ou `1152px`.
- Padding lateral mobile: `16px`.
- Padding lateral tablet: `24px`.
- Padding lateral desktop: `24px` a `32px`.

Grid desktop:

- Hero: `1fr 0.72fr` quando houver card/visual lateral.
- Secoes de servico: `0.75fr 1.25fr` para texto + lista/visual.
- Cards: 3 colunas para cards estrategicos, 4 colunas para chips curtos.

Mobile:

- Sempre uma coluna.
- Ordem: narrativa -> prova/beneficio -> acao.
- Cards com `min-height` estavel para nao haver saltos.

## Componentes Visuais

### Header

Manter o padrao atual:

- header fixo;
- largura limitada;
- fundo branco com blur;
- borda branca/leve;
- sombra suave;
- cantos grandes.

Desktop:

- logo + nome;
- links principais;
- CTA primario.

Mobile:

- logo + nome curto;
- botao de menu ou CTA direto;
- sticky CTA inferior nas paginas de conversao.

### Botoes

Primario:

- fundo `#0D0D0D`;
- texto branco;
- hover `#FF5722`;
- altura minima `52px` mobile, `56px` desktop;
- borda arredondada entre `18px` e `22px`.

Secundario:

- fundo branco translucido;
- borda preta `10%` a `16%`;
- texto preto;
- hover com fundo branco solido.

Terciario/link:

- texto graphite;
- underline animado laranja somente em desktop.

### Cards

Padrao:

- fundo branco/translucido;
- borda branca ou preta com baixa opacidade;
- sombra suave;
- raio entre `24px` e `34px`.

Uso:

- cards para itens repetidos, entregaveis, planos, provas e formularios.
- evitar colocar card dentro de card.

### Blocos Escuros

Uso estrategico:

- prova de autoridade;
- secoes de servico mais densas;
- CTA final;
- operacao/governanca.

Regras:

- texto branco com opacidade para apoio;
- acentos em laranja ou azul;
- cards internos com `bg-white/[0.06]`.

## Imagens e Visual Assets

O site precisa usar assets visuais, mas nao deve depender de imagens stock genericas.

Direcao de imagem:

- mockups de telas e sistemas;
- frames de campanhas e criativos;
- rostos/avatares fotorealistas quando falar de VSL;
- composicoes de dashboard/processo para operacao;
- cenas reais ou geradas que mostrem resultado, nao abstracao.

Evitar:

- imagens muito escuras;
- pessoas sorrindo sem contexto;
- robo/androide;
- grafismos de IA genericos;
- fundos roxos/neon.

## Movimento

Manter animacoes leves:

- reveal vertical de ate `22px`;
- duracao `550ms` a `700ms`;
- hover com `translateY(-2px)` em botoes e `-4px` em cards;
- respeitar `prefers-reduced-motion`.

Nao usar movimento que distraia da decisao de compra.

## Identidade Noryx

Substituir "Gomes Solutions" por "Noryx" em:

- header;
- title/meta;
- footer;
- formularios;
- source de tracking;
- textos de oferta;
- alt text de logo.

Tom verbal:

- claro;
- estrategico;
- executivo;
- pouca palavra tecnica;
- promessa concreta;
- foco em solucao percebida.

Exemplo de voz:

> A Noryx cria a camada digital que faz sua empresa parecer mais forte, vender com mais clareza e operar com menos friccao.

## Principios de UIX

1. Toda pagina deve deixar claro em ate 5 segundos:
   - o que a Noryx resolve;
   - para quem;
   - qual o proximo passo.

2. Cada dobra deve ter uma funcao:
   - posicionar;
   - explicar;
   - provar;
   - converter.

3. CTAs devem ser previsiveis:
   - "Conversar com a Noryx";
   - "Diagnosticar meu projeto";
   - "Ver servicos";
   - "Acessar ebook" apenas em contexto discreto.

4. A navegacao deve permitir tres caminhos:
   - contratar uma solucao;
   - entender os servicos;
   - entrar por um recurso barato/ebook.

5. O ebook nao deve disputar atencao com servicos premium.

6. Mobile deve priorizar acao:
   - textos mais curtos;
   - CTA sticky;
   - formularios curtos;
   - navegacao compacta.
