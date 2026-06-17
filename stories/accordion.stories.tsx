import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="gate-updates">
        <AccordionTrigger>When will I get gate updates?</AccordionTrigger>
        <AccordionContent>
          We watch your flight from check-in through boarding and notify you as
          soon as the gate is posted or changes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="share-itinerary">
        <AccordionTrigger>Can I share my itinerary?</AccordionTrigger>
        <AccordionContent>
          Yes — send a link to travel companions so everyone sees the same
          flights, gates, and times.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
