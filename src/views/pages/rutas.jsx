import React from 'react';
import Header from '../components/Header.jsx'; 
import RouteCard from '../components/RouteCard';
import '../../assets/styles/rutas.css';
import cruzPalmeros from '../../assets/images/cruz-palmeros.png';

const rutas = () => {
  // Sampledata 
  const routes = [
    {
      id: 1,
      title: 'Sabas Nieves',
      imageSrc: '/images/sabas-nieves.jpg'
    },
    {
      id: 2,
      title: 'Humboldt',
      imageSrc: '/images/humboldt.jpg'
    },
    {
      id: 3,
      title: 'Pico Naiguatá',
      imageSrc: '/images/pico-naiguata.jpg'
    },
    {
      id: 4,
      title: 'Cruz de los Palmeros',
      imageSrc: cruzPalmeros
    },
    {
      id: 5,
      title: 'El Banquito',
      imageSrc: '/images/el-banquito.jpg'
    },
    {
      id: 6,
      title: 'Piedra del Indio',
      imageSrc: '/images/piedra-indio.jpg'
    },
    {
      id: 7,
      title: 'Pico Oriental',
      imageSrc: '/images/pico-oriental.jpg'
    },
    {
      id: 8,
      title: 'Antenas Avila',
      imageSrc: '/images/antenas-avila.jpg'
    }
  ];

  return (
    <div className="rutas-container">
      <Header />
      <main className="main-content">
        <h1 className="routes-title">Rutas Disponibles:</h1>
        <div className="routes-grid">
          {routes.map(route => (
            <RouteCard
              key={route.id}
              title={route.title}
              imageSrc={route.imageSrc}
            />
          ))}
        </div>
      </main>
      <div className="mountain-footer"></div>
    </div>
  );
};

export default rutas;