import SideBar from "@/components/SideBar";
import { cn } from "@/utils/helper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-[#F5F5F5] xl:max-h-screen")}>
        <main className="max-w-[98vw] mx-auto">
          <div className="flex gap-4 m-8 lg:gap-12">
            <SideBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
