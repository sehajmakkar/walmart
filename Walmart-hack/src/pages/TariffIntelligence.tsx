import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Calculator,
  Bot,
  TrendingUp,
  AlertTriangle,
  Globe,
  DollarSign,
  Activity,
  Search,
  RefreshCw,
  MapPin,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Package,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const tabs = [
  {
    id: "monitoring",
    label: "Monitoring",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    id: "analysis",
    label: "Impact Analysis",
    icon: <Calculator className="h-4 w-4" />,
  },
  { id: "ai-agent", label: "AI Agent Mode", icon: <Bot className="h-4 w-4" /> },
];

// Mock data for charts
const tariffTrendData = [
  { month: "Jan", china: 25, vietnam: 8, india: 12, mexico: 5 },
  { month: "Feb", china: 27, vietnam: 9, india: 13, mexico: 5 },
  { month: "Mar", china: 30, vietnam: 10, india: 14, mexico: 6 },
  { month: "Apr", china: 32, vietnam: 11, india: 15, mexico: 7 },
  { month: "May", china: 35, vietnam: 12, india: 16, mexico: 8 },
  { month: "Jun", china: 38, vietnam: 13, india: 17, mexico: 9 },
];

const riskCategoryData = [
  { category: "Electronics", risk: 85, tariff: 35, impact: "$45M" },
  { category: "Textiles", risk: 72, tariff: 18, impact: "$28M" },
  { category: "Automotive", risk: 68, tariff: 25, impact: "$32M" },
  { category: "Furniture", risk: 45, tariff: 12, impact: "$15M" },
  { category: "Toys", risk: 52, tariff: 15, impact: "$18M" },
];

const alternativeCountries = [
  {
    country: "Vietnam",
    tariff: 8,
    cost: "$1.2M",
    savings: "$2.3M",
    reliability: 85,
  },
  {
    country: "India",
    tariff: 12,
    cost: "$1.8M",
    savings: "$1.7M",
    reliability: 78,
  },
  {
    country: "Mexico",
    tariff: 5,
    cost: "$0.8M",
    savings: "$2.7M",
    reliability: 92,
  },
  {
    country: "Thailand",
    tariff: 10,
    cost: "$1.5M",
    savings: "$2.0M",
    reliability: 88,
  },
];

const newsData = [
  {
    source: "Reuters",
    headline: "China electronics tariffs set to rise 15% next quarter",
    impact: "High",
    time: "2 hours ago",
  },
  {
    source: "Bloomberg",
    headline: "Vietnam reduces textile import duties by 5%",
    impact: "Medium",
    time: "4 hours ago",
  },
  {
    source: "WSJ",
    headline: "India automotive sector faces new trade restrictions",
    impact: "Medium",
    time: "6 hours ago",
  },
  {
    source: "Financial Times",
    headline: "Mexico manufacturing incentives boost trade outlook",
    impact: "Low",
    time: "8 hours ago",
  },
];

const pieChartData = [
  { name: "Electronics", value: 35, color: "#ef4444" },
  { name: "Textiles", value: 25, color: "#f97316" },
  { name: "Automotive", value: 20, color: "#eab308" },
  { name: "Furniture", value: 12, color: "#22c55e" },
  { name: "Others", value: 8, color: "#3b82f6" },
];

const topStatsOptions = {
  sourcesMonitored: [247, 253, 241],
  predictedChanges: [12, 15, 9],
  potentialSavings: ["$52M", "$48M", "$55M"],
  realTimeFeeds: ["Real-time feeds", "Live updates", "Instant data"],
  next30Days: ["Next 30 days", "Upcoming month", "30-day forecast"],
  throughOptimization: [
    "Through optimization",
    "AI-driven savings",
    "Cost reduction",
  ],
};

