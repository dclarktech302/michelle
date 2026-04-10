import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import RevealOnScroll from '@/components/features/RevealOnScroll'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32 bg-muted/20">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">

                <RevealOnScroll variant="up">
                    <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center">
                        <h2 className="font-heading text-4xl font-semibold lg:text-5xl">
                            Voices from District 37-B
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Neighbors, community leaders, and longtime Eastern Shore residents
                            on why they're supporting Michele W. Johnson.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">

                    <RevealOnScroll variant="left" delay={0} className="sm:col-span-2 lg:row-span-2">
                        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:p-6 h-full">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-xl font-medium leading-relaxed">
                                        "Michele brings something rare to this race — she has actually
                                        done the work. Twenty years running nonprofits, eight years on
                                        the board of Elijah Cummings' youth program, and she still shows
                                        up at every community meeting. District 37-B needs that kind of
                                        experience in Annapolis."
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                                TK
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-semibold not-italic">
                                                Community Supporter
                                            </cite>
                                            <span className="text-muted-foreground block text-sm">
                                                Talbot County
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    </RevealOnScroll>

                    <RevealOnScroll variant="right" delay={100} className="md:col-span-2">
                        <Card className="h-full">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-lg font-medium leading-relaxed">
                                        "She understands what families on the lower shore actually
                                        need — not what looks good in a press release.
                                        That's why I'm with her."
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                                DR
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-semibold not-italic">
                                                Community Supporter
                                            </cite>
                                            <span className="text-muted-foreground block text-sm">
                                                Dorchester County
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    </RevealOnScroll>

                    <RevealOnScroll variant="left" delay={200}>
                        <Card className="h-full">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-sm leading-relaxed">
                                        "A lifelong public servant with real Eastern Shore roots.
                                        Michele has my full support."
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                                WC
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-semibold not-italic">
                                                Community Supporter
                                            </cite>
                                            <span className="text-muted-foreground block text-sm">
                                                Wicomico County
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    </RevealOnScroll>

                    <RevealOnScroll variant="right" delay={300}>
                        <Card className="h-full">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-sm leading-relaxed">
                                        "Finally a candidate who has done more than run for office.
                                        Michele knows how to get things done."
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                                SM
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-semibold not-italic">
                                                Community Supporter
                                            </cite>
                                            <span className="text-muted-foreground block text-sm">
                                                Somerset County
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    </RevealOnScroll>

                </div>

                <p className="text-center text-xs text-muted-foreground">
                    * Placeholder quotes — replace with real supporter testimonials before launch.
                </p>

            </div>
        </section>
    )
}