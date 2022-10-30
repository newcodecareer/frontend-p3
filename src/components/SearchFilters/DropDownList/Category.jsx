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
  Label,
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
              <Checkbox id="builder" type="checkbox" name="categories" value="builder" />
              <Label htmlFor="builder">Builder</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="pipe" type="checkbox" name="categories" value="burst_pipe" />
              <Label htmlFor="pipe">Burst Pipe</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="cleaning" type="checkbox" name="categories" value="cleaning" />
              <Label htmlFor="cleaning">Cleaning</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="electrician" type="checkbox" name="categories" value="electrician" />
              <Label htmlFor="electrician">Electrician</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="fencing" type="checkbox" name="categories" value="fencing" />
              <Label htmlFor="fencing">Fencing</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="gardening" type="checkbox" name="categories" value="gardening" />
              <Label htmlFor="gardening">Gardening</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="handyman" type="checkbox" name="categories" value="handyman" />
              <Label htmlFor="handyman">Handyman</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="locked" type="checkbox" name="categories" value="locked_out" />
              <Label htmlFor="locked">Locked Out</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="painting" type="checkbox" name="categories" value="painting" />
              <Label htmlFor="painting">Painting</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="plumber" type="checkbox" name="categories" value="plumber" />
              <Label htmlFor="plumber">Plumber</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="removal" type="checkbox" name="categories" value="removal" />
              <Label htmlFor="removal">Removal</Label>
            </ListItem>
            <ListItem category>
              <Checkbox id="short" type="checkbox" name="categories" value="short_out" />
              <Label htmlFor="short">Short Out</Label>
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
