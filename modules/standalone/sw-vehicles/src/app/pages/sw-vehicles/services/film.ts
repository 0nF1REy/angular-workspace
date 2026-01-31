export interface Film {
  id: number;
  title: string;
  translations?: {
    en?: string;
    pt_BR?: string;
  };
}
