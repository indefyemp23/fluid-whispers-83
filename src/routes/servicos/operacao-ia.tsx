import { createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, ClipboardCheck, DatabaseZap, ShieldCheck, Workflow } from "lucide-react";

import {
  ButtonLink,
  FeatureCard,
  NoryxLayout,
  PageHero,
  ProcessSteps,
  Section,
  SectionHeader,
} from "@/components/noryx-site";
import { createPageHead, operationSolutions } from "@/components/noryx-data";

export const Route = createFileRoute("/servicos/operacao-ia")({
  head: () =>
    createPageHead({
      title: "Operacao, Sistemas e Governanca de IA - Noryx",
      description:
        "Organizacao operacional, sistemas personalizados, implantacao, auditoria e governanca de IA para empresas.",
    }),
  component: OperacaoIa,
});

function OperacaoIa() {
  return (
    <NoryxLayout stickyLabel="Auditar minha operacao">
      <PageHero
        kicker="Operacao, sistemas e IA"
        title="IA e sistemas para tirar sua operacao do improviso."
        text="Organizamos processos, criamos sistemas personalizados e implantamos governanca de IA para empresas que precisam transformar rotina, decisao e controle em vantagem operacional."
        primaryLabel="Auditar minha operacao"
        primaryHref="/contato"
        secondaryLabel="Ver solucoes"
        secondaryHref="/servicos/operacao-ia#solucoes"
        visual={<OperationVisual />}
      />

      <Section dark>
        <SectionHeader
          dark
          kicker="Quando procurar"
          title="O problema raramente e falta de ferramenta. Normalmente e falta de estrutura."
          text="A Noryx entra quando processos, dados, pessoas e IA precisam trabalhar com mais clareza."
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Planilhas e mensagens soltas",
            "IA usada sem medir risco",
            "Atendimento perde contexto",
            "Gestao nao enxerga o fluxo",
            "Retrabalho em tarefas repetidas",
            "Implantacao sem governanca",
          ].map((title, index) => (
            <FeatureCard
              key={title}
              dark
              title={title}
              text="Quando a operacao depende de improviso, crescer aumenta a friccao."
              icon={index % 2 === 0 ? Workflow : BrainCircuit}
              delay={index * 45}
            />
          ))}
        </div>
      </Section>

      <Section id="solucoes">
        <SectionHeader
          kicker="Solucoes"
          title="Da rotina solta para uma operacao mais visivel."
          text="Cada entrega busca reduzir perda operacional e aumentar controle sobre como a empresa executa."
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {operationSolutions.map((title, index) => (
            <FeatureCard
              key={title}
              title={title}
              text={
                [
                  "Mapeamento de rotina, gargalos, papeis, fluxo e padrao de execucao.",
                  "Reducao de friccao, retrabalho e etapas sem valor.",
                  "Ferramentas sob medida para centralizar operacao, dados e acao.",
                  "Apoio para colocar processos e ferramentas em uso real.",
                  "Leitura de risco, custo, qualidade e impacto em fluxos com IA.",
                  "Politicas, padroes e controle para IA operar com criterio.",
                ][index]
              }
              icon={
                [ClipboardCheck, Workflow, DatabaseZap, CheckIcon, BrainCircuit, ShieldCheck][index]
              }
              delay={index * 50}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-[34px] border border-white/70 bg-white/86 p-5 shadow-[0_24px_88px_rgba(13,13,13,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
          <SectionHeader
            compact
            kicker="Resultado"
            title="Menos dependencia de improviso. Mais controle sobre como a empresa funciona."
            text="O objetivo nao e trocar pessoas por tecnologia. E dar a operacao uma estrutura mais clara para decidir, executar e melhorar com menos perda pelo caminho."
          />
          <ProcessSteps
            steps={[
              {
                title: "Mapear",
                text: "Entender processo, ferramentas, pessoas e pontos de perda.",
              },
              {
                title: "Organizar",
                text: "Desenhar uma estrutura operacional mais simples e mensuravel.",
              },
              { title: "Implantar", text: "Colocar sistemas, IA e governanca em uso real." },
            ]}
          />
          <div className="mt-9">
            <ButtonLink href="/contato">Auditar minha operacao</ButtonLink>
          </div>
        </div>
      </Section>
    </NoryxLayout>
  );
}

const CheckIcon = ClipboardCheck;

function OperationVisual() {
  return (
    <aside className="rounded-[34px] border border-white/80 bg-white/86 p-5 shadow-[0_24px_80px_rgba(13,13,13,0.11)] backdrop-blur-xl sm:p-7">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FF5722]">
        Mapa operacional
      </p>
      <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.07em]">
        Processos que podem ser vistos.
      </h2>
      <div className="mt-7 grid gap-3">
        {[
          ["Entrada", "Briefing, lead, demanda"],
          ["Fluxo", "Responsavel, etapa, prazo"],
          ["Controle", "Risco, custo, proximo passo"],
        ].map(([label, title]) => (
          <div key={label} className="rounded-[24px] border border-black/5 bg-[#F4F4F4] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5C5C5C]">{label}</p>
            <p className="mt-1 text-xl font-black tracking-[-0.045em]">{title}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[26px] bg-[#0D0D0D] p-5 text-white">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/46">Governanca</p>
        <p className="mt-3 text-xl font-black tracking-[-0.045em]">
          IA com criterio, registro e responsabilidade.
        </p>
      </div>
    </aside>
  );
}
