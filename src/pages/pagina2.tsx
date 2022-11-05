import Head from 'next/head';
import { Main } from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Componentes Acessíveis</title>
        <meta
          name="description"
          content="Construindo páginas acessíveis -  Exemplos e contra-exemplos de páginas acessíveis"
        />
        <meta name="author" content="Gabriel Teixeira e Gabriela Marques" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <p>pagina 2</p>
      </Main>
    </>
  );
}
