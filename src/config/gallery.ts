export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: "square" | "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/cut-1.jpg", alt: "Fresh fade haircut", aspectRatio: "portrait" },
  { src: "/images/gallery/cut-2.jpg", alt: "Clean beard trim", aspectRatio: "square" },
  { src: "/images/gallery/cut-3.jpg", alt: "Precision lineup", aspectRatio: "portrait" },
  { src: "/images/gallery/cut-4.jpg", alt: "Classic taper cut", aspectRatio: "square" },
  { src: "/images/gallery/cut-5.jpg", alt: "Hair design detail", aspectRatio: "landscape" },
  { src: "/images/gallery/cut-6.jpg", alt: "Full service transformation", aspectRatio: "portrait" },
];
