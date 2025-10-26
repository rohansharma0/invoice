import { AppSidebar } from "./components/AppSidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "./components/ui/sidebar";
import Router from "./Router";
import { Switch } from "./components/ui/switch";
import { ThemeProvider, useTheme } from "./hooks/useTheme";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "./components/ui/tooltip";
import { Kbd, KbdGroup } from "./components/ui/kbd";
import { Separator } from "./components/ui/separator";

const App = () => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <AppContent />
        </ThemeProvider>
    );
};

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    const handleToggle = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
    };

    return <Switch checked={isDark} onCheckedChange={handleToggle} />;
}

function AppContent() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4 justify-between w-full">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <SidebarTrigger className="-ml-1" />
                            </TooltipTrigger>
                            <TooltipContent align="start" className="p-1">
                                <KbdGroup>
                                    <Kbd className="bg-foreground!">
                                        Ctrl + B
                                    </Kbd>
                                </KbdGroup>
                            </TooltipContent>
                        </Tooltip>

                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        {/* <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        Data Fetching
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb> */}
                        <ThemeToggle />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Router />
                    {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

export default App;
