import MobileSideBar from "@/components/SideBar";
import { cn } from "@/utils/helper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-[#F5F5F5]", "xl:overflow-hidden")}>
        <main className="max-w-[98vw] mx-auto">
          <div className="m-8 xl:grid xl:grid-cols-[280px,1fr,1fr,1fr] xl:gap-12">
            <div className="xl:col-span-1">
              <MobileSideBar />
            </div>
            <div className="mt-16 xl:mt-0 xl:overflow-y-auto xl:col-span-3">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
