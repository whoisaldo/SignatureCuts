export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: "square" | "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/Haircuts-Images/2D4A58BA-079D-4525-BE13-2AE52BBB616F.jpg", alt: "Fresh fade haircut", aspectRatio: "portrait" },
  { src: "/images/Haircuts-Images/3D418760-BD2A-49CA-9023-7A61F45AEFE9.jpg", alt: "Clean beard trim", aspectRatio: "square" },
  { src: "/images/Haircuts-Images/9D887BDB-F743-418C-A426-CE1005E39CBA.jpg", alt: "Precision lineup", aspectRatio: "portrait" },
  { src: "/images/Haircuts-Images/A41876A2-9A15-4974-B7C5-EC7FDF895CDA.jpg", alt: "Classic taper cut", aspectRatio: "square" },
  { src: "/images/Haircuts-Images/F372DD3A-B756-4C35-8025-EE69C4812265.jpg", alt: "Hair design detail", aspectRatio: "landscape" },
  { src: "/images/Haircuts-Images/FB8B31DE-91A2-4D44-922C-2A151415B6CB.jpg", alt: "Full service transformation", aspectRatio: "portrait" },
];
