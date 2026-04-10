import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="/images/candidate-hero.jpeg"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">

                                {/* Authority line pill */}
                                <AnimatedGroup variants={transitionVariants}>
                                    <div className="bg-muted mx-auto flex w-fit items-center gap-3 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm font-medium">
                                            Paid for by Friends of Michele W. Johnson
                                        </span>
                                    </div>
                                </AnimatedGroup>

                                {/* Candidate name */}
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold md:text-7xl lg:mt-10 xl:text-[5.25rem]">
                                    Michele W. Johnson
                                </TextEffect>

                                {/* Office + district */}
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.3}
                                    as="p"
                                    className="mx-auto mt-4 max-w-xl text-balance text-xl font-medium tracking-wide uppercase text-muted-foreground">
                                    Candidate for Maryland House of Delegates · District 37-B
                                </TextEffect>

                                {/* Counties */}
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-3 max-w-lg text-balance text-base text-muted-foreground">
                                    Serving Talbot · Dorchester · Wicomico · Somerset Counties
                                </TextEffect>

                                {/* CTAs */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
                                    <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-6 text-base">
                                            <Link href="/get-involved">
                                                <span className="text-nowrap">Get Involved</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-6">
                                        <Link
                                            href="https://secure.actblue.com/donate/michele-w--johnson-1"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <span className="text-nowrap">Donate Now</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        {/* Candidate photo */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative mt-12 overflow-hidden px-6 sm:mt-16 md:mt-20">
                                <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border shadow-lg shadow-zinc-950/15">
                                    <Image
                                        className="w-full object-cover object-top"
                                        src="/images/candidate-hero.jpeg"
                                        alt="Michele W. Johnson, Candidate for Maryland House of Delegates District 37-B"
                                        width="800"
                                        height="600"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>

                    </div>
                </section>
            </main>
        </>
    )
}