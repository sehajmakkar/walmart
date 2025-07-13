
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { PageHeader } from '@/components/PageHeader';
import { TabNavigation } from '@/components/TabNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Package, 
  Calendar, 
  Bot,
  AlertCircle,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const tabs = [
  { id: 'demand-supply', label: 'Demand-Supply', icon: <Package className="h-4 w-4" /> },
  { id: 'planning', label: 'Planning', icon: <Calendar className="h-4 w-4" /> },
  { id: 'ai-agent', label: 'AI Agent Mode', icon: <Bot className="h-4 w-4" /> }
];

export default function InventoryIntegration() {
  const [activeTab, setActiveTab] = useState('demand-supply');

  const inventoryGaps = [
    { id: 'TV001', category: 'Electronics', product: '55" Smart TV', currentStock: 250, demand: 1000, gap: 750, urgency: 'Critical' },
    { id: 'APP001', category: 'Apparel', product: 'Winter Jackets', currentStock: 500, demand: 800, gap: 300, urgency: 'High' },
    { id: 'TOY001', category: 'Toys', product: 'Action Figures', currentStock: 1200, demand: 1500, gap: 300, urgency: 'Medium' }
  ];

  const renderDemandSupplyTab = () => (
    <div className="p-6 space-y-6">
      {/* Inventory Health Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Gaps</p>
                <p className="text-3xl font-bold text-red-600">12</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">High Priority</p>
                <p className="text-3xl font-bold text-orange-600">28</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">On Track</p>
                <p className="text-3xl font-bold text-green-600">156</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Fill Rate</p>
                <p className="text-3xl font-bold text-blue-600">94%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Gaps Table */}
      <Card>
        <CardHeader>
          <CardTitle>Urgent Inventory Gaps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-600">Product ID</th>
                  <th className="text-left p-4 font-medium text-gray-600">Category</th>
                  <th className="text-left p-4 font-medium text-gray-600">Current Stock</th>
                  <th className="text-left p-4 font-medium text-gray-600">Demand Forecast</th>
                  <th className="text-left p-4 font-medium text-gray-600">Gap</th>
                  <th className="text-left p-4 font-medium text-gray-600">Urgency</th>
                  <th className="text-left p-4 font-medium text-gray-600">Suppliers</th>
                </tr>
              </thead>
              <tbody>
                {inventoryGaps.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{item.id}</p>
                        <p className="text-sm text-gray-500">{item.product}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary">{item.category}</Badge>
                    </td>
                    <td className="p-4">{item.currentStock.toLocaleString()}</td>
                    <td className="p-4">{item.demand.toLocaleString()}</td>
                    <td className="p-4">
                      <span className="font-medium text-red-600">{item.gap.toLocaleString()}</span>
                    </td>
                    <td className="p-4">
                      <Badge variant={
                        item.urgency === 'Critical' ? 'destructive' : 
                        item.urgency === 'High' ? 'secondary' : 'outline'
                      }>
                        {item.urgency}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Button size="sm" variant="outline">
                        Match Suppliers
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Matching Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Supplier Matching Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cost vs Speed Priority
            </label>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Cost</span>
              <div className="flex-1">
                <Progress value={30} className="h-2" />
              </div>
              <span className="text-sm">Speed</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quality vs Price Priority
            </label>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Price</span>
              <div className="flex-1">
                <Progress value={70} className="h-2" />
              </div>
              <span className="text-sm">Quality</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPlanningTab = () => (
    <div className="p-6 space-y-6">
      {/* Seasonal Planning */}
      <Card>
        <CardHeader>
          <CardTitle>Seasonal Demand Planning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-600">Calendar View</p>
              <p className="text-sm text-gray-500">Peak demand periods and supplier capacity</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Demand Forecasting */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Demand Forecast Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Electronics</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-24 h-2" />
                  <span className="text-sm font-medium">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Apparel</span>
                <div className="flex items-center space-x-2">
                  <Progress value={72} className="w-24 h-2" />
                  <span className="text-sm font-medium">72%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Home & Garden</span>
                <div className="flex items-center space-x-2">
                  <Progress value={91} className="w-24 h-2" />
                  <span className="text-sm font-medium">91%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supplier Capacity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Peak Season Readiness</span>
                  <Badge variant="default">Q4 2024</Badge>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-sm text-gray-500 mt-1">78% suppliers confirmed capacity</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Backup Suppliers</span>
                  <Badge variant="secondary">Available</Badge>
                </div>
                <Progress value={45} className="h-2" />
                <p className="text-sm text-gray-500 mt-1">45% categories have backup options</p>
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
            <span>Inventory Intelligence Agent</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Demand Forecasting</span>
                <span className="text-sm text-gray-500">Predict future demand</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Supplier Matching</span>
                <span className="text-sm text-gray-500">Find optimal suppliers</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Stock Optimization</span>
                <span className="text-sm text-gray-500">Optimize inventory levels</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Risk Assessment</span>
                <span className="text-sm text-gray-500">Identify supply risks</span>
              </Button>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-2">Try asking:</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• "Which suppliers can handle Black Friday electronics demand?"</li>
                <li>• "Optimize inventory levels for Q4"</li>
                <li>• "Forecast demand for winter apparel"</li>
                <li>• "Suggest optimal stock levels to minimize costs"</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'demand-supply':
        return renderDemandSupplyTab();
      case 'planning':
        return renderPlanningTab();
      case 'ai-agent':
        return renderAIAgentTab();
      default:
        return renderDemandSupplyTab();
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Inventory Integration"
        description="Demand-supply matching and inventory optimization with Eden"
        breadcrumbs={[
          { label: 'Dashboard', href: '/' },
          { label: 'Inventory Integration' }
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
