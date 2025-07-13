
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { TabNavigation } from '@/components/TabNavigation';
import { 
  Users, 
  UserCheck, 
  Bot
} from 'lucide-react';
import { SupplierOverviewTab } from '@/components/supplier-management/SupplierOverviewTab';
import { SupplierEvaluationTab } from '@/components/supplier-management/SupplierEvaluationTab';
import { SupplierAIAgentTab } from '@/components/supplier-management/SupplierAIAgentTab';

const tabs = [
  { id: 'overview', label: 'Overview', icon: <Users className="h-4 w-4" /> },
  { id: 'evaluation', label: 'Evaluation', icon: <UserCheck className="h-4 w-4" /> },
  { id: 'ai-agent', label: 'AI Agent Mode', icon: <Bot className="h-4 w-4" /> }
];

export default function SupplierManagement() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <SupplierOverviewTab />;
      case 'evaluation':
        return <SupplierEvaluationTab />;
      case 'ai-agent':
        return <SupplierAIAgentTab />;
      default:
        return <SupplierOverviewTab />;
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Supplier Management Hub"
        description="Comprehensive supplier lifecycle management and evaluation"
        breadcrumbs={[
          { label: 'Dashboard', href: '/' },
          { label: 'Supplier Management Hub' }
        ]}
      />
      
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {renderTabContent()}
    </PageLayout>
  );
}
