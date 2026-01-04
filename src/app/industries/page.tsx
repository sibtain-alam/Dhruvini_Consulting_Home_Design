import { industries } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code, Factory, Building2, HeartPulse, Banknote, ShoppingCart } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'Technology & SaaS': Code,
  'Manufacturing': Factory,
  'Real Estate': Building2,
  'Healthcare & Life Sciences': HeartPulse,
  'Financial Services': Banknote,
  'Consumer & Retail': ShoppingCart,
};

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-headline text-primary tracking-tight sm:text-5xl">
            Our Industry Expertise
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Our consultants possess deep domain knowledge across a wide range of industries. This allows us to understand your unique challenges and deliver tailored talent solutions that speak your language.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = iconMap[industry.name] || Code;
            const industryImages: Record<string, string> = {
              'Technology & SaaS': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
              'Manufacturing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
              'Real Estate': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
              'Healthcare & Life Sciences': 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
              'Financial Services': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
              'Consumer & Retail': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            };
            const image = industryImages[industry.name] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';

            return (
              <Card key={industry.name} className="group relative overflow-hidden border-none shadow-lg h-80 flex flex-col justify-end text-white">
                <img
                  src={image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-white/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-2xl mb-2">{industry.name}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-white/80 line-clamp-2 text-sm">{industry.description}</p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
