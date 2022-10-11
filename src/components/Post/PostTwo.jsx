import {
    Background,
    H1,
    Button,
    Form,
    Input,
    InputDiv,
    BtnDiv,
    BackBtn,
    HR,
} from "./PostTwo.styles";

import {Link} from 'react-router-dom';

const PostTwo = () => {
    return (
        <Background>
            <H1>Please clarify your details.</H1>
            <Form>
                <InputDiv>
                    <Input type="text" placeholder="e.g. Plumber" />
                </InputDiv>
                <HR></HR>
                <BtnDiv>
                    <Link to={"/postone"}>
                        <BackBtn>Back</BackBtn>
                    </Link>
                    <Link to={"/postthree"}>
                        <Button>Next</Button>
                    </Link>
                </BtnDiv>
            </Form>
        </Background>
    );
};

export default PostTwo;