import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [images, setImages] = useState("");

  let getImages = async () => {
    let request = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=7"
    );
    let response = await request.json();

    // getting only the number of images we need from the response, and setting to state.
    setImages(response.slice(0, 9));
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <h3>cats.</h3>
      <div className="container">
        {images &&
          images.map((image, index) => <img src={image.url} key={index}></img>)}
      </div>
    </div>
  );
}

export default App;
