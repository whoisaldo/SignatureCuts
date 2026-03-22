export interface DayHours {
  day: string;
  open: string | null;
  close: string | null;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ...
}

export const hours: DayHours[] = [
  { day: "Sunday", open: "11:00 AM", close: "4:00 PM", dayIndex: 0 },
  { day: "Monday", open: null, close: null, dayIndex: 1 },
  { day: "Tuesday", open: "10:00 AM", close: "6:00 PM", dayIndex: 2 },
  { day: "Wednesday", open: "10:00 AM", close: "6:00 PM", dayIndex: 3 },
  { day: "Thursday", open: "10:00 AM", close: "6:00 PM", dayIndex: 4 },
  { day: "Friday", open: "10:00 AM", close: "6:00 PM", dayIndex: 5 },
  { day: "Saturday", open: "9:30 AM", close: "6:00 PM", dayIndex: 6 },
];

export function isOpenToday(): { isOpen: boolean; todayHours: DayHours } {
  const today = new Date().getDay();
  const todayHours = hours.find((h) => h.dayIndex === today)!;
  return { isOpen: todayHours.open !== null, todayHours };
}

export function getDayHours(dayIndex: number): DayHours | undefined {
  return hours.find((h) => h.dayIndex === dayIndex);
}

export function isClosedDay(dayIndex: number): boolean {
  const day = getDayHours(dayIndex);
  return !day || !day.open || !day.close;
}

export function getTimeSlots(dayIndex: number): string[] {
  const day = getDayHours(dayIndex);
  if (!day || !day.open || !day.close) return [];

  const slots: string[] = [];
  const openMinutes = parseTime(day.open);
  const closeMinutes = parseTime(day.close);

  for (let minutes = openMinutes; minutes < closeMinutes; minutes += 30) {
    slots.push(formatHour(minutes));
  }
  return slots;
}

function parseTime(time: string): number {
  const [timePart, period] = time.split(" ");
  // eslint-disable-next-line prefer-const
  let [hours, minutes] = timePart.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function formatHour(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const period = h >= 12 ? "PM" : "AM";
  const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayHour}:${m.toString().padStart(2, "0")} ${period}`;
}
