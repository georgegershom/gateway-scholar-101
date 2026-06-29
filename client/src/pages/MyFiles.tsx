import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FileUpload from "@/components/FileUpload";
import { File, Download, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";
import { Loader2 } from "lucide-react";

export default function MyFiles() {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const { data: files, isLoading, refetch } = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/20">
        <Card className="p-12 max-w-md text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Login Required
          </h2>
          <p className="text-muted-foreground mb-6">
            Please log in to access your uploaded files.
          </p>
          <Button asChild size="lg">
            <a href={getLoginUrl()}>Log In</a>
          </Button>
        </Card>
      </div>
    );
  }

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return "Unknown size";
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "Unknown date";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              My Files
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Upload and manage your thesis chapters, manuscripts, and documents
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Upload New File
            </h2>
            <FileUpload
              onUploadComplete={() => {
                refetch();
              }}
              acceptedTypes={[".pdf", ".doc", ".docx", ".txt"]}
              maxSizeMB={50}
              documentType="thesis chapter"
            />
          </div>
        </div>
      </section>

      {/* Files List */}
      <section className="py-12 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Your Uploaded Files
            </h2>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : files && files.length > 0 ? (
              <div className="space-y-4">
                {files.map((file) => (
                  <Card key={file.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <File className="w-6 h-6 text-primary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
                            {file.filename}
                          </h3>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{formatDate(file.createdAt)}</span>
                            </span>
                            <span>{formatFileSize(file.fileSize)}</span>
                            {file.documentType && (
                              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                {file.documentType}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center space-x-2 mt-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600 font-medium">
                              {file.status === "uploaded" ? "Uploaded" : file.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="ml-4"
                      >
                        <a
                          href={file.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <File className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No files uploaded yet
                </h3>
                <p className="text-muted-foreground">
                  Upload your first document to get started
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
