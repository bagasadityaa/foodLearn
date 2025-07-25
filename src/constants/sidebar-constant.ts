import {
  Album,
  Armchair,
  LayoutDashboard,
  SquareMenu,
  Users,
} from "lucide-react";

export const SIDEBAR_MENU_LIST = {
  admin: [
    { title: "dashboard", url: "/admin", icon: LayoutDashboard },
    { title: "Menu", url: "/admin/menu", icon: SquareMenu },
    { title: "Table", url: "/admin/table", icon: Armchair },
    { title: "User", url: "/admin/user", icon: Users },
  ],
  cashier: [],
  kitchen: [],
};

export type SidebarMenuKey = keyof typeof SIDEBAR_MENU_LIST;
