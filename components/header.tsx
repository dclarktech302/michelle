'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Issues', href: '/issues' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Get Involved', href: '/get-involved' },
]

const FacebookIcon = () => (
    <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true">
        <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
        />
    </svg>
)

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div
                    className={cn(
                        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                        isScrolled &&
                        'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5',
                    )}>

                    {/* Single flex row — logo | links | buttons */}
                    <div className="flex items-center justify-between py-3 lg:py-4">

                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center shrink-0">
                            <span className="font-semibold tracking-tight text-foreground">
                                Michele W. Johnson
                            </span>
                        </Link>

                        {/* Desktop center nav links */}
                        <ul className="hidden lg:flex gap-8 text-sm">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground hover:text-foreground block duration-150">
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop right buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="px-2"
                                aria-label="Follow on Facebook">
                                <Link
                                    href="https://www.facebook.com/share/1AvsFjomFE/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FacebookIcon />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className={cn(isScrolled && 'hidden')}>
                                <Link href="/get-involved">
                                    Get Involved
                                </Link>
                            </Button>

                            <Button asChild size="sm">
                                <Link
                                    href="https://secure.actblue.com/donate/michele-w--johnson-1"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Donate
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>
                    </div>

                    {/* Mobile menu dropdown */}
                    <div className={cn(
                        'lg:hidden overflow-hidden bg-background border-t border-border',
                        isMounted && 'transition-all duration-300',
                        menuState ? 'max-h-screen pb-6' : 'max-h-0'
                    )}>
                        <ul className="space-y-4 text-base border-t pt-4 mb-6">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuState(false)}
                                        className="text-muted-foreground hover:text-foreground block duration-150">
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-3">
                            <Button asChild variant="outline" size="sm">
                                <Link
                                    href="https://www.facebook.com/share/1AvsFjomFE/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuState(false)}>
                                    <FacebookIcon />
                                    <span className="ml-2">Follow on Facebook</span>
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                                <Link
                                    href="/get-involved"
                                    onClick={() => setMenuState(false)}>
                                    Get Involved
                                </Link>
                            </Button>
                            <Button asChild size="sm">
                                <Link
                                    href="https://secure.actblue.com/donate/michele-w--johnson-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuState(false)}>
                                    Donate
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}