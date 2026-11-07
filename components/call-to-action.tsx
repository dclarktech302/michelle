import { Button } from '@/components/ui/button'
import Link from 'next/link'
import RevealOnScroll from '@/components/features/RevealOnScroll'
import { ELECTION_PHASE } from '@/lib/election-phase'

export default function CallToAction() {
    const after = ELECTION_PHASE === 'after'
    return (
        <section className="py-16 md:py-32 bg-primary text-primary-foreground">
            <div className="mx-auto max-w-5xl px-6">
                <RevealOnScroll variant="zoom">
                    <div className="text-center">
                        <h2 className="font-heading text-balance text-4xl font-semibold lg:text-5xl text-primary-foreground">
                            {after ? 'Thank You, District 37B' : 'Ready to Make a Difference?'}
                        </h2>
                        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto text-lg">
                            {after
                                ? 'Thank you to every volunteer, supporter, and neighbor who made this campaign possible.'
                                : <>District 37B deserves experienced, principled leadership in Annapolis.
                                Join the campaign — volunteer or spread the word.</>}
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" variant="secondary">
                                {after ? (
                                    <a
                                        href="https://www.facebook.com/share/1AvsFjomFE/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Follow on Facebook
                                    </a>
                                ) : (
                                    <Link href="/get-involved">Get Involved</Link>
                                )}
                            </Button>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}