"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"nome" | "email" | "telefone" | "mensagem", string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = sanitize(formData.get("website"));
  if (honeypot) {
    return { status: "success", message: "Mensagem enviada." };
  }

  const nome = sanitize(formData.get("nome"));
  const email = sanitize(formData.get("email"));
  const telefone = sanitize(formData.get("telefone"));
  const mensagem = sanitize(formData.get("mensagem"));

  const errors: ContactState["errors"] = {};
  if (nome.length < 2) errors.nome = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "E-mail inválido.";
  if (mensagem.length < 10) errors.mensagem = "Descreva brevemente o caso (mín. 10 caracteres).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revise os campos destacados.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return {
      status: "error",
      message: "Serviço de e-mail indisponível. Tente pelo WhatsApp.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato pelo site — ${nome}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        ${telefone ? `<p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(mensagem)}</p>
      `,
    });

    if (error) {
      return {
        status: "error",
        message: "Não foi possível enviar. Tente novamente em instantes.",
      };
    }

    return {
      status: "success",
      message: "Mensagem recebida. Retornaremos em breve.",
    };
  } catch {
    return {
      status: "error",
      message: "Erro inesperado ao enviar. Tente pelo WhatsApp.",
    };
  }
}
