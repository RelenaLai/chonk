import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import ratings from "./ratings.json";
import Loader from "react-loader-spinner";
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
  const [score, setScore] = useState();

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const hiddenFileInput = React.useRef();
  const handleClick = (e) => {
    setFile();
    setRating();
    hiddenFileInput.current.click();
  };

  const rate = async () => {
    let img = document.getElementById("img");

    const ratelist = [ratings.UNCHONKY, ratings.CHONKYISH, ratings.CHONKY];

    // Load the model
    const model = await cocoSsd.load();

    // Rate the chonk
    const predictions = await model.detect(img);
    let cat_ratio = predictions[0].bbox[2] / predictions[0].bbox[3];
    cat_ratio = cat_ratio >= 1 ? 2 : Math.round(cat_ratio);

    const rand = Math.floor(Math.random() * ratelist[cat_ratio].length);
    console.log(ratelist[cat_ratio][rand]);
    setScore(cat_ratio);
    setRating(ratelist[cat_ratio][rand]);
  };

  return (
    <Wrapper>
      <Title>Chonkii.</Title>
      <Subtitle>how chonky is your cat? 🐱</Subtitle>
      {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} /> */}
      {file && (
        <Image
          src={URL.createObjectURL(file)}
          alt={file.name}
          onLoad={rate}
          id="img"
        ></Image>
      )}
      {rating && (
        <Result>
          {score} {rating}
        </Result>
      )}
      <Button onClick={handleClick}>UPLOAD IMAGE</Button>
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
