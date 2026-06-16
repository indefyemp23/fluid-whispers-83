import type { Attribution } from "@/lib/attribution";

export type SubmitLeadInput = {
  phone: string;
  name: string;
  email?: string | null;
  company?: string | null;
  message: string;
  attribution?: Attribution;
};

export async function submitLead(data: SubmitLeadInput) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  if (!supabaseUrl) {
    throw new Error("Missing Supabase URL.");
  }

  const response = await fetch(`${supabaseUrl}/functions/v1/submit-lead`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(result?.message || "Nao foi possivel registrar seu contato. Tente novamente.");
  }

  if (!result?.ok) {
    throw new Error(result?.message || "Nao foi possivel registrar seu contato. Tente novamente.");
  }

  return result as { ok: true; leadId?: string; metaSent?: boolean };
}
