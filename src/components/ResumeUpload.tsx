
import { useState, useCallback } from "react";
import { Upload, FileText, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const ResumeUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);

  const processFiles = useCallback((files: File[]) => {
    files.forEach((file) => {
      const newFile = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        status: "processing",
        extractedData: null
      };
      
      setUploadedFiles(prev => [...prev, newFile]);
      
      // Simulate AI processing
      setIsProcessing(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setProcessingProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setProcessingProgress(0);
          
          // Simulate extracted data
          const extractedData = {
            name: "John Doe",
            title: "Senior Machine Learning Engineer",
            experience: "6 years",
            skills: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "MLOps"],
            education: "MS Computer Science, Stanford University",
            location: "San Francisco, CA",
            summary: "Experienced ML engineer with expertise in deep learning and production ML systems."
          };
          
          setUploadedFiles(prev => 
            prev.map(f => 
              f.id === newFile.id 
                ? { ...f, status: "completed", extractedData }
                : f
            )
          );
        }
      }, 200);
    });
  }, []);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    processFiles(files);
  }, [processFiles]);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    processFiles(files);
  }, [processFiles]);

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
        <CardContent className="p-8">
          <div 
            className="text-center space-y-4"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Upload Resumes for AI Processing</h3>
              <p className="text-gray-600 mb-4">
                Drag and drop PDF resumes here, or click to browse. Our AI will extract skills, experience, and key information.
              </p>
              <label htmlFor="resume-upload">
                <Button asChild className="cursor-pointer">
                  <span>
                    <FileText className="w-4 h-4 mr-2" />
                    Choose Files
                  </span>
                </Button>
              </label>
              <input
                id="resume-upload"
                type="file"
                multiple
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            <p className="text-xs text-gray-500">
              Supports PDF files up to 10MB each. Bulk upload up to 50 files at once.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Processing Status */}
      {isProcessing && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <h3 className="text-lg font-semibold">AI Processing Resumes...</h3>
            </div>
            <Progress value={processingProgress} className="mb-2" />
            <p className="text-sm text-gray-600">
              Extracting skills, experience, and candidate information using Gemini 2.0 Flash
            </p>
          </CardContent>
        </Card>
      )}

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Processed Resumes ({uploadedFiles.length})</h3>
          
          <div className="grid gap-4">
            {uploadedFiles.map((file) => (
              <Card key={file.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <div>
                        <h4 className="font-semibold">{file.name}</h4>
                        <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {file.status === "completed" ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Processed
                        </Badge>
                      ) : file.status === "processing" ? (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-yellow-600 mr-1"></div>
                          Processing
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Error
                        </Badge>
                      )}
                    </div>
                  </div>

                  {file.extractedData && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Candidate Information</h5>
                          <div className="space-y-1 text-sm">
                            <p><span className="font-medium">Name:</span> {file.extractedData.name}</p>
                            <p><span className="font-medium">Title:</span> {file.extractedData.title}</p>
                            <p><span className="font-medium">Experience:</span> {file.extractedData.experience}</p>
                            <p><span className="font-medium">Location:</span> {file.extractedData.location}</p>
                            <p><span className="font-medium">Education:</span> {file.extractedData.education}</p>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Extracted Skills</h5>
                          <div className="flex flex-wrap gap-1">
                            {file.extractedData.skills.map((skill: string, index: number) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">AI-Generated Summary</h5>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          {file.extractedData.summary}
                        </p>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Generate Interview Questions
                        </Button>
                        <Button size="sm" variant="outline">
                          Add to Talent Pool
                        </Button>
                        <Button size="sm" variant="outline">
                          Create Outreach Email
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
