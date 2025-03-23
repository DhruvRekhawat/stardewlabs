import {
  Benefits,
  ClientStories,
  FAQ,
  Footer,
  GrowTogether,
  HelloSticker,
  Hero,
  Navbar,
  Numbers,
  Services
} from "@/components/molecules";
const page = () => {
  return (
    <>
      <Navbar/>
      <main className="relative z-10 top-24 flex flex-col gap-32 px-2">
      <Hero/>
      <Numbers/>
      <Benefits/>
      <GrowTogether/>
      <Services/>
      {/* <Portfolio/> */}
      <ClientStories/>
      <FAQ/>
      {/* <BookACall/> */}
      <HelloSticker/>
      <Footer/>
      </main>
    </>
  );
};

export default page;
