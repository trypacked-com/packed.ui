import type { Meta, StoryObj } from "@storybook/react"
import { Plane, Sun, X } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/ui/alert"
import { Button } from "@/registry/ui/button"

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  parameters: { layout: "centered" },
}

export default meta

type Story = StoryObj<typeof meta>

export const GateChange: Story = {
  render: () => (
    <Alert variant="warning" className="w-full max-w-sm">
      <Plane />
      <AlertTitle>Gate change</AlertTitle>
      <AlertDescription>
        <span className="font-mono">TP1234</span> now departs from gate{" "}
        <span className="font-mono">B7</span>.
      </AlertDescription>
      <AlertAction>
        <Button variant="ghost" size="icon-sm" aria-label="Dismiss">
          <X />
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const Forecast: Story = {
  render: () => (
    <Alert variant="info" className="w-full max-w-sm">
      <Sun />
      <AlertTitle>Lisbon forecast</AlertTitle>
      <AlertDescription>Sunny, 24°C when you land tomorrow.</AlertDescription>
    </Alert>
  ),
}
