-- Contact form leads. The app also creates these tables on first use,
-- so running this file by hand is optional.

CREATE TABLE IF NOT EXISTS leads (
  id           BIGSERIAL PRIMARY KEY,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  name         TEXT NOT NULL,
  company      TEXT NOT NULL,
  phone        TEXT,
  email        TEXT NOT NULL,
  role         TEXT,
  message      TEXT,
  lang         TEXT NOT NULL,
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  referrer     TEXT,
  status       TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

-- Rate limiting: one row per submission attempt, keyed by a hash of the IP
-- (the IP itself is never stored). Rows older than a day are deleted.
CREATE TABLE IF NOT EXISTS lead_attempts (
  ip_hash    TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS lead_attempts_ip_idx ON lead_attempts (ip_hash, created_at);
