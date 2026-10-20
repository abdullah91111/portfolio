import type { ElementType } from "react";
import { Code, Workflow, Database, Activity, Server } from "lucide-react";
export type Skill = {name: string; icon: ElementType};
export type SkillGroup = {group: string; skills: Skill[]};
export const skillGroups: SkillGroup[] = [
 {group:"Languages & APIs",skills:["Python","FastAPI","REST APIs","SQL"].map(name=>({name,icon:Code}))},
 {group:"Agents & Retrieval",skills:["LangChain","Letta","n8n","RAG","GraphRAG","Embeddings"].map(name=>({name,icon:Workflow}))},
 {group:"Graphs & Storage",skills:["Neo4j","FalkorDB","Qdrant","FAISS","Redis"].map(name=>({name,icon:Database}))},
 {group:"Evaluation & Observability",skills:["MLflow","Datadog","PostHog","LLM evaluation"].map(name=>({name,icon:Activity}))},
 {group:"Infrastructure",skills:["Docker","CI/CD","Git","Production APIs"].map(name=>({name,icon:Server}))}
];
