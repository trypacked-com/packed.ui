import type { Meta, StoryObj } from "@storybook/react"
import { Calendar, ChevronRight, Compass, Plane, Users } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof meta>

export const TripCard: Story = {
  render: () => (
    <Card interactive className="w-full max-w-xs">
      <CardHeader className="gap-3">
        <div className="flex items-center gap-2.5">
          <Avatar size="sm">
            <AvatarFallback className="bg-brand text-on-brand">MQ</AvatarFallback>
          </Avatar>
          <CardTitle className="text-base">Mara Quinn</CardTitle>
        </div>
        <CardDescription>Lisbon · Portugal</CardDescription>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-text">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-4 text-subtle" />
            Jun 14 – 21
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-4 text-subtle" />4
          </span>
        </div>
      </CardHeader>
      <CardFooter>
        <Plane className="size-4 shrink-0 text-brand" />
        <p className="min-w-0 flex-1 truncate text-sm text-muted-text">
          Boarding <span className="font-mono">TP1234</span> · Gate{" "}
          <span className="font-mono">B7</span>
        </p>
        <ChevronRight className="size-4 shrink-0 text-subtle" />
      </CardFooter>
    </Card>
  ),
}

export const StatCard: Story = {
  render: () => (
    <Card interactive className="w-full max-w-xs flex-row items-center gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-subtle text-brand [&_svg]:size-5">
        <Compass />
      </div>
      <CardHeader className="gap-0.5 p-0">
        <CardTitle className="font-serif text-3xl tracking-tight">8</CardTitle>
        <CardDescription>Active trips</CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const Basic: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Boarding soon</CardTitle>
        <CardDescription>
          We&apos;ll watch <span className="font-mono">TP1234</span> from here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-text">
          Gate <span className="font-mono">B7</span> ·{" "}
          <span className="font-mono">08:45</span>
        </p>
      </CardContent>
    </Card>
  ),
}
