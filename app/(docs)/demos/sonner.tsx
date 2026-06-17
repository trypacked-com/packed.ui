"use client";

import { toast } from "sonner";

import { Button } from "@/registry/ui/button";
import { Toaster } from "@/registry/ui/sonner";

export default function SonnerDemo() {
  return (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast("Gate change", {
            description: (
              <>
                <span className="font-mono">TP1234</span> now departs from{" "}
                <span className="font-mono">B7</span>.
              </>
            ),
          })
        }
      >
        Show toast
      </Button>
    </>
  );
}
