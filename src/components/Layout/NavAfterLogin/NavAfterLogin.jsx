import { Link } from "react-router-dom";
import * as React from "react";
// import { useEffect, useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdSwitchAccount } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { MdOutlineLogout } from "react-icons/md";
import { useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

import {
  Header,
  NavLogo,
  NavList,
  UserIcon,
  Button,
  Icon,
  MenuControl,
  MenuButton,
  StyledLink,
  HeaderMid,
  IconControl,
  TextControl,
  TriangleOne,
  TriangleTwo,
} from "./NavAfterLogin.styles";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const NavAfterLogin = () => {
  const ref = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  useOnClickOutside(ref, () => setOpen(false));
  
  const { setIsLogin } = useContext(AuthContext);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.setItem("is login", false);
    setIsLogin(false);
  };

  return (
    <Header>
      <NavLogo>
        <Link to="/">
          <img src="/images/logo.png" alt="Houddy logo" />
        </Link>
        <NavList>
          <ul>
            <li>
              <Link to="/post-needs">Post Needs</Link>
            </li>
            <li>
              <Link to="/browse-needs">Browse Needs</Link>
            </li>
            <li>
              <Link to="/myNeeds">My Needs</Link>
            </li>
          </ul>
        </NavList>
      </NavLogo>
      <HeaderMid>
        <StyledLink to="/about">About Us</StyledLink>
        <UserIcon ref={ref}>
          <Button onClick={handleOpen}>
            <Icon src="../../../../images/author_icon.png" />
          </Button>
          {open ? (
            <MenuControl>
              <TriangleOne></TriangleOne>
              <TriangleTwo></TriangleTwo>
              <MenuButton
                onClick={() => {
                  window.location.href = "/profiles";
                }}
              >
                <IconControl>
                  <FaRegUserCircle />
                </IconControl>
                <TextControl>Profile</TextControl>
              </MenuButton>
              <MenuButton>
                <IconControl>
                  <MdSwitchAccount />
                </IconControl>
                <TextControl>Account</TextControl>
              </MenuButton>
              <MenuButton>
                <IconControl>
                  <MdPayment />
                </IconControl>
                <TextControl>Payment</TextControl>
              </MenuButton>
              <MenuButton
                onClick={() => {
                  window.location.href = "/follow";
                }}
              >
                <IconControl>
                  <GrContactInfo />
                </IconControl>
                <TextControl>Contact us</TextControl>
              </MenuButton>
              <MenuButton onClick={logoutHandler}>
                <IconControl>
                  <MdOutlineLogout />
                </IconControl>
                <TextControl>Logout</TextControl>
              </MenuButton>
            </MenuControl>
          ) : null}
        </UserIcon>
      </HeaderMid>
    </Header>
  );
};

export default NavAfterLogin;
