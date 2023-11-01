import "./TripStyles.css";
import TripData from "./TripData";
import Bogor from "../assets/Bogor-JurugLeuwiHejo2.jpg";
import Cianjur from "../assets/cianjur-karang potong.jpg";
import Bandung from "../assets/Bandung-TebingKeraton.jpg";

function Trip() {
  return (
    <div classname="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Bogor}
          heading="Trip in Bogor"
          text="The city of Bogor always presents exciting, new and interesting tourist attractions. It's not surprising that Rainy City is one of the favorite holiday choices in West Java. Because of its relatively close distance to the capital city of Jakarta, Bogor has become a favorite tourist destination for residents of Jakarta and its surroundings."
        />

        <TripData
          image={Cianjur}
          heading="Trip in Cianjur"
          text="Known as an area that produces good quality rice, it turns out there are also many hidden paradises that can be recommended for Cianjur tourism. Dominated by natural tourism, there are many more places that offer interesting views and experiences that can be a fun holiday choice for Moms and their families.
          ."
        />

        <TripData
          image={Bandung}
          heading="Trip in Bandung"
          text="Bandung is a city that always makes you miss it, even for those who often go on holiday to Bandung. Understandably, the culinary delights are delicious and very varied. Apart from that, Bandung is also full of tourist attractions that make this city one of the main tourist magnets on the island of Java.
          It's not surprising, every weekend, there are thousands or even tens of thousands of Jakartans who choose Bandung City as their short holiday destination!          
          "
        />
      </div>
    </div>
  );
}

export default Trip;
