
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, Package, MapPin } from 'lucide-react';
import { kpiData } from '@/lib/mockData';

const KPICards = () => {
  const kpis = [
    {
      title: "Cost Savings",
      value: kpiData.costSavings,
      subtitle: "from tariff optimization",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: "+15% vs last quarter"
    },
    {
      title: "Supplier Health",
      value: kpiData.supplierHealth,
      subtitle: "suppliers performing well",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "+3% improvement"
    },
    {
      title: "Inventory Alignment",
      value: kpiData.inventoryAlignment,
      subtitle: "demand-supply matched",
      icon: Package,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "98% peak season ready"
    },
    {
      title: "India Progress",
      value: kpiData.indiaProgress,
      subtitle: "toward $10B goal",
      icon: MapPin,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      trend: "$4.2B achieved"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {kpis.map((kpi, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {kpi.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
              <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">
                {kpi.value}
              </div>
              <p className="text-sm text-gray-500">
                {kpi.subtitle}
              </p>
              <div className={`text-xs font-medium ${kpi.color}`}>
                {kpi.trend}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KPICards;
