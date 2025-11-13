export interface TranslationBlock {
  original: string;
  english: string;
  vietnamese: string;
  pictograms?: string[]; // e.g., ["GHS02_Flame", "GHS07_ExclamationMark"]
}

export interface ProcessedPage {
  pageNumber: number;
  originalImage: string; // base64 data URL
  translations: TranslationBlock[];
}

export type ProcessingState = 'idle' | 'processing' | 'success' | 'error';

export type Glossary = Record<string, { english: string; vietnamese: string }>;
