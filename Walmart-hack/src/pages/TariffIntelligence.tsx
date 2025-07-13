
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { TabNavigation } from '@/components/TabNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Calculator, 
  Bot,
  TrendingUp,
  AlertTriangle,
  Globe,
  DollarSign
} from 'lucide-react';

const tabs = [
  { id: 'monitoring', label: 'Monitoring', icon: <BarChart3 className="h-4 w-4" /> },
  { id: 'analysis', label: 'Impact Analysis', icon: <Calculator className="h-4 w-4" /> },
  { id: 'ai-agent', label: 'AI Agent Mode', icon: <Bot className="h-4 w-4" /> }
];

export default function TariffIntelligence() {
  const [activeTab, setActiveTab] = useState('monitoring');

  const renderMonitoringTab = () => (
    <div className="p-6 space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Highest Risk Categories</p>
                <p className="text-2xl font-bold text-red-600">Electronics</p>
                <p className="text-sm text-red-500">25% avg tariff</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recent Changes</p>
                <p className="text-2xl font-bold text-orange-600">3</p>
                <p className="text-sm text-orange-500">This week</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Predicted Increases</p>
                <p className="text-2xl font-bold text-yellow-600">7</p>
                <p className="text-sm text-yellow-500">Next quarter</p>
              </div>
              <Globe className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cost Impact</p>
                <p className="text-2xl font-bold text-blue-600">$45M</p>
                <p className="text-sm text-blue-500">Potential savings</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* World Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Global Tariff Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-600">Interactive World Map</p>
              <p className="text-sm text-gray-500">Color-coded tariff rates by country</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Tariff Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { country: 'China', category: 'Electronics', change: '+5%', impact: 'High', date: '2 days ago' },
              { country: 'Vietnam', category: 'Textiles', change: '-2%', impact: 'Medium', date: '5 days ago' },
              { country: 'India', category: 'Automotive', change: '+3%', impact: 'Low', date: '1 week ago' }
            ].map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Badge variant={alert.change.includes('+') ? 'destructive' : 'default'}>
                    {alert.change}
                  </Badge>
                  <div>
                    <p className="font-medium">{alert.country} - {alert.category}</p>
                    <p className="text-sm text-gray-500">{alert.date}</p>
                  </div>
                </div>
                <Badge variant={alert.impact === 'High' ? 'destructive' : alert.impact === 'Medium' ? 'secondary' : 'outline'}>
                  {alert.impact} Impact
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAnalysisTab = () => (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tariff Impact Calculator */}
        <Card>
          <CardHeader>
            <CardTitle>Tariff Impact Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <Input placeholder="Select country" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
              <Input placeholder="Select category" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Import Volume ($)</label>
              <Input placeholder="Enter annual import value" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Tariff Rate</label>
              <Input placeholder="25%" disabled />
            </div>
            <Button className="w-full">Calculate Impact</Button>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-900">Estimated Annual Cost</p>
              <p className="text-2xl font-bold text-blue-600">$2.5M</p>
              <p className="text-sm text-blue-600">Based on current tariff rates</p>
            </div>
          </CardContent>
        </Card>

        {/* Scenario Planning */}
        <Card>
          <CardHeader>
            <CardTitle>Scenario Planning</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What-if Tariff Rate</label>
              <Input placeholder="35%" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alternative Supplier Country</label>
              <Input placeholder="Select alternative" />
            </div>
            <Button className="w-full" variant="outline">Run Scenario</Button>
            
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium text-red-900">Current Scenario</p>
                <p className="text-lg font-bold text-red-600">$2.5M annual cost</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-900">Alternative Scenario</p>
                <p className="text-lg font-bold text-green-600">$1.8M annual cost</p>
                <p className="text-sm text-green-600">Save $700K annually</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAIAgentTab = () => (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>Tariff Intelligence Agent</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Predict Changes</span>
                <span className="text-sm text-gray-500">Forecast tariff trends</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Find Alternatives</span>
                <span className="text-sm text-gray-500">Suggest sourcing shifts</span>
              </Button>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-2">Try asking:</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• "What if China tariffs increase to 35%?"</li>
                <li>• "Best alternatives to Chinese electronics suppliers"</li>
                <li>• "Forecast tariff changes for next 6 months"</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'monitoring':
        return renderMonitoringTab();
      case 'analysis':
        return renderAnalysisTab();
      case 'ai-agent':
        return renderAIAgentTab();
      default:
        return renderMonitoringTab();
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Tariff Intelligence Center"
        description="Real-time tariff monitoring and impact analysis"
        breadcrumbs={[
          { label: 'Dashboard', href: '/' },
          { label: 'Tariff Intelligence Center' }
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
