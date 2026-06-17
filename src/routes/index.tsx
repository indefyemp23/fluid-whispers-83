import { createFileRoute } from "@tanstack/react-router";
import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";
import { submitLead } from "@/lib/lead-submit";
import { collectAttribution } from "@/lib/attribution";

const lotties = {
  agreement:
    "https://lottie.host/bc57c47d-81a4-4589-8fd9-b41abb29ef63/nPbBgPzdoA.lottie",
  problem:
    "https://lottie.host/8d86d8a3-866a-4dfa-8bad-0384f7721eee/NMsMBa7te4.lottie",
  report:
    "https://lottie.host/d52f2da4-fb29-4af3-aba1-4f0a6347a9e5/iB4KgQw0Nv.lottie",
  exhausted:
    "https://lottie.host/c68279c6-a42a-4927-8224-452465ed9be3/F01DTx3DaD.lottie",
};

const proofs = [
  {
    title: "Visibilidade para diretoria",
    metric: "painel em produção",
    src: "/social-proof/lucas.webp",
    srcSet: "/social-proof/lucas-360.webp 360w, /social-proof/lucas-540.webp 540w, /social-proof/lucas.webp 720w",
    quote:
      "Hoje consigo abrir um painel e mostrar exatamente o que está acontecendo.",
  },
  {
    title: "Menos retrabalho do time",
    metric: "respostas mais estáveis",
    src: "/social-proof/joao.webp",
    srcSet: "/social-proof/joao-360.webp 360w, /social-proof/joao-540.webp 540w, /social-proof/joao.webp 720w",
    quote:
      "O time praticamente parou de ficar corrigindo resposta toda hora.",
  },
  {
    title: "Custo e latência menores",
    metric: "−35% tokens · 8s → 2s",
    src: "/social-proof/ana.webp",
    srcSet: "/social-proof/ana-360.webp 360w, /social-proof/ana-540.webp 540w, /social-proof/ana.webp 720w",
    quote:
      "Conseguimos reduzir uns 35%. O tempo de resposta caiu bastante também.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gomes Solutions — Governança e Otimização de IA" },
      {
        name: "description",
        content:
          "Diagnóstico de IA empresarial para encontrar falhas, reduzir custo de tokens e criar governança mensurável em agentes, prompts e fluxos em produção.",
      },
      {
        property: "og:title",
        content: "Gomes Solutions — Sua IA parece funcionar. Nós provamos.",
      },
      {
        property: "og:description",
        content:
          "Auditoria, métricas e governança para IA em produção: menos custo, menos erro e mais visibilidade.",
      },
      { property: "og:image", content: "/gomes-logo.svg" },
      { name: "theme-color", content: "#F4F4F4" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/gomes-logo.svg" },
      { rel: "preconnect", href: "https://lottie.host" },
      { rel: "dns-prefetch", href: "https://lottie.host" },
      { rel: "dns-prefetch", href: "https://unpkg.com" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F4F4] pb-20 text-[#0D0D0D] antialiased selection:bg-[#FF5722] selection:text-white md:pb-0">
      <DesignCss />
      <Nav />
      <MobileStickyCTA />
      <Hero />
      <ProblemSection />
      <MethodSection />
      <MetricsSection />
      <ProofSection />
      <CTA />
      <Footer />
    </main>
  );
}


function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/92 px-4 py-3 shadow-[0_-14px_40px_rgba(13,13,13,0.10)] backdrop-blur-xl md:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <a href="#diagnostico" className="flex min-h-12 items-center justify-center rounded-[18px] bg-[#0D0D0D] px-5 text-sm font-black text-white active:scale-[0.98]">
        Diagnóstico gratuito em 24h
      </a>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1160px,calc(100%-1.5rem))] -translate-x-1/2">
      <div className="flex h-[64px] items-center justify-between rounded-[24px] border border-white/70 bg-white/76 px-4 shadow-[0_16px_52px_rgba(13,13,13,0.08)] backdrop-blur-xl sm:px-5">
        <a href="#" className="group flex items-center gap-3" aria-label="Gomes Solutions">
          <img
            src="/gomes-logo.svg"
            alt="Gomes Solutions"
            className="h-9 w-9 rounded-2xl bg-[#0D0D0D] object-cover shadow-[0_10px_24px_rgba(13,13,13,0.18)] transition group-hover:-rotate-3 group-hover:scale-105"
          />
          <span className="hidden text-sm font-bold tracking-[-0.03em] sm:block">
            Gomes Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#5C5C5C] md:flex">
          <a className="hover-link" href="#problema">
            Problema
          </a>
          <a className="hover-link" href="#metodo">
            Método
          </a>
          <a className="hover-link" href="#provas">
            Provas
          </a>
          <a className="hover-link" href="#diagnostico">
            Diagnóstico
          </a>
        </nav>

        <a
          href="#diagnostico"
          className="rounded-[20px] bg-[#0D0D0D] px-4 py-3 text-xs font-bold text-white shadow-[0_12px_32px_rgba(13,13,13,0.18)] transition hover:-translate-y-0.5 hover:bg-[#FF5722] hover:shadow-[0_18px_44px_rgba(255,87,34,0.24)] sm:px-5 sm:text-sm"
        >
          Auditar IA
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate px-4 pt-28 sm:px-6 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10 opacity-[0.34] [background-image:linear-gradient(rgba(13,13,13,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,0.055)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 pb-12 sm:gap-12 sm:pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
        <Reveal>
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/78 px-3 py-1.5 text-xs font-bold text-[#5C5C5C] shadow-[0_8px_28px_rgba(13,13,13,0.08)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FF5722] shadow-[0_0_0_6px_rgba(255,87,34,0.12)]" />
              Diagnóstico de IA em produção
            </div>

            <h1 className="mt-6 text-[clamp(2.75rem,15vw,6.4rem)] font-black leading-[0.9] tracking-[-0.075em] text-[#0D0D0D] sm:mt-7 sm:leading-[0.92]">
              Sua IA parece funcionar.
              <span className="mt-3 block text-[#FF5722]">
                Nós provamos.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#565656] sm:mt-7 sm:text-xl sm:leading-8">
              Encontramos <Semantic tone="danger">erros invisíveis</Semantic>, cortamos <Semantic tone="orange">custo de tokens</Semantic> e criamos <Semantic tone="success">governança mensurável</Semantic> para agentes, prompts e fluxos já em operação.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a href="#diagnostico" className="primary-btn">
                Solicitar diagnóstico gratuito
              </a>
              <a href="#provas" className="secondary-btn">
                Ver provas reais
              </a>
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
              <MiniMetric label="tokens" prefix="−" to={35} suffix="%" tone="success" />
              <MiniMetric label="resposta" from={8} to={2} suffix="s" tone="orange" />
              <MiniMetric label="incidentes" to={0} tone="danger" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SignalVisual />
        </Reveal>
      </div>
    </section>
  );
}

function SignalVisual() {
  const rows = [
    { label: "Atendimento", before: 88, after: 42, tone: "danger" },
    { label: "Cadastro", before: 64, after: 31, tone: "orange" },
    { label: "2ª via", before: 71, after: 22, tone: "success" },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-[680px] rounded-[30px] border border-white/80 bg-white/78 p-3 shadow-[0_20px_60px_rgba(13,13,13,0.11)] backdrop-blur-xl sm:rounded-[40px] sm:p-5 sm:shadow-[0_30px_90px_rgba(13,13,13,0.13)]">
      <div className="rounded-[24px] border border-black/5 bg-[#0D0D0D] p-4 text-white sm:rounded-[30px] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/42">Mapa de diagnóstico</p>
            <h2 className="mt-3 max-w-sm text-2xl font-black leading-none tracking-[-0.055em] sm:text-4xl">
              O que medir antes de confiar na IA.
            </h2>
          </div>
          <div className="hidden h-24 w-24 shrink-0 rounded-[28px] bg-white/[0.06] p-2 sm:block">
            <LazyLottie src={lotties.report} label="Lupa analisando relatório" delay={600} />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <SignalCard label="erros ocultos" value="12" tone="danger" />
          <SignalCard label="custo evitável" value="−35%" tone="orange" />
          <SignalCard label="governança" value="94%" tone="success" />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-black text-white/82">Risco por fluxo</p>
              <span className="rounded-full bg-[#FF5722]/14 px-3 py-1 text-[11px] font-black text-[#FF8A65]">antes → depois</span>
            </div>

            <div className="space-y-4">
              {rows.map((row) => (
                <div key={row.label}>
                  <div className="mb-2 flex items-center justify-between text-xs text-white/48">
                    <span>{row.label}</span>
                    <span>{row.before}% → {row.after}%</span>
                  </div>
                  <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="absolute left-0 top-0 h-full rounded-full bg-white/18" style={{ width: `${row.before}%` }} />
                    <div
                      className={`absolute left-0 top-0 h-full rounded-full ${row.tone === "danger" ? "bg-red-500" : row.tone === "orange" ? "bg-[#FF5722]" : "bg-emerald-500"}`}
                      style={{ width: `${row.after}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4">
            <p className="text-sm font-black text-white/82">Prioridade da auditoria</p>
            <div className="mt-5 grid place-items-center">
              <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
                <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="16" />
                <circle cx="60" cy="60" r="44" fill="none" stroke="#EF4444" strokeWidth="16" strokeDasharray="92 276" strokeLinecap="round" />
                <circle cx="60" cy="60" r="44" fill="none" stroke="#FF5722" strokeWidth="16" strokeDasharray="74 276" strokeDashoffset="-100" strokeLinecap="round" />
                <circle cx="60" cy="60" r="44" fill="none" stroke="#10B981" strokeWidth="16" strokeDasharray="54 276" strokeDashoffset="-184" strokeLinecap="round" />
              </svg>
              <div className="-mt-24 text-center">
                <p className="text-4xl font-black tracking-[-0.07em] text-white">3</p>
                <p className="text-xs font-bold text-white/45">frentes críticas</p>
              </div>
            </div>

            <div className="mt-8 grid gap-2 text-xs font-bold text-white/54">
              <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-red-500" /> falhas</span>
              <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-[#FF5722]" /> custo</span>
              <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" /> controle</span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.05] p-4">
          <p className="text-sm font-black text-white/82">Saída do diagnóstico</p>
          <p className="mt-2 text-sm leading-6 text-white/54">
            Uma lista curta de correções, riscos e métricas que a operação entende sem precisar decifrar uma tela cheia de informações.
          </p>
        </div>
      </div>
    </div>
  );
}

function SignalCard({ label, value, tone }: { label: string; value: string; tone: "danger" | "orange" | "success" }) {
  const color = tone === "danger" ? "text-red-400" : tone === "orange" ? "text-[#FF8A65]" : "text-emerald-400";
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-1 hover:bg-white/[0.08]">
      <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/38">{label}</p>
      <p className={`mt-3 text-4xl font-black tracking-[-0.07em] ${color}`}>{value}</p>
    </div>
  );
}

function ProblemSection() {
  const cards = [
    {
      badge: "falha oculta",
      title: "A IA responde, mas ninguém sabe se está certa.",
      text: "Transformamos achismo em critérios mensuráveis por fluxo.",
      tone: "danger" as const,
      lottie: lotties.problem,
    },
    {
      badge: "custo alto",
      title: "Modelo caro demais para problemas simples.",
      text: "Cortamos contexto, prompts inchados e chamadas desnecessárias.",
      tone: "orange" as const,
      lottie: lotties.exhausted,
    },
    {
      badge: "sem governança",
      title: "A diretoria quer resposta, não sensação de avanço.",
      text: "Criamos painel, alertas e métricas que mostram o resultado.",
      tone: "success" as const,
      lottie: lotties.report,
    },
  ];

  return (
    <section id="problema" className="section-skip px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionKicker>O ponto cego</SectionKicker>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[0.98] tracking-[-0.06em]">
                <TypewriterText text="O problema não é usar IA. É operar sem enxergar onde ela falha." />
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#5C5C5C]">
              Reduzimos a densidade da experiência: cada bloco agora responde uma pergunta simples — falha, custo ou governança.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <article className="group min-h-[248px] overflow-hidden rounded-[28px] sm:min-h-[292px] sm:rounded-[32px] border border-white/70 bg-white/76 p-6 shadow-[0_18px_60px_rgba(13,13,13,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(13,13,13,0.13)]">
                <div className="flex items-start justify-between gap-4">
                  <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
                  <div className="h-24 w-24 rounded-3xl bg-[#F4F4F4] p-2 transition group-hover:rotate-3 group-hover:scale-105">
                    <LazyLottie src={card.lottie} label={card.title} />
                  </div>
                </div>
                <h3 className="mt-8 text-2xl font-black leading-tight tracking-[-0.045em]">{card.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#5C5C5C]">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const steps = [
    ["01", "Auditoria", "Mapeamos agentes, prompts, ferramentas e fluxos reais."],
    ["02", "Medição", "Definimos critérios de qualidade, custo, latência e risco."],
    ["03", "Governança", "Transformamos melhoria em padrão, alerta e relatório executivo."],
  ];

  return (
    <section id="metodo" className="section-skip relative overflow-hidden bg-[#0D0D0D] px-4 py-14 text-white sm:px-6 sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionKicker dark>Método Gomes+</SectionKicker>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.35rem,5vw,4.8rem)] font-black leading-[0.98] tracking-[-0.06em]">
                De IA experimental para <span className="text-[#FF5722]">operação controlada</span>.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/60">
              Menos texto. Mais decisão. O processo fica claro em três etapas.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map(([n, title, body], index) => (
            <Reveal key={n} delay={index * 100}>
              <article className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#FF5722]/45 hover:bg-white/[0.09]">
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-white/55">{n}</span>
                <h3 className="mt-10 text-3xl font-black tracking-[-0.05em]">{title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-white/58">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="section-skip px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-[44px] bg-white p-5 shadow-[0_30px_100px_rgba(13,13,13,0.09)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <SectionKicker>Resultado explicado</SectionKicker>
                <h2 className="mt-5 text-[clamp(2.35rem,4.8vw,4.55rem)] font-black leading-[0.98] tracking-[-0.06em]">
                  Métrica só importa quando muda uma decisão.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#5C5C5C]">
                  O painel executivo mostra onde o ganho aparece: custo, velocidade, qualidade e risco.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <MetricCard eyebrow="tokens" value={<CountUp prefix="−" to={35} suffix="%" />} tone="success" text="Menos gasto por fluxo." />
                <MetricCard eyebrow="resposta" value={<><span className="text-[#5C5C5C]/30 line-through">8s</span> → 2s</>} tone="orange" text="Menos espera para o usuário." />
                <MetricCard eyebrow="qualidade" value={<CountUp to={94} suffix="%" />} tone="success" text="Prompts aprovados com critério." />
                <MetricCard eyebrow="incidentes" value={<CountUp to={0} />} tone="danger" text="Falhas críticas monitoradas." />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section id="provas" className="section-skip px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionKicker>Prova social</SectionKicker>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.35rem,5vw,4.75rem)] font-black leading-[0.98] tracking-[-0.06em]">
                O cliente não elogia tecnologia. Ele elogia alívio operacional.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#5C5C5C]">
              Prints fixados: visibilidade, menos retrabalho, custo menor e resposta mais rápida.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {proofs.map((proof, index) => (
            <Reveal key={proof.title} delay={index * 70}>
              <article className="group w-[78vw] min-w-[78vw] snap-start overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_18px_54px_rgba(13,13,13,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(13,13,13,0.14)] sm:w-[44vw] sm:min-w-[44vw] lg:w-auto lg:min-w-0 lg:rounded-[36px] lg:p-3">
                <div className="relative overflow-hidden rounded-[22px] bg-[#071014] lg:rounded-[28px]">
                  <img
                    src={proof.src}
                    srcSet={proof.srcSet}
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 360px"
                    alt={`Print de WhatsApp — ${proof.title}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[9/16] w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent p-4 text-white sm:p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/62 sm:text-xs sm:tracking-[0.16em]">{proof.metric}</p>
                    <h3 className="mt-2 text-lg font-black tracking-[-0.045em] sm:text-xl">{proof.title}</h3>
                  </div>
                </div>
                <p className="p-3 text-sm leading-6 text-[#5C5C5C] sm:p-4 sm:text-[15px] sm:leading-7">“{proof.quote}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="diagnostico" className="section-skip bg-[#0D0D0D] px-4 py-14 text-white sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <div>
            <SectionKicker dark>Diagnóstico gratuito</SectionKicker>
            <h2 className="mt-5 text-[clamp(2.45rem,5vw,4.8rem)] font-black leading-[0.98] tracking-[-0.06em]">
              Vamos descobrir onde sua IA está vazando resultado.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
              Você recebe uma primeira leitura do ambiente e próximos passos objetivos em até 24h.
            </p>
            <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/72">
              <li>✓ Sem compromisso</li>
              <li>✓ Análise inicial em até 24h</li>
              <li>✓ Foco em custo, qualidade e governança</li>
            </ul>

            <div className="mt-8 flex items-center gap-4 rounded-[30px] border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_58px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <div className="h-24 w-24 shrink-0 rounded-[24px] bg-white/[0.06] p-2">
                <LazyLottie src={lotties.agreement} label="Aperto de mãos simbolizando acordo" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FF8A65]">próximo passo</p>
                <p className="mt-2 text-lg font-black tracking-[-0.035em] text-white">
                  Uma conversa curta para definir escopo, risco e prioridade.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messageLen, setMessageLen] = useState(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name) return setError("Informe seu nome.");
    if (!phone) return setError("Informe seu WhatsApp.");
    if (!message) return setError("Conte rapidamente o que sua IA faz hoje.");
    if (message.length > 1000) return setError("Mensagem muito longa. Máximo de 1000 caracteres.");

    setLoading(true);
    try {
      await submitLead({
        phone,
        name,
        email: String(fd.get("email") ?? "") || null,
        company: String(fd.get("company") ?? "") || null,
        message,
        attribution: collectAttribution(),
      });
      setSent(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.";
      setError(msg.replace(/^Error:\s*/i, ""));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[28px] border border-white/10 bg-white p-4 text-[#0D0D0D] shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:rounded-[34px] sm:p-7 sm:shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
      {sent ? (
        <div className="py-16 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-700">✓</div>
          <p className="mt-5 text-2xl font-black tracking-[-0.04em]">Recebido.</p>
          <p className="mt-2 text-sm text-[#5C5C5C]">Entraremos em contato em até 24h.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome *" name="name" type="text" placeholder="Seu nome" required />
            <Field label="Empresa" name="company" type="text" placeholder="Nome da empresa" />
          </div>
          <Field label="E-mail corporativo" name="email" type="email" placeholder="voce@empresa.com" />
          <Field label="WhatsApp *" name="phone" type="tel" placeholder="+55 (11) 99999-9999" required />

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="message" className="text-xs font-bold text-[#0D0D0D]/70">
                O que sua IA faz hoje? *
              </label>
              <span className={`text-[11px] ${messageLen > 1000 ? "text-red-600" : "text-[#5C5C5C]"}`}>
                {messageLen}/1000
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1000}
              onChange={(e) => setMessageLen(e.target.value.length)}
              placeholder="Ex.: usamos IA no atendimento, mas ainda não medimos qualidade, custo por conversa ou falhas por fluxo."
              required
              className="input min-h-[128px] resize-none"
            />
          </div>

          {error && (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[20px] bg-[#0D0D0D] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#FF5722] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Enviando…" : "Solicitar análise"}
          </button>

          <p className="text-center text-[11px] leading-5 text-[#5C5C5C]">
            Ao enviar, você concorda em ser contatado sobre o diagnóstico.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-bold text-[#0D0D0D]/70">
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className="input" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#F4F4F4] px-5 py-9 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#5C5C5C] sm:flex-row">
        <div className="flex items-center gap-3 font-semibold text-[#0D0D0D]">
          <img src="/gomes-logo.svg" alt="Gomes Solutions" className="h-7 w-7 rounded-xl bg-black object-cover" />
          <span>Gomes Solutions © {new Date().getFullYear()}</span>
        </div>
        <span>Maringá · Paraná · Brasil</span>
      </div>
    </footer>
  );
}

function SectionKicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${dark ? "bg-[#FF5722]" : "bg-[#0D0D0D]"}`} />
      <span className={`text-xs font-black uppercase tracking-[0.18em] ${dark ? "text-white/52" : "text-[#5C5C5C]"}`}>
        {children}
      </span>
    </div>
  );
}

function Semantic({ children, tone }: { children: ReactNode; tone: "danger" | "orange" | "success" }) {
  const color = tone === "danger" ? "text-red-600" : tone === "orange" ? "text-[#FF5722]" : "text-emerald-700";
  return <span className={`font-black ${color}`}>{children}</span>;
}

function ToneBadge({ children, tone }: { children: ReactNode; tone: "danger" | "orange" | "success" }) {
  const classes =
    tone === "danger"
      ? "bg-red-100 text-red-700"
      : tone === "orange"
        ? "bg-orange-100 text-orange-700"
        : "bg-emerald-100 text-emerald-700";
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${classes}`}>{children}</span>;
}

function MiniMetric({
  label,
  to,
  from = 0,
  prefix = "",
  suffix = "",
  tone,
}: {
  label: string;
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  tone: "success" | "orange" | "danger";
}) {
  const color = tone === "success" ? "text-emerald-700" : tone === "orange" ? "text-[#FF5722]" : "text-red-700";
  return (
    <div className="rounded-[24px] border border-white/70 bg-white/74 p-4 shadow-[0_12px_34px_rgba(13,13,13,0.08)] backdrop-blur-xl transition hover:-translate-y-1">
      <p className={`text-3xl font-black tracking-[-0.06em] ${color}`}>
        <CountUp from={from} prefix={prefix} to={to} suffix={suffix} />
      </p>
      <p className="mt-1 text-xs font-bold text-[#5C5C5C]">{label}</p>
    </div>
  );
}

function MetricCard({
  eyebrow,
  value,
  text,
  tone,
}: {
  eyebrow: string;
  value: ReactNode;
  text: string;
  tone: "success" | "orange" | "danger";
}) {
  const toneClass =
    tone === "success"
      ? "text-emerald-700 bg-emerald-50"
      : tone === "orange"
        ? "text-[#FF5722] bg-orange-50"
        : "text-red-700 bg-red-50";
  return (
    <article className="group rounded-[30px] border border-black/5 bg-[#F4F4F4] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(13,13,13,0.10)]">
      <p className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] ${toneClass}`}>{eyebrow}</p>
      <div className="mt-5 text-5xl font-black tracking-[-0.07em]">{value}</div>
      <p className="mt-4 text-sm leading-6 text-[#5C5C5C]">{text}</p>
    </article>
  );
}


let dotLottieScriptPromise: Promise<void> | null = null;

function loadDotLottieScript() {
  if (typeof document === "undefined") return Promise.resolve();
  if (document.getElementById("dotlottie-wc-script")) return Promise.resolve();
  if (dotLottieScriptPromise) return dotLottieScriptPromise;

  dotLottieScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "dotlottie-wc-script";
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js";
    script.type = "module";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Falha ao carregar animação."));
    document.head.appendChild(script);
  });

  return dotLottieScriptPromise;
}

function LazyLottie({ src, label, delay = 0 }: { src: string; label: string; delay?: number }) {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.01, rootMargin: "240px 0px" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setTimeout(() => {
      loadDotLottieScript()
        .then(() => setReady(true))
        .catch(() => setReady(false));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay, visible]);

  return (
    <div ref={ref} className="grid h-full w-full place-items-center" role="img" aria-label={label}>
      {ready
        ? createElement("dotlottie-wc", {
            src,
            autoplay: true,
            loop: true,
            style: { width: "100%", height: "100%" } as CSSProperties,
          })
        : <LottieFallback />}
    </div>
  );
}

function LottieFallback() {
  return (
    <svg viewBox="0 0 96 96" className="h-16 w-16 text-[#FF5722] opacity-85" aria-hidden="true">
      <rect x="18" y="18" width="60" height="60" rx="20" fill="currentColor" opacity="0.11" />
      <path d="M31 50.5 43 62l23-29" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CountUp({
  to,
  from = 0,
  prefix = "",
  suffix = "",
  duration = 1100,
}: {
  to: number;
  from?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [ref, visible] = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (to - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, from, to, visible]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(value).toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

function TypewriterText({ text, speed = 22 }: { text: string; speed?: number }) {
  const [ref, visible] = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!visible) return;
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(text);
      return;
    }
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setDisplay(text.slice(0, index));
      if (index >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [speed, text, visible]);

  return (
    <span ref={ref} className="typewriter">
      {display}
      {visible && display.length < text.length ? <span className="cursor">|</span> : null}
    </span>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function useInView<T extends HTMLElement>(config?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const threshold = config?.threshold ?? 0.18;
  const rootMargin = config?.rootMargin ?? "0px 0px -8% 0px";

  useEffect(() => {
    if (!ref.current || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, threshold, visible]);

  return [ref, visible] as const;
}

function DesignCss() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      body { text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
      @supports (content-visibility: auto) {
        .section-skip { content-visibility: auto; contain-intrinsic-size: 1px 820px; }
      }
      .primary-btn,
      .secondary-btn {
        display: inline-flex;
        min-height: 56px;
        align-items: center;
        justify-content: center;
        border-radius: 22px;
        padding: 0 26px;
        font-size: 14px;
        font-weight: 900;
        transition: transform 220ms ease, background 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
      }
      .primary-btn {
        color: white;
        background: #0D0D0D;
        box-shadow: 0 16px 42px rgba(13, 13, 13, 0.18);
      }
      .primary-btn:hover {
        transform: translateY(-2px);
        background: #FF5722;
        box-shadow: 0 22px 60px rgba(255, 87, 34, 0.26);
      }
      .secondary-btn {
        color: #0D0D0D;
        border: 1px solid rgba(13, 13, 13, 0.16);
        background: rgba(255,255,255,0.62);
        backdrop-filter: blur(14px);
      }
      .secondary-btn:hover {
        transform: translateY(-2px);
        border-color: rgba(13, 13, 13, 0.34);
        background: rgba(255,255,255,0.95);
      }
      .hover-link { position: relative; transition: color 180ms ease; }
      .hover-link:hover { color: #0D0D0D; }
      .hover-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -7px;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transform-origin: right;
        background: #FF5722;
        transition: transform 180ms ease;
      }
      .hover-link:hover::after { transform: scaleX(1); transform-origin: left; }
      .input {
        width: 100%;
        border: 1px solid rgba(13,13,13,0.10);
        background: #F4F4F4;
        border-radius: 18px;
        outline: none;
        padding: 14px 16px;
        font-size: 14px;
        color: #0D0D0D;
        transition: border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
      }
      .input:focus {
        border-color: rgba(255, 87, 34, 0.55);
        background: white;
        box-shadow: 0 0 0 4px rgba(255, 87, 34, 0.10);
      }
      .reveal {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 700ms ease, transform 700ms ease;
      }
      .reveal.is-visible { opacity: 1; transform: translateY(0); }
      .cursor {
        display: inline-block;
        color: #FF5722;
        animation: blink 850ms steps(1) infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      @media (max-width: 640px) {
        .primary-btn,
        .secondary-btn {
          width: 100%;
          min-height: 52px;
          border-radius: 18px;
          padding: 0 20px;
        }
        .section-skip { contain-intrinsic-size: 1px 680px; }
      }
      @media (prefers-reduced-motion: reduce) {
        * { animation: none !important; transition-duration: 1ms !important; scroll-behavior: auto !important; }
        .reveal { opacity: 1; transform: none; }
      }
    `}</style>
  );
}
