import React from 'react';

// styles
import './Projects.css';

const projects = [
  {
    title: "Підставка для канцелярських речей",
    icon: "https://silverclean.com.ua/image/cache/catalog/5963/6023/9290/9440/000009630-1000x1000.jpg",
    description: "За допомогою пластикових пляшок можна зробити практичну підставку для олівців, ручок та інших канцелярських речей."
  },

  {
    title: "Органайзер для біжутерії",
    icon: "https://images.prom.ua/4186938333_organajzer-dlya-zberigannya.jpg",
    description: "Пластикові пляшки можна перетворити на практичний органайзер для зберігання біжутерії. Органайзер допоможе підтримувати біжутерію у порядку та запобігати змішуванню."
  }
];

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h1 className="projects__title">Вироби</h1>

      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="projects__container__card" key={index}>
            <img className="projects__container__card-icon" src={project.icon} alt={project.title} />
            <h2 className="projects__container__card-title">{project.title}</h2>
            <p className="projects__container__card-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
