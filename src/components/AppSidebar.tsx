import { UtensilsCrossed, Cookie, Bone, Building2, Home } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Início", url: "/", icon: Home },
  { title: "Comidinhas", url: "/comidas", icon: UtensilsCrossed },
  { title: "Biscoitos", url: "/biscoitos", icon: Cookie },
  { title: "Petiscos", url: "/petiscos", icon: Bone },
  { title: "Nutrovitta", url: "/nutrovitta", icon: Building2 },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-semibold">Categorias</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? "bg-primary/10 text-primary font-medium" : ""
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-base">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
