import { Github, Instagram, Linkedin, Mail, UserCircle } from "lucide-react";
import React from "react";
import { EMAIL } from "../../../constants";
import { trackContactFormSubmit } from "../../../hooks/useAnalytics";
import MagneticIcon from "./MagneticIcon";

interface ContactSocialProps {
  onCopyEmail: () => void;
}

const ContactSocial: React.FC<ContactSocialProps> = ({ onCopyEmail }) => {
  const socialItems = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/oskarsledz/",
      name: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/oski3k",
      name: "GitHub",
    },
    {
      icon: (props) => (
        <svg
          viewBox="-3 -3 30 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
      href: "https://x.com/devoskarsledz",
      name: "X (Twitter)",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/oski3k/",
      name: "Instagram",
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
