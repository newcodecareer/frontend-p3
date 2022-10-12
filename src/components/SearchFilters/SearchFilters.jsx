import { Background, InputDiv, Input, ImgBtn, Ul, Li, A, Polygon } from "./SearchFilters.styles";

const SearchFilters = () => {
  return (
    <Background>
      <InputDiv>
        <Input type="text" placeholder="Search for needs"></Input>
        <ImgBtn src="/src/images/search_logo.png"></ImgBtn>
      </InputDiv>
      <Ul>
        <Li>
          <A href="#home">
            Category
            <Polygon src="/src/images/Polygon.png"></Polygon>
          </A>
        </Li>
        <Li>
          <A href="#news">
            50km Hobart TAS & remotely
            <Polygon src="/src/images/Polygon.png"></Polygon>
          </A>
        </Li>
        <Li>
          <A href="#news">
            Price
            <Polygon src="/src/images/Polygon.png"></Polygon>
          </A>
        </Li>
        <Li>
          <A href="#news">
            Offers
            <Polygon src="/src/images/Polygon.png"></Polygon>
          </A>
        </Li>
        <Li>
          <A href="#news">
            Preference Sort
            <Polygon src="/src/images/Polygon.png"></Polygon>
          </A>
        </Li>
      </Ul>
    </Background>
  );
};

export default SearchFilters;
