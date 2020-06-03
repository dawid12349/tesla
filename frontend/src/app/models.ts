export interface Order {
  _id: string;
  car_id: Car;
  color_id: Color;
  customer_name: string;
  customer_phone: string;
  date: string;
  cost: number;
  additions: Addition[];
}

export interface OrderPost {
  _id: string;
  car_id: string;
  color_id: string;
  customer_name: string;
  customer_phone: string;
  cost: number;
  additions: Addition[];
}

export interface Car {
  _id: string;
  name: string;
  description: string;
  cost: number;
}

export interface Color {
  _id: string;
  name: string;
  hex: string;
  color: Color;
}

export interface Addition {
  _id: string;
  name: string;
  cost: number;
  type: string;
}

