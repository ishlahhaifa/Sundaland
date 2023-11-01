import Destination from "../components/Destination.js";
import Trip from "../components/Trip.js";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://www.lead.co.id/wp-content/uploads/2022/01/IMG_20220109_132114.jpg"
        title="Real Fantasy Myth"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
