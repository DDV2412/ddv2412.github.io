import React from "react";
import { FooterWrapper } from "./styled";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <p>
          Copyright © {new Date().getFullYear()} Dian Dwi Vaputra. All Right
          Reserved
        </p>
      </FooterWrapper>
    </>
  );
};

export default Footer;
