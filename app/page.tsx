import AddRequest from "./components/AddRequest";
import Navbar from "./components/Navbar";
import Peraturan from "./components/Peraturan";
import Hero from "./components/Hero";
import Procedure from "./components/Procedure";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Procedure />
      <AddRequest />
      <Peraturan />
      <Footer />
    </>
  )
}