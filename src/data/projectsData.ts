import type { ComponentType } from "react";
import { Network, Search, Radio, Sparkles, MousePointerClick } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiLangchain,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiPython,
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiEclipsemosquitto,
  SiSupabase,
  SiDatabricks,
  SiPostgresql,
  SiDocker,
  SiGrafana,
  SiPrometheus,
  SiScikitlearn,
  SiQdrant,
  SiGooglechrome,
  SiGradle,
  SiJunit5,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "langchain" | "langgraph" | "rag"
  | "node" | "tailwind" | "github" | "fastapi" | "redis" | "python"
  | "kotlin" | "android" | "compose" | "mqtt" | "supabase" | "databricks"
  | "postgres" | "docker" | "grafana" | "prometheus" | "sklearn" | "qdrant"
  | "chrome" | "gradle" | "junit" | "playwright" | "websockets" | "llm";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export type ProjectStatus = "open-source" | "live" | "building" | "research" | "archived";

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  description: string;
  tech: TechItem[];
  github: string;
  /** Omit when there is nothing working to link to. */
  live?: string;
  status: ProjectStatus;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs,
  langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  tailwind: SiTailwindcss, github: SiGithub, fastapi: SiFastapi, redis: SiRedis,
  python: SiPython, kotlin: SiKotlin, android: SiAndroid, compose: SiJetpackcompose,
  mqtt: SiEclipsemosquitto, supabase: SiSupabase, databricks: SiDatabricks,
  postgres: SiPostgresql, docker: SiDocker, grafana: SiGrafana, prometheus: SiPrometheus,
  sklearn: SiScikitlearn, qdrant: SiQdrant, chrome: SiGooglechrome, gradle: SiGradle,
  junit: SiJunit5, playwright: MousePointerClick, websockets: Radio, llm: Sparkles,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js",
  langchain: "LangChain", langgraph: "LangGraph", rag: "RAG", node: "Node.js",
  tailwind: "Tailwind CSS", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  python: "Python", kotlin: "Kotlin", android: "Android", compose: "Jetpack Compose",
  mqtt: "MQTT", supabase: "Supabase", databricks: "Databricks", postgres: "PostgreSQL",
  docker: "Docker", grafana: "Grafana", prometheus: "Prometheus", sklearn: "scikit-learn",
  qdrant: "Qdrant", chrome: "Chrome Extension", gradle: "Gradle", junit: "JUnit",
  playwright: "Playwright", websockets: "WebSockets", llm: "LLM",
};

export const projectsData: Project[] = [
  {
    "slug": "multi-purpose-agent",
    "title": "Multi-Purpose Agent",
    "imageTitle": "Orchestrating useful tools",
    "src": "/project-agent.svg",
    "description": "An n8n agent that coordinates document summarization, question answering, and LinkedIn draft generation from URLs and PDFs.",
    "tech": [
      "python",
      "docker",
      "llm",
      {
        "label": "n8n"
      }
    ],
    "github": "https://github.com/abdullah91111/Multi-Purpose-Agent-in-n8n",
    "status": "open-source",
    "hasPin": true
  },
  {
    "slug": "docling-api",
    "title": "Docling API",
    "imageTitle": "Documents into structured data",
    "src": "/project-docling.svg",
    "description": "An API for converting PDFs, office files, and images into structured content, with table extraction and Markdown, JSON, and HTML exports.",
    "tech": [
      "python",
      "fastapi",
      "docker"
    ],
    "github": "https://github.com/abdullah91111/docling-api",
    "status": "open-source",
    "hasPin": true
  },
  {
    "slug": "agent-memory",
    "title": "Agent Memory Workflows",
    "imageTitle": "Context worth remembering",
    "src": "/project-memory.svg",
    "description": "n8n workflows that extract sections from URLs and PDFs and store them in A-Mem with AI-generated tags for organization and retrieval.",
    "tech": [
      "python",
      "llm",
      {
        "label": "A-Mem"
      },
      {
        "label": "n8n"
      }
    ],
    "github": "https://github.com/abdullah91111/Create-and-Search-Memories-for-A-mem-using-n8n",
    "status": "open-source",
    "hasPin": true
  }
];
