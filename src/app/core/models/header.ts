import { AntiHero } from '../../anti-hero/models/anti-hero';

export interface Header {
  headerName: string;
  fieldName: keyof AntiHero;
}
