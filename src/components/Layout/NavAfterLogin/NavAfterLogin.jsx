import{Link} from "react-router-dom";
import * as React from 'react';
import { useEffect, useRef } from "react";



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
} from "./NavAfterLogin.styles";

function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
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
      },
      [ref, handler]
    );
};


const NavAfterLogin = () =>{
    const ref = useRef();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    useOnClickOutside(ref, () => setOpen(false));

    return(
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
                <StyledLink to = "./about">Contact us</StyledLink>
                <UserIcon>
                    <Button onClick={handleOpen}>
                        <Icon src = "../../../../public/images/author_icon.png" />
                    </Button>
                    {open?
                        (<MenuControl ref = {ref}>
                            <MenuButton 
                                onClick = {() => {
                                    window.location.href = '/profiles'
                                }}
                            >Profile</MenuButton>
                            <MenuButton>Account</MenuButton>
                            <MenuButton>Payment</MenuButton>
                            <MenuButton 
                                onClick={()=>{
                                    window.location.href = "/about";
                            }}
                            >About us</MenuButton>
                            <MenuButton>Logout</MenuButton> 
                        </MenuControl>
                    ) : null}
                </UserIcon>
            </HeaderMid>
            
            
        </Header>
    );
};

export default NavAfterLogin;


