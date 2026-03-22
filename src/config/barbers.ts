export interface Barber {
  id: string;
  name: string;
  alias?: string;
  image?: string;
  phone?: string;
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
    licensed: "Massachusetts licensed barber",
    experience: "Cutting since 2019 — 6+ years behind the chair",
    background: "Lebanese-American, born and raised in the 413. Big sports fan.",
    specialties: ["Fades", "Beard work", "Lineups", "Hair design"],
  },
  {
    // ============================================
    // PLACEHOLDER BARBER 2 — FILL IN LATER
    // Replace all fields below with real info
    // Add photo to /public/images/Barbers/barber2.jpg
    // Add phone number
    // Set isPlaceholder to false when ready
    // ============================================
    id: "barber-2",
    name: "Coming Soon",
    alias: undefined,
    image: undefined,
    phone: undefined,
    licensed: "Licensed barber",
    experience: "",
    background: "",
    specialties: [],
    isPlaceholder: true,
  },
  {
    // ============================================
    // PLACEHOLDER BARBER 3 — FILL IN LATER
    // Replace all fields below with real info
    // Add photo to /public/images/Barbers/barber3.jpg
    // Add phone number
    // Set isPlaceholder to false when ready
    // ============================================
    id: "barber-3",
    name: "Coming Soon",
    alias: undefined,
    image: undefined,
    phone: undefined,
    licensed: "Licensed barber",
    experience: "",
    background: "",
    specialties: [],
    isPlaceholder: true,
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
