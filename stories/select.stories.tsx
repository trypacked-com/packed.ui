import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/registry/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="cabin">Cabin</Label>
      <Select defaultValue="economy">
        <SelectTrigger id="cabin" className="w-full">
          <SelectValue placeholder="Choose cabin" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="economy">Economy</SelectItem>
          <SelectItem value="premium">Premium economy</SelectItem>
          <SelectItem value="business">Business</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <Select defaultValue="economy">
      <SelectTrigger size="sm" className="w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="economy">Economy</SelectItem>
        <SelectItem value="business">Business</SelectItem>
      </SelectContent>
    </Select>
  ),
};
