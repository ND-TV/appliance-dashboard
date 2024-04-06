import {
  Agreement,
  Appliance,
  ApplianceCategory,
} from '@/lib/definitions';

export const mockAppliances: Appliance[] = [
  {
    id: '1',
    title: 'Refrigerator',
    daysWorked: 120,
    price: 599.99,
    dayRent: 15.99,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: '2',
    title: 'Projector',
    daysWorked: 60,
    price: 899.99,
    dayRent: 45.50,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: '3',
    title: 'Vacuum Cleaner',
    daysWorked: 75,
    price: 159.20,
    dayRent: 8.75,
    category: ApplianceCategory.CATEGORY_1,
  },
  {
    id: '4',
    title: 'Laptop',
    daysWorked: 200,
    price: 1200.00,
    dayRent: 25.50,
    category: ApplianceCategory.CATEGORY_1,
  },
];

export const newAppliance: Appliance = {
  id: '0',
  title: '',
  daysWorked: 0,
  price: 0,
  dayRent: 0,
  category: ApplianceCategory.NOT_SET,
};

export const mockAgreements: Agreement[] = [
  {
    id: 'agreement1',
    title: 'test1',
    appliances: [
      mockAppliances[0],
      mockAppliances[1],
    ],
    startDate: '2024-04-06',
    endDate: '2024-04-07',
  },
  {
    id: 'agreement2',
    title: 'test2',
    appliances: [
      mockAppliances[2],
    ],
    startDate: '2024-04-15',
    endDate: '2024-04-20',
  },
  {
    id: 'agreement3',
    title: 'test3',
    appliances: [
      mockAppliances[1],
      mockAppliances[3],
    ],
    startDate: '2024-04-01',
    endDate: '2024-04-31',
  }
];

export const newAgreement: Agreement = {
  id: 'agreement0',
  title: '',
  appliances: [],
  startDate: '',
  endDate: '',
};
