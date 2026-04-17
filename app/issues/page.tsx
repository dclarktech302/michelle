import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heart, Users, Scale, GraduationCap } from 'lucide-react'
import { issues } from '@/data/issues'

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="size-5" />,
  Users: <Users className="size-5" />,
  Scale: <Scale className="size-5" />,
  GraduationCap: <GraduationCap className="size-5" />,
}

export const metadata = {
  title: 'Issues — Michele W. Johnson for Delegate',
  description:
    'Michele W. Johnson\'s platform for Maryland House of Delegates District 37B — families, community investment, public service, and education.',
}

export default function IssuesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold lg:text-5xl font-heading">Issues & Platform</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Michele's priorities for District 37B are rooted in the real needs
            of Eastern Shore families and communities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {issues.map(issue => (
            <Card key={issue.id} className="group shadow-zinc-950/5 p-2">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border bg-muted text-primary">
                    {issue.icon && iconMap[issue.icon]}
                  </div>
                  <h2 className="text-lg font-semibold font-heading">{issue.title}</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {issue.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border bg-muted/30 p-8 text-center space-y-4">
          <h2 className="text-xl font-semibold font-heading">Have a concern for the campaign?</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Michele wants to hear from constituents across all four counties.
            Reach out directly or follow along on Facebook.
          </p>

          <a
            href="https://www.facebook.com/share/1AvsFjomFE/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
            {'Follow on Facebook →'}
          </a>
        </div>

      </div>
    </main>
  )
}