import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Ready to Make a Difference?
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        District 37-B deserves experienced, principled leadership in Annapolis.
                        Join the campaign — volunteer, donate, or spread the word.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/get-involved">
                                <span>Get Involved</span>
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link
                                href="https://secure.actblue.com/donate/michele-w--johnson-1"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span>Donate Now</span>
                            </Link>
                        </Button>
                    </div>

                    {/* Donation by check */}
                    <p className="mt-8 text-sm text-muted-foreground">
                        Prefer to donate by check? Make payable to{' '}
                        <span className="font-medium text-foreground">
                            Friends of Michele W. Johnson 37-B
                        </span>
                        {' '}and mail to PO Box 183, Trappe MD 21673.
                    </p>
                </div>
            </div>
        </section>
    )
}