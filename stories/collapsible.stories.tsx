import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Gate details
          <ChevronDownIcon className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2 text-sm text-muted-text">
        Your gate is <span className="font-mono">B7</span> — we&apos;ll ping you
        if it changes before departure at{" "}
        <span className="font-mono">08:45</span>.
      </CollapsibleContent>
    </Collapsible>
  ),
};
