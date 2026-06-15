import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gomes Solutions — Diagnóstico de IA Empresarial" },
      { name: "description", content: "Auditamos, medimos e otimizamos sistemas de IA para empresas. Diagnóstico inicial gratuito, resposta em 24h." },
      { property: "og:title", content: "Gomes Solutions — Diagnóstico de IA Empresarial" },
      { property: "og:description", content: "Implementar IA é fácil. Provar que ela funciona é outra história." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-bone font-sans antialiased selection:bg-electric selection:text-ink">
      <Nav />
      <Hero />
      <HowItWorks />
      <Outcomes />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(1180px,calc(100%-1rem))]">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-ink/75 backdrop-blur-xl pl-4 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2">
        <a href="#" className="flex items-center gap-2 min-w-0">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-bone" />
          <span className="font-display text-[13px] sm:text-sm font-semibold tracking-tight text-bone truncate">
            Gomes Solutions
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-bone/65">
          <a href="#como" className="hover:text-bone transition-colors">Como funciona</a>
          <a href="#resultados" className="hover:text-bone transition-colors">Resultados</a>
          <a href="#faq" className="hover:text-bone transition-colors">FAQ</a>
        </nav>
        <a
          href="#diagnostico"
          className="shrink-0 text-[12px] sm:text-[13px] font-medium bg-bone text-ink px-3 py-2 sm:px-4 rounded-full hover:bg-bone/90 transition"
        >
          Solicitar diagnóstico
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.06_0_0)_0%,oklch(0.06_0_0/0.55)_35%,oklch(0.06_0_0/0.85)_75%,oklch(0.06_0_0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.06_0_0)_0%,transparent_45%,oklch(0.06_0_0/0.7)_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-bone">
        <div className="rise inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/[0.04] backdrop-blur px-3 py-1.5 text-[11px] sm:text-xs text-bone/75">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric" />
          Diagnóstico de IA Empresarial
        </div>

        <h1 className="rise rise-delay-1 mt-6 font-display font-medium text-[clamp(2.25rem,7vw,5.25rem)] leading-[1.02] tracking-[-0.035em] text-balance max-w-4xl">
          Você confia nela.
          <span className="block text-bone/45">
            Mas <span className="font-serif italic font-normal text-bone">quem verifica</span>?
          </span>
        </h1>

        <p className="rise rise-delay-2 mt-6 max-w-xl text-[15px] sm:text-lg text-bone/65 leading-relaxed text-balance">
          Auditamos, medimos e otimizamos sistemas de IA empresariais — para que a decisão de confiar deixe de ser opinião e passe a ser dado.
        </p>

        <div className="rise rise-delay-3 mt-8 flex items-center gap-3 flex-wrap">
          <a
            href="#diagnostico"
            className="group inline-flex items-center gap-2 bg-bone text-ink px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-medium text-sm hover:bg-bone/90 transition"
          >
            Solicitar diagnóstico
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#como"
            className="inline-flex items-center text-sm text-bone/80 px-5 py-3 sm:py-3.5 rounded-full border border-bone/15 hover:border-bone/35 transition"
          >
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS (white section) ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Auditoria", d: "Mapeamos agentes, prompts e fluxos. Identificamos pontos cegos, riscos e oportunidades de melhoria." },
    { n: "02", t: "Medição", d: "Implementamos avaliações automáticas e dashboards de qualidade em produção, com critérios objetivos." },
    { n: "03", t: "Otimização", d: "Reduzimos custo, latência e erros com base em dados — não em suposições." },
  ];
  return (
    <section id="como" className="relative bg-paper text-paper-foreground py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel light>Como funciona</SectionLabel>
        <h2 className="mt-4 font-display font-medium text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.08] tracking-[-0.025em] max-w-2xl">
          Um processo claro, em três etapas.
        </h2>
        <p className="mt-4 max-w-xl text-paper-foreground/65 text-[15px] leading-relaxed">
          Do diagnóstico inicial à entrega de melhorias mensuráveis em produção.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7"
            >
              <div className="font-mono text-xs text-paper-foreground/50">{s.n}</div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-medium">{s.t}</h3>
              <p className="mt-2 text-paper-foreground/65 text-[14px] sm:text-[15px] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OUTCOMES (dark) ---------- */
function Outcomes() {
  const stats = [
    { v: "−38%", l: "custo médio de tokens" },
    { v: "+62%", l: "acurácia validada" },
    { v: "<24h", l: "para o diagnóstico inicial" },
    { v: "100%", l: "sob NDA" },
  ];
  return (
    <section id="resultados" className="relative bg-ink py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Resultados</SectionLabel>
        <h2 className="mt-4 font-display font-medium text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.08] tracking-[-0.025em] max-w-2xl">
          Indicadores objetivos, não promessas.
        </h2>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 rounded-2xl overflow-hidden border border-bone/10">
          {stats.map((s) => (
            <div key={s.l} className="bg-ink p-6 sm:p-8">
              <div className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-bone">
                {s.v}
              </div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-bone/50 leading-snug">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ (white) ---------- */
function FAQ() {
  const faqs = [
    { q: "Quanto tempo leva o diagnóstico?", a: "Entre 5 e 10 dias úteis, conforme a complexidade dos agentes envolvidos." },
    { q: "É necessário acesso a dados sensíveis?", a: "Não. Trabalhamos com amostras anonimizadas e tudo é coberto por NDA antes do início." },
    { q: "Funciona com qualquer LLM?", a: "Sim — OpenAI, Anthropic, Google, modelos open-source ou arquiteturas híbridas." },
    { q: "E depois do diagnóstico?", a: "Você recebe um relatório acionável. A continuidade da implementação é opcional." },
  ];
  return (
    <section id="faq" className="relative bg-paper text-paper-foreground py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionLabel light>Perguntas frequentes</SectionLabel>
        <h2 className="mt-4 font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] tracking-[-0.02em]">
          O que perguntam antes de começar.
        </h2>
        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <span className="font-medium text-[15px] sm:text-base">{f.q}</span>
                <span className="text-paper-foreground text-xl leading-none transition-transform group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-paper-foreground/65 text-[14px] sm:text-[15px] leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA + FORM (dark) ---------- */
function CTA() {
  return (
    <section id="diagnostico" className="relative bg-ink py-20 sm:py-28 px-5 sm:px-6 border-t border-bone/10">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
        <div>
          <SectionLabel>Solicitar diagnóstico</SectionLabel>
          <h2 className="mt-4 font-display font-medium text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.05] tracking-[-0.03em]">
            Vamos conversar sobre sua IA.
          </h2>
          <p className="mt-5 max-w-md text-bone/65 text-[15px] leading-relaxed">
            Responda algumas perguntas e nossa equipe entra em contato em até 24 horas com um plano inicial.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-bone/75">
            {[
              "Diagnóstico inicial gratuito",
              "Resposta em até 24 horas",
              "Confidencialidade sob NDA",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <Check /> {i}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ---------- SHARED ---------- */
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-black" : "bg-bone"}`} />
      <span className={`text-[11px] uppercase tracking-[0.25em] ${light ? "text-paper-foreground/60" : "text-bone/55"}`}>
        {children}
      </span>
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-bone shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  }

  return (
    <div className="relative border border-bone/10 bg-bone/[0.03] rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="min-w-0">
          <h3 className="font-display text-lg sm:text-xl font-medium tracking-tight">Comece em 60 segundos</h3>
          <p className="text-xs text-bone/50 mt-1">Resposta em até 24h.</p>
        </div>
        <span className="w-2 h-2 rounded-full bg-electric shrink-0" />
      </div>

      {sent ? (
        <div className="py-10 text-center rise">
          <div className="mx-auto w-14 h-14 rounded-full bg-bone/10 border border-bone/20 flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-bone" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-display text-xl sm:text-2xl font-medium">Recebido.</p>
          <p className="text-bone/60 mt-2 text-sm">Entraremos em contato em até 24h.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nome" name="name" type="text" placeholder="Seu nome" required />
            <Field label="Empresa" name="company" type="text" placeholder="Razão social" />
          </div>
          <Field label="E-mail corporativo" name="email" type="email" placeholder="voce@empresa.com" required />
          <Field label="WhatsApp" name="phone" type="tel" placeholder="+55 (11) 99999-9999" required />
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-bone/70 mb-1.5">
              Como podemos ajudar?
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Descreva brevemente o que sua IA faz hoje e o que você gostaria de validar."
              required
              className="w-full bg-bone/[0.04] border border-bone/10 focus:border-bone/40 focus:bg-bone/[0.06] outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone/30 transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-bone text-ink py-3.5 rounded-xl font-medium text-sm transition hover:bg-bone/90 disabled:opacity-70"
          >
            {loading ? "Enviando…" : "Solicitar diagnóstico"}
          </button>
          <p className="text-[11px] text-bone/40 text-center pt-1">
            Ao enviar, você concorda em ser contatado sobre o diagnóstico.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label, name, type, placeholder, required,
}: { label: string; name: string; type: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-bone/70 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-bone/[0.04] border border-bone/10 focus:border-bone/40 focus:bg-bone/[0.06] outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone/30 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-bone/10 px-5 sm:px-6 py-8 sm:py-10 bg-ink">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-bone/45">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-bone" />
          <span className="text-bone/75 font-medium">Gomes Solutions</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <span>São Paulo · Brasil</span>
      </div>
    </footer>
  );
}