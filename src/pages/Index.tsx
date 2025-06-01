
import { useState } from "react";
import { Search, Upload, Users, MessageSquare, BarChart3, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchInterface from "@/components/SearchInterface";
import CandidateResults from "@/components/CandidateResults";
import ResumeUpload from "@/components/ResumeUpload";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import OutreachGenerator from "@/components/OutreachGenerator";

const Index = () => {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  HireAI
                </h1>
                <p className="text-sm text-gray-500">AI Hiring Copilot</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Candidates: 1,247
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Sparkles className="w-4 h-4 mr-2" />
                Upgrade Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Find AI Talent with Natural Language
          </h2>
          <p className="text-lg text-gray-600">
            Use AI-powered search to discover, screen, and engage the best AI professionals for your team.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit">
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="candidates" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Candidates
            </TabsTrigger>
            <TabsTrigger value="outreach" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Outreach
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <SearchInterface />
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <ResumeUpload />
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <CandidateResults />
          </TabsContent>

          <TabsContent value="outreach" className="space-y-6">
            <OutreachGenerator />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
