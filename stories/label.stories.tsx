import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="gate">Gate</Label>
      <Input id="gate" className="font-mono" defaultValue="B7" />
    </div>
  ),
};
