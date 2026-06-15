import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

/**
 * Normaliza um telefone para E.164 assumindo Brasil (+55) por padrão.
 * Retorna null se não conseguir gerar um número válido.
 */
function normalizeWhatsapp(raw: string): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return null;

  let candidate: string;
  if (hasPlus) {
    candidate = digits;
  } else if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) {
    candidate = digits;
  } else if (digits.length === 10 || digits.length === 11) {
    // Número BR sem DDI
    candidate = "55" + digits;
  } else if (digits.length >= 8 && digits.length <= 18) {
    // Sem DDI nem padrão BR claro — tenta prefixar 55
    candidate = "55" + digits;
  } else {
    return null;
  }

  if (candidate.length < 8 || candidate.length > 18) return null;
  if (candidate.startsWith("0")) return null;
  return "+" + candidate;
}

const attributionSchema = z
  .object({
    fbp: z.string().max(255).optional().nullable(),
    fbc: z.string().max(255).optional().nullable(),
    fbclid: z.string().max(512).optional().nullable(),
    landingPage: z.string().max(2048).optional().nullable(),
    referrer: z.string().max(2048).optional().nullable(),
    userAgent: z.string().max(1024).optional().nullable(),
    language: z.string().max(35).optional().nullable(),
    timezone: z.string().max(64).optional().nullable(),
    screenWidth: z.number().int().min(0).max(20000).optional().nullable(),
    screenHeight: z.number().int().min(0).max(20000).optional().nullable(),
    utm_source: z.string().max(255).optional().nullable(),
    utm_medium: z.string().max(255).optional().nullable(),
    utm_campaign: z.string().max(255).optional().nullable(),
    utm_content: z.string().max(255).optional().nullable(),
    utm_term: z.string().max(255).optional().nullable(),
    campaignId: z.string().max(64).optional().nullable(),
    adsetId: z.string().max(64).optional().nullable(),
    adId: z.string().max(64).optional().nullable(),
    campaignName: z.string().max(255).optional().nullable(),
    adsetName: z.string().max(255).optional().nullable(),
    adName: z.string().max(255).optional().nullable(),
    placement: z.string().max(128).optional().nullable(),
    source: z.string().max(128).optional().nullable(),
  })
  .partial();

const submitLeadSchema = z.object({
  phone: z.string().min(1, "WhatsApp é obrigatório.").max(40),
  message: z
    .string()
    .min(1, "Conte como podemos ajudar.")
    .max(1000, "Mensagem muito longa. Máximo de 1000 caracteres."),
  name: z.string().max(120).optional().nullable(),
  email: z.string().max(255).optional().nullable(),
  company: z.string().max(255).optional().nullable(),
  attribution: attributionSchema.optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submitLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const normalizedPhone = normalizeWhatsapp(data.phone);
    if (!normalizedPhone) {
      throw new Error(
        "Não conseguimos validar seu WhatsApp. Verifique o número (ex.: +55 11 99999-9999).",
      );
    }

    const ipHeader =
      getRequestHeader("x-forwarded-for") ??
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-real-ip") ??
      null;
    const ipAddress = ipHeader?.split(",")[0]?.trim() || getRequestIP({ xForwardedFor: true }) || null;

    const a = data.attribution ?? {};

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      phone: normalizedPhone,
      name: data.name?.trim() || null,
      email: data.email?.trim() || null,
      company: data.company?.trim() || null,
      message: data.message.trim(),
      fbp: a.fbp || null,
      fbc: a.fbc || null,
      fbclid: a.fbclid || null,
      landing_page: a.landingPage || null,
      referrer: a.referrer || null,
      user_agent: a.userAgent || null,
      language: a.language || null,
      timezone: a.timezone || null,
      screen_width: a.screenWidth ?? null,
      screen_height: a.screenHeight ?? null,
      utm_source: a.utm_source || null,
      utm_medium: a.utm_medium || null,
      utm_campaign: a.utm_campaign || null,
      utm_content: a.utm_content || null,
      utm_term: a.utm_term || null,
      campaign_id: a.campaignId || null,
      adset_id: a.adsetId || null,
      ad_id: a.adId || null,
      campaign_name: a.campaignName || null,
      adset_name: a.adsetName || null,
      ad_name: a.adName || null,
      placement: a.placement || null,
      source: a.source || null,
      ip_address: ipAddress,
    });

    if (error) {
      console.error("[submitLead] insert error", error);
      if (error.message?.includes("phone_format_check")) {
        throw new Error("WhatsApp em formato inválido.");
      }
      if (error.message?.includes("message_length_check")) {
        throw new Error("Mensagem muito longa. Máximo de 1000 caracteres.");
      }
      throw new Error("Não foi possível registrar seu contato. Tente novamente.");
    }

    return { ok: true as const };
  });