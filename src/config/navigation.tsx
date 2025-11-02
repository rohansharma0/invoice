import ManageAssets from "@/components/assets/ManageAssets";
import InvoiceActions from "@/components/invoice/InvoiceActions";
import InvoiceBuilder from "@/components/invoice/InvoiceBuilder";
import Pricing from "@/components/Pricing";
import TemplateActions from "@/components/template/TemplateActions";
import TemplateBuilder from "@/components/template/TemplateBuilder";
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
    element?: React.ReactNode;
    actions?: React.ReactNode;
}

export const NAVIGATION = {
    main: [
        {
            title: "Invoices",
            path: "/",
            icon: SquareTerminal,
            element: <InvoiceBuilder />,
            actions: <InvoiceActions />,
        },
        {
            title: "Templates",
            path: "/templates",
            icon: Bot,
            element: <TemplateBuilder />,
            actions: <TemplateActions />,
        },
        {
            title: "Manage Assets",
            path: "/assets",
            icon: BookOpen,
            element: <ManageAssets />,
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
            element: <Pricing />,
        },
    ] as NavItem[],
};
