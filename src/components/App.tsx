import { useState } from 'react';

import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Stats from './Stats';
import Textarea from './Textarea';

export interface IStat {
  numberOfWords: number;
  numberOfCharacters: number;
  instagramCharactersLeft: number;
  facebookCharactersLeft: number;
}

function App() {
  const [stats, setStats] = useState<IStat>({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  return (
    <>
      <Header />

      <Container>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
