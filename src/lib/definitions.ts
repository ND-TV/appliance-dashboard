export const enum ApplianceCategory {
  /* Unspecified category. */
  /* eslint-disable no-unused-vars */
  NOT_SET = 'not_set',
  /* eslint-disable no-unused-vars */
  CATEGORY_1 = 'category_1',
  /* eslint-disable no-unused-vars */
  CATEGORY_2 = 'category_2',
}

export interface Appliance {
  id: string,
  /* Appliance name. */
  title: string,
  /* Number of days appliance was in use. */
  daysWorked: number,
  /* The price that appliance was purchased by us. */
  price: number,
  /* The price that appliance costs for customers per day. */
  dayRent: number,
  /* Appliance Category. */
  category: ApplianceCategory,
}

export interface Agreement {
  id: string,
  title: string,
  appliances: Appliance[],
  startDate: string,
  endDate: string,
}
