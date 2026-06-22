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

type FbqFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: FbqFunction;
  queue?: unknown[];
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

const META_PIXEL_ID = "1774038717104917";

function ensureMetaPixel() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }
    fbq.queue?.push(args);
  } as FbqFunction;

  window.fbq = fbq;
  window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

function trackPixel(eventName: string, params?: Record<string, unknown>) {
  ensureMetaPixel();
  window.fbq?.("track", eventName, params ?? {});
}

const lotties = {
  agreement:
    "https://lottie.host/bc57c47d-81a4-4589-8fd9-b41abb29ef63/nPbBgPzdoA.lottie",
};

const analysisItems = [
  { title: "Respostas erradas", tone: "danger" },
  { title: "Leads sem próximo passo", tone: "danger" },
  { title: "Custo de tokens", tone: "orange" },
  { title: "Retrabalho humano", tone: "orange" },
  { title: "IA espalhada em ferramentas", tone: "neutral" },
  { title: "Processos fora do padrão", tone: "neutral" },
] as const;

const scopeItems = [
  "WhatsApp",
  "CRM",
  "Chatbot",
  "ChatGPT interno",
  "Automações",
  "Sistemas internos",
  "Plataformas com IA",
] as const;

const deliverables = [
  "Relatório executivo",
  "Riscos encontrados",
  "Gargalos de custo e tempo",
  "Pontos de falha",
  "Recomendações práticas",
] as const;

const aiUseOptions = [
  "Atendimento",
  "Vendas",
  "WhatsApp",
  "CRM",
  "ChatGPT",
  "Automação",
  "Sistema interno",
  "Mais de uma ferramenta",
] as const;

