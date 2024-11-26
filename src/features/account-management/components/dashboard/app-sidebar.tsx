"use client";

import {
  Building,
  FileCheck,
  FileText,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
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
    name: "Bank User",
    email: "bankuser@test.com",
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
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Recent Activities",
          url: "#",
        },
      ],
    },
    {
      title: "Pending Verifications",
      url: "#",
      icon: UserPlus,
      items: [
        {
          title: "New Applications",
          url: "#",
        },
        {
          title: "In Progress",
          url: "#",
        },
        {
          title: "Rejected Applications",
          url: "#",
        },
      ],
    },
    {
      title: "Accounts",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "View All Accounts",
          url: "#",
        },
        {
          title: "Create New Account",
          url: "/create-account",
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
    {
      name: "Account Management",
      url: "#",
      icon: Building,
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
