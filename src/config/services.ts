export interface Service {
  name: string;
  price: number;
  description: string;
  prefix?: string;
}

export const services: Service[] = [
  { name: "Eyebrows", price: 8, description: "Quick eyebrow cleanup and shaping" },
  { name: "Beard", price: 15, description: "Beard trim and lineup service" },
  { name: "Line Up", price: 20, description: "Sharp edge-up and lineup refresh" },
  { name: "Buzz-cut", price: 25, description: "Clean, even buzz cut" },
  { name: "Seniors", price: 25, description: "Haircut pricing for clients over 62" },
  { name: "Kids", price: 25, description: "Haircut pricing for children under 14" },
  {
    name: "Military / First Responders",
    price: 25,
    description: "Special haircut pricing for military and first responders",
  },
  { name: "Regular Haircut", price: 30, description: "Classic barbershop haircut" },
  { name: "Beard & Haircut", price: 40, description: "Full haircut and beard combo" },
  {
    name: "Signature Cut",
    price: 45,
    description: "Haircut, eyebrows, and beard included in one service",
  },
  {
    name: "Facial & Mask Steam",
    price: 40,
    description: "Facial treatment with a mask steam service",
  },
];
