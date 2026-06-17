import { AlertCircle, Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert>
        <Info />
        <AlertTitle>Gate update</AlertTitle>
        <AlertDescription>
          <span className="font-mono">TP1234</span> now boards at gate{" "}
          <span className="font-mono">B7</span>.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>Flight cancelled</AlertTitle>
        <AlertDescription>
          We'll help you find the next option to Lisbon.
        </AlertDescription>
      </Alert>
    </div>
  );
}
