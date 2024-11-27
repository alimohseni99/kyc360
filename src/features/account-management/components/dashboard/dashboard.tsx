import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header from "./header";

export function Dashboard() {
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

          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
            <h2 className="text-lg font-bold">Recent Account Activities</h2>
            <ul className="list-disc pl-6">
              <li>User: Ali Mohseni - Status: Verified</li>
              <li>User: Daniel Hormos - Status: Pending</li>
              <li>User: John Baba - Status: Unverified</li>
            </ul>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
