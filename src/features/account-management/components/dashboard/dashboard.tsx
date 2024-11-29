import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";
import Header from "./header";

export async function Dashboard() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <Header place="Dashboard" />

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
              <h3 className="text-center text-sm font-medium">
                Accounts Created
              </h3>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
              <h3 className="text-center text-sm font-medium">
                Pending Verifications
              </h3>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
              <h3 className="text-center text-sm font-medium">
                Verified Accounts
              </h3>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1800}
              height={800}
              alt="Some Random Bank"
              className="rounded-l"
            />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
