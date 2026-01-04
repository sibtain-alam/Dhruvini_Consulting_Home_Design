import Link from 'next/link';
import { services } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Award } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'Talent Acquisition': Users,
  'Executive Search': Briefcase,
  'Leadership Hiring': Award,
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-headline text-primary tracking-tight sm:text-5xl">
          Our Expertise
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          We provide a comprehensive suite of services designed to meet your organization's most critical talent needs. From sourcing emerging leaders to placing C-suite executives, our solutions are tailored, strategic, and results-driven.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = iconMap[service.title] || Users;
          const serviceImages: Record<string, string> = {
            'Talent Acquisition': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
            'Executive Search': 'https://images.unsplash.com/photo-1491333078588-55b6733c7de6?auto=format&fit=crop&q=80&w=800',
            'Leadership Hiring': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
          };
          const image = serviceImages[service.title] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800';

          return (
            <Card key={service.id} className="flex flex-col group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 border border-white/30">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-white">{service.title}</CardTitle>
                </div>
              </div>
              <CardContent className="flex-grow flex flex-col p-8 bg-white">
                <p className="text-foreground/70 mb-8 leading-relaxed text-lg">{service.description}</p>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6">
                    <Link href={service.href}>
                      Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
