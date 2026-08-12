// Centralised request/response models for frontend‑backend communication

export interface ConsultationRequest {
  name: string;
  email: string;
  message: string;
}

export interface EstimateSubmission {
  projectType: string; // matches ProjectType in estimator
  scope: string;
  addOn: string;
  weeks: string;
  budget: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
