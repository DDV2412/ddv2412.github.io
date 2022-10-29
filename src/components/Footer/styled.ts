import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 4rem 0 2rem 0;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    p {
      opacity: 0;
    }
  }
`;
