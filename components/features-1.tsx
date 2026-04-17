import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Shield, Heart, TrendingUp, Leaf, Users } from 'lucide-react'
import { ReactNode } from 'react'
import RevealOnScroll from '@/components/features/RevealOnScroll'

const platforms = [
    {
        icon: <Shield className="size-6" aria-hidden />,
        title: 'Strengthening Communities',
        body: 'Supporting safe and welcoming neighborhoods and communities across District 37B.',
    },
    {
        icon: <Heart className="size-6" aria-hidden />,
        title: 'Champion for Families, Youth, and Seniors',
        body: 'Supporting quality public schools, libraries, parks, higher education, child care, access to healthcare, and housing.',
    },
    {
        icon: <TrendingUp className="size-6" aria-hidden />,
        title: 'Creating Economic Opportunity',
        body: 'Empowering small local businesses and farmers; supporting heritage tourism, leveraging the new hospital, and creating well paying jobs of the future.',
    },
    {
        icon: <Leaf className="size-6" aria-hidden />,
        title: 'Protecting our Environment For Future Generations',
        body: 'Prioritizing clean air, clean water, flood protection, and public water access.',
    },
    {
        icon: <Users className="size-6" aria-hidden />,
        title: 'Supporting our Public Servants',
        body: 'Creating opportunities that enable our educators, healthcare workers, public safety workers, fire and rescue workers, and local government employees to live where they work.',
    },
]

export default function Features() {
    return (
        <section className="bg-muted/20 py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">

                <RevealOnScroll variant="up">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-balance text-4xl font-semibold lg:text-5xl">
                            Putting Community and People First
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                            Family, community, and public service are the pillars of Michele's
                            life and will be the foundation of her work in Annapolis.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 mb-6">
                    {platforms.slice(0, 2).map((item, i) => (
                        <RevealOnScroll key={item.title} variant="scale" delay={i * 150}>
                            <Card className="group shadow-zinc-950/5 h-full">
                                <CardHeader className="pb-3">
                                    <CardDecorator>{item.icon}</CardDecorator>
                                    <h3 className="mt-6 font-heading font-semibold text-lg text-center">
                                        {item.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                                        {item.body}
                                    </p>
                                </CardContent>
                            </Card>
                        </RevealOnScroll>
                    ))}
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                    {platforms.slice(2).map((item, i) => (
                        <RevealOnScroll key={item.title} variant="scale" delay={i * 150}>
                            <Card className="group shadow-zinc-950/5 h-full">
                                <CardHeader className="pb-3">
                                    <CardDecorator>{item.icon}</CardDecorator>
                                    <h3 className="mt-6 font-heading font-semibold text-base text-center">
                                        {item.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                                        {item.body}
                                    </p>
                                </CardContent>
                            </Card>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t text-primary">
            {children}
        </div>
    </div>
)