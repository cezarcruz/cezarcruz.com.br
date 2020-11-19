import React from 'react';
import Head from 'next/head';
import Container from '../layout/Container';

const Sobre: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>

      <main>
        <Container>
          <h1>Sobre</h1>
        </Container>
      </main>
    </div>
  );
}

export default Sobre;
