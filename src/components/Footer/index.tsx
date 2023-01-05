import { WrapperFooter } from './style';
import { Container } from '../Container';

export const Footer = () => {
  return (
    <WrapperFooter>
      <Container>
        <section>
          <p>
            <strong>Componentes Acessíveis</strong> é um projeto de código
            aberto desenvolvido por{' '}
            <a
              href="https://github.com/gabrielbsb21"
              target="_blank"
              rel="noreferrer"
            >
              Gabriel Teixeira
            </a>
          </p>
        </section>
      </Container>
    </WrapperFooter>
  );
};
