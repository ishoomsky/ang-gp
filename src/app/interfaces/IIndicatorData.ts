export interface IIndicatorData {
  id: number;
  name: string;
  parameters: Array<{
    id: number;
    name: string;
    unit: string;
    fact: number;
    model: number;
    state: string;
  }>;
}
