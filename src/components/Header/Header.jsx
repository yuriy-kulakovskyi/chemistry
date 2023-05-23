import React, { useState } from 'react';

// Styles
import './Header.css';

// nav items
const navItems = [
  {
    name: "Головна",
    link: "#home"
  },

  {
    name: "Вступ",
    link: "#intro"
  },

  {
    name: "Вироби",
    link: "#projects"
  },

  {
    name: "Висновки",
    link: "#conclusion"
  }
];

// Header component
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header">
      {/* Header logo */}
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + "./img/tube.svg"} alt="Logo" />
      </div>

      {/* Header navigation */}
      <nav className='header__nav' style={{top: navOpen ? "0" : "-100%"}}>
        <div className="header__nav__close" onClick={() => setNavOpen(false)}>×</div>
        <ul className='header__nav__list'>
          {navItems.map((item, index) => (
            <li key={index} className='header__nav__list__item'>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header toggle */}
      <svg className='header__toggle' onClick={() => setNavOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" stroke="#0093E9"><rect width="8" height="8" x="2.5" y="2.5" rx="2"></rect><rect width="8" height="8" x="13.5" y="2.5" rx="2"></rect><rect width="8" height="8" x="2.5" y="13.5" rx="2"></rect><rect width="8" height="8" x="13.5" y="13.5" rx="2"></rect></g></svg>
    </header>
  );
}

export default Header;
