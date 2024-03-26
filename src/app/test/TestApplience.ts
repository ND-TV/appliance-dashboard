export interface TestApplience {
  id: number,
  days_worked: number,
  price: number,
  days_rent: number,
  type: string,
  agreement: Agreement
}

export interface Agreement {
  id: number,
  appliences_id: number[],
  start_date: Date,
  end_date: Date
}
