import RevealOnScroll from '@/components/features/RevealOnScroll'

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20 bg-muted/30">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

                <RevealOnScroll>
                    <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center">
                        <h2 className="font-heading text-4xl font-semibold lg:text-5xl">
                            Rooted in District 37-B
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Michele W. Johnson brings decades of public service, community
                            leadership, and Eastern Shore roots to the Maryland House of Delegates.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">

                    <RevealOnScroll delay={0} className="space-y-3 py-6 md:py-0 md:px-8">
                        <div className="font-heading text-6xl font-bold text-primary">40+</div>
                        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                            Years of Maryland roots
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={150} className="space-y-3 py-6 md:py-0 md:px-8">
                        <div className="font-heading text-6xl font-bold text-primary">4</div>
                        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                            Counties served in District 37-B
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={300} className="space-y-3 py-6 md:py-0 md:px-8">
                        <div className="font-heading text-6xl font-bold text-primary">20+</div>
                        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                            Years of nonprofit leadership
                        </p>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    )
}