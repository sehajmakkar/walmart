
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';

export const SupplierEvaluationTab = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>New Supplier Evaluation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Supplier Name
              </label>
              <Input placeholder="Enter supplier name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <Input placeholder="Select country" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <Input placeholder="Select category" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Documents
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Drop files here or click to upload</p>
              <p className="text-sm text-gray-500 mt-2">
                Contracts, certifications, financial statements
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-end space-x-3">
            <Button variant="outline">Save as Draft</Button>
            <Button>Submit for Review</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
