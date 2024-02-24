import styled from "@emotion/styled";
import backgroundImg from 'images/bg_img.jpg';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 57px);
  background-image: url(${backgroundImg});
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  text-shadow: 1px 1px 2px #34495e;
  text-align: center;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  `;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
`;