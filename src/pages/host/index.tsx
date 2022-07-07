import Footer from "../../styles/theme/components/Footer";
import Navbar from "../../styles/theme/components/Navbar";
import RecentEpisodes from "../../styles/theme/components/RecentEpisodes";
import Sponsors from "../../styles/theme/components/Sponsors";
import Brands from "../home/homeComponents/Brands";
import Achievements from "./hostComponents/Achievements";
import CTA from "./hostComponents/CTA";
import DreamSection from "./hostComponents/DreamSection";
import Header from "./hostComponents/Header";
import Journey from "./hostComponents/Journey";

export default function Host() {
  return (
    <>
      <Navbar />
      <Header />
      <Brands />
      <DreamSection />
      <Journey />
      <Achievements />
      <CTA />
      <RecentEpisodes />
      <Sponsors />
      <Footer />
    </>
  )
}
