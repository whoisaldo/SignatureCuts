export function getDirectionsUrl(address: string, userAgent = ""): string {
  const encodedAddress = encodeURIComponent(address);
  const isIOS = /iPad|iPhone|iPod/i.test(userAgent);

  if (isIOS) {
    return `https://maps.apple.com/?daddr=${encodedAddress}&dirflg=d`;
  }

  return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
}
