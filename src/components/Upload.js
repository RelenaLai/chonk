import React from "react";
import { Button, Input, Image } from "./styled";

const Upload = ({
  file,
  handleClick,
  handleUpload,
  rate,
  hiddenFileInput,
  buttonTag,
}) => (
  <div>
    {file && (
      <Image
        src={URL.createObjectURL(file)}
        alt={file.name}
        onLoad={rate}
      ></Image>
    )}
    <Button onClick={handleClick}>{buttonTag}</Button>
    <Input
      type='file'
      onChange={handleUpload}
      ref={hiddenFileInput}
      accept='image/*'
    ></Input>
  </div>
);

export default Upload;
