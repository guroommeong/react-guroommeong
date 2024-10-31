import { StyledContainer as Container } from './styled';
import Header from './header/screen';
import Main from './main/screen';
import Footer from './footer/screen';

export const Layout = ({ children, title, footer }: { children: React.ReactNode, title?: string, footer?: React.ReactNode }) => {
  return (
    <Container>
      <Header title={title} />
      
      <Main>{children}</Main>

      <Footer>
        {footer}
      </Footer>
    </Container>
  );
};
