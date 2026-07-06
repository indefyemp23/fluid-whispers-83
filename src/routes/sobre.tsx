import { createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, Eye, Layers3, ShieldCheck, Workflow } from "lucide-react";

import {
  ButtonLink,
  FeatureCard,
  NoryxLayout,
  PageHero,
  ProcessSteps,
  Section,
  SectionHeader,
} from "@/components/noryx-site";
import { createPageHead } from "@/components/noryx-data";

export const Route = createFileRoute("/sobre")({
  head: () =>
    createPageHead({
      title: "Sobre a Noryx",
      description:
        "A Noryx une criacao, sistemas e inteligencia artificial para construir presenca, venda e operacao com mais clareza.",
    }),
  component: Sobre,
});

function Sobre() {
  return (
    <NoryxLayout stickyLabel="Conversar com a Noryx">
      <PageHero
        compact
        kicker="Sobre a Noryx"
        title="Tecnologia em estrutura visivel."
        text="Unimos criacao, sistemas e inteligencia artificial para ajudar empresas a construir presenca, venda e operacao com mais clareza."
        primaryLabel="Conversar com a Noryx"
        primaryHref="/contato"
        secondaryLabel="Ver servicos"
        secondaryHref="/servicos"
      />

      <Section>
        <SectionHeader
          kicker="Crenças"
          title="Boa execucao conecta percepcao, processo e resultado."
          text="A Noryx existe para impedir que IA, design e sistemas virem frentes desconectadas dentro da empresa."
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          {(
            [
              [
                "IA sem contexto vira ruido.",
                "Tecnologia precisa entender rotina, risco e objetivo.",
                BrainCircuit,
              ],
              [
                "Design sem estrategia vira enfeite.",
                "Imagem precisa sustentar promessa e decisao.",
                Eye,
              ],
              [
                "Sistema sem rotina vira ferramenta abandonada.",
                "A solucao precisa caber no trabalho real.",
                Workflow,
              ],
              [
                "Clareza antes do excesso.",
                "Complexidade so entra quando melhora a operacao.",
                ShieldCheck,
              ],
            ] as const
          ).map(([title, text, Icon], index) => (
            <FeatureCard
              key={String(title)}
              title={String(title)}
              text={String(text)}
              icon={Icon}
              delay={index * 55}
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          dark
          kicker="Como trabalhamos"
          title="Narrativa, estrutura, uso real e controle."
          text="Esses quatro principios mantem a solucao perto do que a empresa realmente precisa."
        />
        <ProcessSteps
          dark
          steps={[
            {
              title: "Narrativa",
              text: "Antes da ferramenta, definimos o que precisa ser entendido.",
            },
            { title: "Estrutura", text: "Antes da automacao, organizamos fluxo, papel e decisao." },
            {
              title: "Uso real",
              text: "Antes da complexidade, garantimos que a solucao seja operavel.",
            },
          ]}
        />
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <SectionHeader
            kicker="Noryx"
            title="Uma empresa para construir as camadas digitais que sustentam crescimento."
            text="Imagem para parecer forte. Paginas para vender com clareza. Operacao para funcionar com menos improviso."
          />
          <div className="rounded-[34px] border border-white/70 bg-white/86 p-6 shadow-[0_24px_88px_rgba(13,13,13,0.09)]">
            <Layers3 className="h-10 w-10 text-[#FF5722]" aria-hidden="true" />
            <p className="mt-5 text-3xl font-black leading-none tracking-[-0.06em]">
              O tecnico fica nos bastidores. O resultado aparece na experiencia.
            </p>
            <div className="mt-7">
              <ButtonLink href="/contato">Conversar com a Noryx</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </NoryxLayout>
  );
}
