import { useLocation } from "react-router";
import { SidebarTrigger } from "./ui/sidebar";
import { Switch } from "./ui/switch";
import { useTheme } from "@/hooks/useTheme";
import { NAVIGATION } from "@/config/navigation";
import { Separator } from "./ui/separator";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <Switch
            checked={isDark}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
    );
}

function AppTopbar() {
    const { pathname } = useLocation();

    const allRoutes = [...NAVIGATION.main, ...NAVIGATION.secondary];

    const currentRoute = allRoutes.find((route) =>
        route.path === "/" ? pathname === "/" : pathname.startsWith(route.path)
    );

    const title = currentRoute?.title;
    const actions = currentRoute?.actions;

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 justify-between">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-5!" />
                <h2 className="text-lg p-1 font-semibold">{title}</h2>
            </div>

            <div className="flex items-center gap-4">
                {actions}
                <ThemeToggle />
            </div>
        </header>
    );
}

export default AppTopbar;
