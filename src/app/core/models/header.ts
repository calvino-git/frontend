import { AntiHero } from './anti-hero';

export interface Header {
  headerName: string;
  fieldName: keyof AntiHero;
}
