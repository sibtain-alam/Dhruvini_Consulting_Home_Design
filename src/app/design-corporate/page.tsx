import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Briefcase, Users, Award, Building2, Factory, Code, BarChart3, LineChart } from 'lucide-react';
import { services, industries, insights } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CorporateDesignPage() {
    const latestInsights = insights.slice(0, 3);

    const getPlaceholderImage = (id: string) => {
        return PlaceHolderImages.find(img => img.id === id);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#001233] text-white font-sans selection:bg-blue-500 selection:text-white">
            <main className="flex-1">

                {/* Hero Section - Asymmetric & Corporate */}
                <section className="relative pt-24 pb-16 md:py-32 overflow-hidden">
                    {/* Abstract Grid Background */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-12 gap-8 items-center">
                            <div className="col-span-12 md:col-span-7 space-y-8">
                                <div className="flex items-center gap-2 text-blue-400 font-mono text-sm tracking-wider uppercase">
                                    <div className="w-8 h-[2px] bg-blue-500"></div>
                                    Next Gen Operations
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
                                    Transforming HR & Business Operations with <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Data-Driven Strategy</span>
                                </h1>
                                <p className="text-slate-400 text-xl max-w-lg border-l-4 border-blue-900 pl-6">
                                    People analytics, automation, and dashboards that deliver measurable ROI.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all hover:translate-x-1">
                                        Explore Services
                                    </Link>
                                    <Link href="/insights" className="border border-slate-700 hover:border-blue-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all">
                                        See Insights
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Viz Element */}
                            <div className="col-span-12 md:col-span-5 relative hidden md:block">
                                <div className="relative aspect-square border border-blue-900/50 bg-blue-950/20 backdrop-blur-sm p-8">
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full"></div>
                                    <div className="h-full w-full border border-blue-500/20 flex items-center justify-center relative">
                                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#3b82f610_10px,#3b82f610_20px)]"></div>
                                        <BarChart3 className="w-32 h-32 text-blue-500/80" />
                                        <div className="absolute bottom-4 left-4 font-mono text-xs text-blue-400">
                                            DATA_POINTS: 4,200+
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section - Grid & Glass */}
                <section className="py-24 bg-[#001845]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12 md:col-span-4 pr-8">
                                <h2 className="text-4xl font-bold uppercase mb-6">Our <br />Capabilities</h2>
                                <p className="text-slate-400 mb-8 border-t border-slate-800 pt-6">
                                    We deploy advanced methodologies to optimize your organizational structure.
                                </p>
                                <div className="h-2 w-full bg-slate-800 overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-600"></div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-8 grid md:grid-cols-2 gap-4">
                                {services.map((service, idx) => {
                                    const Icon = {
                                        'Talent Acquisition': Users,
                                        'Executive Search': Briefcase,
                                        'Leadership Hiring': Award,
                                    }[service.title] || Users;

                                    return (
                                        <div key={service.id} className={`bg-slate-900/50 border border-slate-800 p-8 hover:border-blue-500 transition-colors ${idx === 1 ? 'md:translate-y-8' : ''}`}>
                                            <Icon className="h-8 w-8 text-blue-500 mb-6" />
                                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-sm text-slate-400 mb-6">{service.description}</p>
                                            <Link href={service.href} className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-white flex items-center gap-2">
                                                Details <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry - Dark Cards */}
                <section className="py-24 border-t border-slate-900 bg-[#001233]">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
                            <h2 className="text-4xl font-bold uppercase max-w-md">Designed for <span className="text-slate-600">Performance</span></h2>
                            <Button className="rounded-none bg-white text-black hover:bg-blue-400 hover:text-white transition-colors uppercase font-bold tracking-wider px-8 h-12">
                                View Industries
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-slate-800">
                            {industries.slice(0, 4).map((industry) => {
                                const industryImages: Record<string, string> = {
                                    'Technology & SaaS': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
                                    'Manufacturing': 'https://images.unsplash.com/photo-1565608444338-319ef2997879?auto=format&fit=crop&q=80&w=600',
                                    'Real Estate': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
                                    'Healthcare & Life Sciences': 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
                                };
                                const bgImage = industryImages[industry.name] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600';

                                return (
                                    <div key={industry.name} className="group relative border-r border-b border-slate-800 aspect-video md:aspect-auto overflow-hidden cursor-pointer">
                                        <Image
                                            src={bgImage}
                                            alt={industry.name}
                                            fill
                                            className="object-cover opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-[#001233]/60 group-hover:bg-[#001233]/20 transition-all" />
                                        <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight className="h-4 w-4 text-blue-500" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-300 group-hover:text-white uppercase tracking-widest">{industry.name}</h3>
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
