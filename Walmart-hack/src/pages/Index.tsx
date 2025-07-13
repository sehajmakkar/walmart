
import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import KPICards from '@/components/KPICards';
import SupplierTable from '@/components/SupplierTable';
import TariffVisualization from '@/components/TariffVisualization';
import InventoryPanel from '@/components/InventoryPanel';
import AIChatWidget from '@/components/AIChatWidget';

const Index = () => {
  return (
    <PageLayout>
      <PageHeader
        title="SupplierSync Dashboard"
        description="AI-powered supply chain optimization for Walmart's global operations"
      />
      
      <div className="p-6">
        {/* KPI Dashboard */}
        <KPICards />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Supplier Table - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <SupplierTable />
          </div>
          
          {/* Tariff Visualization - Takes up 1 column */}
          <div className="lg:col-span-1">
            <TariffVisualization />
          </div>
        </div>
        
        {/* Inventory Panel - Full width */}
        <div className="mb-8">
          <InventoryPanel />
        </div>
      </div>
      
      {/* AI Chat Widget - Always visible */}
      <AIChatWidget />
    </PageLayout>
  );
};

export default Index;
