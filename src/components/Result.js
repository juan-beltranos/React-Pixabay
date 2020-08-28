import React, { Component } from "react";
import Image from "./Image";

class Result extends Component {
  showImage = () => {
    const images = this.props.image;
    if (images.length === 0) return null;

    console.log(images);

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {images.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.showImage()}</React.Fragment>;
  }
}
export default Result;
