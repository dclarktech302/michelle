import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heart, Users, Scale } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Fighting for What Matters
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Family, community, and public service are the pillars of Michele's life —
                        and the foundation of her platform.
                    </p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Heart className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Families First</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Supporting working families with access to affordable housing,
                                quality education, and economic opportunity across the lower Eastern Shore.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Community Investment</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm">
                                Strengthening the institutions, nonprofits, and local programs
                                that make Talbot, Dorchester, Wicomico, and Somerset counties
                                great places to live and work.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Scale className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Public Service</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm">
                                With experience in federal government, state government, and
                                nonprofit leadership, Michele brings real-world expertise
                                to Annapolis — not just politics.
                            </p>
                        </CardContent>
                    </Card>

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
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
            {children}
        </div>
    </div>
)