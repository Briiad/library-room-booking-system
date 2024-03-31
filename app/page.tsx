import AddRequest from "./components/AddRequest";
import Navbar from "./components/Navbar";
import Peraturan from "./components/Peraturan";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AddRequest />
      <Peraturan />
    </>
  )
}