export interface IStoreData {
  title1: string;
  title2: string;
  maxCapacity: number;
  today: number;
  daysData: Array<IStoreDayData>;
}

export interface IStoreDayData {
  day: number;
  fact: number;
  plan: number;
}
