import React from 'react';

// Styles
import './Intro.css';

const cards = [
  {
    title: "54,9млн",
    icon: "./img/bottle.svg",
    description: "Щогодинна кількість пляшок, які було викинуто"
  },

  {
    title: "Цікаво знати",
    icon: "./img/message-circle.svg",
    description: "близько 1500 року до нашої ери було використано перший аналог пляшки"
  },

  {
    title: "Рейтинг",
    icon: "./img/star.svg",
    description: "Згідно з розрахунками, найбільше сміття припадає у Канаді"
  }
];

const Intro = () => {
  return (
    <section className='intro' id='intro'>
      <h1 className="intro__title">Про <span>пластикові пляшки</span></h1>

      {/* Cards wrap */}
      <div className="intro__cards">
        {cards.map((card, index) => (
          <div className="intro__cards__card" key={index}>
            <div className="intro__cards__card__icon">
              <img src={process.env.PUBLIC_URL + card.icon} alt="Atom" />
            </div>
            <h2 className="intro__cards__card__title">{card.title}</h2>
            <p className="intro__cards__card__description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro;
