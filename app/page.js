import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Subscribe</h2>
      <Link href="/dashboard" passHref>
        <Button> Subscribe </Button>
      </Link>
    </div>
  );
}
