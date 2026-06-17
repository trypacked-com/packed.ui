import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle, Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <Info />
      <AlertTitle>Gate update</AlertTitle>
      <AlertDescription>
        <span className="font-mono">TP1234</span> now boards at gate{" "}
        <span className="font-mono">B7</span>.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircle />
      <AlertTitle>Flight cancelled</AlertTitle>
      <AlertDescription>
        We'll help you find the next option to Lisbon.
      </AlertDescription>
    </Alert>
  ),
};
