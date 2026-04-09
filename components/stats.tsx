export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Rooted in District 37-B</h2>
                    <p className="text-muted-foreground">
                        Michele W. Johnson brings decades of public service, community leadership,
                        and Eastern Shore roots to the Maryland House of Delegates.
                    </p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">40+</div>
                        <p className="text-muted-foreground">Years of Maryland roots</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">4</div>
                        <p className="text-muted-foreground">Counties served in District 37-B</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">20+</div>
                        <p className="text-muted-foreground">Years of nonprofit leadership</p>
                    </div>
                </div>
            </div>
        </section>
    )
}