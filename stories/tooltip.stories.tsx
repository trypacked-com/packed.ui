import type { Meta, StoryObj } from "@storybook/react";

import TooltipDemo from "@/app/(docs)/demos/tooltip";
import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TooltipDemo />,
};

export const Delayed: Story = {
  render: () => (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
        <Button variant="ghost">Departure time</Button>
      </TooltipTrigger>
      <TooltipContent>
        Scheduled <span className="font-mono">08:45</span> local time
      </TooltipContent>
    </Tooltip>
  ),
};
