import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import ratings from "./ratings.json";
import instructions from "./instructions.png";
import {
  Wrapper,
  Title,
  Subtitle,
  Button,
  Input,
  Image,
  Result,
  Score,
  Rating,
} from "./styled";

function App() {
  const [file, setFile] = useState();
  const [rating, setRating] = useState();
  const [score, setScore] = useState();

  const handleUpload = (e) => {
    setRating();
    setScore();
    setFile(e.target.files[0]);
  };

  const hiddenFileInput = React.useRef();
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const rate = async () => {
    if (!rating) {
      let img = document.getElementById("img");

      const ratelist = [ratings.UNCHONKY, ratings.CHONKYISH, ratings.CHONKY];

      // Load the model
      const model = await cocoSsd.load();

      // Rate the chonk
      const predictions = await model.detect(img);

      if (predictions.length === 0 || predictions[0].class !== "cat") {
        setRating("It looks like we can't find a cat :(");
      } else {
        const catRatio = predictions[0].bbox[2] / predictions[0].bbox[3];
        const catCategory = catRatio >= 1 ? 2 : Math.round(catRatio);

        const rand = Math.floor(Math.random() * ratelist[catCategory].length);
        setScore(Math.round(100 * catRatio));
        setRating(ratelist[catCategory][rand]);
      }
    }
  };

  return (
    <Wrapper>
      <Title>Chonkii.</Title>
      <Subtitle>how chonky is your cat? 🐱</Subtitle>
      {!file && <Image src={instructions}></Image>}
      {file && (
        <Image
          src={URL.createObjectURL(file)}
          alt={file.name}
          onLoad={rate}
          id="img"
        ></Image>
      )}
      {score && <Score>Score: {score}</Score>}
      {rating && <Rating>{rating}</Rating>}
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
