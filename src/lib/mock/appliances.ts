import {
  Appliance,
  ApplianceCategory,
} from '@/lib/definitions';

export const mockAppliances: Appliance[] = [
  {
    id: 1,
    title: 'Refrigerator',
    daysWorked: 120,
    price: 599.99,
    dayRent: 15.99,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: 2,
    title: 'Projector',
    daysWorked: 60,
    price: 899.99,
    dayRent: 45.50,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: 3,
    title: 'Vacuum Cleaner',
    daysWorked: 75,
    price: 159.20,
    dayRent: 8.75,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: 4,
    title: 'Laptop',
    daysWorked: 200,
    price: 1200.00,
    dayRent: 25.50,
    category: ApplianceCategory.CATEGORY_1,
  },
];
