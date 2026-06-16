import { supabase } from "@/integrations/supabase/client";
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
  const { data: result, error } = await supabase.functions.invoke("submit-lead", {
    body: data,
  });

  if (error) {
    throw new Error(error.message || "Nao foi possivel registrar seu contato. Tente novamente.");
  }

  if (!result?.ok) {
    throw new Error(result?.message || "Nao foi possivel registrar seu contato. Tente novamente.");
  }

  return result as { ok: true; leadId?: string; metaSent?: boolean };
}
