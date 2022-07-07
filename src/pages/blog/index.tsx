import Footer from "../../styles/theme/components/Footer";
import Navbar from "../../styles/theme/components/Navbar";
import Sponsors from "../../styles/theme/components/Sponsors";
import AllBlogs from "./blogComponents/AllBlogs";
import BlogHero from "./blogComponents/BlogHero";

export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <AllBlogs />
      <Sponsors />
      <Footer />
    </>
  )
}
