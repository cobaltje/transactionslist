import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ltxfberphixsdcryvmsn.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0eGZiZXJwaGl4c2Rjcnl2bXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3OTcyNzEsImV4cCI6MjAwNTM3MzI3MX0.fmZF9SE1RMSmZYexNVufBb-SINYMVcj1I1tIFo7ja2M";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
