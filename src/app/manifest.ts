import type { MetadataRoute } from "next";

const base = process.env.GITHUB_PAGES === "true" ? "/SignatureCuts" : "";

export default function manifest(): MetadataRoute.Manifest {
  const prefix = base;
  return {
    name: "Signature Cuts 413",
    short_name: "Signature Cuts",
    description: "Premium barbershop in Chicopee, MA. Walk-ins welcome.",
    start_url: prefix ? `${prefix}/` : "/",
    scope: prefix ? `${prefix}/` : "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: prefix ? `${prefix}/favicon.ico` : "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
    ],
  };
}
