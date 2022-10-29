import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 6rem 2rem 0;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  text-align: center;

  p {
    margin: 19px 0;
  }

  section {
    margin-top: 19px;
    display: flex;
    gap: 1rem;
  }
`;

export const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #1d4ed8;
  padding: 0.5rem;
  border-radius: 100px;
  transition: all 300ms ease-in-out;
  color: #f8fafc;

  :hover {
    opacity: 0.7;
  }
`;

export const Contact = styled.a`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  background-color: #1d4ed8;
  cursor: pointer;
  text-decoration: none;
  color: #f8fafc;

  :hover {
    opacity: 0.7;
  }
`;
