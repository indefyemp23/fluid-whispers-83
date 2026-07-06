import { ArrowRight, Check, ChevronRight, Sparkles, type LucideIcon } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import { serviceRoutes, siteNav } from "@/components/noryx-data";
import { collectAttribution } from "@/lib/attribution";
import { submitLead } from "@/lib/lead-submit";

export function NoryxLayout({
  children,
  stickyLabel = "Conversar com a Noryx",
  stickyHref = "/contato",
}: {
  children: ReactNode;
  stickyLabel?: string;
  stickyHref?: string;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F4F4] pb-20 text-[#0D0D0D] antialiased selection:bg-[#FF5722] selection:text-white md:pb-0">
      <NoryxDesignCss />
      <SiteNav />
      <MobileStickyCTA href={stickyHref}>{stickyLabel}</MobileStickyCTA>
      {children}
      <SiteFooter />
    </main>
  );
}

export function SiteNav() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-1.5rem))] -translate-x-1/2">
      <div className="flex h-[62px] items-center justify-between rounded-[24px] border border-white/70 bg-white/84 px-4 shadow-[0_16px_52px_rgba(13,13,13,0.08)] backdrop-blur-xl sm:px-5">
        <a href="/" className="group flex items-center gap-3" aria-label="Noryx">
          <img
            src="/logo.jpg"
            alt="Noryx"
            className="h-8 w-auto rounded-[12px] object-contain shadow-[0_10px_24px_rgba(13,13,13,0.12)] transition group-hover:scale-105"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#5C5C5C] lg:flex">
          {siteNav.slice(1).map((item) => (
            <a key={item.href} className="hover-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/ebook"
            className="hidden rounded-[18px] border border-black/10 bg-white/70 px-4 py-3 text-xs font-black text-[#0D0D0D] transition hover:-translate-y-0.5 hover:border-[#FF5722]/35 md:inline-flex"
          >
            Ebook
          </a>
          <a
            href="/contato"
            className="rounded-[20px] bg-[#0D0D0D] px-4 py-3 text-xs font-bold text-white shadow-[0_12px_32px_rgba(13,13,13,0.18)] transition hover:-translate-y-0.5 hover:bg-[#FF5722] hover:shadow-[0_18px_44px_rgba(255,87,34,0.24)] sm:px-5 sm:text-sm"
          >
            Conversar
          </a>
        </div>
      </div>
    </header>
  );
}

function MobileStickyCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/94 px-4 py-3 shadow-[0_-14px_40px_rgba(13,13,13,0.10)] backdrop-blur-xl md:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href={href}
        className="flex min-h-12 items-center justify-center rounded-[18px] bg-[#0D0D0D] px-5 text-sm font-black text-white active:scale-[0.98]"
      >
        {children}
      </a>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  visual,
  compact = false,
}: {
  kicker: string;
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visual?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative isolate px-4 pt-28 sm:px-6 sm:pt-32 lg:pt-40">
      <GridBackdrop />
      <div
        className={`mx-auto grid max-w-6xl items-center gap-8 pb-12 sm:gap-12 sm:pb-16 ${
          visual ? "lg:grid-cols-[1fr_0.72fr] lg:gap-14 lg:pb-20" : "lg:pb-18"
        }`}
      >
        <Reveal>
          <div className={compact ? "max-w-4xl" : "max-w-[790px]"}>
            <Kicker>{kicker}</Kicker>
            <h1 className="title-hero mt-6 text-[clamp(2.35rem,9vw,5.55rem)] font-semibold leading-[1.02] tracking-normal text-[#0D0D0D] sm:mt-7">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#565656] sm:mt-7 sm:text-xl sm:leading-8">
              {text}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
              {secondaryLabel && secondaryHref ? (
                <ButtonLink href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </Reveal>
        {visual ? <Reveal delay={120}>{visual}</Reveal> : null}
      </div>
    </section>
  );
}

export function GridBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 opacity-[0.28] [background-image:linear-gradient(rgba(13,13,13,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
  );
}

export function Kicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${dark ? "bg-[#FF5722]" : "bg-[#0D0D0D]"}`} />
      <span
        className={`text-xs font-black uppercase tracking-[0.18em] ${dark ? "text-white/52" : "text-[#5C5C5C]"}`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeader({
  kicker,
  title,
  text,
  dark = false,
  compact = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "max-w-3xl" : "max-w-4xl"}>
      <Kicker dark={dark}>{kicker}</Kicker>
      <h2
        className={`title-section mt-4 text-[clamp(1.95rem,4.2vw,3.85rem)] font-semibold leading-[1.04] tracking-normal ${dark ? "text-white" : "text-[#0D0D0D]"}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-white/62" : "text-[#565656]"}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a href={href} className={variant === "primary" ? "primary-btn" : "secondary-btn"}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function Section({
  children,
  dark = false,
  className = "",
  id,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`section-skip px-4 py-12 sm:px-6 sm:py-16 lg:py-20 ${dark ? "bg-[#0D0D0D] text-white" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function ServiceCard({
  service,
  delay = 0,
}: {
  service: (typeof serviceRoutes)[number];
  delay?: number;
}) {
  const Icon = service.icon;
  return (
    <Reveal delay={delay}>
      <a
        href={service.href}
        className="group flex h-full min-h-[300px] flex-col rounded-[30px] border border-white/70 bg-white/84 p-6 shadow-[0_18px_62px_rgba(13,13,13,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_78px_rgba(13,13,13,0.12)]"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-[18px] bg-[#0D0D0D] text-white shadow-[0_12px_32px_rgba(13,13,13,0.18)]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-[#FF5722]/20 bg-[#FF5722]/10 px-3 py-1.5 text-xs font-black text-[#B63B17]">
            {service.signal}
          </span>
        </div>
        <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#FF5722]">
          {service.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-black leading-none tracking-[-0.05em]">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-[#5C5C5C]">{service.summary}</p>
        <p className="mt-5 text-base font-black leading-6 tracking-[-0.025em]">{service.outcome}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-[#0D0D0D]">
          Ver detalhes
          <ChevronRight
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </a>
    </Reveal>
  );
}

export function FeatureCard({
  title,
  text,
  icon,
  dark = false,
  delay = 0,
}: {
  title: string;
  text: string;
  icon?: LucideIcon;
  dark?: boolean;
  delay?: number;
}) {
  const Icon = icon ?? Check;
  return (
    <Reveal delay={delay}>
      <article
        className={`h-full min-h-[170px] rounded-[26px] border p-5 transition hover:-translate-y-1 ${
          dark
            ? "border-white/10 bg-white/[0.06] text-white hover:border-[#FF5722]/45 hover:bg-white/[0.1]"
            : "border-white/70 bg-white/84 shadow-[0_16px_54px_rgba(13,13,13,0.06)] hover:shadow-[0_24px_70px_rgba(13,13,13,0.10)]"
        }`}
      >
        <div
          className={`grid h-10 w-10 place-items-center rounded-[16px] ${dark ? "bg-white/[0.08] text-[#FFAB91]" : "bg-[#0D0D0D] text-white"}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-xl font-black leading-tight tracking-[-0.04em]">{title}</h3>
        <p className={`mt-3 text-sm leading-6 ${dark ? "text-white/62" : "text-[#5C5C5C]"}`}>
          {text}
        </p>
      </article>
    </Reveal>
  );
}

export function ProcessSteps({
  steps,
  dark = false,
}: {
  steps: readonly { title: string; text: string }[];
  dark?: boolean;
}) {
  return (
    <div className="mt-9 grid gap-3 md:grid-cols-3">
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={index * 55}>
          <div
            className={`min-h-[190px] rounded-[28px] border p-5 ${
              dark
                ? "border-white/10 bg-white/[0.06]"
                : "border-white/70 bg-white/84 shadow-[0_16px_54px_rgba(13,13,13,0.06)]"
            }`}
          >
            <span className={`text-sm font-black ${dark ? "text-[#FFAB91]" : "text-[#FF5722]"}`}>
              0{index + 1}
            </span>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">{step.title}</h3>
            <p className={`mt-3 text-sm leading-6 ${dark ? "text-white/62" : "text-[#5C5C5C]"}`}>
              {step.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function HeroSystemVisual() {
  return (
    <aside className="rounded-[34px] border border-white/80 bg-white/86 p-5 shadow-[0_24px_80px_rgba(13,13,13,0.11)] backdrop-blur-xl sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Noryx" className="h-10 w-auto rounded-[14px] object-contain" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FF5722]">
              Sistema Noryx
            </p>
            <h2 className="text-2xl font-black tracking-[-0.055em]">Imagem, venda, operacao.</h2>
          </div>
        </div>
      </div>

      <div className="mt-7 grid gap-3">
        {serviceRoutes.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="flex min-h-[86px] items-center gap-4 rounded-[24px] border border-black/5 bg-[#F4F4F4] p-4"
            >
              <div
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-[18px] ${index === 1 ? "bg-[#FF5722]" : "bg-[#0D0D0D]"} text-white`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-black leading-tight tracking-[-0.035em]">
                  {service.title}
                </p>
                <p className="mt-1 text-xs font-bold text-[#5C5C5C]">{service.signal}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-[26px] bg-[#0D0D0D] p-5 text-white">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/46">
          Proxima decisao
        </p>
        <p className="mt-3 text-2xl font-black leading-none tracking-[-0.055em]">
          Entender qual camada destrava mais valor agora.
        </p>
      </div>
    </aside>
  );
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [interest, setInterest] = useState<string[]>([]);
  const [problem, setProblem] = useState<string[]>([]);

  const toggle = (value: string, current: string[], setter: (next: string[]) => void) => {
    setter(
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const channel = String(fd.get("channel") ?? "").trim();
    const note = String(fd.get("note") ?? "").trim();

    if (!name) return setError("Informe seu nome.");
    if (!phone) return setError("Informe seu WhatsApp.");
    if (interest.length === 0) return setError("Selecione uma frente de interesse.");
    if (problem.length === 0) return setError("Selecione o que esta acontecendo hoje.");

    const message = [
      "Diagnostico Noryx",
      company ? `Empresa: ${company}` : null,
      channel ? `Site/Instagram: ${channel}` : null,
      "",
      "Frente de interesse:",
      ...interest.map((item) => `- ${item}`),
      "",
      "Situacao atual:",
      ...problem.map((item) => `- ${item}`),
      note ? "" : null,
      note ? "Observacao:" : null,
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
        company: company || null,
        message,
        attribution: collectAttribution(),
      });
      setSent(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Nao foi possivel enviar. Tente novamente.";
      setError(msg.replace(/^Error:\s*/i, ""));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white p-4 text-[#0D0D0D] shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:rounded-[34px] sm:p-7 ${compact ? "" : "sm:shadow-[0_24px_80px_rgba(0,0,0,0.18)]"}`}
    >
      {sent ? (
        <div className="py-16 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <Check className="h-7 w-7" aria-hidden="true" />
          </div>
          <p className="mt-5 text-2xl font-black tracking-[-0.04em]">Recebido.</p>
          <p className="mt-2 text-sm text-[#5C5C5C]">A Noryx retorna com o proximo passo.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FF5722]">
              Diagnostico
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.045em]">
              Vamos entender o projeto
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#5C5C5C]">
              Poucas respostas bastam para indicar se o caminho e imagem, site, operacao ou uma
              combinacao.
            </p>
          </div>

          <Field
            label="Nome *"
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            autoComplete="name"
          />
          <Field
            label="WhatsApp *"
            name="phone"
            type="tel"
            placeholder="+55 (44) 99999-9999"
            required
            autoComplete="tel"
          />
          <Field
            label="Empresa"
            name="company"
            type="text"
            placeholder="Nome da empresa"
            autoComplete="organization"
          />
          <Field
            label="Site ou Instagram"
            name="channel"
            type="text"
            placeholder="@marca ou site.com"
          />

          <ChoiceGroup
            label="Qual frente voce quer discutir? *"
            options={["Midia IA", "Sites Premium", "Operacao & IA", "Nao sei ainda"]}
            selected={interest}
            onToggle={(option) => toggle(option, interest, setInterest)}
          />

          <ChoiceGroup
            label="O que esta acontecendo hoje? *"
            options={[
              "Falta material para vender",
              "Site nao converte",
              "Operacao desorganizada",
              "IA sem controle",
              "Nova oferta",
            ]}
            selected={problem}
            onToggle={(option) => toggle(option, problem, setProblem)}
          />

          <div>
            <label htmlFor="note" className="mb-2 block text-xs font-bold text-[#0D0D0D]/70">
              Descreva em uma frase <span className="font-medium text-[#5C5C5C]">(opcional)</span>
            </label>
            <textarea
              id="note"
              name="note"
              rows={2}
              maxLength={260}
              placeholder="Ex.: precisamos melhorar a pagina e organizar o atendimento."
              className="input min-h-[86px] resize-none"
            />
          </div>

          {error ? (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[20px] bg-[#0D0D0D] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#FF5722] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Enviando..." : "Enviar diagnostico"}
          </button>
        </form>
      )}
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
              {active ? "OK " : ""}
              {option}
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
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="input"
      />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#F4F4F4] px-5 py-9 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 text-sm text-[#5C5C5C] md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="flex items-center gap-3 font-black text-[#0D0D0D]">
            <img src="/logo.jpg" alt="Noryx" className="h-8 w-auto rounded-[12px] object-contain" />
          </div>
          <p className="mt-3 max-w-xl leading-6">
            Inteligencia aplicada a imagem, venda e operacao para empresas que precisam transformar
            presenca e processo em vantagem real.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <a href="/servicos" className="hover-link">
            Servicos
          </a>
          <a href="/ebook" className="hover-link">
            Ebook
          </a>
          <a href="/contato" className="hover-link">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div className="reveal is-visible" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function NoryxDesignCss() {
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
        gap: 10px;
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
      .title-hero,
      .title-section {
        text-wrap: balance;
        max-width: 12.8ch;
      }
      .title-section {
        max-width: 15.5ch;
      }
      .reveal {
        opacity: 1;
        transform: translateY(0);
      }
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
      }
    `}</style>
  );
}
