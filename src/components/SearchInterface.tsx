
import { useState } from "react";
import { Search, Sparkles, Filter, MapPin, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SearchInterface = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate AI processing
    setTimeout(() => {
      setSearchResults([
        {
          id: 1,
          name: "Sarah Chen",
          title: "Senior GenAI Engineer",
          experience: "5+ years",
          location: "Berlin, Germany",
          skills: ["LangChain", "RAG", "Python", "Transformers", "AWS"],
          score: 95,
          availability: "Open to contract",
          summary: "Experienced GenAI engineer specializing in RAG systems and LangChain implementations. Led 3 successful AI product launches.",
        },
        {
          id: 2,
          name: "Marcus Rodriguez",
          title: "AI Research Engineer",
          experience: "4+ years",
          location: "Amsterdam, Netherlands", 
          skills: ["RAG", "Vector Databases", "PyTorch", "MLOps", "Docker"],
          score: 89,
          availability: "Available immediately",
          summary: "Research-focused engineer with deep expertise in retrieval systems and vector databases. Published 12 papers on AI.",
        },
        {
          id: 3,
          name: "Elena Popovic",
          title: "Machine Learning Engineer",
          experience: "3+ years",
          location: "London, UK",
          skills: ["LangChain", "OpenAI", "Python", "FastAPI", "Redis"],
          score: 87,
          availability: "Open to contract",
          summary: "Full-stack ML engineer with experience building production RAG systems. Strong background in API development.",
        }
      ]);
      setIsSearching(false);
    }, 2000);
  };

  const exampleQueries = [
    "Find senior GenAI engineers with LangChain + RAG, 3+ years experience in Europe, open to contract work",
    "Machine learning engineers specializing in computer vision, PhD preferred, San Francisco Bay Area",
    "AI researchers with NLP expertise, publications in top-tier conferences, remote work available",
    "Data scientists with MLOps experience, AWS/GCP certified, fintech background preferred"
  ];

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <Card className="border-2 border-dashed border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            PeopleGPT - Natural Language Search
          </CardTitle>
          <CardDescription>
            Describe your ideal candidate in plain English. Our AI will find the best matches.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="e.g., Find senior GenAI engineers with LangChain + RAG, 3+ years experience in Europe..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button 
              onClick={handleSearch}
              disabled={!query.trim() || isSearching}
              className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Searching...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Search with AI
                </>
              )}
            </Button>
          </div>

          {/* Example Queries */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQueries.map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setQuery(example)}
                  className="text-xs text-left h-auto p-2 whitespace-normal"
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Found {searchResults.length} candidates</h3>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Refine Search
            </Button>
          </div>

          <div className="grid gap-4">
            {searchResults.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold">{candidate.name}</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {candidate.score}% match
                        </Badge>
                      </div>
                      <p className="text-gray-600 font-medium">{candidate.title}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {candidate.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {candidate.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {candidate.availability}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{candidate.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {candidate.skills.map((skill: string, index: number) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Full Profile
                    </Button>
                    <Button size="sm" variant="outline">
                      Generate Questions
                    </Button>
                    <Button size="sm" variant="outline">
                      Create Outreach
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInterface;
