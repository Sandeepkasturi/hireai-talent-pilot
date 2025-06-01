
import { useState } from "react";
import { Star, MapPin, Clock, DollarSign, Mail, Phone, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const CandidateResults = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const candidates = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior GenAI Engineer",
      company: "DeepMind",
      experience: "5+ years",
      location: "Berlin, Germany",
      skills: ["LangChain", "RAG", "Python", "Transformers", "AWS", "Vector Databases"],
      score: 95,
      availability: "Open to contract",
      salary: "€85-95k",
      email: "sarah.chen@email.com",
      phone: "+49 xxx xxx xxxx",
      summary: "Experienced GenAI engineer specializing in RAG systems and LangChain implementations. Led 3 successful AI product launches at top-tier companies.",
      avatar: "/placeholder.svg",
      rating: 4.9,
      projects: ["Built enterprise RAG system serving 1M+ users", "Published research on vector similarity optimization", "Led team of 8 ML engineers"],
      education: "PhD Computer Science, MIT",
      certifications: ["AWS ML Specialty", "Google Cloud AI/ML", "LangChain Expert"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "AI Research Engineer",
      company: "OpenAI",
      experience: "4+ years",
      location: "Amsterdam, Netherlands",
      skills: ["RAG", "Vector Databases", "PyTorch", "MLOps", "Docker", "Kubernetes"],
      score: 89,
      availability: "Available immediately",
      salary: "€70-80k",
      email: "marcus.r@email.com",
      phone: "+31 xxx xxx xxxx",
      summary: "Research-focused engineer with deep expertise in retrieval systems and vector databases. Published 12 papers on AI and information retrieval.",
      avatar: "/placeholder.svg",
      rating: 4.8,
      projects: ["Developed novel RAG architecture improving accuracy by 23%", "Open-source contributor to major ML libraries", "Speaker at 5 AI conferences"],
      education: "MS AI, Stanford University",
      certifications: ["PyTorch Certified", "Kubernetes Administrator"]
    },
    {
      id: 3,
      name: "Elena Popovic",
      title: "Machine Learning Engineer",
      company: "Anthropic",
      experience: "3+ years",
      location: "London, UK",
      skills: ["LangChain", "OpenAI", "Python", "FastAPI", "Redis", "PostgreSQL"],
      score: 87,
      availability: "Open to contract",
      salary: "£65-75k",
      email: "elena.p@email.com",
      phone: "+44 xxx xxx xxxx",
      summary: "Full-stack ML engineer with experience building production RAG systems. Strong background in API development and system architecture.",
      avatar: "/placeholder.svg",
      rating: 4.7,
      projects: ["Built scalable ML API handling 100k+ requests/day", "Optimized ML model inference reducing latency by 40%", "Mentored 6 junior engineers"],
      education: "BS Computer Science, Oxford",
      certifications: ["AWS Solutions Architect", "FastAPI Expert"]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[800px]">
      {/* Candidates List */}
      <div className="lg:col-span-1 space-y-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">AI Talent Pool</h3>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {candidates.map((candidate) => (
          <Card 
            key={candidate.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedCandidate?.id === candidate.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
            }`}
            onClick={() => setSelectedCandidate(candidate)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={candidate.avatar} alt={candidate.name} />
                  <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm truncate">{candidate.name}</h4>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      {candidate.score}%
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{candidate.title}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <MapPin className="w-3 h-3" />
                    {candidate.location}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs px-1 py-0">
                        {skill}
                      </Badge>
                    ))}
                    {candidate.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs px-1 py-0">
                        +{candidate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Candidate Details */}
      <div className="lg:col-span-2">
        {selectedCandidate ? (
          <Card className="h-full overflow-y-auto">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={selectedCandidate.avatar} alt={selectedCandidate.name} />
                    <AvatarFallback className="text-lg">
                      {selectedCandidate.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{selectedCandidate.name}</CardTitle>
                    <CardDescription className="text-lg">{selectedCandidate.title}</CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {selectedCandidate.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedCandidate.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedCandidate.location}
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                  {selectedCandidate.score}% match
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Contact & Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {selectedCandidate.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {selectedCandidate.phone}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Availability</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      {selectedCandidate.salary}
                    </div>
                    <p>{selectedCandidate.availability}</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="font-semibold mb-2">AI-Generated Summary</h4>
                <p className="text-gray-700">{selectedCandidate.summary}</p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h4 className="font-semibold mb-3">Key Projects & Achievements</h4>
                <ul className="space-y-2">
                  {selectedCandidate.projects.map((project: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-gray-700">{selectedCandidate.education}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <div className="space-y-1">
                    {selectedCandidate.certifications.map((cert: string, index: number) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-1 text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Generate Outreach Email
                </Button>
                <Button variant="outline">
                  Generate Interview Questions
                </Button>
                <Button variant="outline">
                  Schedule Call
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="h-full flex items-center justify-center">
            <CardContent className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Select a Candidate</h3>
              <p className="text-gray-600">Choose a candidate from the list to view detailed information</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CandidateResults;
