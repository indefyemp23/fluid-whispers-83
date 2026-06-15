
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  name TEXT,
  email TEXT,
  company TEXT,
  message TEXT NOT NULL,
  fbp TEXT,
  fbc TEXT,
  fbclid TEXT,
  landing_page TEXT,
  referrer TEXT,
  user_agent TEXT,
  language TEXT,
  timezone TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  campaign_id TEXT,
  adset_id TEXT,
  ad_id TEXT,
  campaign_name TEXT,
  adset_name TEXT,
  ad_name TEXT,
  placement TEXT,
  source TEXT,
  ip_address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT message_length_check CHECK (char_length(message) <= 1000),
  CONSTRAINT message_not_empty CHECK (char_length(trim(message)) > 0),
  CONSTRAINT phone_format_check CHECK (phone ~ '^\+[1-9][0-9]{7,17}$')
);

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX leads_phone_idx ON public.leads (phone);

GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No anon/authenticated policies: only service_role (server) can read/write.
