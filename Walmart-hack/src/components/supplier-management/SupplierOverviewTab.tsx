
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  UserCheck, 
  AlertTriangle, 
  Plus,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { mockSuppliers } from '@/lib/mockData';

export const SupplierOverviewTab = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Suppliers</p>
                <p className="text-3xl font-bold text-gray-900">{mockSuppliers.length.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Suppliers</p>
                <p className="text-3xl font-bold text-green-600">
                  {mockSuppliers.filter(s => s.overallScore > 0.7).length.toLocaleString()}
                </p>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">High-Risk Suppliers</p>
                <p className="text-3xl font-bold text-red-600">
                  {mockSuppliers.filter(s => s.overallScore < 0.5).length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New This Month</p>
                <p className="text-3xl font-bold text-blue-600">24</p>
              </div>
              <Plus className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search suppliers..." className="pl-10 w-80" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Supplier
          </Button>
        </div>
      </div>

      {/* Supplier Table */}
      <Card>
        <CardHeader>
          <CardTitle>Supplier Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-600">Supplier</th>
                  <th className="text-left p-4 font-medium text-gray-600">Country</th>
                  <th className="text-left p-4 font-medium text-gray-600">Category</th>
                  <th className="text-left p-4 font-medium text-gray-600">Overall Score</th>
                  <th className="text-left p-4 font-medium text-gray-600">Tariff Exposure</th>
                  <th className="text-left p-4 font-medium text-gray-600">ESG Score</th>
                  <th className="text-left p-4 font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockSuppliers.slice(0, 10).map((supplier) => (
                  <tr key={supplier.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-gray-900">{supplier.name}</p>
                        <p className="text-sm text-gray-500">ID: {supplier.id}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🇮🇳</span>
                        <span>{supplier.country}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary">{supplier.category}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              supplier.overallScore > 0.7 ? 'bg-green-500' : 
                              supplier.overallScore > 0.5 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${supplier.overallScore * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {Math.round(supplier.overallScore * 100)}%
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant={supplier.tariffExposure > 0.3 ? "destructive" : "secondary"}>
                        {Math.round(supplier.tariffExposure * 100)}%
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium">
                        {Math.round(supplier.esgScore * 100)}%
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge variant={supplier.overallScore > 0.7 ? "default" : "secondary"}>
                        {supplier.overallScore > 0.7 ? "Active" : "Review"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
