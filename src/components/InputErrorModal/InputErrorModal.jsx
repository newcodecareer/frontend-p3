import { Backdrop, Modal, Header, Content, Footer, Button } from "./InputErrorModal.styles";

const InputErrorModal = (props) => {
  return (
    <Backdrop>
      <Modal>
        <Header>
          <h2>{props.title}</h2>
        </Header>

        <Content>
          <p>{props.message}</p>
        </Content>

        <Footer>
          <Button onClick={props.onModalDismiss} inputWidth="240px">
            Okay
          </Button>
        </Footer>
      </Modal>
    </Backdrop>
  );
};

export default InputErrorModal;
