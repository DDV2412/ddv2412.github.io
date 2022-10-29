import styled from "styled-components";

export const WorkWrapper = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  a {
    color: #f8fafc;
    text-decoration: none;
  }
`;

export const Card = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  background-color: #1d4ed8;
  p {
    margin: 10px;
  }
`;
