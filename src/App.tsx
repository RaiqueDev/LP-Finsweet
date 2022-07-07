import {
  Routes,
  Route
} from "react-router-dom";

import About from './pages/about';
import Blog from './pages/blog';
import Contact from "./pages/contact";
import Home from './pages/home';
import Host from './pages/host';
import Podcasts from "./pages/podcasts";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="about" element={<About />} />
        <Route path="host" element={<Host />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}
