import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";
// import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Page, CardControl, Img, Card, Card1, Button, ButtonControl } from "./UploadAvatar.style";

const UploadAvatar = (props) => {
  // console.log(props);
  // const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 2000000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  useEffect(() => {
    // console.log(preview)
  }, [preview]);

  // const showIconPic = ()=>{
  //     props.onShowIcon(preview)
  // }
  return (
    <Page>
      <CardControl>
        <Card>
          <Avatar
            width={600}
            height={300}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            src={null}
          />
        </Card>
        <Card1>{preview && <Img src={preview} alt="Preview" />}</Card1>
        <ButtonControl>
          <Button>Submit</Button>
        </ButtonControl>
      </CardControl>
    </Page>
  );
};

export default UploadAvatar;
