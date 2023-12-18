export type EventType = {
  id: number;
  name: string;
  coverImage: string;
  date: string;
  description: {
    long: string;
    short: string;
  };
  dresscode: string;
  price: number;
  includedDrinks: [];
  tags: [];
  isAperitivoIncluded: boolean;
};
