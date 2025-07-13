
export interface Supplier {
  id: number;
  name: string;
  country: string;
  category: string;
  overallScore: number;
  tariffExposure: number;
  esgScore: number;
  cost: number;
  deliveryTime: number;
  qualityScore: number;
  capacity: number;
  lastUpdated: string;
}

export interface AIResponse {
  query: string;
  response: string;
  recommendations: Array<{
    supplier: string;
    score: number;
    reason: string;
  }>;
  data?: any;
}

export interface InventoryAlert {
  id: number;
  product: string;
  urgency: 'high' | 'medium' | 'low';
  quantity: number;
  deadline: string;
  suggestedSuppliers: string[];
}

export const mockSuppliers: Supplier[] = [
  {
    id: 1,
    name: "Shreekarni Fab",
    country: "India",
    category: "Apparel",
    overallScore: 0.87,
    tariffExposure: 0.1,
    esgScore: 0.85,
    cost: 1000,
    deliveryTime: 5,
    qualityScore: 0.9,
    capacity: 95,
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    name: "Mumbai Electronics",
    country: "India",
    category: "Electronics",
    overallScore: 0.92,
    tariffExposure: 0.05,
    esgScore: 0.88,
    cost: 1500,
    deliveryTime: 3,
    qualityScore: 0.95,
    capacity: 87,
    lastUpdated: "2024-01-14"
  },
  {
    id: 3,
    name: "TechFlow Vietnam",
    country: "Vietnam",
    category: "Electronics",
    overallScore: 0.84,
    tariffExposure: 0.08,
    esgScore: 0.79,
    cost: 1200,
    deliveryTime: 4,
    qualityScore: 0.86,
    capacity: 92,
    lastUpdated: "2024-01-13"
  },
  {
    id: 4,
    name: "Bangladesh Textiles",
    country: "Bangladesh",
    category: "Apparel",
    overallScore: 0.78,
    tariffExposure: 0.12,
    esgScore: 0.72,
    cost: 800,
    deliveryTime: 6,
    qualityScore: 0.82,
    capacity: 88,
    lastUpdated: "2024-01-12"
  },
  {
    id: 5,
    name: "Mexico Manufacturing",
    country: "Mexico",
    category: "Home & Garden",
    overallScore: 0.89,
    tariffExposure: 0.03,
    esgScore: 0.81,
    cost: 1100,
    deliveryTime: 2,
    qualityScore: 0.91,
    capacity: 94,
    lastUpdated: "2024-01-11"
  },
  {
    id: 6,
    name: "Thai Food Processing",
    country: "Thailand",
    category: "Food",
    overallScore: 0.91,
    tariffExposure: 0.06,
    esgScore: 0.89,
    cost: 900,
    deliveryTime: 4,
    qualityScore: 0.93,
    capacity: 96,
    lastUpdated: "2024-01-10"
  }
];

export const mockInventoryAlerts: InventoryAlert[] = [
  {
    id: 1,
    product: "Winter Jackets",
    urgency: 'high',
    quantity: 10000,
    deadline: "2024-02-15",
    suggestedSuppliers: ["Shreekarni Fab", "Bangladesh Textiles"]
  },
  {
    id: 2,
    product: "Smartphone Cases",
    urgency: 'medium',
    quantity: 25000,
    deadline: "2024-03-01",
    suggestedSuppliers: ["Mumbai Electronics", "TechFlow Vietnam"]
  },
  {
    id: 3,
    product: "Garden Tools",
    urgency: 'low',
    quantity: 5000,
    deadline: "2024-03-15",
    suggestedSuppliers: ["Mexico Manufacturing"]
  }
];

export const mockAIResponses: Record<string, AIResponse> = {
  "Find low-tariff electronics suppliers": {
    query: "Find low-tariff electronics suppliers",
    response: "Found 2 electronics suppliers with tariff exposure < 10%. Mumbai Electronics leads with 5% tariff exposure and 92% overall score.",
    recommendations: [
      {
        supplier: "Mumbai Electronics",
        score: 0.92,
        reason: "Low tariff (5%), high quality (95%), fast delivery (3 days)"
      },
      {
        supplier: "TechFlow Vietnam",
        score: 0.84,
        reason: "Moderate tariff (8%), good capacity (92%), reliable delivery"
      }
    ]
  },
  "Which suppliers can restock by Black Friday?": {
    query: "Which suppliers can restock by Black Friday?",
    response: "5 suppliers can meet Black Friday deadline with current capacity. Mexico Manufacturing offers fastest delivery at 2 days.",
    recommendations: [
      {
        supplier: "Mexico Manufacturing",
        score: 0.89,
        reason: "2-day delivery, 94% capacity, low tariff exposure"
      },
      {
        supplier: "Mumbai Electronics",
        score: 0.92,
        reason: "3-day delivery, 87% available capacity, premium quality"
      }
    ]
  },
  "Top Indian apparel suppliers with ESG > 0.8": {
    query: "Top Indian apparel suppliers with ESG > 0.8",
    response: "1 Indian apparel supplier meets ESG criteria > 0.8. Shreekarni Fab excels with 85% ESG score and strong overall performance.",
    recommendations: [
      {
        supplier: "Shreekarni Fab",
        score: 0.87,
        reason: "ESG score 85%, established relationship, good capacity (95%)"
      }
    ]
  }
};

export const kpiData = {
  costSavings: "$450M",
  supplierHealth: "87%",
  inventoryAlignment: "94%",
  indiaProgress: "42%"
};

export const tariffData = [
  { country: "China", rate: 25, suppliers: 45 },
  { country: "India", rate: 8, suppliers: 23 },
  { country: "Vietnam", rate: 12, suppliers: 18 },
  { country: "Bangladesh", rate: 15, suppliers: 12 },
  { country: "Mexico", rate: 5, suppliers: 16 },
  { country: "Thailand", rate: 10, suppliers: 8 }
];
