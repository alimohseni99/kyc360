"use client";

import { Building, FileCheck, ShieldCheck, UserPlus } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/features/account-management/components/dashboard/nav-main";
import { NavUser } from "@/features/account-management/components/dashboard/nav-user";
import { TeamSwitcher } from "@/features/account-management/components/dashboard/team-switcher";

const data = {
  user: {
    name: "Admin",
    email: "admin@gmail.com",
    avatar:
      "https://plus.unsplash.com/premium_photo-1723028769916-a767a6b0f719?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  teams: [
    {
      name: "Compliance",
      logo: ShieldCheck,
      plan: "Enterprise",
    },
    {
      name: "Customer Support",
      logo: UserPlus,
      plan: "Standard",
    },
    {
      name: "Risk Management",
      logo: Building,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: FileCheck,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
      ],
    },

    {
      title: "Accounts",
      url: "#",
      icon: UserPlus,
      items: [
        {
          title: "New Applications",
          url: "/dashboard/create-account",
        },
        {
          title: "Waiting For Approval",
          url: "/dashboard/waiting-for-approval",
        },
        {
          title: "Pending",
          url: "/dashboard/in-progress",
        },
        {
          title: "Rejected Applications",
          url: "/dashboard/rejected",
        },
        {
          title: "Verified Applications",
          url: "/dashboard/verified",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
