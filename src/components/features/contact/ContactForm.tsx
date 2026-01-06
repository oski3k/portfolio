import { motion } from "framer-motion";
import { AtSign, FileText, MessageSquare, Send, User } from "lucide-react";
import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useContactForm } from "../../../hooks/useContactForm";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";

interface ContactFormProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onError }) => {
  const { t } = useLanguage();
  const {
    formData,
    errors,
    status,
    errorMessage,
    handleChange,
    handleSubmit: hookSubmit,
  } = useContactForm();

  React.useEffect(() => {
    if (status === "success") {
      onSuccess();
    } else if (status === "error") {
      onError(errorMessage || "Error occurred");
    }
  }, [status, errorMessage, onSuccess, onError]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative"
    >
      <motion.div
        className="absolute -inset-[1px] bg-gradient-to-r from-accent via-purple-500 to-accent rounded-2xl opacity-0 blur-sm"
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50">
        <form onSubmit={hookSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              id="name"
              name="name"
              label={t.contact.form.nameLabel}
              placeholder={t.contact.form.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              disabled={status === "loading"}
              icon={<User className="w-4 h-4" />}
              containerClassName="col-span-1"
            />

            <Input
              id="email"
              name="email"
              label={t.contact.form.emailLabel}
              placeholder={t.contact.form.emailPlaceholder}
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              disabled={status === "loading"}
              icon={<AtSign className="w-4 h-4" />}
              containerClassName="col-span-1"
            />
          </div>

          <Input
            id="subject"
            name="subject"
            label={t.contact.form.subjectLabel}
            placeholder={t.contact.form.subjectPlaceholder}
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
            disabled={status === "loading"}
            icon={<FileText className="w-4 h-4" />}
          />

          <Textarea
            id="message"
            name="message"
            label={t.contact.form.messageLabel}
            placeholder={t.contact.form.messagePlaceholder}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            disabled={status === "loading"}
            icon={<MessageSquare className="w-4 h-4" />}
          />

          <Button
            type="submit"
            fullWidth
            isLoading={status === "loading"}
            leftIcon={
              !status.includes("loading") && <Send className="w-5 h-5" />
            }
          >
            {status === "loading"
              ? t.contact.form.sending
              : t.contact.form.sendButton}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
