export interface DayHours {
  day: string;
  open: string | null;
  close: string | null;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ...
}

export const hours: DayHours[] = [
  { day: "Monday", open: null, close: null, dayIndex: 1 },
  { day: "Tuesday", open: "10:00 AM", close: "6:00 PM", dayIndex: 2 },
  { day: "Wednesday", open: "10:00 AM", close: "6:00 PM", dayIndex: 3 },
  { day: "Thursday", open: "10:00 AM", close: "6:00 PM", dayIndex: 4 },
  { day: "Friday", open: "10:00 AM", close: "6:00 PM", dayIndex: 5 },
  { day: "Saturday", open: "10:00 AM", close: "6:00 PM", dayIndex: 6 },
  { day: "Sunday", open: "11:00 AM", close: "4:00 PM", dayIndex: 0 },
];

export function isOpenToday(): { isOpen: boolean; todayHours: DayHours } {
  const today = new Date().getDay();
  const todayHours = hours.find((h) => h.dayIndex === today)!;
  return { isOpen: todayHours.open !== null, todayHours };
}

export function getTimeSlots(dayIndex: number): string[] {
  const day = hours.find((h) => h.dayIndex === dayIndex);
  if (!day || !day.open || !day.close) return [];

  const slots: string[] = [];
  const [openHour] = parseTime(day.open);
  const [closeHour] = parseTime(day.close);

  for (let h = openHour; h < closeHour; h++) {
    slots.push(formatHour(h, 0));
    slots.push(formatHour(h, 30));
  }
  return slots;
}

function parseTime(time: string): [number, number] {
  const [timePart, period] = time.split(" ");
  // eslint-disable-next-line prefer-const
  let [hours, minutes] = timePart.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return [hours, minutes];
}

function formatHour(h: number, m: number): string {
  const period = h >= 12 ? "PM" : "AM";
  const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayHour}:${m.toString().padStart(2, "0")} ${period}`;
}
