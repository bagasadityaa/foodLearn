import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-muted flex justify-center items-center h-screen flex-col space-y-4">
      <h1 className="text-4xl font-semibold">Wellcome, Bagas aditya</h1>
      <Link href="/admin">
        <Button className="bg-teal-500 hover:bg-black text-white">
          Access Dashboard
        </Button>
      </Link>
    </div>
  );
}
