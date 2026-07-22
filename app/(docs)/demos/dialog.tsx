"use client";

import { Button } from "@/registry/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Add flight</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a flight</DialogTitle>
          <DialogDescription>
            We&apos;ll watch it from here and keep you in the loop.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="flight-number">Flight number</Label>
          <Input
            id="flight-number"
            placeholder="TP1234"
            className="font-mono"
          />
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Add flight</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
