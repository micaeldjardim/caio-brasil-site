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

  const formspreeId = process.env.FORMSPREE_ID;

  if (!formspreeId) {
    return {
      status: "error",
      message: "Serviço indisponível. Tente mais tarde.",
    };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!response.ok) {
      throw new Error("Falha ao inscrever");
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
