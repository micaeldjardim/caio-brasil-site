export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"nome" | "email" | "telefone" | "mensagem", string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};
