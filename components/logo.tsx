import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('font-semibold tracking-tight text-foreground', className)}>
            Michele W. Johnson
        </span>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <span className={cn('font-semibold tracking-tight text-foreground text-sm', className)}>
            MWJ
        </span>
    )
}