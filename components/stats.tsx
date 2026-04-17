import RevealOnScroll from '@/components/features/RevealOnScroll'

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20 bg-muted/30">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

                <RevealOnScroll>
                    <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center">
                        <h2 className="font-heading text-4xl font-semibold lg:text-5xl">
                            Rooted in Maryland
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Michele is an experienced public servant and community leader
                            with strong Maryland roots who will listen, engage, and deliver
                            for the people and communities of District 37B.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <RevealOnScroll delay={0} className="space-y-3 py-6 md:py-0 md:px-8">
                        <div className="font-heading text-6xl font-bold text-primary">20+</div>
                        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                            Years nonprofit leadership
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={150} className="space-y-3 py-6 md:py-0 md:px-8">
                        <div className="font-heading text-6xl font-bold text-primary">10+</div>
                        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                            Years government experience
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={300} className="space-y-3 py-6 md:py-0 md:px-8">
                        <div className="font-heading text-6xl font-bold text-primary">20+</div>
                        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                            Years volunteer &amp; board service
                        </p>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    )
}