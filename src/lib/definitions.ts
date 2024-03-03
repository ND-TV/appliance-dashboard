export const enum ApplianceCategory {
  CATEGORY_1 = 'category_1',
  CATEGORY_2 = 'category_2',
}

export interface Appliance {
  id: number,
  /* Number of days appliance was in use. */
  daysWorked: number,
  /* The price that appliance was purchased by us. */
  price: number,
  /* The price that appliance costs for customers per day. */
  dayRent: number,
  /* Appliance Category. */
  category: ApplianceCategory,
}
