export type Attribution = {
  fbp?: string | null;
  fbc?: string | null;
  fbclid?: string | null;
  landingPage?: string | null;
  referrer?: string | null;
  userAgent?: string | null;
  language?: string | null;
  timezone?: string | null;
  screenWidth?: number | null;
  screenHeight?: number | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  campaignId?: string | null;
  adsetId?: string | null;
  adId?: string | null;
  campaignName?: string | null;
  adsetName?: string | null;
  adName?: string | null;
  placement?: string | null;
  source?: string | null;
};

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export function collectAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const url = new URL(window.location.href);
  const q = url.searchParams;

  const fbclid = q.get("fbclid");
  let fbc = getCookie("_fbc");
  if (!fbc && fbclid) {
    fbc = `fb.1.${Date.now()}.${fbclid}`;
  }

  return {
    fbp: getCookie("_fbp"),
    fbc,
    fbclid,
    landingPage: window.location.href,
    referrer: document.referrer || null,
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenWidth: window.screen?.width ?? null,
    screenHeight: window.screen?.height ?? null,
    utm_source: q.get("utm_source"),
    utm_medium: q.get("utm_medium"),
    utm_campaign: q.get("utm_campaign"),
    utm_content: q.get("utm_content"),
    utm_term: q.get("utm_term"),
    campaignId: q.get("campaign_id"),
    adsetId: q.get("adset_id"),
    adId: q.get("ad_id"),
    campaignName: q.get("campaign_name"),
    adsetName: q.get("adset_name"),
    adName: q.get("ad_name"),
    placement: q.get("placement"),
    source: q.get("source"),
  };
}