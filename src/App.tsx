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
import { ScrollArea, ScrollBar } from "./components/ui/scroll-area";

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
            <div className="flex h-screen w-screen overflow-hidden">
                <AppSidebar />
                <SidebarInset className="flex flex-col flex-1 h-full">
                    <header className="flex h-16 shrink-0 items-center gap-2 px-4 justify-between border-b">
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

                        <ThemeToggle />
                    </header>
                    <div className="flex-1 overflow-hidden">
                        <ScrollArea className="h-full w-full">
                            <Router />
                        </ScrollArea>
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}

export default App;
