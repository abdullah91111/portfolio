export type ExperienceData = {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  type?: string;
  imageFit?: "contain" | "cover";
  /** Logos that are their own coloured tile bleed to the edge instead of sitting inset on white. */
  imageBleed?: boolean;
  imageZoom?: number;
  description: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  links?: { label: string; href: string }[];
  screenshot?: string;
};

export const experiences: ExperienceData[] = [
  {
    "title": "BrainyAI",
    "role": "AI Engineer",
    "dates": "Feb 2025 — Jun 2026",
    "location": "Dubai, UAE",
    "src": "/company-brainy.svg",
    "description": "Designed multi-agent workflows with tool calling, streaming, and shared memory.\nBuilt retrieval pipelines combining vector search and knowledge graphs.\nWorked with LangChain, Letta, Neo4j, FalkorDB, Qdrant, and n8n.\nAdded observability and evaluation to make production AI systems easier to operate.",
    "tech": [
      "Python",
      "LangChain",
      "Letta",
      "GraphRAG",
      "Neo4j",
      "n8n"
    ]
  },
  {
    "title": "PureCS",
    "role": "AI Intern",
    "dates": "Aug — Sep 2024",
    "location": "Dubai, UAE",
    "src": "/company-purecs.svg",
    "description": "Explored retrieval-augmented generation for document-driven applications.\nResearched document chunking strategies to improve relevant context for LLMs.",
    "tech": [
      "Python",
      "RAG",
      "LLMs",
      "Document processing"
    ]
  },
  {
    "title": "Pure Health",
    "role": "Customer Service Team Lead",
    "dates": "Sep 2020 — Apr 2022",
    "location": "Dubai Airports, UAE",
    "src": "/company-purehealth.svg",
    "description": "Led a frontline customer service team at Dubai Airports.\nFocused on resolution quality, team performance, and dependable customer experiences.",
    "tech": [
      "Leadership",
      "Operations",
      "Customer experience"
    ]
  }
];
