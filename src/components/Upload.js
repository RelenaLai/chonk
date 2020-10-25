import React from "react";
import { Button, Input, Image, UploadWrapper } from "./styled";

const Upload = ({
  file,
  handleClick,
  handleUpload,
  rate,
  hiddenFileInput,
  buttonTag,
}) => (
  <UploadWrapper>
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
  </UploadWrapper>
);

export default Upload;
