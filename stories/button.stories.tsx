import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

import { Button } from "@/registry/ui/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Add flight",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Save draft",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Cancel",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Remove trip",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "View details",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <Plus />
      Add flight
    </Button>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button>Add flight</Button>
        <Button variant="secondary">Save draft</Button>
        <Button variant="ghost">Cancel</Button>
        <Button variant="destructive">Remove trip</Button>
        <Button variant="outline">View details</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  ),
};
