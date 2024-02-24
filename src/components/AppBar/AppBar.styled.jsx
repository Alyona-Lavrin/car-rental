import styled from "@emotion/styled";

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: ${p => p.theme.colors.white};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px, 
    rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, 
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  `;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 8px;

  @media screen and (${ p => p.theme.mq.tablet}) {
    width: 768px;
    padding: 12px 20px;
  }

  @media screen and (${ p => p.theme.mq.desktop}) {
    width: 1280px;
    padding: 16px 24px;      
  }
`;