import Footer from "../../styles/theme/components/Footer";
import Navbar from "../../styles/theme/components/Navbar";
import RecentEpisodes from "../../styles/theme/components/RecentEpisodes";
import Sponsors from "../../styles/theme/components/Sponsors";

import AboutOurTeam from "./aboutComponents/AboutOurTeam";
import Header from "./aboutComponents/Header";
import Items from "./aboutComponents/Items";
import MeetOurTeam from "./aboutComponents/MeetOurTeam";
import OurSponsors from "./aboutComponents/OurSponsors";

export default function About() {
  return (
    <>
      <Navbar />
      <Header />
      <Items />
      <AboutOurTeam />
      <MeetOurTeam />
      <OurSponsors />
      <RecentEpisodes />
      <Sponsors />
      <Footer />
    </>
  )
}
