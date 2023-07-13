import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/signin");

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
