import styled from "styled-components";

export const Container = styled.div`
  background-color: #18cf89;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  color: #4e4e4e;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  max-width: 100%;
  width: 400px;
`;

export const Title = styled.h2`
  font-size: 18pt;
  margin-bottom: 20px;
  color: #474b4e;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #bebebe;
  outline: none;
  margin: 5px 0;

  :focus {
    border-color: #5c5c5c;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #ff8a3c;
  border-radius: 7px;
  padding: 10px;
  border: none;
  color: white;
  font-weight: bold;
  margin: 0 auto;
  width: 50%;

  :hover {
    background-color: #ff6600;
    cursor: pointer;
  }
`;
