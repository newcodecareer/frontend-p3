
import {
    Error,
    TextOne,
    TextTwo,
    Img,
    TextThree,
    LinkOne,
    TextFour,
} from "./Error404.style";

const Error404 = () =>{
    return(
        <Error>
            <TextOne>
                Whoops!
            </TextOne>
            <TextTwo>
                404 Page Not Found!
            </TextTwo>
            <Img src="src/images/dog1.gif" alt = "404 picture"/>
            <TextThree>
                Looks like this page went on vacation.
            </TextThree>
            <TextFour>
                Try our &nbsp;<LinkOne to = "/">homepage</LinkOne>&nbsp;instead.
            </TextFour>
            
        </Error>
    );
};

export default Error404;
