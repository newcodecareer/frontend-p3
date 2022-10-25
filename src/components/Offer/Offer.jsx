import {
    OfferPageTitle,
    CloseBtn,
    OfferTitle,
    OfferCharge,
    IntroTitle,
    Intro,
    PopUp,
    SubmitBtn,
    Tips,
    TipsInfo,
    TipsDetails,
    DollarSign,
    ChargeBox,
    Line,
    PopUpBox
  } 
  from "./Offer.styles";

  const Offer = props => {
    return (
    <PopUpBox>
        <PopUp>
            <CloseBtn onClick={props.handleClose}>&times;</CloseBtn>
            <OfferPageTitle>Make an Offer</OfferPageTitle>
            <Line></Line>
            <OfferTitle>Your Offer</OfferTitle>
            <ChargeBox>
                <DollarSign>&#36;</DollarSign>
                <OfferCharge maxLength={6}
                    onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                />
            </ChargeBox>
            <IntroTitle>&#x2022; Why you are the best person for this task? (Optional)</IntroTitle>
            <Intro type="text"></Intro>
            <Tips>
                <TipsInfo>Tips</TipsInfo>
                <TipsDetails>&#x2022; Offers with detailed proposals are 55% more likely to be choosen. <br/>&#x2022; For your safety, please do not share any personal information such as your email, phone number or address. </TipsDetails>
            </Tips>
            <SubmitBtn onClick={props.handleClose}>Submit</SubmitBtn>
        </PopUp>
    </PopUpBox>
    );
  };
  
  export default Offer;