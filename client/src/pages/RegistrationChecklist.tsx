/* Design Philosophy: Refined Editorial Elegance
 * Detailed registration checklist with guidance for each item
 */

import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function RegistrationChecklist() {
  const checklistSections = [
    {
      id: "degree-level-field",
      title: "Degree Level + Field",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Specify your current degree program and academic field to help us understand your context and requirements.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">Examples:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• MSc in Civil Engineering</li>
              <li>• PhD in Agricultural Engineering</li>
              <li>• MSc in Materials Science</li>
              <li>• PhD in Mechanical Engineering</li>
              <li>• MSc in Engineering Management</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "deadline-date",
      title: "Deadline Date",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Provide the exact date when you need the edited document returned. Be realistic and include buffer time for revisions.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">How to write it:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Use format: DD/MM/YYYY or Month DD, YYYY</li>
              <li>• Example: "March 15, 2026" or "15/03/2026"</li>
              <li>• Include timezone if critical: "March 15, 2026 (GMT+8)"</li>
              <li>• Minimum turnaround: 1 week per chapter</li>
              <li>• Add 3–5 days buffer for supervisor review and revisions</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "document-type",
      title: "Document Type",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Identify the specific type of academic document you need help with. This determines the editing approach and depth of review.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">What to choose:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Thesis chapter:</strong> Introduction, Literature Review, Methodology, Results, Discussion, Conclusion</li>
              <li>• <strong>Journal paper:</strong> Full manuscript for peer-reviewed publication</li>
              <li>• <strong>Conference paper:</strong> Short paper for conference proceedings</li>
              <li>• <strong>Technical report:</strong> Project report, case study, or technical documentation</li>
              <li>• <strong>Proposal:</strong> Research proposal or grant application</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "word-count-pages",
      title: "Word Count / Pages",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Provide an accurate estimate of your document length. This helps us assess the scope and timeline.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">How to estimate:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Word count:</strong> Use your word processor's word count tool (File → Properties or Tools → Word Count)</li>
              <li>• <strong>Pages:</strong> Count actual content pages (exclude title page, table of contents, references unless they need editing)</li>
              <li>• <strong>Example formats:</strong> "8,500 words" or "35 pages" or "8,500 words / 35 pages"</li>
              <li>• <strong>Typical ranges:</strong> Thesis chapter: 5,000–15,000 words; Journal paper: 4,000–8,000 words</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "required-style",
      title: "Required Style (APA/IEEE/Elsevier)",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Specify the citation and formatting style required by your university or target journal. This ensures consistency throughout your document.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">Common styles:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>APA (American Psychological Association):</strong> Common in social sciences, education, management</li>
              <li>• <strong>IEEE:</strong> Standard for electrical engineering, computer science, electronics</li>
              <li>• <strong>Elsevier:</strong> Used by many engineering and science journals published by Elsevier</li>
              <li>• <strong>Other:</strong> Chicago, Harvard, Vancouver, or journal-specific style guides</li>
              <li>• <strong>How to find it:</strong> Check your university thesis guidelines or target journal's "Author Guidelines" page</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "google-docs-link",
      title: "Google Docs Link",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Provide a Google Docs link with proper sharing permissions. This is the preferred format for collaboration and tracked changes.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">Exact sharing settings:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Step 1:</strong> Upload your document to Google Docs (or convert Word/PDF to Google Docs format)
              </li>
              <li>
                <strong>Step 2:</strong> Click "Share" button (top right)
              </li>
              <li>
                <strong>Step 3:</strong> Under "General access", select <strong>"Anyone with the link"</strong>
              </li>
              <li>
                <strong>Step 4:</strong> Set permission to <strong>"Commenter"</strong> or <strong>"Editor"</strong> (recommended: Commenter for security)
              </li>
              <li>
                <strong>Step 5:</strong> Copy the link and paste it into the registration form
              </li>
              <li className="text-sm italic">
                Alternative: If you cannot use Google Docs, email your Word/PDF file to georgegershom22@gmail.com with subject line "Registration - [Your Name]"
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "supervisor-journal-requirements",
      title: "Supervisor / Journal Requirements",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Share any specific feedback, comments, or requirements from your supervisor or target journal. This helps us align our editing with their expectations.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">What to include:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Supervisor comments:</strong> Copy-paste any written feedback from your supervisor (email, document comments, meeting notes)</li>
              <li>• <strong>Journal guidelines:</strong> Link to the journal's "Instructions for Authors" or "Author Guidelines" page</li>
              <li>• <strong>Specific requests:</strong> "Focus on Methods section clarity" or "Improve figure captions" or "Reduce word count by 1,000 words"</li>
              <li>• <strong>Formatting requirements:</strong> Specific heading styles, figure/table formats, reference format examples</li>
              <li>• <strong>Template files:</strong> If your university/journal provides a Word template, upload it or paste the link</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "figures-tables-needed",
      title: "Figures / Tables Needed? (Yes/No)",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Indicate whether you need help creating, formatting, or improving figures and tables. If yes, provide the necessary data and specifications.
          </p>
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">What data to provide if "Yes":</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Raw data:</strong> Excel files, CSV files, or data tables with clear labels</li>
              <li>• <strong>Figure type:</strong> Bar chart, line graph, scatter plot, flowchart, diagram, schematic</li>
              <li>• <strong>Specifications:</strong> Axis labels, units, legend requirements, color preferences</li>
              <li>• <strong>Existing drafts:</strong> If you have rough figures, share them so we can improve/refine</li>
              <li>• <strong>Journal requirements:</strong> Resolution (DPI), file format (PNG, TIFF, EPS), size constraints</li>
              <li>• <strong>Caption style:</strong> How captions should be formatted (above/below, numbering system, abbreviations)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Note: Figure/table creation is included in our service. We follow your data and specifications—no fabrication or manipulation of results.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Registration Checklist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Detailed guidance for each item in the registration form. Click through to understand what information we need and how to provide it.
            </p>
            
            {/* Top CTA Button */}
            <a
              href="https://forms.gle/dfoge5REh4K5zTV57"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="px-12 py-6 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Open Registration Form
                <ExternalLink className="ml-3 w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {checklistSections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-card border-2 border-primary/20 rounded-lg p-8 shadow-lg scroll-mt-24"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground pt-1">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-14">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Register?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Now that you understand what information to prepare, open the registration form and submit your project details.
            </p>
            <a
              href="https://forms.gle/dfoge5REh4K5zTV57"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-6 text-xl font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Open Registration Form
                <ExternalLink className="ml-3 w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
