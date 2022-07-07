import Footer from "../../styles/theme/components/Footer";
import Navbar from "../../styles/theme/components/Navbar";
import RecentEpisodes from "../../styles/theme/components/RecentEpisodes";
import Sponsors from "../../styles/theme/components/Sponsors";

import AllEpisodes from "./podcastsComponents/AllEpisodes";
import CTAPodcast from "./podcastsComponents/CTAPodcast";
import Header from "./podcastsComponents/Header";

export default function Podcasts() {
  return (
    <>
      <Navbar />
      <Header />
      <RecentEpisodes />
      <AllEpisodes />
      <CTAPodcast />
      <Sponsors />
      <Footer />
    </>
  )
}
