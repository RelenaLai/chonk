import React, { useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import useCatModel from "./hooks/useCatModel";
import Rater from "./components/Rater";
import Upload from "./components/Upload";
import { Wrapper, Title, Subtitle } from "./styled";

function App() {
  const [file, setFile] = useState();
  const [rating, setRating] = useState();
  const [buttonTag, setButtonTag] = useState("Upload Image");

  // const [model, pretrainedModel] = useCatModel();

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setButtonTag("Upload a New Image");
  };

  const hiddenFileInput = React.useRef();
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const rate = () => {
    setRating("This is a chonky cat!");
  };

  return (
    <Wrapper>
      <Title>Chonkii.</Title>
      <Subtitle>how chonky is your cat? 🐱</Subtitle>
      <Upload
        file={file}
        handleClick={handleClick}
        handleUpload={handleUpload}
        rate={rate}
        hiddenFileInput={hiddenFileInput}
        buttonTag={buttonTag}
      />
      {rating && <Rater rating={rating} />}
    </Wrapper>
  );
}

export default App;
