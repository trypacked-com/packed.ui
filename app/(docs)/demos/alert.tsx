import { Plane, Sun } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/ui/alert"

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert variant="warning">
        <Plane />
        <AlertTitle>Gate change</AlertTitle>
        <AlertDescription>
          <span className="font-mono">TP1234</span> now departs from gate{" "}
          <span className="font-mono">B7</span>.
        </AlertDescription>
      </Alert>
      <Alert variant="info">
        <Sun />
        <AlertTitle>Lisbon forecast</AlertTitle>
        <AlertDescription>
          Sunny, 24°C when you land tomorrow.
        </AlertDescription>
      </Alert>
    </div>
  )
}
