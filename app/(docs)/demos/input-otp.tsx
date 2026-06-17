"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";
import { Label } from "@/registry/ui/label";

export default function InputOTPDemo() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="verify-code">Verification code</Label>
      <InputOTP id="verify-code" maxLength={6}>
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
