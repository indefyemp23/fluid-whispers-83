export type Attribution = {
  fbp?: string | null;
  fbc?: string | null;
  fbclid?: string | null;
  landingPage?: string | null;
  referrer?: string | null;
  userAgent?: string | null;
  campaignId?: string | null;
  adsetId?: string | null;
  adId?: string | null;
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
    campaignId: q.get("campaign_id"),
    adsetId: q.get("adset_id"),
    adId: q.get("ad_id"),
    placement: q.get("placement"),
    source: q.get("source"),
    landingPage: window.location.href,
    referrer: document.referrer || null,
    userAgent: navigator.userAgent,
  };
}
