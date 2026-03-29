import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface QuoteRequest {
  name: string;
  email: string;
  event_date?: string;
  event_type?: string;
  guest_count?: number;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const quoteData: QuoteRequest = await req.json();

    const emailBody = `
New Quote Request Received!

Customer Details:
- Name: ${quoteData.name}
- Email: ${quoteData.email}
${quoteData.event_date ? `- Event Date: ${quoteData.event_date}` : ''}
${quoteData.event_type ? `- Event Type: ${quoteData.event_type}` : ''}
${quoteData.guest_count ? `- Guest Count: ${quoteData.guest_count}` : ''}

${quoteData.message ? `Message:\n${quoteData.message}` : 'No additional message provided.'}

---
This inquiry was submitted through the Bubbles 'N Brew website.
    `.trim();

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Bubbles N Brew <onboarding@resend.dev>",
        to: ["bbmobilebar25@gmail.com"],
        subject: `New Quote Request from ${quoteData.name}`,
        text: emailBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const result = await emailResponse.json();

    return new Response(
      JSON.stringify({ success: true, emailId: result.id }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in send-quote-notification:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
});
