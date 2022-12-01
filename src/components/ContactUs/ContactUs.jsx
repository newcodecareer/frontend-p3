import {
    ContactUsPage,
    Title,
    TitleText,
    Team,
    Developer,
    Dev,
    Card,
    CardLeft,
    CardRight,
    CardRightTop,
    Heading,
    CardRightBottom,
    StyledLink,
    Img,
    Wave,
} from "./ContactUs.style";

const ContactUs =()=>{
    const developers = [
        {ImgSrc:"../../../public/images/tom1.jpg",alt:"pic",Name:"Tom Tang", job:"Developer Leader", link:"https://www.linkedin.com/in/tom-tomtang/"},
        {ImgSrc:"../../../public/images/rebecca1.jpg",alt:"pic",Name:"Rebecca Yang", job:"Developer", link:"https://www.linkedin.com/in/rebecca-shuo-yang/"},
        {ImgSrc:"../../../public/images/Zoe.jpg",alt:"pic",Name:"CHEN HE", job:"Developer", link:"https://www.linkedin.com/in/chenhe512/"},
        {ImgSrc:"../../../public/images/haoyu3.jpg",alt:"pic",Name:"Haoyu (Alex) Zhang", job:"Developer", link:"https://www.linkedin.com/in/haoyu-zhang-alex/"},
        {ImgSrc:"../../../public/images/erica.jpg",alt:"pic",Name:"HUIJIE(Erica) PENG", job:"Developer", link:"https://www.linkedin.com/in/huijiepeng-erica/"},
        {ImgSrc:"../../../public/images/tairan1.jpg",alt:"pic",Name:"Tairan Liang", job:"Developer", link:"https://www.linkedin.com/in/tairan-liang/"},
    ]

    const dev = [
        {ImgSrc:"../../../public/images/dev1.jpg",alt:"pic",Name:"Archer Dong", job:"Devops Leader", link:"https://www.linkedin.com/in/archer-dong/"},
        {ImgSrc:"../../../public/images/author_icon.png",alt:"pic",Name:"Yunfeng Chen", job:"Devops", link:"https://www.linkedin.com/in/yunfeng-chen/"},
        {ImgSrc:"../../../public/images/author_icon.png",alt:"pic",Name:"Lawrence LiuX", job:"Devops", link:"https://www.linkedin.com/in/genghua-lawrence-liu/"},
        {ImgSrc:"../../../public/images/UI1.jpg",alt:"pic",Name:"Kitson Zhang ", job:"UI Designer", link:"https://www.linkedin.com/in/kitson-zhang-48b08441/"},
    ]
    return(
        <ContactUsPage>
            <Title>
                <TitleText>
                </TitleText>
            </Title>
            <Wave src = "../../../public/images/wave3.png"/>
            <Team>
                <Developer>
                    {developers.map((item)=>(
                        <>
                            <Card>
                                <CardLeft>
                                    <Img src = {item.ImgSrc} alt = {item.alt}/>
                                </CardLeft>
                                <CardRight>
                                    <CardRightTop>
                                        <Heading>
                                            {item.Name}
                                        </Heading>
                                        <Heading>
                                            {item.job}
                                        </Heading>
                                    </CardRightTop>
                                    <CardRightBottom>
                                        <StyledLink as="a" href = {item.link} target={"_blank"}>{item.link}</StyledLink>
                                    </CardRightBottom>
                                </CardRight>
                            </Card> 
                        </>      
                    ))}
                </Developer>
                <Dev>
                {dev.map((item)=>(
                    <>
                        <Card>
                            <CardLeft>
                                <Img src = {item.ImgSrc} alt = {item.alt}/>
                            </CardLeft>
                            <CardRight>
                                <CardRightTop>
                                    <Heading>
                                        {item.Name}
                                    </Heading>
                                    <Heading>
                                        {item.job}
                                    </Heading>
                                </CardRightTop>
                                <CardRightBottom>
                                    <StyledLink as="a" href = {item.link} target={"_blank"}>{item.link}</StyledLink>
                                </CardRightBottom>
                            </CardRight>
                        </Card> 
                    </>      
                ))}
                </Dev>
            </Team>
        </ContactUsPage>
    );
};
export default ContactUs;
