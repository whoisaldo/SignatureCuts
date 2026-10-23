export interface BookingData {
  name: string;
  service: string;
  date: string;
  time: string;
  barber?: string;
  bookingType?: string;
  notes?: string;
}

export function composeMessage(data: BookingData): string {
  const lines: string[] = [
    "Hey, I'd like to book an appointment.",
    "",
  ];

  if (data.name) lines.push(`Name: ${data.name}`);
  if (data.barber) lines.push(`Barber: ${data.barber}`);
  if (data.bookingType) lines.push(`Booking Type: ${data.bookingType}`);
  if (data.service) lines.push(`Service: ${data.service}`);
  if (data.date) lines.push(`Date: ${data.date}`);
  if (data.time) lines.push(`Time: ${formatRequestedTime(data.time)}`);
  if (data.notes) lines.push(`Notes: ${data.notes}`);

  return lines.join("\n");
}

export function getWhatsAppURL(phone: string, message: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function getSMSURL(phone: string, message: string, isIOS = false): string {
  // iOS uses &body; Android needs ?body to separate text from the recipient.
  const separator = isIOS ? "&" : "?";
  return `sms:${phone}${separator}body=${encodeURIComponent(message)}`;
}

export function getDirectionsURL(lat: number, lng: number, address: string): string {
  const encoded = encodeURIComponent(address);
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encoded}`;
}

function formatRequestedTime(time: string): string {
  const match = time.match(/^(\d{2}):(\d{2})$/);
  if (!match) return time;

  const hours = Number(match[1]);
  const minutes = match[2];
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 || 12;

  return `${displayHour}:${minutes} ${period}`;
}
