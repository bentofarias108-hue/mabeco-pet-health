import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Comidas from "./pages/Comidas";
import Biscoitos from "./pages/Biscoitos";
import Petiscos from "./pages/Petiscos";
import Nutrovitta from "./pages/Nutrovitta";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1">
              <SidebarTrigger className="fixed top-24 left-4 z-40 bg-background shadow-md" />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/comidas" element={<Comidas />} />
                <Route path="/biscoitos" element={<Biscoitos />} />
                <Route path="/petiscos" element={<Petiscos />} />
                <Route path="/nutrovitta" element={<Nutrovitta />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
