export interface Order {
  _id: string;
  car: Car;
  color: Color;
  customer_name: string;
  customer_phone: string;
  date: string;
  additions: Addition[];
}

export interface Car {
  _id: string;
  description: string;
  cost: number;
}

export interface Color {
  _id: string;
  car: Car;
  color: Color;
}

export interface Addition {
  _id: string;
  customer_name: string;
  customer_phone: string;
  date: string;
}

