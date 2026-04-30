"use server";

import { escapeHtml } from "@/lib/escape-html";

export async function sendServiceEmail(formData: FormData) {
  const tenantId = process.env.MICROSOFT_GRAPH_TENANT_ID;
  const clientId = process.env.MICROSOFT_GRAPH_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_GRAPH_CLIENT_SECRET;
  const senderEmail = process.env.MICROSOFT_GRAPH_SENDER_ID;

  const tokenUrl = "https://login.microsoftonline.com/" + tenantId + "/oauth2/v2.0/token";

  const title = (formData.get("form_title") as string) || "Service Booking";
  const service = (formData.get("Service*") as string) || "N/A";
  const email = (formData.get("Email Address*") as string) || "N/A";

  try {
    const bodyParams = new URLSearchParams();
    bodyParams.append("client_id", clientId || "");
    bodyParams.append("client_secret", clientSecret || "");
    bodyParams.append("grant_type", "client_credentials");
    bodyParams.append("scope", "https://graph.microsoft.com/.default");

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: bodyParams.toString(),
      cache: "no-store",
    });

    if (!response.ok) return { success: false, error: "Authentication failed" };

    const tokenData = await response.json();
    const sendMailUrl = "https://graph.microsoft.com/v1.0/users/" + senderEmail + "/sendMail";

    const mailResponse = await fetch(sendMailUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + tokenData.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: "Fortis Website Inquiry: " + title,
          body: {
            contentType: "HTML",
            content: `
                <h2>New Booking Inquiry</h2>
                <p><strong>Selected Service:</strong> ${escapeHtml(service)}</p>
                <p><strong>Customer Email:</strong> ${escapeHtml(email)}</p>
              `,
          },
          toRecipients: [
            { emailAddress: { address: "marketing@fortissecure.co.uk" } },
          ],
        },
        saveToSentItems: false,
      }),
    });

    if (!mailResponse.ok) return { success: false, error: "Mail rejected" };

    return { success: true };
  } catch (err: unknown) {
    return { success: false, error: "Process failed" };
  }
}


export async function sendSubscribeEmail(formData: FormData) {
  const tenantId = process.env.MICROSOFT_GRAPH_TENANT_ID;
  const clientId = process.env.MICROSOFT_GRAPH_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_GRAPH_CLIENT_SECRET;
  const senderEmail = process.env.MICROSOFT_GRAPH_SENDER_ID;

  const tokenUrl = "https://login.microsoftonline.com/" + tenantId + "/oauth2/v2.0/token";
  
  const email = (formData.get("email") as string) || "N/A";

  try {
    const bodyParams = new URLSearchParams();
    bodyParams.append("client_id", clientId || "");
    bodyParams.append("client_secret", clientSecret || "");
    bodyParams.append("grant_type", "client_credentials");
    bodyParams.append("scope", "https://graph.microsoft.com/.default");

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: bodyParams.toString(),
      cache: "no-store",
    });

    if (!response.ok) return { success: false, error: "Authentication failed" };

    const tokenData = await response.json();
    const sendMailUrl = "https://graph.microsoft.com/v1.0/users/" + senderEmail + "/sendMail";

    const mailResponse = await fetch(sendMailUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + tokenData.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: "Fortis Website: New Newsletter Subscription",
          body: {
            contentType: "HTML",
            content: `
                <h2>New Newsletter Subscriber</h2>
                <p>A new user has requested to join the mailing list.</p>
                <p><strong>Subscriber Email:</strong> ${escapeHtml(email)}</p>
              `,
          },
          toRecipients: [
            { emailAddress: { address: "marketing@fortissecure.co.uk" } },
          ],
        },
        saveToSentItems: false,
      }),
    });

    if (!mailResponse.ok) {
      const errorText = await mailResponse.text();
      console.error("Graph API Error:", errorText);
      return { success: false, error: "Mail rejected" };
    }

    return { success: true };
  } catch (err: unknown) {
    return { success: false, error: "Process failed" };
  }
}

