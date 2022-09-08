import Footer from "../components/Footer";
import NavItems from "../components/NavItems";
import SectionAnggota from "../components/SectionAnggota";
import SectionHero from "../components/SectionHero";
import SectionKomunitas from "../components/SectionKomunitas";

export default function Home() {
  return (
    <>
      <NavItems />

      <SectionHero />
      <SectionKomunitas />
      <SectionAnggota />

      <Footer />

      
    </>
  );
}
