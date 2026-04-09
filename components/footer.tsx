import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    { title: 'About', href: '/about' },
    { title: 'Issues', href: '/issues' },
    { title: 'Events', href: '/events' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Get Involved', href: '/get-involved' },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">

                {/* Logo + candidate name */}
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit text-center">
                    <Logo />
                    <p className="mt-2 text-sm font-semibold tracking-wide">
                        Michele W. Johnson
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                        Candidate for Maryland House of Delegates · District 37-B
                    </p>
                </Link>

                {/* Nav links */}
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>

                {/* Social — Facebook only for now */}
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="https://www.facebook.com/share/1AvsFjomFE/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </Link>
                </div>

                {/* Donation info */}
                <div className="my-8 text-center text-sm text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">Donate by Check</p>
                    <p>Payable to: <span className="font-medium">Friends of Michele W. Johnson 37-B</span></p>
                    <p>PO Box 183 · Trappe, MD 21673</p>
                </div>

                {/* Authority line + copyright */}
                <div className="text-center text-xs text-muted-foreground space-y-1">
                    <p>Paid for by Friends of Michele W. Johnson</p>
                    <p>© {new Date().getFullYear()} Friends of Michele W. Johnson. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}