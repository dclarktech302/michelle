import RevealOnScroll from "@/components/features/RevealOnScroll";
import { Card, CardContent } from "@/components/ui/card";

const endorsements = [
    {
        name: "Governor Wes Moore",
        title: "Governor of Maryland",
        initials: "WM",
    },
];

export default function Endorsements() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <RevealOnScroll variant="up">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-balance text-4xl font-semibold lg:text-5xl">
                            Endorsed By
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                            Leaders across Maryland are standing with Michele.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="flex flex-wrap justify-center gap-6">
                    {endorsements.map((e, i) => (
                        <RevealOnScroll key={e.name} variant="scale" delay={i * 100}>
                            <Card className="w-64 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
                                <CardContent className="pt-8 pb-6 px-6">
                                    <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl font-heading transition-transform duration-300 hover:scale-110">
                                        {e.initials}
                                    </div>
                                    <p className="font-semibold text-base">{e.name}</p>
                                    <p className="text-muted-foreground text-sm mt-1">{e.title}</p>
                                </CardContent>
                            </Card>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
