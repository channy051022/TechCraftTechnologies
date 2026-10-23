import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — TechCraft Technologies",
  description: "The terms that govern your use of TechCraft Technologies website and services.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    number: "01",
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the TechCraft Technologies website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.",
  },
  {
    id: "our-services",
    number: "02",
    title: "2. Our Services",
    content:
      "TechCraft Technologies designs and builds custom software, automation, and business systems. The specific scope, timeline, deliverables, and pricing of any project are defined in a separate written agreement between TechCraft Technologies and the client.",
  },
  {
    id: "client-responsibilities",
    number: "03",
    title: "3. Client Responsibilities",
    content:
      "You agree to provide accurate information, timely feedback, and any materials, access, or approvals we need to deliver our services effectively. Delays in providing these may affect project timelines.",
  },
  {
    id: "intellectual-property",
    number: "04",
    title: "4. Intellectual Property",
    content:
      "Ownership of project deliverables is defined in your project agreement. All TechCraft Technologies branding, website content, and pre-existing tools, frameworks, and methods remain the property of TechCraft Technologies.",
  },
  {
    id: "payments",
    number: "05",
    title: "5. Payments",
    content:
      "Fees, payment schedules, and payment terms are specified in your project agreement. Late or missed payments may result in delayed or paused work until accounts are settled.",
  },
  {
    id: "limitation-of-liability",
    number: "06",
    title: "6. Limitation of Liability",
    content:
      "To the fullest extent permitted by law, TechCraft Technologies is not liable for indirect, incidental, or consequential damages arising from the use of our website or services.",
  },
  {
    id: "termination",
    number: "07",
    title: "7. Termination",
    content:
      "Either party may end an engagement under the conditions set out in the project agreement. These website Terms of Service remain in effect for as long as you use our website.",
  },
  {
    id: "changes-to-terms",
    number: "08",
    title: "8. Changes to These Terms",
    content:
      "We may update these Terms from time to time. Continued use of our website after changes are posted means you accept the updated version.",
  },
  {
    id: "governing-law",
    number: "09",
    title: "9. Governing Law",
    content:
      "These Terms are governed by and interpreted in accordance with the laws of the Republic of the Philippines.",
  },
  {
    id: "contact-us",
    number: "10",
    title: "10. Contact Us",
    content:
      "If you have questions about these Terms of Service, reach out to us through the contact options on our website.",
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The terms that govern your use of our website and services."
      lastUpdated="May 18, 2026"
      activeDoc="terms"
      sections={sections}
    />
  );
}
