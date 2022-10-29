import styled from "styled-components";

export const SkillWrapper = styled.section`
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    margin: 20px 0;
  }

  section {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    min-width: 45%;

    @media (max-width: 640px) {
      min-width: 100%;
    }

    input {
      width: 100%;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 100%;

      label {
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.8;
        text-align: left;
      }

      p {
        opacity: 0.5;
      }
    }
  }
`;
