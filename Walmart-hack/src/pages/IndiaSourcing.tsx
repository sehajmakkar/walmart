
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { TabNavigation } from '@/components/TabNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  UserPlus, 
  Bot,
  MapPin,
  Building,
  Star,
  Target,
  TrendingUp
} from 'lucide-react';

const tabs = [
  { id: 'discovery', label: 'Discovery', icon: <Search className="h-4 w-4" /> },
  { id: 'onboarding', label: 'Onboarding', icon: <UserPlus className="h-4 w-4" /> },
  { id: 'ai-agent', label: 'AI Agent Mode', icon: <Bot className="h-4 w-4" /> }
];

export default function IndiaSourcing() {
  const [activeTab, setActiveTab] = useState('discovery');

  const indianSuppliers = [
    { id: 1, name: 'Mumbai Textiles Ltd', state: 'Maharashtra', category: 'Apparel', size: 'Large', vriddhi: true, rating: 4.2 },
    { id: 2, name: 'Chennai Electronics', state: 'Tamil Nadu', category: 'Electronics', size: 'Medium', vriddhi: false, rating: 3.8 },
    { id: 3, name: 'Bangalore Tech Solutions', state: 'Karnataka', category: 'Technology', size: 'Large', vriddhi: true, rating: 4.5 }
  ];

  const progressToGoal = 42; // 42% toward $10B goal

  const renderDiscoveryTab = () => (
    <div className="p-6 space-y-6">
      {/* Progress toward $10B Goal */}
      <Card className="bg-gradient-to-r from-orange-50 to-green-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">India Sourcing Progress</h3>
              <p className="text-sm text-gray-600">Journey to $10B sourcing goal</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-orange-600">${(progressToGoal * 0.1).toFixed(1)}B</p>
              <p className="text-sm text-gray-600">of $10B target</p>
            </div>
          </div>
          <Progress value={progressToGoal} className="h-3 mb-2" />
          <p className="text-sm text-gray-600">{progressToGoal}% complete</p>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Indian Supplier Discovery</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search suppliers..." className="pl-10" />
            </div>
            <Input placeholder="Select state" />
            <Input placeholder="Select category" />
            <Input placeholder="Company size" />
          </div>
          
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="vriddhi" className="rounded" />
            <label htmlFor="vriddhi" className="text-sm font-medium">
              Vriddhi Program Participants Only
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Regional Map */}
      <Card>
        <CardHeader>
          <CardTitle>Supplier Distribution Across India</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-orange-50 to-green-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-600">Interactive India Map</p>
              <p className="text-sm text-gray-500">Supplier concentration by state</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supplier Directory */}
      <Card>
        <CardHeader>
          <CardTitle>Indian Supplier Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {indianSuppliers.map((supplier) => (
              <div key={supplier.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{supplier.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{supplier.state}</span>
                        <span>•</span>
                        <span>{supplier.category}</span>
                        <span>•</span>
                        <span>{supplier.size}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {supplier.vriddhi && (
                      <Badge variant="default" className="bg-orange-100 text-orange-800">
                        Vriddhi Partner
                      </Badge>
                    )}
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{supplier.rating}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderOnboardingTab = () => (
    <div className="p-6 space-y-6">
      {/* Onboarding Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle>Supplier Onboarding Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">24</span>
              </div>
              <p className="font-medium text-gray-900">Application Review</p>
              <p className="text-sm text-gray-500">Pending evaluation</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-yellow-600">18</span>
              </div>
              <p className="font-medium text-gray-900">Due Diligence</p>
              <p className="text-sm text-gray-500">In verification</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-orange-600">12</span>
              </div>
              <p className="font-medium text-gray-900">Capability Assessment</p>
              <p className="text-sm text-gray-500">Sample orders</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600">8</span>
              </div>
              <p className="font-medium text-gray-900">Final Approval</p>
              <p className="text-sm text-gray-500">Contract signing</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Onboarding Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Active Onboarding Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Rajasthan Handicrafts', stage: 'Due Diligence', progress: 65, days: 12 },
              { name: 'Kerala Spices Co.', stage: 'Capability Assessment', progress: 80, days: 8 },
              { name: 'Gujarat Chemicals', stage: 'Application Review', progress: 25, days: 18 }
            ].map((supplier, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{supplier.name}</h4>
                    <p className="text-sm text-gray-500">Current stage: {supplier.stage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{supplier.progress}% complete</p>
                    <p className="text-xs text-gray-500">{supplier.days} days in process</p>
                  </div>
                </div>
                <Progress value={supplier.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAIAgentTab = () => (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>India Sourcing Intelligence Agent</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Regional Analysis</span>
                <span className="text-sm text-gray-500">Best states for sourcing</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">MSME Assessment</span>
                <span className="text-sm text-gray-500">Evaluate readiness</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Cultural Intelligence</span>
                <span className="text-sm text-gray-500">Best practices guide</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Vriddhi Program</span>
                <span className="text-sm text-gray-500">Partner recommendations</span>
              </Button>
            </div>
            
            <div className="border rounded-lg p-4 bg-gradient-to-r from-orange-50 to-green-50">
              <p className="text-sm text-gray-600 mb-2">Try asking:</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• "Find textile suppliers in Tamil Nadu"</li>
                <li>• "Evaluate MSME readiness for export"</li>
                <li>• "Best states for electronics sourcing"</li>
                <li>• "Verify supplier export certifications"</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'discovery':
        return renderDiscoveryTab();
      case 'onboarding':
        return renderOnboardingTab();
      case 'ai-agent':
        return renderAIAgentTab();
      default:
        return renderDiscoveryTab();
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="India Sourcing Initiative"
        description="Achieving the $10B India sourcing goal through strategic partnerships"
        breadcrumbs={[
          { label: 'Dashboard', href: '/' },
          { label: 'India Sourcing Initiative' }
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
