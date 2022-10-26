import {
  Background,
  List,
  ListItem,
  ListBtn,
  Img,
  GlobalStyle,
  PopUp,
  Shade,
} from "./Category.styles";

const Sort = () => {
  return (
    <Background>
      <GlobalStyle />
      <Shade />
      <PopUp sort>
        <List sort>
          <ListItem sort>
            <ListBtn>Recommended</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
          <ListItem sort>
            <ListBtn>Price: High to low</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
          <ListItem sort>
            <ListBtn>Price: Low to high</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
          <ListItem sort>
            <ListBtn>Due date: Earliest</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
          <ListItem sort>
            <ListBtn>Due date: Latest</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
          <ListItem sort>
            <ListBtn>Newest tasks</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
          <ListItem sort>
            <ListBtn>Oldest tasks</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
          <ListItem sort>
            <ListBtn>Closest to me</ListBtn>
            <Img src="/src/images/dotpoint.png" alt="dot_point" />
          </ListItem>
        </List>
      </PopUp>
    </Background>
  );
};

export default Sort;
