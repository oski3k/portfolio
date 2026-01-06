import { Github, Linkedin, Mail, UserCircle, X } from "lucide-react";
import React from "react";
import { EMAIL } from "../../../constants";
import { trackContactFormSubmit } from "../../../hooks/useAnalytics";
import MagneticIcon from "./MagneticIcon";

interface ContactSocialProps {
  onCopyEmail: () => void;
}

const ContactSocial: React.FC<ContactSocialProps> = ({ onCopyEmail }) => {
  // UWAGA: Wpisałem tutaj Twoje nowe linki bezpośrednio, aby mieć pewność,
  // że są zgodne ze strategią SEO (bez zbędnych cyferek i błędów).
  const socialItems = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/oskarsledz/",
      name: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/oskarsledz",
      name: "GitHub",
    },
    {
      icon: X,
      href: "https://x.com/oskarsledz",
      name: "X (Twitter)",
    },
    {
      icon: UserCircle,
      href: "https://about.me/oskarsledz",
      name: "About.me",
    },
    {
      icon: Mail,
      href: `mailto:${EMAIL}`,
      name: "Email",
    },
  ];

  return (
    <div className="flex justify-center gap-8 mb-12 flex-wrap">
      {socialItems.map((item, idx) => (
        <MagneticIcon
          key={idx}
          index={idx}
          icon={item.icon}
          href={item.href}
          name={item.name}
          onClick={(e) => {
            if (item.href.startsWith("mailto")) {
              e.preventDefault();
              navigator.clipboard.writeText(EMAIL);
              onCopyEmail();
              trackContactFormSubmit("email_copy");
            }
          }}
        />
      ))}
    </div>
  );
};

export default ContactSocial;
