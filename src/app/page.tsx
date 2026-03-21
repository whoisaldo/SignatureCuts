import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Hours from "@/components/Hours";
import BookingForm from "@/components/BookingForm";
import MobileBottomBar from "@/components/MobileBottomBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative z-10">
        <Services />

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-quartz/20 to-transparent mx-auto" />

        <Gallery />

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-quartz/20 to-transparent mx-auto" />

        <About />

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-quartz/20 to-transparent mx-auto" />

        <Hours />

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-quartz/20 to-transparent mx-auto" />

        <BookingForm />
      </div>

      <Footer />
      <MobileBottomBar />

      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
