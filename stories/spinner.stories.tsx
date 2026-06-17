import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "@/registry/ui/spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner />
      Checking gate <span className="font-mono">B7</span>…
    </div>
  ),
};
