import { Metadata } from 'next';
import ContactPageClient from './contact-page-client';

export const metadata: Metadata = {
  title: 'Contact Us | Dhruvini Consulting',
  description: "Get in touch with Dhruvini Consulting for expert talent acquisition and leadership hiring solutions. We're here to help you build your team.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
