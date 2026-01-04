import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, Users, Award, Building2, Factory, Code } from 'lucide-react';
import { services, industries, insights } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HumanDesignPage() {
    const latestInsights = insights.slice(0, 3);

    const getPlaceholderImage = (id: string) => {
        return PlaceHolderImages.find(img => img.id === id);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-neutral-800">
            <main className="flex-1">
                {/* Hero Section - Minimal & Warm */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-white"></div>
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6 tracking-wide">
                            HUMAN-CENTRIC STRATEGY
                        </span>
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-900 mb-8 leading-tight">
                            Transforming HR & Business Operations with <span className="font-serif italic text-orange-600">Data-Driven Strategy</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-500 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                            People analytics, automation, and dashboards that deliver measurable ROI.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/services" className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">
                                Our Services
                            </Link>
                            <Link href="/case-studies" className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white px-8 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section - Clean Cards */}
                <section className="py-24 bg-neutral-50/50">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl font-light mb-2">How we help</h2>
                                <p className="text-neutral-500">Holistic solutions for modern organizations</p>
                            </div>
                            <Link href="/services" className="hidden md:flex items-center text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors">
                                View all <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service) => {
                                const Icon = {
                                    'Talent Acquisition': Users,
                                    'Executive Search': Building2,
                                    'Leadership Hiring': Briefcase,
                                }[service.title] || Users;

                                const serviceImages: Record<string, string> = {
                                    'Talent Acquisition': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
                                    'Executive Search': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
                                    'Leadership Hiring': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
                                };

                                const bgImage = serviceImages[service.title] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800';

                                return (
                                    <div key={service.id} className="group flex flex-col bg-white rounded-2xl border border-neutral-100 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 overflow-hidden">
                                        {/* Service Image at Top */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={bgImage}
                                                alt={service.title}
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                                <Icon className="h-5 w-5 text-orange-600" />
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-xl font-medium mb-3 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{service.title}</h3>
                                            <p className="text-neutral-500 leading-relaxed mb-6 h-20 line-clamp-3">
                                                {service.description}
                                            </p>
                                            <Link href={service.href} className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-neutral-900 transition-colors">
                                                Learn more <ArrowRight className="ml-2 h-4 w-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Industry - Organic Flow */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-light mb-6">Expertise across <br /><span className="font-serif italic text-neutral-400">diverse industries</span></h2>
                                <p className="text-neutral-600 text-lg mb-8 leading-relaxed font-light">
                                    We understand that every sector has its own heartbeat. Our deep domain knowledge ensures we speak your language from day one.
                                </p>
                                <Link href="/industries" className="text-orange-600 font-medium hover:underline decoration-1 underline-offset-4">
                                    Explore all industries
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {industries.slice(0, 4).map((industry) => {
                                    const Icon = {
                                        'Technology & SaaS': Code,
                                        'Manufacturing': Factory,
                                        'Real Estate': Building2,
                                        'Healthcare & Life Sciences': Building2,
                                    }[industry.name] || Briefcase;

                                    const industryImages: Record<string, string> = {
                                        'Technology & SaaS': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
                                        'Manufacturing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
                                        'Real Estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
                                        'Healthcare & Life Sciences': 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
                                    };

                                    const bgImage = industryImages[industry.name] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600';

                                    return (
                                        <div key={industry.name} className="group relative aspect-square flex flex-col items-center justify-center overflow-hidden rounded-3xl cursor-default">
                                            <Image
                                                src={bgImage}
                                                alt={industry.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/50 transition-colors" />
                                            <div className="relative z-10 flex flex-col items-center text-white p-4">
                                                <Icon className="h-8 w-8 mb-3 opacity-80 group-hover:scale-110 transition-transform" />
                                                <span className="font-medium text-center text-sm tracking-tight">{industry.name}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Insights - Modern Blog */}
                <section className="py-24 bg-neutral-900 text-white rounded-t-[3rem] mt-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-light mb-4 text-white">Latest thinking</h2>
                            <p className="text-neutral-400 max-w-2xl mx-auto">Insights on leadership, culture, and the future of work.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
                            {latestInsights.map((insight) => {
                                const image = getPlaceholderImage(insight.id);
                                return (
                                    <div key={insight.id} className="bg-neutral-900 flex flex-col hover:bg-neutral-800 transition-colors group">
                                        {image && (
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={image.description}
                                                    fill
                                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                />
                                            </div>
                                        )}
                                        <div className="p-8">
                                            <div className="text-xs font-medium text-orange-500 mb-4 uppercase tracking-wider">
                                                {new Date(insight.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                            </div>
                                            <h3 className="text-xl font-medium mb-3 leading-snug">
                                                <Link href={`/insights/${insight.slug}`} className="hover:text-orange-400 transition-colors">
                                                    {insight.title}
                                                </Link>
                                            </h3>
                                            <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                                {insight.excerpt}
                                            </p>
                                            <Link href={`/insights/${insight.slug}`} className="text-sm font-medium border-b border-white/20 pb-0.5 hover:border-orange-500 hover:text-orange-500 transition-all">
                                                Read article
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
