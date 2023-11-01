import { Component } from "react";
import BlueLake1 from "../assets/kuningan telaga biru3.webp";
import BlueLake2 from "../assets/Kuningan-telaga biru2.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className="destination">
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
