import Link from 'next/link'
import { Button } from './ui/button'

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

                <div className="text-center">
                    <p className="text-sm font-semibold tracking-wide">
                        Michele W. Johnson
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                        Candidate for Maryland House of Delegates · District 37B
                    </p>
                </div>

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
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                            />
                        </svg>
                    </Link>
                </div>

                <div className="my-8 text-center text-sm text-muted-foreground space-y-3">
                    <p className="font-medium text-foreground">Support the Campaign</p>
                    <Button asChild size="sm" className="w-full max-w-xs mx-auto flex justify-center">
                        <Link
                            href="https://secure.actblue.com/donate/michele-w--johnson-1"
                            target="_blank"
                            rel="noopener noreferrer">
                            Donate Now via ActBlue
                        </Link>
                    </Button>
                    <div className="space-y-1 pt-2">
                        <p className="font-medium text-foreground text-sm">Donate by check</p>
                        <p>Payable to Friends of Michele W. Johnson 37B</p>
                        <p>PO Box 183 · Trappe, MD 21673</p>
                    </div>
                </div>

                <div className="text-center text-xs text-muted-foreground space-y-1 border-t pt-8 mt-8">
                    <p>By Authority Friends of Michele W. Johnson 37B, Sarah Moerschel, Treasurer</p>
                    <p>© {new Date().getFullYear()} Friends of Michele W. Johnson 37B. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}