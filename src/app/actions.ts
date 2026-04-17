"use server";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"email", string>>;
};

export const initialNewsletterState: NewsletterState = {
  status: "idle",
  message: "",
};

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = sanitize(formData.get("email"));

  const errors: NewsletterState["errors"] = {};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "E-mail inválido.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revise o e-mail.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return {
      status: "error",
      message: "Serviço indisponível. Tente mais tarde.",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID || "",
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      if (error.message?.includes("already exists")) {
        return {
          status: "success",
          message: "E-mail já inscrito.",
        };
      }
      throw new Error(error.message || "Falha ao inscrever");
    }

    return {
      status: "success",
      message: "Inscrito com sucesso. Confira seu e-mail.",
    };
  } catch {
    return {
      status: "error",
      message: "Erro ao inscrever. Tente novamente.",
    };
  }
}
