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
                            Join the campaign — volunteer or spread the word.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" variant="secondary">
                                <Link href="/get-involved">
                                    Get Involved
                                </Link>
                            </Button>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}