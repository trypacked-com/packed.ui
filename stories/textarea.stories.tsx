import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/registry/ui/label";
import { Textarea } from "@/registry/ui/textarea";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="trip-notes">Trip notes</Label>
      <Textarea
        id="trip-notes"
        placeholder="Window seat if you can — and remind me about the lounge pass."
        rows={3}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, className: "max-w-xs", rows: 3 },
};

export const Invalid: Story = {
  args: { "aria-invalid": true, className: "max-w-xs", rows: 3 },
};
