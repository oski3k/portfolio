import { Github, Linkedin, Mail, X } from "lucide-react";
import React from "react";
import { EMAIL, SOCIAL_LINKS } from "../../../constants";
import { trackContactFormSubmit } from "../../../hooks/useAnalytics";
import MagneticIcon from "./MagneticIcon";

interface ContactSocialProps {
  onCopyEmail: () => void;
}

const ContactSocial: React.FC<ContactSocialProps> = ({ onCopyEmail }) => {
  const socialItems = [
    { icon: Github, href: SOCIAL_LINKS.GITHUB, name: "GitHub" },
    { icon: Linkedin, href: SOCIAL_LINKS.LINKEDIN, name: "LinkedIn" },
    { icon: X, href: SOCIAL_LINKS.X, name: "X/Twitter" },
    { icon: Mail, href: `mailto:${EMAIL}`, name: "Email" },
  ];

  return (
    <div className="flex justify-center gap-8 mb-12">
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
