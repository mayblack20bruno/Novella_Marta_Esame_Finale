export type EventDetailsType = {
    id: number;
    name: string;
    coverImage: string;
    date: string;
    slotTemporali: string[];
    description: {
        long: Array<string>;
    };
    dresscode: string;
    price: number;
    includedDrinks: [];
    tags: [];
    isAperitivoIncluded: boolean;
    includedDishes: [{
        name: string,
        description: string,
        allergens: Array<string>;
    }];
} | null;
