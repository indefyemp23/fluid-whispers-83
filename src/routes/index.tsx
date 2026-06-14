import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gomes Solutions — Você confia nela. Mas quem verifica?" },
      { name: "description", content: "Diagnóstico de IA Empresarial: verificamos, medimos e otimizamos sistemas de IA para garantir precisão, consistência e resultados reais." },
      { property: "og:title", content: "Gomes Solutions — Você confia nela. Mas quem verifica?" },
      { property: "og:description", content: "Confiar não é medir. Avaliamos se sua IA está realmente entregando o que promete." },
      { property: "og:image", content: "/__og.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground font-sans antialiased selection:bg-electric selection:text-ink">
      <Nav />
      <Hero />
      <LogosBar />
      <Problem />
      <HowItWorks />
      <Outcomes />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1180px,calc(100%-2rem))]">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-ink/70 backdrop-blur-xl pl-5 pr-2 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-electric shadow-[0_0_12px] shadow-electric" />
          <span className="font-display text-sm font-semibold tracking-tight text-bone">Gomes Solutions</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-bone/70">
          <a href="#problema" className="hover:text-bone transition-colors">Problema</a>
          <a href="#como" className="hover:text-bone transition-colors">Como funciona</a>
          <a href="#resultados" className="hover:text-bone transition-colors">Resultados</a>
          <a href="#faq" className="hover:text-bone transition-colors">FAQ</a>
        </nav>
        <a href="#diagnostico" className="text-[13px] font-medium bg-electric text-ink px-4 py-2 rounded-full hover:brightness-110 transition">
          Solicitar diagnóstico
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-24">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Supervisão de IA"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.015_265)_0%,oklch(0.08_0.015_265/0.7)_30%,oklch(0.08_0.015_265/0.85)_70%,oklch(0.08_0.015_265)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,oklch(0.7_0.18_255/0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.08_0.015_265)_0%,transparent_50%,oklch(0.08_0.015_265/0.6)_100%)]" />
        <GridBg />
        <div className="cinema-grain" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-bone">
        <div className="rise inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/[0.03] backdrop-blur px-3 py-1.5 text-xs text-bone/80">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          Diagnóstico de IA Empresarial · Vagas limitadas em Q3
        </div>

        <h1 className="rise rise-delay-1 mt-7 font-display font-medium text-[clamp(2.6rem,7.2vw,5.75rem)] leading-[1.02] tracking-[-0.035em] text-balance">
          Você confia nela.
          <span className="block text-bone/45">
            Mas <span className="font-serif italic font-normal text-bone">quem verifica</span>?
          </span>
        </h1>

        <p className="rise rise-delay-2 mt-7 mx-auto max-w-2xl text-[17px] sm:text-lg text-bone/65 leading-relaxed text-balance">
          Implementar IA é fácil. Provar que ela funciona é outra história.
          Auditamos, medimos e otimizamos seus agentes — para que confiar deixe
          de ser fé e passe a ser <span className="text-bone">prova</span>.
        </p>

        <div className="rise rise-delay-3 mt-9 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="#diagnostico"
            className="group inline-flex items-center gap-2 bg-electric text-ink px-6 py-3.5 rounded-full font-medium text-sm shadow-[0_10px_40px_-10px] shadow-electric hover:brightness-110 transition"
          >
            Solicitar diagnóstico gratuito
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#como" className="inline-flex items-center gap-2 text-sm text-bone/80 px-5 py-3.5 rounded-full border border-bone/15 hover:border-bone/30 transition">
            Como funciona
          </a>
        </div>

        <div className="rise rise-delay-4 mt-8 flex items-center justify-center gap-6 text-xs text-bone/45">
          <span className="flex items-center gap-1.5"><Check /> Sem compromisso</span>
          <span className="flex items-center gap-1.5"><Check /> Resposta em 24h</span>
          <span className="flex items-center gap-1.5"><Check /> NDA incluso</span>
        </div>
      </div>
    </section>
  );
}

