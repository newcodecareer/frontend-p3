import {
  Background,
  TopContainer,
  Paragraph,
  MiddleContainer,
  BreakLine,
  BottomContainer,
  ApplyBtn,
  Btn,
  List,
  ListItem,
  Checkbox,
} from "./Category.styles";

const Category = () => {
  return (
    <Background category>
      <TopContainer>
        <Paragraph category>ALL CATEGORIES</Paragraph>
        <Btn primary>Clear All</Btn>
      </TopContainer>
      <MiddleContainer>
        <List>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="builder" />
            Builder
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="burst_pipe" />
            Burst Pipe
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="cleaning" />
            Cleaning
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="electrician" />
            Electrician
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="fencing" />
            Fencing
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="gardening" />
            Gardening
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="handyman" />
            Handyman
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="locked_out" />
            Locked Out
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="painting" />
            Painting
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="plumber" />
            Plumber
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="removal" />
            Removal
          </ListItem>
          <ListItem>
            <Checkbox type="checkbox" name="categories" value="short_out" />
            Short Out
          </ListItem>
        </List>
      </MiddleContainer>
      <BreakLine></BreakLine>
      <BottomContainer>
        <Btn>Cancel</Btn>
        <ApplyBtn>Apply</ApplyBtn>
      </BottomContainer>
    </Background>
  );
};

export default Category;
