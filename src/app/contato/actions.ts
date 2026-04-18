"use server";

import { type ContactState } from "./types";

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkokrpdj";

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

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone, mensagem }),
    });

    if (!response.ok) {
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
