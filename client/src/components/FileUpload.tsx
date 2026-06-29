import { useState, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, File, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { storagePut } from "../../../server/storage";

interface FileUploadProps {
  onUploadComplete?: (fileUrl: string) => void;
  acceptedTypes?: string[];
  maxSizeMB?: number;
  documentType?: string;
}

export default function FileUpload({
  onUploadComplete,
  acceptedTypes = [".pdf", ".doc", ".docx", ".txt"],
  maxSizeMB = 50,
  documentType = "thesis chapter",
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const uploadMutation = trpc.files.uploadDirect.useMutation({
    onSuccess: (data) => {
      toast.success("File uploaded successfully!");
      setSelectedFile(null);
      setUploadProgress(100);
      if (onUploadComplete) {
        onUploadComplete(data.fileUrl);
      }
      setTimeout(() => {
        setUploading(false);
        setUploadProgress(0);
      }, 1000);
    },
    onError: (error) => {
      toast.error(`Upload failed: ${error.message}`);
      setUploading(false);
      setUploadProgress(0);
    },
  });

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    },
    [maxSizeMB]
  );

  const handleFileSelect = (file: File) => {
    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast.error(`File size must be less than ${maxSizeMB}MB`);
      return;
    }

    // Validate file type
    const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
    if (!acceptedTypes.includes(fileExtension)) {
      toast.error(`File type not supported. Accepted types: ${acceptedTypes.join(", ")}`);
      return;
    }

    setSelectedFile(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setUploadProgress(10);

    try {
      // Read file as base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Data = e.target?.result as string;
        const base64Content = base64Data.split(",")[1]; // Remove data:image/png;base64, prefix

        setUploadProgress(30);

        await uploadMutation.mutateAsync({
          filename: selectedFile.name,
          fileData: base64Content,
          mimeType: selectedFile.type,
          documentType,
        });
      };

      reader.onerror = () => {
        toast.error("Failed to read file");
        setUploading(false);
        setUploadProgress(0);
      };

      reader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error("Upload error:", error);
      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <Card className="p-8">
      <div className="space-y-6">
        {/* Drag and Drop Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
            dragActive
              ? "border-primary bg-primary/5 scale-105"
              : "border-border hover:border-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="w-8 h-8 text-primary" />
            </div>

            <div>
              <p className="text-lg font-semibold text-foreground mb-2">
                Drag and drop your file here
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                or click to browse
              </p>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept={acceptedTypes.join(",")}
                onChange={handleFileInputChange}
                disabled={uploading}
              />
              <label htmlFor="file-upload">
                <Button variant="outline" asChild disabled={uploading}>
                  <span className="cursor-pointer">Choose File</span>
                </Button>
              </label>
            </div>

            <p className="text-xs text-muted-foreground">
              Accepted formats: {acceptedTypes.join(", ")} (Max {maxSizeMB}MB)
            </p>
          </div>
        </div>

        {/* Selected File Display */}
        {selectedFile && (
          <div className="bg-secondary/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <File className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>

              {!uploading && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFile(null)}
                >
                  <XCircle className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Upload Progress */}
            {uploading && (
              <div className="mt-4 space-y-2">
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  {uploadProgress === 100 ? "Upload complete!" : `Uploading... ${uploadProgress}%`}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Upload Button */}
        {selectedFile && !uploading && uploadProgress === 0 && (
          <Button
            onClick={handleUpload}
            className="w-full"
            size="lg"
            disabled={uploading}
          >
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </>
            )}
          </Button>
        )}

        {uploadProgress === 100 && (
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Upload successful!</span>
          </div>
        )}
      </div>
    </Card>
  );
}
