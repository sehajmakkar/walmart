
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SupplierManagement from "./pages/SupplierManagement";
import TariffIntelligence from "./pages/TariffIntelligence";
import InventoryIntegration from "./pages/InventoryIntegration";
import IndiaSourcing from "./pages/IndiaSourcing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suppliers" element={<SupplierManagement />} />
          <Route path="/tariffs" element={<TariffIntelligence />} />
          <Route path="/inventory" element={<InventoryIntegration />} />
          <Route path="/india-sourcing" element={<IndiaSourcing />} />
          <Route path="/analytics" element={<Index />} />
          <Route path="/settings" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
