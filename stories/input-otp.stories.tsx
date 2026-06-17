import type { Meta, StoryObj } from "@storybook/react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";
import { Label } from "@/registry/ui/label";

function InputOTPExample({ disabled }: { disabled?: boolean }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="verify-code">Verification code</Label>
      <InputOTP id="verify-code" maxLength={6} disabled={disabled}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

const meta: Meta<typeof InputOTPExample> = {
  title: "UI/Input OTP",
  component: InputOTPExample,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
