
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Search, 
  Filter, 
  Download, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Star,
  TrendingDown,
  Leaf
} from 'lucide-react';
import { mockSuppliers, type Supplier } from '@/lib/mockData';

const SupplierTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSuppliers, setSelectedSuppliers] = useState<number[]>([]);
  const [sortField, setSortField] = useState<keyof Supplier>('overallScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [categoryFilter, setCategoryFilter] = useState<string>('');

  const categories = Array.from(new Set(mockSuppliers.map(s => s.category)));

  const filteredAndSortedSuppliers = useMemo(() => {
    let filtered = mockSuppliers.filter(supplier => {
      const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           supplier.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           supplier.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !categoryFilter || supplier.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const multiplier = sortDirection === 'asc' ? 1 : -1;
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal) * multiplier;
      }
      return ((aVal as number) - (bVal as number)) * multiplier;
    });
  }, [searchTerm, categoryFilter, sortField, sortDirection]);

  const handleSort = (field: keyof Supplier) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'text-green-600 bg-green-50';
    if (score >= 0.6) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 0.8) return 'bg-green-500';
    if (score >= 0.6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getCountryFlag = (country: string) => {
    const flags: Record<string, string> = {
      'India': '🇮🇳',
      'Vietnam': '🇻🇳',
      'Bangladesh': '🇧🇩',
      'Mexico': '🇲🇽',
      'Thailand': '🇹🇭',
      'China': '🇨🇳'
    };
    return flags[country] || '🌍';
  };

  const handleSelectSupplier = (supplierId: number) => {
    setSelectedSuppliers(prev => 
      prev.includes(supplierId) 
        ? prev.filter(id => id !== supplierId)
        : [...prev, supplierId]
    );
  };

  const SortableHeader = ({ field, children }: { field: keyof Supplier, children: React.ReactNode }) => (
    <th 
      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center space-x-1">
        <span>{children}</span>
        {sortField === field && (
          sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
        )}
      </div>
    </th>
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Supplier Management</span>
            <Badge variant="secondary">{filteredAndSortedSuppliers.length} suppliers</Badge>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search suppliers, countries, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {selectedSuppliers.length > 0 && (
          <div className="flex items-center space-x-2 mt-2 p-2 bg-blue-50 rounded-lg">
            <span className="text-sm text-blue-700">
              {selectedSuppliers.length} supplier{selectedSuppliers.length > 1 ? 's' : ''} selected
            </span>
            <Button variant="outline" size="sm">Bulk Evaluate</Button>
            <Button variant="outline" size="sm">Contact All</Button>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">
                  <Checkbox 
                    checked={selectedSuppliers.length === filteredAndSortedSuppliers.length}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedSuppliers(filteredAndSortedSuppliers.map(s => s.id));
                      } else {
                        setSelectedSuppliers([]);
                      }
                    }}
                  />
                </th>
                <SortableHeader field="name">Supplier</SortableHeader>
                <SortableHeader field="country">Country</SortableHeader>
                <SortableHeader field="category">Category</SortableHeader>
                <SortableHeader field="overallScore">Overall Score</SortableHeader>
                <SortableHeader field="tariffExposure">Tariff Risk</SortableHeader>
                <SortableHeader field="esgScore">ESG Score</SortableHeader>
                <SortableHeader field="capacity">Capacity</SortableHeader>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedSuppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-4 py-4">
                    <Checkbox 
                      checked={selectedSuppliers.includes(supplier.id)}
                      onCheckedChange={() => handleSelectSupplier(supplier.id)}
                    />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
                        <div className="text-sm text-gray-500">Updated {supplier.lastUpdated}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getCountryFlag(supplier.country)}</span>
                      <span className="text-sm text-gray-900">{supplier.country}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <Badge variant="secondary">{supplier.category}</Badge>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getScoreBarColor(supplier.overallScore)}`}
                            style={{ width: `${supplier.overallScore * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <Badge className={getScoreColor(supplier.overallScore)}>
                        {Math.round(supplier.overallScore * 100)}%
                      </Badge>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <TrendingDown className={`h-4 w-4 ${supplier.tariffExposure > 0.1 ? 'text-red-500' : 'text-green-500'}`} />
                      <span className={`text-sm ${supplier.tariffExposure > 0.1 ? 'text-red-600' : 'text-green-600'}`}>
                        {Math.round(supplier.tariffExposure * 100)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <Leaf className={`h-4 w-4 ${supplier.esgScore > 0.8 ? 'text-green-500' : 'text-yellow-500'}`} />
                      <span className="text-sm text-gray-900">{Math.round(supplier.esgScore * 100)}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${supplier.capacity > 90 ? 'bg-green-500' : 'bg-yellow-500'}`}
                          style={{ width: `${supplier.capacity}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{supplier.capacity}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierTable;
