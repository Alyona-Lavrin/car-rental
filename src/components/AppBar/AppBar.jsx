import { Header, Container } from './AppBar.styled';

import Navigation from 'components/Navigation';

export const AppBar = () => {    
  return (
    <>
      <Header id="app-bar">
        <Container>
        <Navigation />
        </Container>
      </Header>
    </>
  );
};

export default AppBar;