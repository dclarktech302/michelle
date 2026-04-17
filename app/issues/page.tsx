import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Shield, Heart, TrendingUp, Leaf, Users } from 'lucide-react'
import { issues } from '@/data/issues'
import ContactForm from '@/components/features/ContactForm'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="size-5" />,
  Heart: <Heart className="size-5" />,
  TrendingUp: <TrendingUp className="size-5" />,
  Leaf: <Leaf className="size-5" />,
  Users: <Users className="size-5" />,
}

export const metadata = {
  title: 'Issues — Michele W. Johnson for Delegate',
  description:
    "Michele W. Johnson's platform for Maryland House of Delegates District 37B.",
}

export default function IssuesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-semibold lg:text-5xl">
            Issues &amp; Platform
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Family, community, and public service are the pillars of Michele's
            life and will be the foundation of her work in Annapolis.
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
                  <h2 className="text-lg font-semibold font-heading">
                    {issue.title}
                  </h2>
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

        <div className="mt-16 rounded-2xl border p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold font-heading">
              Have an idea or question for the campaign?
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Michele wants to hear from constituents across all four counties.
              Send a message directly to the campaign.
            </p>
          </div>
          <ContactForm />
        </div>

      </div>
    </main>
  )
}