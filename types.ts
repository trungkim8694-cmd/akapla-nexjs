
export interface RFQFormData {
  companyName: string;
  contactEmail: string;
  productType: string;
  notes: string;
  drawingFile: File | null;
  ndaAccepted: boolean;
  requestVisitOrPrototype: string;
}

export interface ProcessStep {
  number: number;
  titleJP: string;
  titleVN: string;
  description: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
