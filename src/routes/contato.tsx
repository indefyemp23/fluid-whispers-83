import { createFileRoute } from "@tanstack/react-router";

import {
  ContactForm,
  NoryxLayout,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/noryx-site";
import { createPageHead } from "@/components/noryx-data";

export const Route = createFileRoute("/contato")({
  head: () =>
    createPageHead({
      title: "Contato - Noryx",
      description:
        "Conte onde sua empresa precisa ganhar clareza em imagem, venda, sites premium, operacao, sistemas ou governanca de IA.",
    }),
  component: Contato,
});

function Contato() {
  return (
    <NoryxLayout stickyLabel="Enviar diagnostico">
      <PageHero
        compact
        kicker="Contato"
        title="Conte onde sua empresa precisa ganhar clareza."
        text="Vamos entender se o melhor caminho agora e midia, site, operacao, IA ou uma combinacao entre essas camadas."
        primaryLabel="Preencher diagnostico"
        primaryHref="/contato#diagnostico"
        secondaryLabel="Ver servicos"
        secondaryHref="/servicos"
      />

      <Section id="diagnostico" className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <SectionHeader
            kicker="Diagnostico"
            title="Poucas respostas para chegar em uma conversa mais util."
            text="O formulario qualifica o ponto de partida para a Noryx indicar a frente mais adequada: midia, site, operacao ou uma combinacao."
          />
          <ContactForm />
        </div>
      </Section>
    </NoryxLayout>
  );
}
