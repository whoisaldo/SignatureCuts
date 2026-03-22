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
  let msg = `Hey, I'd like to book an appointment.\n\n`;
  msg += `Name: ${data.name}\n`;
  if (data.barber) msg += `Barber: ${data.barber}\n`;
  if (data.bookingType) msg += `Booking Type: ${data.bookingType}\n`;
  msg += `Service: ${data.service}\n`;
  msg += `Date: ${data.date}\n`;
  msg += `Time: ${formatRequestedTime(data.time)}`;
  if (data.notes) msg += `\nNotes: ${data.notes}`;
  return msg;
}

export function getWhatsAppURL(phone: string, message: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function getSMSURL(phone: string, message: string): string {
  return `sms:${phone}?body=${encodeURIComponent(message)}`;
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
