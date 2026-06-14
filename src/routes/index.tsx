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
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <WaveDivider />
      <Diagnostico />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 py-6 flex items-center justify-between text-bone">
      <div className="flex items-center gap-2 rise">
        <span className="font-display text-xl tracking-tight">Gomes</span>
        <span className="font-sans text-xs uppercase tracking-[0.3em] opacity-60">Solutions</span>
      </div>
      <div className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-[0.25em] opacity-70 rise rise-delay-1">
        <span>São Paulo</span>
        <span className="w-1 h-1 rounded-full bg-electric" />
        <span>EST. 2024</span>
      </div>
      <a href="#diagnostico" className="rise rise-delay-2 text-xs uppercase tracking-[0.3em] border border-bone/20 hover:border-electric hover:text-electric transition-colors px-4 py-2 rounded-full">
        Diagnóstico →
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-32 sm:pb-40">
      {/* Image with gradient division */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Olho humano observado por fluxos de luz azul — simbolizando supervisão de IA"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Gradient division (left dark → right cinematic) */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,oklch(0.04_0.012_265)_0%,oklch(0.04_0.012_265/0.92)_38%,oklch(0.04_0.012_265/0.55)_60%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,oklch(0.62_0.27_262/0.25),transparent_60%)]" />
        <div className="cinema-grain" />
      </div>

      {/* Liquid morph blob */}
      <div className="pointer-events-none absolute -left-32 top-1/4 w-[520px] h-[520px] bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.27_262/0.45),transparent_70%)] water-blob blur-2xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 w-[280px] h-[280px] bg-[radial-gradient(circle_at_50%_50%,oklch(0.72_0.2_258/0.4),transparent_70%)] water-blob blur-3xl" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 text-bone">
        <p className="rise text-[10px] sm:text-xs uppercase tracking-[0.5em] text-electric mb-6">
          Diagnóstico de IA Empresarial
        </p>
        <h1 className="rise rise-delay-1 font-display font-light text-[clamp(3rem,11vw,11rem)] leading-[0.85] tracking-[-0.04em]">
          <span className="block">Você</span>
          <span className="block italic font-normal">confia <span className="text-electric">nela.</span></span>
          <span className="block text-bone/40">Mas quem verifica?</span>
        </h1>

        <div className="rise rise-delay-3 mt-10 max-w-xl text-base sm:text-lg text-bone/70 leading-relaxed">
          A maioria das empresas <em>implementa</em> IA. Poucas sabem se ela
          realmente funciona. Verificamos, medimos e otimizamos — para que
          confiar deixe de ser fé e passe a ser <span className="text-bone">prova</span>.
        </div>

        <div className="rise rise-delay-4 mt-12 flex items-center gap-6 flex-wrap">
          <a
            href="#diagnostico"
            className="group relative inline-flex items-center gap-3 bg-electric text-ink px-8 py-4 rounded-full font-medium text-sm uppercase tracking-[0.2em] pulse-ring transition-transform hover:scale-[1.03]"
          >
            Solicitar Diagnóstico
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <span className="text-xs uppercase tracking-[0.3em] text-bone/50">
            Confiar não é medir.
          </span>
        </div>

        <div className="rise rise-delay-5 shimmer-line mt-20 max-w-md" />
      </div>
    </section>
  );
}

function WaveDivider() {
  return (
    <div className="relative -mt-px h-[140px] sm:h-[200px] overflow-hidden bg-background">
      <svg
        className="absolute -top-1 left-0 w-[200%] h-full wave-anim"
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveG" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.62 0.27 262)" stopOpacity="0.0" />
            <stop offset="50%" stopColor="oklch(0.62 0.27 262)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.62 0.27 262)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 C1680,160 1920,0 2160,80 C2400,160 2640,0 2880,80 L2880,200 L0,200 Z"
          fill="oklch(0.04 0.012 265)"
        />
        <path
          d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 C1680,160 1920,0 2160,80 C2400,160 2640,0 2880,80"
          stroke="url(#waveG)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

function Diagnostico() {
  return (
    <section id="diagnostico" className="relative bg-background text-bone px-6 sm:px-10 pb-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-electric mb-6">
            O que resolvemos
          </p>
          <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
            Sua IA parece inteligente.
            <span className="block italic text-bone/50">Mas alguém já provou?</span>
          </h2>

          <ul className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-5 text-bone/80 text-sm">
            {[
              "IA respondendo errado",
              "Falta de supervisão",
              "Ausência de métricas",
              "Custos desnecessários",
              "Processos inconsistentes",
              "Agentes sem validação",
              "Otimização inexistente",
              "Decisões não verificadas",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 border-t border-bone/10 pt-4">
                <span className="text-electric font-mono text-xs mt-0.5">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-16 font-display italic text-2xl sm:text-3xl text-bone/90 leading-snug max-w-lg">
            “O que não é medido <span className="text-electric">não pode</span> ser otimizado.”
          </blockquote>
        </div>

        <ContactForm />
      </div>
    </section>
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
      {/* liquid backdrop */}
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.62_0.27_262/0.18),transparent_60%)] water-blob blur-2xl" />

      <div className="relative border border-bone/10 bg-bone/[0.02] backdrop-blur-sm rounded-3xl p-8 sm:p-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-electric">Formulário</p>
            <h3 className="font-display text-2xl mt-2">Solicitar Diagnóstico</h3>
          </div>
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
        </div>

        {sent ? (
          <div className="py-10 text-center rise">
            <div className="mx-auto w-20 h-20 rounded-full bg-electric/15 flex items-center justify-center water-blob mb-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-electric" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-display text-2xl">Recebido.</p>
            <p className="text-bone/60 mt-3 text-sm">
              Entraremos em contato em até 24h para iniciar seu diagnóstico.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Nome" name="name" type="text" placeholder="Como podemos chamar você" required />
            <Field label="E-mail corporativo" name="email" type="email" placeholder="voce@empresa.com" required />
            <Field label="WhatsApp / Telefone" name="phone" type="tel" placeholder="+55 (11) 99999-9999" required />
            <Field label="Empresa" name="company" type="text" placeholder="Razão social" />
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-bone/60 mb-2">
                Pedido / Desejo
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Conte o que sua IA deveria estar entregando e onde você suspeita que ela falha."
                required
                className="w-full bg-transparent border-b border-bone/20 focus:border-electric outline-none py-3 text-bone placeholder:text-bone/30 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full mt-4 bg-electric text-ink py-4 rounded-full font-medium text-sm uppercase tracking-[0.25em] overflow-hidden transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              <span className="relative z-10">{loading ? "Enviando…" : "Enviar pedido"}</span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_50%,oklch(0.97_0.01_250/0.3),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40 text-center pt-2">
              Resposta em até 24h
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
      <label htmlFor={name} className="block text-[10px] uppercase tracking-[0.3em] text-bone/60 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-bone/20 focus:border-electric outline-none py-3 text-bone placeholder:text-bone/30 transition-colors"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-bone/10 px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-bone/50">
      <span>© Gomes Solutions</span>
      <span className="font-display italic text-bone/70 normal-case tracking-normal text-sm">
        Implementar IA é fácil. Provar que ela funciona é outra história.
      </span>
      <span>Confiabilidade · Supervisão</span>
    </footer>
  );
}