const problemOptions = [
  "Perda de clientes",
  "Respostas erradas",
  "Custo alto",
  "Retrabalho",
  "Lentidão",
  "Falta de controle",
  "Não sei medir",
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gomes Solutions — Auditoria inicial de IA por R$297" },
      {
        name: "description",
        content:
          "Auditoria inicial do uso de IA em atendimento, vendas, WhatsApp, CRM, ChatGPT, automações, plataformas externas e sistemas internos. Relatório em até 24h.",
      },
      {
        property: "og:title",
        content:
          "Sua IA pode estar perdendo clientes, tempo ou dinheiro.",
      },
      {
        property: "og:description",
        content:
          "Por R$297, mostramos onde sua IA atua, onde pode falhar e o que corrigir primeiro.",
      },
      { property: "og:image", content: "/gomes-logo.svg" },
      { name: "theme-color", content: "#F4F4F4" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/gomes-logo.svg" },
      { rel: "dns-prefetch", href: "https://connect.facebook.net" },
      { rel: "preconnect", href: "https://connect.facebook.net" },
      { rel: "dns-prefetch", href: "https://lottie.host" },
      { rel: "preconnect", href: "https://lottie.host" },
      { rel: "dns-prefetch", href: "https://unpkg.com" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F4F4] pb-20 text-[#0D0D0D] antialiased selection:bg-[#FF5722] selection:text-white md:pb-0">
      <DesignCss />
      <MetaPixelEvents />
      <Nav />
      <MobileStickyCTA />
      <Hero />
      <WhatWeAnalyze />
      <WhereWeAudit />
      <Deliverables />
      <CTA />
      <Credibility />
      <Footer />
    </main>
  );
}

function MetaPixelEvents() {
  useEffect(() => {
    ensureMetaPixel();
    window.fbq?.("init", META_PIXEL_ID);
    trackPixel("PageView", { source: "gomes_landing" });

    const formSection = document.getElementById("diagnostico");
    if (!formSection || typeof IntersectionObserver === "undefined") return;

    let viewContentTimer: number | null = null;
    let viewContentTracked = false;

    const clearViewContentTimer = () => {
      if (viewContentTimer === null) return;
      window.clearTimeout(viewContentTimer);
      viewContentTimer = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (viewContentTracked) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          if (viewContentTimer !== null) return;

          viewContentTimer = window.setTimeout(() => {
            viewContentTracked = true;
            trackPixel("ViewContent", {
              content_name: "auditoria_inicial_ia_formulario",
              content_category: "lead_form",
              value: 297,
              currency: "BRL",
              source: "gomes_landing",
              viewed_section_for_seconds: 2,
            });
            observer.disconnect();
          }, 2000);

          return;
        }

        clearViewContentTimer();
      },
      { threshold: [0, 0.35, 0.6], rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(formSection);

    return () => {
      clearViewContentTimer();
      observer.disconnect();
    };
  }, []);

  return null;
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/94 px-4 py-3 shadow-[0_-14px_40px_rgba(13,13,13,0.10)] backdrop-blur-xl md:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <a href="#diagnostico" className="flex min-h-12 items-center justify-center rounded-[18px] bg-[#0D0D0D] px-5 text-sm font-black text-white active:scale-[0.98]">
        Solicitar auditoria · R$297
      </a>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-1.5rem))] -translate-x-1/2">
      <div className="flex h-[62px] items-center justify-between rounded-[24px] border border-white/70 bg-white/80 px-4 shadow-[0_16px_52px_rgba(13,13,13,0.08)] backdrop-blur-xl sm:px-5">
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
          <a className="hover-link" href="#analise">
            O que analisamos
          </a>
          <a className="hover-link" href="#onde-auditamos">
            Onde auditamos
          </a>
          <a className="hover-link" href="#voce-recebe">
            Você recebe
          </a>
        </nav>

        <a
          href="#diagnostico"
          className="rounded-[20px] bg-[#0D0D0D] px-4 py-3 text-xs font-bold text-white shadow-[0_12px_32px_rgba(13,13,13,0.18)] transition hover:-translate-y-0.5 hover:bg-[#FF5722] hover:shadow-[0_18px_44px_rgba(255,87,34,0.24)] sm:px-5 sm:text-sm"
        >
          Solicitar auditoria
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate px-4 pt-28 sm:px-6 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10 opacity-[0.28] [background-image:linear-gradient(rgba(13,13,13,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 pb-12 sm:gap-12 sm:pb-16 lg:grid-cols-[1fr_0.72fr] lg:gap-14 lg:pb-20">
        <Reveal>
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/82 px-3 py-1.5 text-xs font-bold text-[#5C5C5C] shadow-[0_8px_28px_rgba(13,13,13,0.07)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FF5722] shadow-[0_0_0_6px_rgba(255,87,34,0.12)]" />
              Auditoria inicial de IA
            </div>

            <h1 className="mt-6 text-[clamp(2.65rem,12.5vw,6rem)] font-black leading-[0.92] tracking-[-0.075em] text-[#0D0D0D] sm:mt-7 lg:max-w-[820px]">
              Sua IA pode estar perdendo clientes, tempo ou dinheiro.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#565656] sm:mt-7 sm:text-xl sm:leading-8">
              Auditamos o uso de IA em atendimento, vendas, automações, ChatGPT, plataformas externas e sistemas internos.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a href="#diagnostico" className="primary-btn">
                Solicitar auditoria
              </a>
              <a href="#analise" className="secondary-btn">
                Ver o que analisamos
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <OfferCard />
        </Reveal>
      </div>
    </section>
  );
}

function OfferCard() {
  return (
    <aside className="rounded-[34px] border border-white/80 bg-white/86 p-5 shadow-[0_24px_80px_rgba(13,13,13,0.11)] backdrop-blur-xl sm:p-7">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FF5722]">
        Oferta direta
      </p>
      <h2 className="mt-4 text-3xl font-black leading-none tracking-[-0.06em] sm:text-4xl">
        Auditoria inicial de IA
      </h2>

      <div className="mt-7 rounded-[28px] bg-[#0D0D0D] p-5 text-white">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/46">
          Investimento
        </p>
        <p className="mt-2 text-6xl font-black tracking-[-0.08em]">R$297</p>
        <p className="mt-3 rounded-full bg-[#FF5722]/16 px-4 py-2 text-sm font-black text-[#FFAB91]">
          Relatório em até 24h
        </p>
      </div>

      <p className="mt-5 text-base font-extrabold leading-7 tracking-[-0.02em] text-[#0D0D0D]">
        Mostramos onde sua IA pode estar perdendo clientes, tempo ou dinheiro.
      </p>

      <div className="mt-5 grid gap-2 text-sm font-bold text-[#5C5C5C]">
        <span className="check-row">Sem precisar ter uma IA própria</span>
        <span className="check-row">Serve para ferramentas prontas</span>
        <span className="check-row">Entrega objetiva para decidir o próximo passo</span>
      </div>

      <a href="#diagnostico" className="primary-btn mt-6 w-full">
        Solicitar auditoria
      </a>
    </aside>
  );
}

function WhatWeAnalyze() {
  return (
    <section id="analise" className="section-skip px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader kicker="O que analisamos" title="Se existe perda, ela aparece no processo." compact />
        </Reveal>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {analysisItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 45}>
              <ShortCard tone={item.tone}>{item.title}</ShortCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhereWeAudit() {
  return (
    <section id="onde-auditamos" className="section-skip bg-[#0D0D0D] px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader dark kicker="Onde auditamos" title="Não precisa ser uma IA própria." compact />
        </Reveal>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scopeItems.map((item, index) => (
            <Reveal key={item} delay={index * 40}>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] px-5 py-5 text-lg font-black tracking-[-0.035em] transition hover:-translate-y-1 hover:border-[#FF5722]/45 hover:bg-white/[0.1]">
                {item}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-8 rounded-[28px] border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 text-base font-black leading-7 text-emerald-100 sm:text-lg">
            Não precisa ser uma IA própria. Se ela participa da operação, pode ser medida.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Deliverables() {
  return (
    <section id="voce-recebe" className="section-skip px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-[40px] border border-white/70 bg-white/86 p-5 shadow-[0_24px_88px_rgba(13,13,13,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <SectionHeader kicker="Você recebe" title="Relatório objetivo para saber o que corrigir primeiro." compact />

              <div className="grid gap-3 sm:grid-cols-2">
                {deliverables.map((item, index) => (
                  <Reveal key={item} delay={index * 45}>
                    <div className="check-card">{item}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="diagnostico" className="section-skip bg-[#0D0D0D] px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <Reveal>
          <div>
            <SectionKicker dark>Auditoria inicial de IA</SectionKicker>
            <h2 className="mt-5 text-[clamp(2.35rem,5vw,4.6rem)] font-black leading-[0.98] tracking-[-0.06em]">
              Por R$297, tiramos a dúvida em até 24h.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/62">
              O formulário é curto porque a oferta precisa ser simples: identificar onde sua IA pode estar gerando perda e entregar uma leitura acionável.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <PricePill label="Preço" value="R$297" />
              <PricePill label="Entrega" value="Até 24h" />
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-[30px] border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_58px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <div className="h-24 w-24 shrink-0 rounded-[24px] bg-white/[0.06] p-2">
                <LazyLottie src={lotties.agreement} label="Aperto de mãos simbolizando acordo" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FFAB91]">próximo passo</p>
                <p className="mt-2 text-lg font-black tracking-[-0.035em] text-white">
                  Você informa onde usa IA. Nós devolvemos o mapa dos riscos, custos e prioridades.
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
  const [uses, setUses] = useState<string[]>([]);
  const [problems, setProblems] = useState<string[]>([]);

  const toggleSelection = (value: string, current: string[], setter: (next: string[]) => void) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const note = String(fd.get("note") ?? "").trim();

    if (!name) return setError("Informe seu nome.");
    if (!phone) return setError("Informe seu WhatsApp.");
    if (uses.length === 0) return setError("Selecione onde sua IA é usada.");
    if (problems.length === 0) return setError("Selecione qual problema você suspeita.");

    const message = [
      "Auditoria inicial de IA — R$297",
      "Relatório em até 24h",
      "",
      "Onde sua IA é usada:",
      ...uses.map((item) => `- ${item}`),
      "",
      "Qual problema você suspeita:",
      ...problems.map((item) => `- ${item}`),
      note ? "" : null,
      note ? "Observação opcional:" : null,
      note || null,
    ]
      .filter(Boolean)
      .join("\n");

    setLoading(true);
    try {
      await submitLead({
        phone,
        name,
        email: null,
        company: null,
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
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FF5722]">Solicitar auditoria</p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.045em]">Vamos mapear sua IA</h3>
            <p className="mt-2 text-sm leading-6 text-[#5C5C5C]">
              Preencha o mínimo necessário. As respostas qualificam a auditoria sem campo aberto longo.
            </p>
          </div>

          <Field label="Nome *" name="name" type="text" placeholder="Seu nome" required autoComplete="name" />
          <Field label="WhatsApp *" name="phone" type="tel" placeholder="+55 (44) 99999-9999" required autoComplete="tel" />

          <ChoiceGroup
            label="Onde sua IA é usada? *"
            options={aiUseOptions}
            selected={uses}
            onToggle={(option) => toggleSelection(option, uses, setUses)}
          />

          <ChoiceGroup
            label="Qual problema você suspeita? *"
            options={problemOptions}
            selected={problems}
            onToggle={(option) => toggleSelection(option, problems, setProblems)}
          />

          <div>
            <label htmlFor="note" className="mb-2 block text-xs font-bold text-[#0D0D0D]/70">
              Quer explicar em uma frase? <span className="font-medium text-[#5C5C5C]">(opcional)</span>
            </label>
            <textarea
              id="note"
              name="note"
              rows={2}
              maxLength={240}
              placeholder="Ex.: acho que o chatbot perde leads fora do horário comercial."
              className="input min-h-[86px] resize-none"
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
            {loading ? "Enviando…" : "Solicitar auditoria"}
          </button>

          <p className="text-center text-[11px] leading-5 text-[#5C5C5C]">
            Ao enviar, você concorda em ser contatado sobre a auditoria inicial de IA.
          </p>
        </form>
      )}
    </div>
  );
}

function Credibility() {
  return (
    <section className="section-skip px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            <CredibilityCard title="Oferta comprável" text="Preço, prazo e entrega aparecem antes da dobra." />
            <CredibilityCard title="Sem jargão no começo" text="Primeiro vem perda, custo, tempo e controle. Termos técnicos ficam fora do caminho." />
            <CredibilityCard title="Aplicável a ferramentas prontas" text="WhatsApp, CRM, ChatGPT, automações e plataformas externas entram na análise." />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CredibilityCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[28px] border border-white/70 bg-white/82 p-6 shadow-[0_18px_60px_rgba(13,13,13,0.07)] backdrop-blur-xl">
      <h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5C5C5C]">{text}</p>
    </article>
  );
}

function SectionHeader({ kicker, title, dark = false, compact = false }: { kicker: string; title: string; dark?: boolean; compact?: boolean }) {
  return (
    <div>
      <SectionKicker dark={dark}>{kicker}</SectionKicker>
      <h2 className={`${compact ? "mt-4 max-w-3xl text-[clamp(2.05rem,4.8vw,4rem)]" : "mt-5 text-[clamp(2.35rem,5vw,4.6rem)]"} font-black leading-[0.98] tracking-[-0.06em] ${dark ? "text-white" : "text-[#0D0D0D]"}`}>
        {title}
      </h2>
    </div>
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

function ShortCard({ children, tone }: { children: ReactNode; tone: "danger" | "orange" | "neutral" }) {
  const toneClass =
    tone === "danger"
      ? "border-red-200 bg-red-50 text-red-800"
      : tone === "orange"
        ? "border-orange-200 bg-orange-50 text-orange-800"
        : "border-black/5 bg-white text-[#0D0D0D]";

  return (
    <div className={`min-h-[112px] rounded-[26px] border p-5 text-xl font-black leading-tight tracking-[-0.04em] shadow-[0_16px_54px_rgba(13,13,13,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(13,13,13,0.10)] ${toneClass}`}>
      {children}
    </div>
  );
}

function PricePill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-white/44">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-[-0.06em] text-white">{value}</p>
    </div>
  );
}

function ChoiceGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 block text-xs font-bold text-[#0D0D0D]/70">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <label
              key={option}
              className={`cursor-pointer rounded-full border px-3 py-2 text-xs font-black transition sm:text-sm ${
                active
                  ? "border-[#FF5722] bg-[#FF5722] text-white shadow-[0_10px_26px_rgba(255,87,34,0.18)]"
                  : "border-black/10 bg-[#F4F4F4] text-[#0D0D0D]/74 hover:border-[#FF5722]/45 hover:bg-white"
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={active}
                onChange={() => onToggle(option)}
              />
              {active ? "✓ " : ""}{option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-bold text-[#0D0D0D]/70">
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} className="input" />
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
    if (!ref.current || visible || typeof IntersectionObserver === "undefined") return;
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
        .section-skip { content-visibility: auto; contain-intrinsic-size: 1px 680px; }
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
        background: rgba(255,255,255,0.7);
        backdrop-filter: blur(14px);
      }
      .secondary-btn:hover {
        transform: translateY(-2px);
        border-color: rgba(13, 13, 13, 0.34);
        background: rgba(255,255,255,0.98);
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
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border: 0;
      }
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
      .check-row::before,
      .check-card::before {
        content: "✓";
        display: inline-grid;
        place-items: center;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        border-radius: 999px;
        background: #ECFDF5;
        color: #047857;
        font-size: 12px;
        font-weight: 900;
        vertical-align: middle;
      }
      .check-card {
        display: flex;
        align-items: center;
        min-height: 76px;
        border-radius: 24px;
        border: 1px solid rgba(13,13,13,0.06);
        background: #F4F4F4;
        padding: 18px;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: -0.02em;
      }
      .reveal {
        opacity: 0;
        transform: translateY(22px);
        transition: opacity 650ms ease, transform 650ms ease;
      }
      .reveal.is-visible { opacity: 1; transform: translateY(0); }
      @media (max-width: 640px) {
        .primary-btn,
        .secondary-btn {
          width: 100%;
          min-height: 52px;
          border-radius: 18px;
          padding: 0 20px;
        }
        .section-skip { contain-intrinsic-size: 1px 620px; }
      }
      @media (prefers-reduced-motion: reduce) {
        * { animation: none !important; transition-duration: 1ms !important; scroll-behavior: auto !important; }
        .reveal { opacity: 1; transform: none; }
      }
    `}</style>
  );
}
