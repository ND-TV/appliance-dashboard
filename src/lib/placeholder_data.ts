import {Appliance, ApplianceCategory} from '@/lib/definitions';

export const appliances: Appliance[] = [
  {
    id: 1,
    daysWorked: 120,
    price: 1000,
    dayRent: 15,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: 2,
    daysWorked: 60,
    price: 600,
    dayRent: 12,
    category: ApplianceCategory.CATEGORY_2,
  },
  {
    id: 3,
    daysWorked: 200,
    price: 1500,
    dayRent: 20,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: 4,
    daysWorked: 5,
    price: 3000,
    dayRent: 50,
    category: ApplianceCategory.CATEGORY_2,
  },
  {
    id: 5,
    daysWorked: 365,
    price: 500,
    dayRent: 8,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: 6,
    daysWorked: 90,
    price: 2000,
    dayRent: 25,
    category: ApplianceCategory.CATEGORY_2,
  },
  {
    id: 7,
    daysWorked: 45,
    price: 800,
    dayRent: 10,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: 8,
    daysWorked: 300,
    price: 1200,
    dayRent: 18,
    category: ApplianceCategory.CATEGORY_2,
  },
];

