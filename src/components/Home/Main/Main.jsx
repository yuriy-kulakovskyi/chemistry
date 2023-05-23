import React from 'react';
import Typed from 'react-typed';

import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__title">Виготовлення виробів з <br /> <span> пластикових пляшок</span></h1>

      <p className="main__subtitle">Підготували</p>

      <Typed
        className='main__typed'
        strings={[
            'Іван Отока',
            'Юрій Кулаковський']}
            typeSpeed={100}
            backSpeed={50}
            loop >
        </Typed>
    </main>
  );
}

export default Main;
