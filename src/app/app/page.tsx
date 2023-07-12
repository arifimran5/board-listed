import { redirect } from "next/navigation";

export default function AppPage() {
  redirect("/app/dashboard");
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
