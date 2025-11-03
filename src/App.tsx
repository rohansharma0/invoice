import { AppSidebar } from "./components/AppSidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import Router from "./config/Router";
import { ThemeProvider } from "./hooks/useTheme";
import AppTopbar from "./components/AppTopBar";

const App = () => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <AppContent />
        </ThemeProvider>
    );
};

function AppContent() {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden">
                <AppSidebar />
                <SidebarInset className="flex flex-col flex-1 h-full">
                    <AppTopbar />
                    <div className="flex-1 overflow-auto">
                        <Router />
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}

export default App;
