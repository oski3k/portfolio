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

export interface ContactMessage extends ContactFormData {
  timestamp: any; // Using 'any' to avoid strict Firestore dependency in types for now, or we can import Timestamp
  read: boolean;
}
