import type { Meta, StoryObj } from "@storybook/react";
import { Plane, Sun } from "lucide-react";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertDismiss,
  AlertHeader,
  AlertIcon,
  AlertTime,
  AlertTitle,
} from "@/registry/ui/alert";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const GateChange: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertIcon>
        <Plane />
      </AlertIcon>
      <AlertContent>
        <AlertHeader>
          <AlertTitle>Gate change</AlertTitle>
          <AlertTime>2m ago</AlertTime>
        </AlertHeader>
        <AlertDescription>
          <span className="font-mono">TP1234</span> now departs from gate{" "}
          <span className="font-mono">B7</span>.
        </AlertDescription>
      </AlertContent>
      <AlertDismiss />
    </Alert>
  ),
};

export const Forecast: Story = {
  render: () => (
    <Alert variant="info">
      <AlertIcon>
        <Sun />
      </AlertIcon>
      <AlertContent>
        <AlertHeader>
          <AlertTitle>Lisbon forecast</AlertTitle>
          <AlertTime>1h ago</AlertTime>
        </AlertHeader>
        <AlertDescription>
          Sunny, 24°C when you land tomorrow.
        </AlertDescription>
      </AlertContent>
      <AlertDismiss />
    </Alert>
  ),
};
