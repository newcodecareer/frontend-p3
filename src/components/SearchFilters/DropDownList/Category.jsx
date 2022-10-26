import {
  Background,
  TopContainer,
  Paragraph,
  MiddleContainer,
  Breakline,
  BottomContainer,
  ApplyBtn,
  Btn,
  List,
  ListItem,
  Checkbox,
  GlobalStyle,
  Shade,
  PopUp,
} from "./Category.styles";

const Category = () => {
  return (
    <Background>
      <GlobalStyle />
      <Shade />
      <PopUp category>
        <TopContainer>
          <Paragraph category>ALL CATEGORIES</Paragraph>
          <Btn primary>Clear All</Btn>
        </TopContainer>
        <MiddleContainer>
          <List>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="builder" />
              Builder
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="burst_pipe" />
              Burst Pipe
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="cleaning" />
              Cleaning
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="electrician" />
              Electrician
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="fencing" />
              Fencing
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="gardening" />
              Gardening
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="handyman" />
              Handyman
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="locked_out" />
              Locked Out
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="painting" />
              Painting
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="plumber" />
              Plumber
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="removal" />
              Removal
            </ListItem>
            <ListItem category>
              <Checkbox type="checkbox" name="categories" value="short_out" />
              Short Out
            </ListItem>
          </List>
        </MiddleContainer>
        <Breakline></Breakline>
        <BottomContainer>
          <Btn>Cancel</Btn>
          <ApplyBtn>Apply</ApplyBtn>
        </BottomContainer>
      </PopUp>
    </Background>
  );
};

export default Category;
