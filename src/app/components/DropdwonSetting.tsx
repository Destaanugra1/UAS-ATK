import {
  Cloud,
  LifeBuoy,
  LogOut,
  Users,
} from "lucide-react"

import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Wrench } from "lucide-react"
import { auth } from "../../../auth"
import SessionSignout from "./ui/session-singout"

interface Props {
  text: string;
  maxLength: number;
}

const TruncateText: React.FC<Props> = ({ text, maxLength }) => {
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <span>{truncatedText}</span>;
};


export async function  DropdownMenuDemo() {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-orange-500 rounded-full">
        <Button variant="outline" className="text-white font-bold">
          <Wrench width={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel><TruncateText text={session?.user?.name ?? "Unknown"} maxLength={5} /></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users />
            <span>Team Projek</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          <span><SessionSignout /></span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
