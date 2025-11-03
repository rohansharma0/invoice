import ManageAssets from "@/components/assets/ManageAssets";
import Feedback from "@/components/Feedback";
import InvoiceActions from "@/components/invoice/InvoiceActions";
import InvoiceBuilder from "@/components/invoice/InvoiceBuilder";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import ManageTemplate from "@/components/template/ManageTemplate";
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

export type RouteType = "main" | "secondary" | "hidden";

export interface AppRoute {
    type: RouteType;
    path: string;
    element: React.ReactNode;
    topBarTitle?: string;
    sideBarTitle?: string;
    topBarIcon?: LucideIcon;
    sideBarIcon?: LucideIcon;
    actions?: React.ReactNode;
}

export const ROUTES: AppRoute[] = [
    {
        type: "main",
        path: "/",
        element: <InvoiceBuilder />,
        topBarTitle: "Invoices",
        sideBarTitle: "Invoices",
        topBarIcon: SquareTerminal,
        sideBarIcon: SquareTerminal,
        actions: <InvoiceActions />,
    },
    {
        type: "main",
        path: "/templates",
        element: <TemplateBuilder />,
        topBarTitle: "Templates",
        sideBarTitle: "Templates",
        topBarIcon: Bot,
        sideBarIcon: Bot,
        actions: <TemplateActions />,
    },
    {
        type: "main",
        path: "/assets",
        element: <ManageAssets />,
        topBarTitle: "Manage Assets",
        sideBarTitle: "Manage Assets",
        topBarIcon: BookOpen,
        sideBarIcon: BookOpen,
    },
    {
        type: "secondary",
        sideBarTitle: "Support",
        path: "/support",
        sideBarIcon: LifeBuoy,
        element: <Support />,
    },
    {
        type: "secondary",
        sideBarTitle: "Feedback",
        path: "/feedback",
        sideBarIcon: Send,
        element: <Feedback />,
    },
];
