export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type ContactFormStatus = "idle" | "loading" | "success" | "error";

export interface SubmitContactForm {
  (data: ContactFormData): Promise<{ success: boolean; error?: string }>;
}
