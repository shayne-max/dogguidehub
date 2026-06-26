// Deploy: supabase functions deploy sync-mailerlite
// Set secrets: supabase secrets set MAILERLITE_API_KEY=xxx MAILERLITE_GROUP_ID=xxx
// Then create a Database Webhook in Supabase Dashboard:
//   Table: subscribers | Event: INSERT | Type: HTTP Request -> this function's URL

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const MAILERLITE_API_KEY = Deno.env.get("MAILERLITE_API_KEY")!;
const MAILERLITE_GROUP_ID = Deno.env.get("MAILERLITE_GROUP_ID")!;

serve(async (req) => {
  try {
    const payload = await req.json();
    const email = payload?.record?.email;

    if (!email) {
      return new Response(JSON.stringify({ error: "No email in payload" }), { status: 400 });
    }

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        groups: [MAILERLITE_GROUP_ID],
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify({ ok: res.ok, data }), {
      status: res.ok ? 200 : 502,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
});
