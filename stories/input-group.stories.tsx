import type { Meta, StoryObj } from "@storybook/react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/ui/input-group";
import { Label } from "@/registry/ui/label";

const meta: Meta<typeof InputGroup> = {
  title: "UI/Input Group",
  component: InputGroup,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="flight-number">Flight number</Label>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText className="font-mono">TP</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="flight-number"
          className="font-mono"
          placeholder="1234"
        />
      </InputGroup>
    </div>
  ),
};

export const EndAddon: Story = {
  render: () => (
    <InputGroup className="max-w-xs">
      <InputGroupInput className="font-mono" placeholder="08:45" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Local</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};
