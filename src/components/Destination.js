import BlueLake1 from "../assets/kuningan telaga biru3.webp";
import BlueLake2 from "../assets/Kuningan-telaga biru2.jpg";
import WhiteCrater1 from "../assets/Bandung-Kawah-Putih-Ciwidey-3.jpg";
import WhiteCrater2 from "../assets/Bandung-kawahputih2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Your journey is your fantasy dream which is an unforgettable memory</p>
      <DestinationData
        className="first-des"
        heading="Cicarem Blue Lake
        "
        text="Cicerem Blue Lake is a tourist
      attraction located in Kuningan, West Java and at the foot of Mount
      Ceremai. This lake has amazing natural beauty with its bright blue water.
      There is an interesting history.According to stories circulating in the
      local community,this place cannot be separated from the figure of Nyi
      Bomas Inten whose statue is in the middle of the lake."
        img1={BlueLake1}
        img2={BlueLake2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="White Crater
        "
        text="If you like mountain atmosphere and like taking photos. I suggest you visit the Ciwidey White Crater. Ciwidey White Crater is famous for its white water color and you will see a greenish white color in the water. The structure and texture of the layers of this crater wall are quite unique. Many visitors make this place their main tourist destination when the holidays arrive."
        img1={WhiteCrater1}
        img2={WhiteCrater2}
      />
    </div>
  );
};

export default Destination;
