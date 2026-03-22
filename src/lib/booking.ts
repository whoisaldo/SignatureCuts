export interface BookingData {
  name: string;
  service: string;
  date: string;
  time: string;
  barber?: string;
  notes?: string;
}

export function composeMessage(data: BookingData): string {
  let msg = `Hey, I'd like to book an appointment.\n\n`;
  msg += `Name: ${data.name}\n`;
  if (data.barber) msg += `Barber: ${data.barber}\n`;
  msg += `Service: ${data.service}\n`;
  msg += `Date: ${data.date}\n`;
  msg += `Time: ${data.time}`;
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
