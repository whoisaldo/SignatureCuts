export interface Barber {
  id: string;
  name: string;
  alias?: string;
  image?: string;
  phone?: string;
  offersPremiumAppointments?: boolean;
  licensed: string;
  experience: string;
  background: string;
  specialties: string[];
  isPlaceholder?: boolean;
}

export const barbers: Barber[] = [
  {
    id: "steve",
    name: "Ali Younes",
    alias: "Goes by Steve",
    image: "/images/Barbers/SteveBarber1.jpg",
    phone: "+14138854013",
    offersPremiumAppointments: true,
    licensed: "Licensed master barber",
    experience: "Cutting since 2017",
    background: "Lebanese-American, born and raised in the 413. Big sports fan.",
    specialties: ["Fades", "Beard work", "Lineups", "Hair design"],
  },
  {
    id: "hassan",
    name: "Hassan",
    alias: undefined,
    image: "/images/Barbers/HassanBarber2.jpg",
    phone: "+14134196502",
    offersPremiumAppointments: false,
    licensed: "Licensed master barber",
    experience: "5 years behind the chair",
    background: "",
    specialties: [],
  },
  {
    id: "mohammad",
    name: "Mohammad",
    alias: undefined,
    image: "/images/Barbers/MohammadBarber3.jpg",
    phone: "+14133029392",
    offersPremiumAppointments: false,
    licensed: "Licensed master barber",
    experience: "Cutting since 2015",
    background: "",
    specialties: [],
  },
];

export function getActiveBarbers(): Barber[] {
  return barbers.filter((b) => !b.isPlaceholder);
}

export function getBarberDisplayName(barber: Barber): string {
  return barber.alias
    ? barber.alias.replace("Goes by ", "")
    : barber.name.split(" ")[0];
}
