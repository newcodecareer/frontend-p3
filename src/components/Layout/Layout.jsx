import styled from "styled-components";
import MainNav from "./MainNav/MainNav";

const Main = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  font-family: "Inter", sans-serif;
  max-width: 100%;
`;

const Layout = (props) => {
  return (
    <div>
      <MainNav />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Layout;
