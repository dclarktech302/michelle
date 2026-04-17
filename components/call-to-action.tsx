import { Button } from '@/components/ui/button'
import Link from 'next/link'
import RevealOnScroll from '@/components/features/RevealOnScroll'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32 bg-primary text-primary-foreground">
            <div className="mx-auto max-w-5xl px-6">

                <RevealOnScroll variant="zoom">
                    <div className="text-center">
                        <h2 className="font-heading text-balance text-4xl font-semibold lg:text-5xl text-primary-foreground">
                            Ready to Make a Difference?
                        </h2>
                        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto text-lg">
                            District 37B deserves experienced, principled leadership in Annapolis.
                            Join the campaign — volunteer, donate, or spread the word.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" variant="secondary">
                                <Link href="/get-involved">
                                    Get Involved
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                                <Link
                                    href="https://secure.actblue.com/donate/michele-w--johnson-1"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Donate Now
                                </Link>
                            </Button>
                        </div>

                        <p className="mt-8 text-sm text-primary-foreground/60">
                            Prefer to donate by check? Make payable to{' '}
                            <span className="font-semibold text-primary-foreground/90">
                                Friends of Michele W. Johnson 37B
                            </span>
                            {' '}· PO Box 183, Trappe MD 21673
                        </p>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    )
}