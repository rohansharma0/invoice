import { ChevronRight, type LucideIcon } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import type { AppRoute } from "@/config/Routes";

export function NavMain({ items }: { items: AppRoute[] }) {
    const { pathname } = useLocation();
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item: AppRoute) => (
                    <Collapsible
                        key={item.sideBarTitle}
                        asChild
                        defaultOpen={false}>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.sideBarTitle}
                                isActive={pathname === item.path}>
                                <Link to={item.path}>
                                    {item.sideBarIcon && (
                                        <item.sideBarIcon className="h-4 w-4" />
                                    )}
                                    <span>{item.sideBarTitle}</span>
                                </Link>
                            </SidebarMenuButton>
                            {/* {item.items?.length ? (
                                <>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuAction className="data-[state=open]:rotate-90">
                                            <ChevronRight />
                                            <span className="sr-only">
                                                Toggle
                                            </span>
                                        </SidebarMenuAction>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem
                                                    key={subItem.title}>
                                                    <SidebarMenuSubButton
                                                        asChild>
                                                        <a href={subItem.url}>
                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </>
                            ) : null} */}
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
