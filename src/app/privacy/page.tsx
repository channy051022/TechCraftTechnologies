import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — TechCraft Technologies",
  description: "How TechCraft Technologies collects, uses, and protects your information.",
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    number: "01",
    title: "1. Introduction",
    content:
      "This Privacy Policy explains how TechCraft Technologies (\"we\", \"us\", or \"our\") collects, uses, and protects your information when you visit our website or work with us. By using our website, you agree to the practices described here.",
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "2. Information We Collect",
    content:
      "We collect information you provide directly — such as your name, email address, phone number, and business details — when you fill out a form, book a meeting, or contact us. We also collect basic usage data automatically through cookies and analytics.",
  },
  {
    id: "how-we-use-information",
    number: "03",
    title: "3. How We Use Your Information",
    content:
      "We use your information to respond to inquiries, schedule meetings, deliver and improve our services, operate our website, and send relevant updates you have agreed to receive.",
  },
  {
    id: "sharing-information",
    number: "04",
    title: "4. Sharing Your Information",
    content:
      "We do not sell your personal information. We may share it with trusted service providers who help us operate our business, and only to the extent necessary for them to perform their work.",
  },
  {
    id: "data-retention",
    number: "05",
    title: "5. Data Retention",
    content:
      "We keep your information only as long as needed to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.",
  },
  {
    id: "your-rights",
    number: "06",
    title: "6. Your Rights",
    content:
      "You may request access to, correction of, or deletion of your personal information at any time. To make a request, contact us through the options listed on our website.",
  },
  {
    id: "cookies",
    number: "07",
    title: "7. Cookies",
    content:
      "Our website uses cookies to remember your preferences and understand how visitors use the site. You can disable cookies through your browser settings, though some features may not work as intended.",
  },
  {
    id: "data-security",
    number: "08",
    title: "8. Data Security",
    content:
      "We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. No method of transmission over the internet is fully secure, however, and we cannot guarantee absolute security.",
  },
  {
    id: "changes-to-policy",
    number: "09",
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised \"last updated\" date.",
  },
  {
    id: "contact-us",
    number: "10",
    title: "10. Contact Us",
    content:
      "If you have questions about this Privacy Policy or how we handle your information, reach out to us through the contact options on our website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
      lastUpdated="May 18, 2026"
      activeDoc="privacy"
      sections={sections}
    />
  );
}
