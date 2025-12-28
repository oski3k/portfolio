export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const errors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  } = {};

  if (!formData.name.trim()) {
    errors.name = "Imię jest wymagane";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Imię musi mieć co najmniej 2 znaki";
  }

  if (!formData.email.trim()) {
    errors.email = "Email jest wymagany";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Podaj poprawny adres email";
  }

  if (!formData.subject.trim()) {
    errors.subject = "Temat jest wymagany";
  } else if (formData.subject.trim().length < 3) {
    errors.subject = "Temat musi mieć co najmniej 3 znaki";
  }

  if (!formData.message.trim()) {
    errors.message = "Treść wiadomości jest wymagana";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Wiadomość musi mieć co najmniej 10 znaków";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
