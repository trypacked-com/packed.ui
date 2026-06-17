import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        Day 1
      </Button>
      <Button variant="outline" size="sm">
        Day 2
      </Button>
      <Button variant="outline" size="sm">
        Day 3
      </Button>
    </ButtonGroup>
  );
}
