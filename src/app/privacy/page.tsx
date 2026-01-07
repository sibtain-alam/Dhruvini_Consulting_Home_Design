import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Dhruvini Consulting',
    description: 'Our privacy policy details how we handle and protect your personal data.',
};

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 font-headline text-primary">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none">
                <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Dhruvini Consulting ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We may collect personal information such as your name, email address, and phone number when you contact us through our website forms or apply for a job through our careers page.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We use the information we collect to respond to your inquiries, process your job applications, and provide you with information about our services.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@dhruviniconsulting.com" className="text-primary hover:underline">info@dhruviniconsulting.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
