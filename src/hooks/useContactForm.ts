import { ChangeEvent, FormEvent, useState } from "react";
import { saveMessageToFirestore } from "../services/contactService";
import {
  ContactFormData,
  ContactFormErrors,
  ContactFormStatus,
} from "../types/contact";
import { validateContactForm } from "../utils/validation";
import { trackContactFormSubmit } from "./useAnalytics";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { isValid, errors: newErrors } = validateContactForm(formData);

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await saveMessageToFirestore(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      trackContactFormSubmit("firestore_message");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Wystąpił nieoczekiwany błąd. Spróbuj ponownie."
      );
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return {
    formData,
    errors,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    setStatus,
  };
};
