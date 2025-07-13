
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  Settings, 
  Search, 
  Moon, 
  Sun, 
  AlertTriangle,
  TrendingUp,
  User
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState(3);

  const alerts = [
    {
      type: 'tariff',
      message: 'Tariff rates increased 2% for Chinese electronics',
      severity: 'high'
    },
    {
      type: 'supplier',
      message: '3 suppliers require urgent capacity review',
      severity: 'medium'
    }
  ];

  return (
    <>
      {/* Alert Banner */}
      {alerts.length > 0 && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">
                {alerts.length} urgent alert{alerts.length > 1 ? 's' : ''} require attention
              </span>
              <Badge variant="secondary" className="bg-white/20 text-white">
                High Priority
              </Badge>
            </div>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              View All
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
