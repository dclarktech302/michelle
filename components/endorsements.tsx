import Image from 'next/image'
import RevealOnScroll from '@/components/features/RevealOnScroll'
import Link from 'next/link'

export default function Endorsements() {
    return (
        <section className="border-y border-border bg-muted/20 py-8">
            <div className="mx-auto max-w-5xl px-6">
                <RevealOnScroll variant="up">
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">

                        {/* Label */}
                        <p className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase shrink-0">
                            Endorsed By
                        </p>

                        <div className="h-px w-full bg-border sm:hidden" />

                        {/* MSEA */}
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/MCEA-Apple-4cp-educatorRecommended-01.webp"
                                alt="MSEA Educator Recommended"
                                width={64}
                                height={64}
                                className="object-contain shrink-0"
                            />
                            <div>
                                <Link
                                    href="https://www.marylandeducators.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-150 leading-tight">
                                    Maryland State Education Association
                                </Link>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    2026 Election Cycle · Educator Recommended
                                </p>
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}