export default function TariffIntelligence() {
  const [activeTab, setActiveTab] = useState("monitoring");
  const [isScanning, setIsScanning] = useState(false);
  const [topStats, setTopStats] = useState({
    sourcesMonitored: topStatsOptions.sourcesMonitored[0],
    predictedChanges: topStatsOptions.predictedChanges[0],
    potentialSavings: topStatsOptions.potentialSavings[0],
    realTimeFeeds: topStatsOptions.realTimeFeeds[0],
    next30Days: topStatsOptions.next30Days[0],
    throughOptimization: topStatsOptions.throughOptimization[0],
  });
  const [lastUpdate, setLastUpdate] = useState("Just now");
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    country: "",
    category: "",
    volume: "",
    currentTariff: "",
  });
  const [calculatorResult, setCalculatorResult] = useState<{
    currentCost: string;
    predictedCost: string;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const minutes = Math.floor(Math.random() * 60) + 1;
      setLastUpdate(`${minutes} minutes ago`);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const simulateDataFetch = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Randomize stats except high risk categories
      setTopStats({
        sourcesMonitored:
          topStatsOptions.sourcesMonitored[
            Math.floor(Math.random() * topStatsOptions.sourcesMonitored.length)
          ],
        predictedChanges:
          topStatsOptions.predictedChanges[
            Math.floor(Math.random() * topStatsOptions.predictedChanges.length)
          ],
        potentialSavings:
          topStatsOptions.potentialSavings[
            Math.floor(Math.random() * topStatsOptions.potentialSavings.length)
          ],
        realTimeFeeds:
          topStatsOptions.realTimeFeeds[
            Math.floor(Math.random() * topStatsOptions.realTimeFeeds.length)
          ],
        next30Days:
          topStatsOptions.next30Days[
            Math.floor(Math.random() * topStatsOptions.next30Days.length)
          ],
        throughOptimization:
          topStatsOptions.throughOptimization[
            Math.floor(
              Math.random() * topStatsOptions.throughOptimization.length
            )
          ],
      });
      setLastUpdate("Just now");
    }, 2000);
  };

  // Add "Try asking" questions and answers for RAG simulation
  const aiSampleQuestions = [
    {
      question: "What if China electronics tariffs increase to 40%?",
      answer: `📈 **Impact of 40% China Electronics Tariff:**
- Estimated cost increase: $8.5M annually
- 92% probability of supply chain disruption
- Alternative sourcing: Vietnam (8% tariff), Mexico (5% tariff)
- Recommendation: Shift 50% sourcing to Vietnam/Mexico to save $4.2M
- Action: Prepare contingency contracts with non-China suppliers`,
    },
    {
      question: "Best alternatives to Chinese textile suppliers",
      answer: `🧵 **Textile Sourcing Alternatives:**
- Vietnam: 5% tariff, 30% cost reduction, high reliability
- Bangladesh: 3% tariff, moderate reliability, capacity constraints
- India: 12% tariff, stable supply
- Recommendation: Increase Vietnam sourcing by 25%, establish backup in Bangladesh`,
    },
    {
      question: "Forecast automotive tariff changes for next 6 months",
      answer: `🚗 **Automotive Tariff Forecast (6 Months):**
- China: Expected to rise from 25% to 28%
- Mexico: Remains at 0% (USMCA)
- India: Possible increase to 18% due to new restrictions
- Recommendation: Maximize Mexico sourcing, phase out India suppliers`,
    },
    {
      question: "How will new trade policies affect our sourcing strategy?",
      answer: `🌐 **Trade Policy Impact:**
- US-China tensions may raise electronics tariffs by 5-10%
- Vietnam and Mexico expected to offer new incentives
- Recommendation: Diversify sourcing, monitor policy updates weekly, negotiate flexible contracts`,
    },
    {
      question: "What are the electronics tariff predictions for next quarter?",
      answer: `🔮 **Electronics Tariff Predictions (Next Quarter):**
- China: Likely increase to 40%
- Vietnam: Stable at 8%
- Mexico: Stable at 5%
- Risk: High for China, low for alternatives
- Recommendation: Diversify 40% sourcing to Vietnam/Mexico`,
    },
  ];

  const simulateAIAnalysis = async () => {
    setIsAnalyzing(true);

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Check if query matches a sample question
    const trimmedQuery = aiQuery.trim().toLowerCase();
    const matchedSample = aiSampleQuestions.find(
      (q) => trimmedQuery === q.question.toLowerCase()
    );
    if (matchedSample) {
      setAiResponse(matchedSample.answer);
      setIsAnalyzing(false);
      return;
    }

    const responses = {
      electronics: `Based on real-time analysis of 127 news sources and trade data:

📊 **Current Electronics Tariff Landscape:**
- China: 35% (↑15% from last quarter)
- Vietnam: 8% (stable)
- India: 12% (↑2% this month)

🔍 **Key Insights:**
- 85% probability of China tariffs increasing to 40% by Q3
- Electronics represent highest risk category ($45M potential impact)
- Supply chain disruption risk: HIGH

💡 **Recommendations:**
1. **Vietnam** - Best alternative (8% tariff, $2.3M savings)
2. **Mexico** - USMCA benefits (5% tariff, $2.7M savings)
3. **Thailand** - Emerging option (10% tariff, 88% reliability)

🎯 **Action Items:**
- Initiate supplier negotiations in Vietnam
- Diversify 40% of electronics sourcing by Q4
- Monitor Trump administration trade policies`,

      textiles: `Real-time textile industry analysis from 89 trade sources:

📈 **Textile Tariff Intelligence:**
- China: 18% (stable)
- Vietnam: 5% (↓2% recent reduction)
- Bangladesh: 3% (most favored nation status)

🔮 **Predictions:**
- 72% chance of China textile tariffs remaining stable
- Vietnam offering new trade incentives
- Bangladesh capacity constraints may affect pricing

💼 **Strategic Recommendations:**
- Increase Vietnam sourcing by 25%
- Establish backup suppliers in Bangladesh
- Monitor cotton price fluctuations affecting base costs`,

      automotive: `Automotive sector tariff analysis from 156 industry sources:

🚗 **Current Automotive Tariffs:**
- China: 25% (↑3% this quarter)
- Mexico: 0% (USMCA benefits)
- India: 15% (new restrictions pending)

⚠️ **Risk Assessment:**
- Medium risk category ($32M exposure)
- Mexico remains best option for automotive parts
- India facing new trade policy challenges

🎯 **Optimization Strategy:**
- Maximize Mexico sourcing (USMCA advantages)
- Phase out India suppliers gradually
- Consider Thailand for specific components`,
    };

    const query = aiQuery.toLowerCase();
    let response = "I'm analyzing current tariff data and market conditions...";

    if (query.includes("electronics")) {
      response = responses.electronics;
    } else if (query.includes("textile")) {
      response = responses.textiles;
    } else if (query.includes("automotive")) {
      response = responses.automotive;
    } else if (query.includes("china")) {
      response = `🇨🇳 **China Trade Intelligence:**
      
Current average tariff: 28% (↑8% YoY)
Risk level: HIGH
Predicted Q3 changes: +5-10% across electronics

**Alternative sourcing recommendations:**
1. Vietnam (8% avg tariff)
2. India (12% avg tariff)  
3. Mexico (5% avg tariff)

**Cost impact:** Shifting 50% of sourcing could save $15M annually`;
    }

    setAiResponse(response);
    setIsAnalyzing(false);
  };

  const handleCalculator = () => {
    if (
      calculatorData.country &&
      calculatorData.category &&
      calculatorData.volume
    ) {
      // Example tariff rates (expand logic as needed)
      const tariffRates: Record<string, number> = {
        china: 0.35,
        vietnam: 0.08,
        india: 0.12,
        mexico: 0.05,
        thailand: 0.1,
        bangladesh: 0.03,
        indonesia: 0.09,
        turkey: 0.07,
        germany: 0.04,
        brazil: 0.11,
      };
      // Example predicted increase
      const predictedIncrease: Record<string, number> = {
        china: 0.42,
        vietnam: 0.1,
        india: 0.14,
        mexico: 0.06,
        thailand: 0.12,
        bangladesh: 0.04,
        indonesia: 0.11,
        turkey: 0.09,
        germany: 0.05,
        brazil: 0.13,
      };
      const volume = parseFloat(calculatorData.volume);
      const currentTariff = tariffRates[calculatorData.country] || 0;
      const predictedTariff =
        predictedIncrease[calculatorData.country] || currentTariff;
      setCalculatorResult({
        currentCost: `$${
          volume ? (volume * currentTariff).toLocaleString() : "0"
        }`,
        predictedCost: `$${
          volume ? (volume * predictedTariff).toLocaleString() : "0"
        }`,
      });
    } else {
      setCalculatorResult(null);
    }
  };

  const renderMonitoringTab = () => (
    <div className="p-6 space-y-6">
      {/* AI Agent Status */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  isScanning ? "bg-green-500 animate-pulse" : "bg-green-500"
                }`}
              ></div>
              <span className="font-medium text-blue-900">
                AI Agent Status: Active
              </span>
              <Badge variant="outline" className="text-xs">
                {isScanning ? "Scanning..." : "Live"}
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-blue-700">
                Last update: {lastUpdate}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={simulateDataFetch}
                disabled={isScanning}
              >
                {isScanning ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Activity className="h-4 w-4" />
                )}
                {isScanning ? "Scanning" : "Refresh"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Highest Risk Categories
                </p>
                <p className="text-2xl font-bold text-red-600">Electronics</p>
                <p className="text-sm text-red-500 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  35% avg tariff
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Sources Monitored
                </p>
                <p className="text-2xl font-bold text-orange-600">
                  {topStats.sourcesMonitored}
                </p>
                <p className="text-sm text-orange-500">
                  {topStats.realTimeFeeds}
                </p>
              </div>
              <Search className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Predicted Changes
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {topStats.predictedChanges}
                </p>
                <p className="text-sm text-yellow-500">{topStats.next30Days}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Potential Savings
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {topStats.potentialSavings}
                </p>
                <p className="text-sm text-green-500 flex items-center">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  {topStats.throughOptimization}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tariff Trends by Country</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tariffTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="china"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="vietnam"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="india"
                  stroke="#f97316"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="mexico"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Categories Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Live News Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Live News Intelligence</span>
            <Badge variant="outline" className="ml-auto">
              {isScanning ? "Scanning" : "Live"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="text-xs">
                    {news.source}
                  </Badge>
                  <div>
                    <p className="font-medium">{news.headline}</p>
                    <p className="text-sm text-gray-500">{news.time}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    news.impact === "High"
                      ? "destructive"
                      : news.impact === "Medium"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {news.impact} Impact
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Category Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Category Risk Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskCategoryData.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">{category.category}</p>
                    <p className="text-sm text-gray-500">
                      Current tariff: {category.tariff}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{category.impact}</p>
                    <p className="text-sm text-gray-500">Potential impact</p>
                  </div>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        category.risk > 70
                          ? "bg-red-500"
                          : category.risk > 50
                          ? "bg-orange-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: `${category.risk}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAnalysisTab = () => (
    <div className="p-6 space-y-6">
      {/* AI-Powered Analysis Header */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Bot className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-blue-900">
              AI-Powered Impact Analysis
            </span>
            <Badge variant="outline" className="text-xs">
              Natural Language Processing
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Smart Calculator */}
        <Card>
          <CardHeader>
            <CardTitle>Smart Tariff Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={calculatorData.country}
                onChange={(e) => {
                  setCalculatorData({
                    ...calculatorData,
                    country: e.target.value,
                  });
                  setCalculatorResult(null);
                }}
              >
                <option value="">Select country</option>
                <option value="china">China</option>
                <option value="vietnam">Vietnam</option>
                <option value="india">India</option>
                <option value="mexico">Mexico</option>
                <option value="thailand">Thailand</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="indonesia">Indonesia</option>
                <option value="turkey">Turkey</option>
                <option value="germany">Germany</option>
                <option value="brazil">Brazil</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Category
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={calculatorData.category}
                onChange={(e) => {
                  setCalculatorData({
                    ...calculatorData,
                    category: e.target.value,
                  });
                  setCalculatorResult(null);
                }}
              >
                <option value="">Select category</option>
                <option value="electronics">Electronics</option>
                <option value="textiles">Textiles</option>
                <option value="automotive">Automotive</option>
                <option value="furniture">Furniture</option>
                <option value="pharmaceuticals">Pharmaceuticals</option>
                <option value="agriculture">Agriculture</option>
                <option value="machinery">Machinery</option>
                <option value="chemicals">Chemicals</option>
                <option value="footwear">Footwear</option>
                <option value="plastics">Plastics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Import Volume ($)
              </label>
              <Input
                placeholder="e.g., 10000000"
                type="number"
                value={calculatorData.volume}
                onChange={(e) => {
                  setCalculatorData({
                    ...calculatorData,
                    volume: e.target.value,
                  });
                  setCalculatorResult(null);
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Tariff Rate
              </label>
              <Input
                placeholder="Auto-calculated from AI data"
                value={
                  calculatorData.country === "china"
                    ? "35%"
                    : calculatorData.country === "vietnam"
                    ? "8%"
                    : calculatorData.country === "india"
                    ? "12%"
                    : calculatorData.country === "mexico"
                    ? "5%"
                    : calculatorData.country === "thailand"
                    ? "10%"
                    : calculatorData.country === "bangladesh"
                    ? "3%"
                    : calculatorData.country === "indonesia"
                    ? "9%"
                    : calculatorData.country === "turkey"
                    ? "7%"
                    : calculatorData.country === "germany"
                    ? "4%"
                    : calculatorData.country === "brazil"
                    ? "11%"
                    : ""
                }
                disabled
              />
            </div>
            <Button className="w-full" onClick={handleCalculator}>
              <Calculator className="h-4 w-4 mr-2" />
              Calculate AI-Powered Impact
            </Button>

            {calculatorResult && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-sm font-medium text-red-900">
                    Current Annual Cost
                  </p>
                  <p className="text-2xl font-bold text-red-600">
                    {calculatorResult.currentCost}
                  </p>
                  <p className="text-sm text-red-600">
                    Based on current tariff rates
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm font-medium text-yellow-900">
                    Predicted Q3 Cost
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {calculatorResult.predictedCost}
                  </p>
                  <p className="text-sm text-yellow-600">
                    If tariffs increase as predicted
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Alternative Suppliers */}
        <Card>
          <CardHeader>
            <CardTitle>AI-Recommended Alternatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                ...alternativeCountries,
                {
                  country: "Bangladesh",
                  tariff: 3,
                  cost: "$0.9M",
                  savings: "$2.8M",
                  reliability: 80,
                },
                {
                  country: "Indonesia",
                  tariff: 9,
                  cost: "$1.6M",
                  savings: "$1.9M",
                  reliability: 83,
                },
                {
                  country: "Turkey",
                  tariff: 7,
                  cost: "$1.3M",
                  savings: "$2.1M",
                  reliability: 86,
                },
                {
                  country: "Germany",
                  tariff: 4,
                  cost: "$2.0M",
                  savings: "$1.5M",
                  reliability: 90,
                },
                {
                  country: "Brazil",
                  tariff: 11,
                  cost: "$1.7M",
                  savings: "$1.6M",
                  reliability: 75,
                },
              ].map((country, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{country.country}</span>
                    </div>
                    <Badge variant="outline">{country.tariff}% tariff</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">Annual Cost</p>
                      <p className="font-medium text-green-600">
                        {country.cost}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Savings</p>
                      <p className="font-medium text-blue-600">
                        {country.savings}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Reliability</p>
                      <p className="font-medium">{country.reliability}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparative Analysis Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Cost Comparison Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                ...alternativeCountries,
                { country: "Bangladesh", tariff: 3 },
                { country: "Indonesia", tariff: 9 },
                { country: "Turkey", tariff: 7 },
                { country: "Germany", tariff: 4 },
                { country: "Brazil", tariff: 11 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tariff" fill="#ef4444" name="Tariff Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderAIAgentTab = () => (
    <div className="p-6 space-y-6">
      {/* AI Agent Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>Tariff Intelligence Agent</span>
            <Badge variant="outline" className="ml-auto">
              {isAnalyzing ? "Analyzing" : "Ready"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask about tariffs, predictions, or alternatives..."
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={simulateAIAnalysis}
                disabled={isAnalyzing || !aiQuery}
              >
                {isAnalyzing ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
                {isAnalyzing ? "Analyzing" : "Analyze"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-20 flex-col"
                onClick={() => {
                  setAiQuery(aiSampleQuestions[0].question);
                  simulateAIAnalysis();
                }}
              >
                <TrendingUp className="h-6 w-6 mb-2" />
                <span className="font-medium">Predict Changes</span>
                <span className="text-sm text-gray-500">
                  {aiSampleQuestions[0].question}
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col"
                onClick={() => {
                  setAiQuery(aiSampleQuestions[1].question);
                  simulateAIAnalysis();
                }}
              >
                <Globe className="h-6 w-6 mb-2" />
                <span className="font-medium">Find Alternatives</span>
                <span className="text-sm text-gray-500">
                  {aiSampleQuestions[1].question}
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col"
                onClick={() => {
                  setAiQuery(aiSampleQuestions[2].question);
                  simulateAIAnalysis();
                }}
              >
                <AlertTriangle className="h-6 w-6 mb-2" />
                <span className="font-medium">Risk Analysis</span>
                <span className="text-sm text-gray-500">
                  {aiSampleQuestions[2].question}
                </span>
              </Button>
            </div>

            {/* AI Response */}
            {(aiResponse || isAnalyzing) && (
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="h-5 w-5 animate-spin text-blue-600" />
                      <span className="text-gray-600">
                        Analyzing real-time data from 247 sources...
                      </span>
                    </div>
                  ) : (
                    renderAIResponseText(aiResponse)
                  )}
                </CardContent>
              </Card>
            )}

            <div className="border rounded-lg p-4 bg-blue-50">
              <p className="text-sm text-blue-900 font-medium mb-2">
                💡 Try asking:
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                {aiSampleQuestions.map((q, idx) => (
                  <li key={idx}>
                    •{" "}
                    <button
                      className="underline text-blue-700 hover:text-blue-900"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setAiQuery(q.question);
                        simulateAIAnalysis();
                      }}
                    >
                      {q.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Data Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Live Data Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { source: "Reuters", articles: 45, status: "Active" },
              { source: "Bloomberg", articles: 38, status: "Active" },
              { source: "Trade.gov", articles: 52, status: "Active" },
              { source: "WTO Database", articles: 23, status: "Active" },
            ].map((source, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{source.source}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">
                  {source.articles} articles today
                </p>
                <Badge variant="outline" className="text-xs mt-2">
                  {source.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Intelligence Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Intelligence Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="font-medium text-red-900">
                    High Priority
                  </span>
                </div>
                <p className="text-sm text-red-700">
                  China electronics tariffs expected to rise 15% in Q3 based on
                  policy analysis
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium text-yellow-900">
                    Opportunity
                  </span>
                </div>
                <p className="text-sm text-yellow-700">
                  Vietnam offering new trade incentives for textile imports -
                  potential 30% cost reduction
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingDown className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-900">Favorable</span>
                </div>
                <p className="text-sm text-green-700">
                  Mexico maintaining stable automotive tariffs under USMCA -
                  consider expansion
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Key Recommendations:</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>
                  • Diversify electronics sourcing: 40% Vietnam, 30% Mexico, 30%
                  current
                </li>
                <li>• Accelerate textile supplier negotiations in Vietnam</li>
                <li>
                  • Monitor Trump administration trade policy announcements
                </li>
                <li>
                  • Prepare contingency plans for 40% China electronics tariffs
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "monitoring":
        return renderMonitoringTab();
      case "analysis":
        return renderAnalysisTab();
      case "ai-agent":
        return renderAIAgentTab();
      default:
        return renderMonitoringTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Tariff Intelligence Center
              </h1>
              <p className="text-sm text-gray-600">
                Real-time tariff monitoring and AI-powered analysis
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-xs">
                🇺🇸 Walmart Global Sourcing
              </Badge>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">AI Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto">{renderTabContent()}</div>
    </div>
  );
}

// Utility to render markdown-like text with Tailwind styling
function renderAIResponseText(text: string) {
  // Split by double newlines for paragraphs
  const paragraphs = text.split(/\n\n+/);
  return (
    <div className="space-y-4 text-sm">
      {paragraphs.map((para, idx) => {
        // Split by single newlines for bullet points
        const lines = para.split("\n");
        // If first line starts with emoji or bold, treat as header
        const headerMatch = lines[0].match(/^([^\w\s]|[\w\s]+:)/);
        return (
          <div key={idx}>
            {/* Header line */}
            {lines[0] && (
              <div className="font-semibold text-blue-900 mb-1 flex items-center">
                {lines[0]}
              </div>
            )}
            {/* Bullet points */}
            {lines.slice(1).map((line, i) =>
              line.trim().startsWith("-") ? (
                <div key={i} className="pl-4 text-gray-700 flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  <span>{line.replace(/^- /, "")}</span>
                </div>
              ) : line.trim().startsWith("1.") ||
                line.trim().startsWith("2.") ||
                line.trim().startsWith("3.") ? (
                <div key={i} className="pl-4 text-gray-700 flex items-start">
                  <span className="mr-2 text-blue-400">
                    {line.trim().charAt(0)}.
                  </span>
                  <span>{line.replace(/^\d+\.\s*/, "")}</span>
                </div>
              ) : (
                // Other lines
                <div key={i} className="text-gray-700">
                  {line}
                </div>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
