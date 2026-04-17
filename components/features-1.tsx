import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heart, Users, Scale } from 'lucide-react'
import { ReactNode } from 'react'
import RevealOnScroll from '@/components/features/RevealOnScroll'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">

                <RevealOnScroll variant="up">
                    <div className="text-center mb-4">
                        <h2 className="font-heading text-balance text-4xl font-semibold lg:text-5xl">
                            Fighting for What Matters
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                            Family, community, and public service are the pillars of Michele's
                            life — and the foundation of her platform.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">

                    <RevealOnScroll variant="scale" delay={0}>
                        <Card className="group shadow-zinc-950/5 h-full">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Heart className="size-6" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-6 font-heading font-semibold text-lg">
                                    Families First
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Supporting working families across District 37B with access
                                    to affordable housing, quality schools, and economic opportunity.
                                    Every family on the lower Eastern Shore deserves a fair shot.
                                </p>
                            </CardContent>
                        </Card>
                    </RevealOnScroll>

                    <RevealOnScroll variant="scale" delay={150}>
                        <Card className="group shadow-zinc-950/5 h-full">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Users className="size-6" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-6 font-heading font-semibold text-lg">
                                    Community Investment
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    Strengthening the local nonprofits, civic institutions, and
                                    community programs that make Talbot, Dorchester, Wicomico,
                                    and Somerset counties great places to live and work.
                                </p>
                            </CardContent>
                        </Card>
                    </RevealOnScroll>

                    <RevealOnScroll variant="scale" delay={300}>
                        <Card className="group shadow-zinc-950/5 h-full">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Scale className="size-6" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-6 font-heading font-semibold text-lg">
                                    Public Service
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    With experience in federal government, state government, and
                                    nonprofit leadership, Michele brings real-world expertise
                                    to Annapolis — not just politics.
                                </p>
                            </CardContent>
                        </Card>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t text-primary">
            {children}
        </div>
    </div>
)