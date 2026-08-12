// Utility for estimating project timeline and budget
// Simple rule‑based lookup – can be extended later
export type ProjectType = "FullStack" | "Mobile" | "AI" | "SaaS";
export type Scope = "MVP" | "FullProduct" | "Enterprise";
export type AddOn = "AIIntegration" | "WebSockets" | "Payments" | "None";

export interface EstimateInput {
  projectType: ProjectType;
  scope: Scope;
  addOn: AddOn;
}

export interface EstimateResult {
  weeks: string; // e.g. "2–4 weeks"
  budget: string; // e.g. "$5k–$10k"
}

// Simple matrix – values are illustrative
const baseWeeks: Record<ProjectType, number> = {
  FullStack: 2,
  Mobile: 3,
  AI: 4,
  SaaS: 5,
};

const scopeMultiplier: Record<Scope, number> = {
  MVP: 1,
  FullProduct: 1.5,
  Enterprise: 2,
};

const addOnWeeks: Record<AddOn, number> = {
  None: 0,
  AIIntegration: 1,
  WebSockets: 0.5,
  Payments: 0.5,
};

const baseBudget: Record<ProjectType, number> = {
  FullStack: 5,
  Mobile: 7,
  AI: 10,
  SaaS: 12,
}; // in $k

const addOnBudget: Record<AddOn, number> = {
  None: 0,
  AIIntegration: 3,
  WebSockets: 1,
  Payments: 2,
};

export function estimate(input: EstimateInput): EstimateResult {
  const weeksBase = baseWeeks[input.projectType] * scopeMultiplier[input.scope] + addOnWeeks[input.addOn];
  const weeksLow = Math.floor(weeksBase);
  const weeksHigh = Math.ceil(weeksBase * 1.2);
  const weeks = `${weeksLow}–${weeksHigh} weeks`;

  const budgetBase = baseBudget[input.projectType] * scopeMultiplier[input.scope] + addOnBudget[input.addOn];
  const budgetLow = Math.round(budgetBase * 0.9);
  const budgetHigh = Math.round(budgetBase * 1.2);
  const budget = `$${budgetLow}k–$${budgetHigh}k`;

  return { weeks, budget };
}
