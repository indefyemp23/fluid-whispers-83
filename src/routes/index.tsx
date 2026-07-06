import { createFileRoute } from "@tanstack/react-router";
import { Check, Network, Sparkles } from "lucide-react";

import {
  ButtonLink,
  ContactForm,
  FeatureCard,
  HeroSystemVisual,
  NoryxLayout,
  PageHero,
  ProcessSteps,
  Section,
  SectionHeader,
  ServiceCard,
} from "@/components/noryx-site";
import { createPageHead, serviceRoutes, trustedSignals } from "@/components/noryx-data";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      title: "Noryx - Inteligencia aplicada a imagem, venda e operacao",
      description:
        "A Noryx cria midia comercial, sites premium e sistemas operacionais com IA para empresas que precisam vender e operar com mais clareza.",
    }),
  component: Index,
});

function Index() {
  return (
    <NoryxLayout stickyLabel="Diagnosticar meu projeto">
      <PageHero
        kicker="Noryx | imagem, venda e operacao"
        title="Sua empresa mais forte por fora, mais clara por dentro."
        text="Criamos midia comercial, sites premium e sistemas operacionais com IA para empresas que precisam transformar presenca, processo e decisao em vantagem real."
        primaryLabel="Diagnosticar meu projeto"
        primaryHref="/contato"
        secondaryLabel="Ver servicos"
        secondaryHref="/servicos"
        visual={<HeroSystemVisual />}
      />

      <Section>
        <SectionHeader
          kicker="Tres frentes"
          title="A mesma inteligencia aplicada ao que aparece, vende e funciona."
          text="A Noryx nao entrega pecas soltas. Construimos camadas digitais que deixam sua empresa mais apresentavel, mais comercial e mais facil de operar."
        />
        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {serviceRoutes.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 70} />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader
            dark
            compact
            kicker="O problema"
            title="O crescimento fica caro quando a empresa opera com improviso."
            text="Conteudo feito as pressas, paginas que nao sustentam a oferta, processos manuais e IA espalhada em ferramentas diferentes criam perda silenciosa."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Presenca digital inconsistente",
              "Campanhas sem padrao visual",
              "Processos manuais demais",
              "IA usada sem criterio",
              "Ofertas boas com baixa percepcao",
              "Falta de clareza sobre o proximo passo",
            ].map((item, index) => (
              <FeatureCard
                key={item}
                dark
                title={item}
                text="Quando a estrutura falha, venda e rotina sentem antes dos numeros explicarem."
                icon={index % 2 === 0 ? Sparkles : Network}
                delay={index * 45}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          kicker="Metodo"
          title="Primeiro entendemos o que precisa mudar. Depois construimos a camada certa."
          text="A abordagem e simples: diagnosticar o gargalo, construir a solucao e implantar de um jeito que a empresa consiga usar."
        />
        <ProcessSteps
          steps={[
            {
              title: "Diagnostico",
              text: "Mapeamos objetivo, gargalo, publico e impacto esperado antes de propor o formato.",
            },
            {
              title: "Construcao",
              text: "Criamos a solucao visual, digital ou operacional com foco em uso real.",
            },
            {
              title: "Implantacao",
              text: "Entregamos com orientacao, ajustes e caminho claro para continuidade.",
            },
          ]}
        />
      </Section>

      <Section className="pt-0">
        <div className="rounded-[34px] border border-white/70 bg-white/86 p-5 shadow-[0_24px_88px_rgba(13,13,13,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <SectionHeader
              compact
              kicker="Casos de uso"
              title="Para empresas que precisam transformar intencao em execucao."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Lancar ou reposicionar uma oferta",
                "Melhorar a percepcao da marca",
                "Criar paginas que vendem melhor",
                "Produzir criativos com consistencia",
                "Reduzir trabalho manual",
                "Aplicar IA sem perder controle",
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-h-[76px] items-center gap-3 rounded-[24px] border border-black/5 bg-[#F4F4F4] p-4 text-base font-black tracking-[-0.02em]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            dark
            kicker="Como pensamos"
            title="Tecnologia so importa quando muda a experiencia da empresa."
            text="A Noryx trabalha para conectar percepcao, processo e resultado. O tecnico existe, mas fica nos bastidores."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {trustedSignals.map((signal, index) => (
              <FeatureCard
                key={signal.title}
                dark
                title={signal.title}
                text={signal.text}
                icon={signal.icon}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Proximo passo"
              title="Vamos descobrir qual camada destrava mais valor agora."
              text="Conte rapidamente o que sua empresa precisa resolver. A resposta pode ser uma pagina, uma linha de midia, uma organizacao operacional ou uma combinacao entre elas."
            />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/servicos">Comparar servicos</ButtonLink>
              <ButtonLink href="/ebook" variant="secondary">
                Ver ebook
              </ButtonLink>
            </div>
          </div>
          <ContactForm compact />
        </div>
      </Section>
    </NoryxLayout>
  );
}
