import AddRequest from "./components/AddRequest";
import Navbar from "./components/Navbar";
import Peraturan from "./components/Peraturan";
import Hero from "./components/Hero";
import Procedure from "./components/Procedure";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Procedure />
      <AddRequest />
      <Peraturan />
      <Footer />

      <div className="fixed bottom-8 right-8 p-4 flex justify-center items-center">
        <a href="https://wa.me/6287760062773" target="_blank" className="bg-green-500 hover:bg-green-700 text-white font-bold p-4 text-4xl rounded-full">
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}