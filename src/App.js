import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import ratings from './ratings.json'
import {
  Wrapper,
  Title,
  Subtitle,
  Button,
  Input,
  Image,
  Result,
} from "./styled";

function App() {
  const [file, setFile] = useState();
  const [rating, setRating] = useState();
  const [button, setButton] = useState("UPLOAD IMAGE");

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setButton("UPLOAD A NEW IMAGE");
  };

  const hiddenFileInput = React.useRef();
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const rate = () => {
    (async () => {
      const img = document.getElementById("img");
      const ratelist = [ratings.UNCHONKY, ratings.CHONKYISH, ratings.CHONKY];
      // Load the model.
      const model = await cocoSsd.load();
      // Classify the image.
      const predictions = await model.detect(img);
      let cat_ratio = predictions[0].bbox[2]/predictions[0].bbox[3];
      cat_ratio = cat_ratio >= 1 ? 2 : Math.round(cat_ratio);
      let rand = Math.floor(Math.random()*ratelist[cat_ratio].length);
      console.log(ratelist[cat_ratio][rand]);
      console.log("Predictions: ");
      console.log(predictions);
    })();
  };

  return (
    <Wrapper>
      <Title>Chonkii.</Title>
      <Subtitle>how chonky is your cat? 🐱</Subtitle>
      {file && (
        <Image
          src={URL.createObjectURL(file)}
          alt={file.name}
          onLoad={rate}
          id="img"
        ></Image>
      )}
      {rating && <Result>{rating}</Result>}
      <Button onClick={handleClick}>{button}</Button>
      <Input
        type="file"
        onChange={handleUpload}
        ref={hiddenFileInput}
        accept="image/*"
      ></Input>
    </Wrapper>
  );
}

export default App;
