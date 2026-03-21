export interface Service {
  name: string;
  price: number;
  description: string;
  prefix?: string;
}

export const services: Service[] = [
  { name: "Haircut", price: 30, description: "Classic cut, tailored to your style" },
  { name: "Haircut + Beard", price: 40, description: "Full service cut and beard shaping" },
  { name: "Beard Trim", price: 20, description: "Shape up and line your beard" },
  { name: "Kids Cut", price: 22, description: "Ages 12 and under" },
  { name: "Lineup / Edge Up", price: 15, description: "Clean up your edges" },
  { name: "Hair Design", price: 10, description: "Custom designs, starting at $10", prefix: "From" },
];
