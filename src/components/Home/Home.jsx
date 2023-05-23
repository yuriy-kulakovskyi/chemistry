import React from 'react';

// styles
import './Home.css';

// Header component
import Header from '../Header/Header';

// Main component
import Main from './Main/Main';

const Home = () => {
  return (
    <section className='home' id='home'>
      <Header />
      <Main />
    </section>
  );
}

export default Home;
