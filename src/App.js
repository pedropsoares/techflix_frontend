import React from 'react';
import Menu from './components/Menu';
import dadosuIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const { categorias } = dadosuIniciais;

const App = () => (
  <div style={{ background: '#141414' }}>
    <Menu />

    <BannerMain
      videoTitle={categorias[0].videos[0].titulo}
      url={categorias[0].videos[0].url}
    />

    {categorias.length > 0 && categorias.map((categoria) => (
      <Carousel
        ignoreFirstVideo
        category={categoria}
      />
    ))}

    <Footer />
  </div>
);

export default App;
