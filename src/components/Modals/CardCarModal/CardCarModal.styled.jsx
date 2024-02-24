import styled from "@emotion/styled";
import { IoCloseSharp } from "react-icons/io5";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-bottom: 40px;
  background-color: ${p => p.theme.colors.white};   

   @media screen and (${p => p.theme.mq.tablet}) {
    padding: 40px;  
    width: 552px;
    max-height: 80vh;
    border-radius: ${p => p.theme.radii.large};    
  }   
`;

export const BtnClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;   
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  box-shadow:  rgb(138, 138, 137, 1) 2px 3px 5px;   
  cursor: pointer; 
  
  &:hover {
    box-shadow:  rgb(138, 138, 137, 1) 2px 8px 5px;
  }
`;

export const IconClose = styled(IoCloseSharp)`  
  fill: ${p => p.theme.colors.black};  
`;

