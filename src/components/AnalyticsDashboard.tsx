
import { TrendingUp, Users, Clock, Target, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const AnalyticsDashboard = () => {
  const metrics = [
    {
      title: "Total Candidates",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Avg. Match Score",
      value: "87%",
      change: "+5%",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Time to Match",
      value: "2.4 days",
      change: "-18%",
      icon: Clock,
      color: "text-purple-600"
    },
    {
      title: "Response Rate",
      value: "34%",
      change: "+8%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const topSkills = [
    { skill: "Python", candidates: 847, percentage: 68 },
    { skill: "Machine Learning", candidates: 723, percentage: 58 },
    { skill: "LangChain", candidates: 456, percentage: 37 },
    { skill: "RAG", candidates: 389, percentage: 31 },
    { skill: "PyTorch", candidates: 356, percentage: 29 },
    { skill: "TensorFlow", candidates: 298, percentage: 24 },
  ];

  const locationData = [
    { location: "Berlin, Germany", candidates: 234 },
    { location: "London, UK", candidates: 198 },
    { location: "Amsterdam, Netherlands", candidates: 156 },
    { location: "Paris, France", candidates: 143 },
    { location: "San Francisco, USA", candidates: 128 },
  ];

  const hiringTrends = [
    { period: "Q4 2024", positions: 45, filled: 38, rate: 84 },
    { period: "Q3 2024", positions: 52, filled: 41, rate: 79 },
    { period: "Q2 2024", positions: 38, filled: 28, rate: 74 },
    { period: "Q1 2024", positions: 29, filled: 19, rate: 66 },
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-green-600 font-medium">{metric.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-50 ${metric.color}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Top Skills in Talent Pool</CardTitle>
            <CardDescription>Most common skills among candidates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topSkills.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.skill}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{item.candidates} candidates</span>
                    <Badge variant="outline" className="text-xs">
                      {item.percentage}%
                    </Badge>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Candidate Locations</CardTitle>
            <CardDescription>Where your talent is located</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {locationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">{item.location}</span>
                </div>
                <Badge variant="outline">{item.candidates} candidates</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Hiring Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Hiring Success Rate</CardTitle>
            <CardDescription>Quarterly hiring performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {hiringTrends.map((trend, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{trend.period}</span>
                  <div className="text-right">
                    <p className="text-sm font-medium">{trend.filled}/{trend.positions} filled</p>
                    <p className="text-xs text-gray-600">{trend.rate}% success rate</p>
                  </div>
                </div>
                <Progress value={trend.rate} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              AI Performance Metrics
            </CardTitle>
            <CardDescription>How well our AI is matching candidates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">94%</p>
                <p className="text-sm text-gray-600">Query Accuracy</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">1.2s</p>
                <p className="text-sm text-gray-600">Avg. Response Time</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Resume Parsing Success</span>
                <span className="text-sm font-medium">98.5%</span>
              </div>
              <Progress value={98.5} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Skill Extraction Accuracy</span>
                <span className="text-sm font-medium">96.2%</span>
              </div>
              <Progress value={96.2} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Email Generation Quality</span>
                <span className="text-sm font-medium">92.8%</span>
              </div>
              <Progress value={92.8} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions in your hiring pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New candidate added", candidate: "Alex Thompson", time: "2 hours ago", type: "upload" },
              { action: "Outreach email sent", candidate: "Sarah Chen", time: "4 hours ago", type: "email" },
              { action: "Interview scheduled", candidate: "Marcus Rodriguez", time: "6 hours ago", type: "interview" },
              { action: "Candidate matched", candidate: "Elena Popovic", time: "1 day ago", type: "match" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.candidate} • {activity.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
