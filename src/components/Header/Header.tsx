import React from "react";
import { HeaderWrapper, Icon, Contact } from "./styled";
import Linkedin from "../../assets/linkedin";
import Github from "../../assets/github";
import Facebook from "../../assets/facebook";

const Header = () => {
  return (
    <>
      <HeaderWrapper id="home">
        <h1>Hei, I'm Dian Dwi Vaputra</h1>
        <p>Backend Web Developer</p>
        <section>
          <Icon href="https://github.com/DDV2412">
            <Github />
          </Icon>
          <Icon href="https://www.linkedin.com/in/dian-dwi-vaputra-9ba4b9138/">
            <Linkedin />
          </Icon>
          <Icon href="https://www.facebook.com/DDV2412/">
            <Facebook />
          </Icon>
        </section>
        <Contact href="mailto:dhyanputra24@gmail.com">Contact Me</Contact>
      </HeaderWrapper>
    </>
  );
};

export default Header;