function GridBg() {
  return (
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(to right, oklch(0.97 0.01 250 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.97 0.01 250 / 0.4) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
      }}
    />
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-electric" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function LogosBar() {
  const items = ["Banking", "Healthtech", "Logistics", "Retail", "SaaS B2B", "Insurance"];
  return (
    <section className="relative border-y border-bone/10 bg-ink/40">
      <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-bone/40 shrink-0">
          Aplicado em setores
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-bone/55">
          {items.map((i) => (
            <span key={i} className="text-sm font-medium">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { k: "IA respondendo errado", v: "Respostas inconsistentes destroem confiança e conversão." },
    { k: "Sem supervisão", v: "Você não sabe o que está sendo dito em nome da sua marca." },
    { k: "Sem métricas", v: "O que não é medido não pode ser otimizado." },
    { k: "Custos invisíveis", v: "Tokens, retries e prompts mal calibrados queimam orçamento." },
    { k: "Agentes sem validação", v: "Decisões automáticas sem testes regressivos." },
    { k: "Processos inconsistentes", v: "Cada cliente recebe uma versão diferente do produto." },
  ];
  return (
    <section id="problema" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>O problema</SectionLabel>
        <h2 className="mt-4 font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] max-w-3xl">
          Sua IA parece inteligente.
          <span className="text-bone/45"> Mas alguém já provou?</span>
        </h2>
        <p className="mt-5 max-w-xl text-bone/60 text-base">
          Seis sinais de que você está confiando sem verificar.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 rounded-2xl overflow-hidden border border-bone/10">
          {items.map((it, i) => (
            <div key={it.k} className="bg-background p-7">
              <div className="flex items-center gap-3 text-bone/50 text-xs font-mono">
                <span>0{i + 1}</span>
                <span className="h-px flex-1 bg-bone/10" />
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-bone">{it.k}</h3>
              <p className="mt-2 text-sm text-bone/55 leading-relaxed">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Auditoria", d: "Mapeamos cada agente, prompt e fluxo. Identificamos pontos cegos e riscos de regressão." },
    { n: "02", t: "Medição", d: "Implementamos avaliações automáticas, eval sets e dashboards de qualidade em produção." },
    { n: "03", t: "Otimização", d: "Reduzimos custo, latência e erros — com prova estatística, não com achismo." },
  ];
  return (
    <section id="como" className="relative py-28 px-6 border-t border-bone/10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Como funciona</SectionLabel>
        <h2 className="mt-4 font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] max-w-3xl">
          Três etapas para transformar
          <span className="font-serif italic text-electric"> fé em prova</span>.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-bone/10 bg-bone/[0.02] p-7 hover:border-electric/40 transition">
              <div className="font-mono text-xs text-electric">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl font-medium">{s.t}</h3>
              <p className="mt-3 text-bone/60 text-[15px] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const stats = [
    { v: "−38%", l: "custo médio de tokens" },
    { v: "+62%", l: "acurácia validada" },
    { v: "<24h", l: "para entregar diagnóstico" },
    { v: "100%", l: "sob NDA" },
  ];
  return (
    <section id="resultados" className="relative py-28 px-6 border-t border-bone/10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Resultados</SectionLabel>
        <h2 className="mt-4 font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] max-w-3xl">
          Números que substituem opiniões.
        </h2>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 rounded-2xl overflow-hidden border border-bone/10">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8">
              <div className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-bone">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-bone/50">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="relative py-28 px-6 border-t border-bone/10">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel center>Quem já verificou</SectionLabel>
        <blockquote className="mt-6 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] tracking-[-0.02em] text-bone">
          “Achávamos que nossa IA estava performando.
          <span className="text-bone/50"> A auditoria provou o contrário — e nos devolveu R$ 240k/ano em custo evitado.</span>”
        </blockquote>
        <div className="mt-7 flex items-center justify-center gap-3 text-sm text-bone/60">
          <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric/40" />
          <span className="text-bone">Head of AI</span>
          <span>·</span>
          <span>Fintech, São Paulo</span>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Quanto tempo leva o diagnóstico?", a: "Entre 5 e 10 dias úteis, dependendo da complexidade dos agentes envolvidos." },
    { q: "Vocês precisam acessar dados sensíveis?", a: "Não. Trabalhamos com amostras anonimizadas e tudo é coberto por NDA antes do início." },
    { q: "Funciona com qualquer LLM?", a: "Sim — OpenAI, Anthropic, Google, modelos open-source ou stacks híbridas." },
    { q: "E depois do diagnóstico?", a: "Você recebe um relatório acionável. Implementação contínua é opcional." },
  ];
  return (
    <section id="faq" className="relative py-28 px-6 border-t border-bone/10">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Perguntas frequentes</SectionLabel>
        <h2 className="mt-4 font-display font-medium text-4xl tracking-[-0.02em]">
          O que perguntam antes de começar.
        </h2>
        <div className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none text-bone">
                <span className="font-medium">{f.q}</span>
                <span className="text-electric text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-bone/60 text-[15px] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="diagnostico" className="relative py-28 px-6 border-t border-bone/10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel>Solicitar diagnóstico</SectionLabel>
          <h2 className="mt-4 font-display font-medium text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-[-0.035em]">
            Pare de torcer.
            <span className="block text-bone/45">Comece a <span className="font-serif italic text-bone">medir</span>.</span>
          </h2>
          <p className="mt-6 max-w-md text-bone/60 text-[15px] leading-relaxed">
            Respondemos em até 24h com um plano inicial — sem compromisso, sob NDA.
            Vagas limitadas por trimestre para garantir profundidade.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-bone/70">
            {["Diagnóstico inicial gratuito", "Relatório executivo entregue em 7 dias", "Sem lock-in, sem upsell forçado"].map((i) => (
              <li key={i} className="flex items-center gap-3"><Check /> {i}</li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function SectionLabel({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-electric" />
      <span className="text-xs uppercase tracking-[0.25em] text-bone/55">{children}</span>
    </div>
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
    }, 900);
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.7_0.18_255/0.15),transparent_60%)] blur-2xl" />

      <div className="relative border border-bone/10 bg-gradient-to-b from-bone/[0.04] to-bone/[0.01] backdrop-blur-sm rounded-2xl p-7 sm:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight">Comece em 60 segundos</h3>
            <p className="text-xs text-bone/50 mt-1">Resposta humana em até 24h.</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse shadow-[0_0_10px] shadow-electric" />
        </div>

        {sent ? (
          <div className="py-10 text-center rise">
            <div className="mx-auto w-16 h-16 rounded-full bg-electric/15 border border-electric/30 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-electric" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-display text-2xl font-medium">Recebido.</p>
            <p className="text-bone/60 mt-2 text-sm">
              Entraremos em contato em até 24h.
            </p>
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
              <label className="block text-xs font-medium text-bone/70 mb-1.5">
                Pedido / desejo
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="O que sua IA deveria entregar e onde você suspeita que ela falha."
                required
                className="w-full bg-bone/[0.03] border border-bone/10 focus:border-electric/60 focus:bg-bone/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone/30 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full mt-2 bg-electric text-ink py-3.5 rounded-xl font-medium text-sm transition hover:brightness-110 disabled:opacity-70 shadow-[0_10px_30px_-10px] shadow-electric"
            >
              {loading ? "Enviando…" : "Solicitar diagnóstico →"}
            </button>
            <p className="text-[11px] text-bone/40 text-center pt-1">
              Ao enviar, você concorda em ser contatado sobre o diagnóstico. Sem spam.
            </p>
          </form>
        )}
      </div>
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
        className="w-full bg-bone/[0.03] border border-bone/10 focus:border-electric/60 focus:bg-bone/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone/30 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-bone/10 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bone/45">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric" />
          <span className="text-bone/70 font-medium">Gomes Solutions</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <span className="font-serif italic text-bone/60 text-sm">
          Implementar IA é fácil. Provar que ela funciona é outra história.
        </span>
        <span>São Paulo · BR</span>
      </div>
    </footer>
  );
}
