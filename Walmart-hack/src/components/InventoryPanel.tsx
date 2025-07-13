
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Clock, Package, CheckCircle } from 'lucide-react';
import { mockInventoryAlerts, type InventoryAlert } from '@/lib/mockData';

const InventoryPanel = () => {
  const getUrgencyColor = (urgency: InventoryAlert['urgency']) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getUrgencyIcon = (urgency: InventoryAlert['urgency']) => {
    switch (urgency) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-green-600" />;
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const days = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
    return days;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>Inventory Restocking Alerts</span>
            <Badge variant="destructive">{mockInventoryAlerts.filter(a => a.urgency === 'high').length} urgent</Badge>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">View All</Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Emergency Sourcing
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockInventoryAlerts.map((alert) => {
            const daysLeft = getDaysUntilDeadline(alert.deadline);
            return (
              <div 
                key={alert.id} 
                className={`p-4 rounded-lg border-l-4 ${
                  alert.urgency === 'high' ? 'border-l-red-500 bg-red-50' :
                  alert.urgency === 'medium' ? 'border-l-yellow-500 bg-yellow-50' :
                  'border-l-green-500 bg-green-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getUrgencyIcon(alert.urgency)}
                      <h3 className="font-semibold text-gray-900">{alert.product}</h3>
                      <Badge className={getUrgencyColor(alert.urgency)}>
                        {alert.urgency.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <span className="text-sm text-gray-600">Quantity Needed</span>
                        <p className="font-semibold text-gray-900">
                          {alert.quantity.toLocaleString()} units
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Deadline</span>
                        <p className="font-semibold text-gray-900">
                          {new Date(alert.deadline).toLocaleDateString()}
                        </p>
                        <p className={`text-xs ${
                          daysLeft <= 7 ? 'text-red-600' : 
                          daysLeft <= 14 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {daysLeft} days remaining
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Suggested Suppliers</span>
                        <div className="space-y-1">
                          {alert.suggestedSuppliers.map((supplier, index) => (
                            <Badge key={index} variant="secondary" className="mr-1 mb-1">
                              {supplier}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs"
                      >
                        Match Suppliers
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs"
                      >
                        Check Capacity
                      </Button>
                      <Button 
                        size="sm" 
                        className={`text-xs ${
                          alert.urgency === 'high' ? 'bg-red-600 hover:bg-red-700' :
                          alert.urgency === 'medium' ? 'bg-yellow-600 hover:bg-yellow-700' :
                          'bg-green-600 hover:bg-green-700'
                        }`}
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      alert.urgency === 'high' ? 'bg-red-200' :
                      alert.urgency === 'medium' ? 'bg-yellow-200' :
                      'bg-green-200'
                    }`}>
                      <span className={`text-xs font-bold ${
                        alert.urgency === 'high' ? 'text-red-800' :
                        alert.urgency === 'medium' ? 'text-yellow-800' :
                        'text-green-800'
                      }`}>
                        {daysLeft}d
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Package className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-blue-800">Inventory Health Summary</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-blue-600">Stock Coverage</span>
              <p className="font-semibold text-blue-800">94% items in stock</p>
            </div>
            <div>
              <span className="text-blue-600">Avg Lead Time</span>
              <p className="font-semibold text-blue-800">4.2 days</p>
            </div>
            <div>
              <span className="text-blue-600">Risk Items</span>
              <p className="font-semibold text-blue-800">12 products at risk</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryPanel;
