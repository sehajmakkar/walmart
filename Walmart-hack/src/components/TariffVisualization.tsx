
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Globe, TrendingUp, Calculator, AlertTriangle } from 'lucide-react';
import { tariffData } from '@/lib/mockData';

const TariffVisualization = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const historicalData = [
    { month: 'Jan', china: 25, india: 8, vietnam: 12, mexico: 5 },
    { month: 'Feb', china: 25, india: 8, vietnam: 12, mexico: 5 },
    { month: 'Mar', china: 27, india: 8, vietnam: 12, mexico: 5 },
    { month: 'Apr', china: 27, india: 7, vietnam: 12, mexico: 5 },
    { month: 'May', china: 27, india: 7, vietnam: 11, mexico: 4 },
    { month: 'Jun', china: 25, india: 8, vietnam: 11, mexico: 4 }
  ];

  const getCountryColor = (country: string) => {
    const colors: Record<string, string> = {
      'China': '#ef4444',
      'India': '#10b981',
      'Vietnam': '#f59e0b',
      'Bangladesh': '#8b5cf6',
      'Mexico': '#06b6d4',
      'Thailand': '#f97316'
    };
    return colors[country] || '#6b7280';
  };

  const getRiskLevel = (rate: number) => {
    if (rate > 20) return { level: 'High', color: 'bg-red-100 text-red-800' };
    if (rate > 10) return { level: 'Medium', color: 'bg-yellow-100 text-yellow-800' };
    return { level: 'Low', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="space-y-6">
      {/* Tariff Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Global Tariff Impact</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Calculator className="h-4 w-4 mr-2" />
                Tariff Calculator
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tariffData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, 'Tariff Rate']}
                  labelFormatter={(label) => `Country: ${label}`}
                />
                <Bar 
                  dataKey="rate" 
                  fill="#3b82f6"
                  onClick={(data) => setSelectedCountry(data.country)}
                  className="cursor-pointer"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Tariff Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Tariff Trends (6 Months)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="china" stroke="#ef4444" strokeWidth={2} name="China" />
                <Line type="monotone" dataKey="india" stroke="#10b981" strokeWidth={2} name="India" />
                <Line type="monotone" dataKey="vietnam" stroke="#f59e0b" strokeWidth={2} name="Vietnam" />
                <Line type="monotone" dataKey="mexico" stroke="#06b6d4" strokeWidth={2} name="Mexico" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Country Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tariffData.map((country) => {
          const risk = getRiskLevel(country.rate);
          return (
            <Card 
              key={country.country} 
              className={`cursor-pointer hover:shadow-md transition-shadow ${
                selectedCountry === country.country ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedCountry(country.country)}
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{country.country}</h3>
                    <Badge className={risk.color}>{risk.level}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Tariff Rate</span>
                      <span className="font-semibold text-lg">{country.rate}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Suppliers</span>
                      <span className="text-sm font-medium">{country.suppliers}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${(country.rate / 30) * 100}%`,
                          backgroundColor: getCountryColor(country.country)
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <div className="flex items-center text-xs text-gray-500">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      <span>
                        Est. impact: ${(country.rate * country.suppliers * 0.5).toFixed(0)}M
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Selected Country Details */}
      {selectedCountry && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">
              {selectedCountry} - Detailed Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Current Status</h4>
                <p className="text-sm text-blue-700">
                  Tariff rate has {selectedCountry === 'China' ? 'decreased' : 'remained stable'} in recent months.
                  {selectedCountry === 'India' && ' Strong opportunity for expansion under current rates.'}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Recommendations</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• {selectedCountry === 'China' ? 'Consider diversification' : 'Expand supplier base'}</li>
                  <li>• Monitor policy changes</li>
                  <li>• Negotiate long-term contracts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Potential Savings</h4>
                <p className="text-sm text-blue-700">
                  Optimizing sourcing from {selectedCountry} could save up to{' '}
                  <span className="font-semibold">
                    ${Math.round(Math.random() * 50 + 20)}M annually
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TariffVisualization;
