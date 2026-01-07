import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Dhruvini Consulting',
    description: 'The terms and conditions for using Dhruvini Consulting services and website.',
};

export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 font-headline text-primary">Terms of Service</h1>
            <div className="prose prose-slate max-w-none">
                <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use of the Site</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        You may use the site for lawful purposes only. You must not use the site in any way that causes damage to the site or impairment of its availability.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The content, logo, and design of this website are the property of Dhruvini Consulting and are protected by intellectual property laws.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Dhruvini Consulting shall not be liable for any damages arising out of the use or inability to use the materials on this website.
                    </p>
                </section>
            </div>
        </div>
    );
}
