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
import { NavProjects } from "@/features/account-management/components/dashboard/nav-projects";
import { NavUser } from "@/features/account-management/components/dashboard/nav-user";
import { TeamSwitcher } from "@/features/account-management/components/dashboard/team-switcher";

const data = {
  user: {
    name: "Admin",
    email: "admin@gamil.com",
    avatar: "",
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
          title: "In Progress",
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
  projects: [
    {
      name: "KYC Dashboard",
      url: "#",
      icon: ShieldCheck,
    },
    {
      name: "Fraud Detection",
      url: "#",
      icon: FileCheck,
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
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
