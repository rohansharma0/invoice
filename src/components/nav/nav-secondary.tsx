import * as React from "react";
import { type LucideIcon } from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import type { AppRoute } from "@/config/Routes";

export function NavSecondary({
    items,
    ...props
}: {
    items: AppRoute[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    const { pathname } = useLocation();
    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.sideBarTitle}>
                            <SidebarMenuButton
                                asChild
                                size="sm"
                                tooltip={item.sideBarTitle}
                                isActive={pathname === item.path}>
                                <Link to={item.path}>
                                    {item.sideBarIcon && (
                                        <item.sideBarIcon className="h-4 w-4" />
                                    )}
                                    <span>{item.sideBarTitle}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
