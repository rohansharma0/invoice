import {
    SquareTerminal,
    Bot,
    BookOpen,
    LifeBuoy,
    Send,
    type LucideIcon,
    BadgeIndianRupee,
} from "lucide-react";

export interface NavItem {
    title: string;
    path: string;
    icon?: LucideIcon;
}

export const NAVIGATION = {
    main: [
        {
            title: "Invoices",
            path: "/",
            icon: SquareTerminal,
        },
        {
            title: "Templates",
            path: "/templates",
            icon: Bot,
        },
        {
            title: "Manage Assets",
            path: "/assets",
            icon: BookOpen,
        },
    ] as NavItem[],
    secondary: [
        {
            title: "Support",
            path: "/support",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            path: "/feedback",
            icon: Send,
        },
        {
            title: "Pricing",
            path: "/pricing",
            icon: BadgeIndianRupee,
        },
    ] as NavItem[],
};
