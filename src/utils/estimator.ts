// Utility for estimating agency project timeline, team structure, and investment budget

export type ProjectType = "FullStack" | "Mobile" | "AI" | "SaaS" | "Cybersecurity";
export type Scope = "MVP" | "FullProduct" | "Enterprise";
export type AddOn = "AIIntegration" | "WebSockets" | "Payments" | "SecurityAudit" | "MultiTenant" | "None";

export interface EstimateInput {
  projectType: ProjectType;
  scope: Scope;
  addOns: AddOn[];
}

export interface EstimateResult {
  weeks: string;
  budget: string;
  minWeeks: number;
  maxWeeks: number;
  minBudget: number;
  maxBudget: number;
  team: string[];
  deliverables: string[];
}

const baseWeeks: Record<ProjectType, number> = {
  FullStack: 3,
  Mobile: 4,
  AI: 4,
  SaaS: 5,
  Cybersecurity: 4,
};

const scopeMultiplier: Record<Scope, number> = {
  MVP: 1.0,
  FullProduct: 1.6,
  Enterprise: 2.3,
};

const addOnWeeksMap: Record<AddOn, number> = {
  None: 0,
  AIIntegration: 1.5,
  WebSockets: 0.8,
  Payments: 0.8,
  SecurityAudit: 1.0,
  MultiTenant: 1.2,
};

const baseBudget: Record<ProjectType, number> = {
  FullStack: 4.5,
  Mobile: 6.0,
  AI: 8.5,
  SaaS: 10.0,
  Cybersecurity: 7.5,
}; // in $k USD

const addOnBudgetMap: Record<AddOn, number> = {
  None: 0,
  AIIntegration: 2.5,
  WebSockets: 1.2,
  Payments: 1.5,
  SecurityAudit: 2.0,
  MultiTenant: 2.2,
};

export function estimate(input: EstimateInput): EstimateResult {
  const addOnWeeksTotal = input.addOns.reduce((sum, item) => sum + (addOnWeeksMap[item] || 0), 0);
  const addOnBudgetTotal = input.addOns.reduce((sum, item) => sum + (addOnBudgetMap[item] || 0), 0);

  const calculatedWeeks = baseWeeks[input.projectType] * scopeMultiplier[input.scope] + addOnWeeksTotal;
  const minWeeks = Math.max(2, Math.floor(calculatedWeeks));
  const maxWeeks = Math.ceil(calculatedWeeks * 1.25);
  const weeks = `${minWeeks}–${maxWeeks} Weeks`;

  const calculatedBudget = baseBudget[input.projectType] * scopeMultiplier[input.scope] + addOnBudgetTotal;
  const minBudget = Math.round(calculatedBudget * 0.95);
  const maxBudget = Math.round(calculatedBudget * 1.3);
  const budget = `$${minBudget}k – $${maxBudget}k USD`;

  // Determine team composition based on project type and scope
  const team: string[] = ["1x Lead Solutions Architect", "1x Senior Full-Stack Engineer"];
  if (input.projectType === "Mobile") team.push("1x Flutter/Mobile Specialist");
  if (input.projectType === "AI" || input.addOns.includes("AIIntegration")) team.push("1x AI/ML Engineer");
  if (input.scope === "FullProduct" || input.scope === "Enterprise") team.push("1x UI/UX Lead Designer");
  if (input.scope === "Enterprise" || input.addOns.includes("SecurityAudit")) team.push("1x DevOps & Security Lead");

  // Determine deliverables
  const deliverables: string[] = [
    "Full Source Code & 100% IP Ownership",
    "Production-Ready Cloud Architecture",
    "Comprehensive API Documentation",
    "30-Day Post-Launch Support & Warranty",
  ];
  if (input.addOns.includes("AIIntegration")) deliverables.push("Custom RAG / LLM Integration & Fine-tuning");
  if (input.addOns.includes("SecurityAudit")) deliverables.push("OWASP Security Audit & Vulnerability Report");

  return {
    weeks,
    budget,
    minWeeks,
    maxWeeks,
    minBudget,
    maxBudget,
    team,
    deliverables,
  };
}
