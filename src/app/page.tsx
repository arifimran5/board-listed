import { redirect } from "next/navigation";

export default function Home() {
  redirect("/app/dashboard");

  return (
    <main>
      <h1>Hello there</h1>
    </main>
  );
}
