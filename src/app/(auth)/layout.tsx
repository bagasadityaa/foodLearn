import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Soup } from "lucide-react";
import { ReactNode } from "react";

type AuthLayoutProps = { children: ReactNode };
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <DarkmodeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex p-2 bg-blue-500 items-center justify-center rounded-md">
            <Soup className="size-4" />
          </div>
          Food
        </div>
        {children}
      </div>
    </div>
  );
}
