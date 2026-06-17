import type { ComponentType } from "react";
import AccordionDemo from "./accordion";
import AlertDemo from "./alert";
import AlertDialogDemo from "./alert-dialog";
import AvatarDemo from "./avatar";
import BadgeDemo from "./badge";
import BreadcrumbDemo from "./breadcrumb";
import ButtonDemo from "./button";
import ButtonGroupDemo from "./button-group";
import CalendarDemo from "./calendar";
import CardDemo from "./card";
import CheckboxDemo from "./checkbox";
import DatePickerDemo from "./date-picker";
import CollapsibleDemo from "./collapsible";
import CommandDemo from "./command";
import DialogDemo from "./dialog";
import DrawerDemo from "./drawer";
import DropdownMenuDemo from "./dropdown-menu";
import EmptyDemo from "./empty";
import FieldDemo from "./field";
import FormDemo from "./form";
import HoverCardDemo from "./hover-card";
import InputDemo from "./input";
import InputGroupDemo from "./input-group";
import InputOtpDemo from "./input-otp";
import ItemDemo from "./item";
import KbdDemo from "./kbd";
import LabelDemo from "./label";
import MenubarDemo from "./menubar";
import NavigationMenuDemo from "./navigation-menu";
import PaginationDemo from "./pagination";
import PopoverDemo from "./popover";
import ProgressDemo from "./progress";
import RadioGroupDemo from "./radio-group";
import ScrollAreaDemo from "./scroll-area";
import SelectDemo from "./select";
import SeparatorDemo from "./separator";
import SheetDemo from "./sheet";
import SidebarDemo from "./sidebar";
import SkeletonDemo from "./skeleton";
import SliderDemo from "./slider";
import SonnerDemo from "./sonner";
import SpinnerDemo from "./spinner";
import SwitchDemo from "./switch";
import TableDemo from "./table";
import TabsDemo from "./tabs";
import TextareaDemo from "./textarea";
import ToggleDemo from "./toggle";
import ToggleGroupDemo from "./toggle-group";
import TooltipDemo from "./tooltip";

export const demos: Record<string, ComponentType> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  "button-group": ButtonGroupDemo,
  calendar: CalendarDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  "date-picker": DatePickerDemo,
  collapsible: CollapsibleDemo,
  command: CommandDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  empty: EmptyDemo,
  field: FieldDemo,
  form: FormDemo,
  "hover-card": HoverCardDemo,
  input: InputDemo,
  "input-group": InputGroupDemo,
  "input-otp": InputOtpDemo,
  item: ItemDemo,
  kbd: KbdDemo,
  label: LabelDemo,
  menubar: MenubarDemo,
  "navigation-menu": NavigationMenuDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  sidebar: SidebarDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  sonner: SonnerDemo,
  spinner: SpinnerDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  toggle: ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  tooltip: TooltipDemo,
};
