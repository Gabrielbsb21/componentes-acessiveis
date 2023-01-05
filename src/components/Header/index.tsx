import { WrapperHeader, Flex, MenuLink } from './style';
import { Container } from '../Container';
import { links } from '../../data/links';

export const Header = () => {
  return (
    <WrapperHeader>
      <Container>
        <Flex>
          <h1>Componentes Acessíveis</h1>
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <MenuLink href={link.url}>{link.name}</MenuLink>
                </li>
              ))}
            </ul>
          </nav>
        </Flex>
      </Container>
    </WrapperHeader>
  );
};
