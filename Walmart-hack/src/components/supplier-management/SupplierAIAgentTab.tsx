
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

export const SupplierAIAgentTab = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>Supplier Intelligence Agent</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Risk Assessment</span>
                <span className="text-sm text-gray-500">Analyze supplier risks</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Find Alternatives</span>
                <span className="text-sm text-gray-500">Discover similar suppliers</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="font-medium">Bulk Evaluation</span>
                <span className="text-sm text-gray-500">Upload CSV for analysis</span>
              </Button>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-2">Try asking:</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• "Find textile suppliers in Tamil Nadu with ESG score {'>'}0.8"</li>
                <li>• "Compare top 5 electronics suppliers in Vietnam"</li>
                <li>• "What are the risks with our Chinese suppliers?"</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
