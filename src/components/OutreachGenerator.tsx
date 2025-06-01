
import { useState } from "react";
import { Mail, Copy, RefreshCw, Sparkles, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const OutreachGenerator = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("sarah-chen");
  const [tone, setTone] = useState("professional");
  const [emailType, setEmailType] = useState("initial");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const candidates = [
    { id: "sarah-chen", name: "Sarah Chen", title: "Senior GenAI Engineer", company: "DeepMind" },
    { id: "marcus-rodriguez", name: "Marcus Rodriguez", title: "AI Research Engineer", company: "OpenAI" },
    { id: "elena-popovic", name: "Elena Popovic", title: "Machine Learning Engineer", company: "Anthropic" }
  ];

  const emailTemplates = {
    "initial-professional": {
      subject: "Exciting GenAI Opportunity at TechCorp",
      body: `Hi Sarah,

I hope this message finds you well. I came across your impressive background in GenAI and RAG systems, particularly your work at DeepMind with LangChain implementations.

We're currently seeking a Senior GenAI Engineer for an exciting project at TechCorp that would be a perfect match for your expertise. The role involves:

• Leading the development of enterprise RAG systems
• Working with cutting-edge AI technologies including LangChain and vector databases
• Collaborating with a world-class team of ML engineers

Given your experience with enterprise RAG systems serving 1M+ users and your research contributions, I believe this opportunity would be both challenging and rewarding.

Would you be open to a brief conversation about this role? I'd love to share more details about the project and learn about your current interests.

Best regards,
[Your Name]
Senior Technical Recruiter, TechCorp`
    },
    "initial-friendly": {
      subject: "Amazing GenAI role that made me think of you!",
      body: `Hey Sarah!

Hope you're doing well! 🚀

I've been following your work in GenAI (that RAG system serving 1M+ users is incredible!), and I just had to reach out about an opportunity that seems tailor-made for someone with your skills.

We've got this amazing Senior GenAI Engineer role at TechCorp where you'd be:
✨ Building next-gen RAG systems
✨ Working with the latest in LangChain and vector databases  
✨ Leading a brilliant team of ML engineers

Your background at DeepMind and expertise in enterprise-scale systems makes you exactly the kind of person we're looking for.

Any chance you'd be up for a quick chat? Would love to tell you more about what we're building and see if it sparks your interest!

Cheers,
[Your Name] 😊`
    },
    "followup-professional": {
      subject: "Following up on the GenAI Engineer opportunity",
      body: `Hi Sarah,

I wanted to follow up on the Senior GenAI Engineer opportunity I mentioned last week. I understand you're likely very busy, so I'll keep this brief.

Since our last communication, the project has gained even more momentum, and the team is particularly excited about the RAG architecture challenges that align perfectly with your experience.

Key highlights that might interest you:
• Technical leadership role with significant autonomy
• Work on problems similar to your enterprise RAG system experience
• Competitive compensation package (€85-95k range you mentioned)

If timing isn't right now, I completely understand. Would you be open to keeping in touch for future opportunities?

Best regards,
[Your Name]`
    }
  };

  const generateEmail = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const templateKey = `${emailType}-${tone}` as keyof typeof emailTemplates;
      const template = emailTemplates[templateKey] || emailTemplates["initial-professional"];
      setGeneratedEmail(template.body);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Configuration Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              AI Outreach Generator
            </CardTitle>
            <CardDescription>
              Generate personalized emails for your top candidates using AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Select Candidate</label>
              <Select value={selectedCandidate} onValueChange={setSelectedCandidate}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {candidates.map((candidate) => (
                    <SelectItem key={candidate.id} value={candidate.id}>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{candidate.name} - {candidate.title}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email Type</label>
              <Select value={emailType} onValueChange={setEmailType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="initial">Initial Outreach</SelectItem>
                  <SelectItem value="followup">Follow-up</SelectItem>
                  <SelectItem value="interview">Interview Invitation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Tone</label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="concise">Concise</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={generateEmail} 
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating with Gemini...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Personalized Email
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Candidate Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Candidate Context</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Sarah Chen</h4>
                <p className="text-sm text-gray-600">Senior GenAI Engineer at DeepMind</p>
              </div>
              <div>
                <h5 className="font-medium text-sm mb-1">Key Skills</h5>
                <div className="flex flex-wrap gap-1">
                  {["LangChain", "RAG", "Python", "Transformers"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-medium text-sm mb-1">Highlights</h5>
                <p className="text-xs text-gray-600">
                  Built enterprise RAG system serving 1M+ users, 5+ years experience, €85-95k target
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Generated Email */}
      <div>
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Generated Email
              </CardTitle>
              {generatedEmail && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" onClick={generateEmail}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {generatedEmail ? (
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg border">
                  <h4 className="font-medium text-sm text-gray-700 mb-1">Subject:</h4>
                  <p className="font-semibold">Exciting GenAI Opportunity at TechCorp</p>
                </div>
                
                <Separator />
                
                <div>
                  <Textarea
                    value={generatedEmail}
                    onChange={(e) => setGeneratedEmail(e.target.value)}
                    className="min-h-[400px] resize-none"
                    placeholder="Generated email will appear here..."
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline">
                    Save as Template
                  </Button>
                  <Button variant="outline">
                    Schedule Send
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[400px] text-center">
                <div>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No Email Generated Yet</h3>
                  <p className="text-gray-600">
                    Configure your settings and click "Generate Personalized Email" to create AI-powered outreach
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OutreachGenerator;
