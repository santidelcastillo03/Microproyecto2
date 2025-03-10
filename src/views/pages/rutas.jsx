import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';  
import RouteCard from '../components/RouteCard';
import '../../assets/styles/rutas.css';
import cruzPalmeros from '../../assets/images/cruz-palmeros.png';
import sabasNieves from '../../assets/images/sabas-nieves.png';
import humboldt from '../../assets/images/humboldt.png';
import picoNaiguata from '../../assets/images/pico-naiguata.png';
import elBanquito from '../../assets/images/el-banquito.png';
import piedraIndio from '../../assets/images/piedra-indio.png';
import picoOriental from '../../assets/images/pico-oriental.png';
import antenasAvila from '../../assets/images/antenas-avila.png';

const rutas = () => {
  // Sampledata 
  const routes = [
    {
      id: 1,
      title: 'Sabas Nieves',
      imageSrc: sabasNieves
    },
    {
      id: 2,
      title: 'Humboldt',
      imageSrc: humboldt
    },
    {
      id: 3,
      title: 'Pico Naiguatá',
      imageSrc: picoNaiguata
    },
    {
      id: 4,
      title: 'Cruz de los Palmeros',
      imageSrc: cruzPalmeros
    },
    {
      id: 5,
      title: 'El Banquito',
      imageSrc: elBanquito
    },
    {
      id: 6,
      title: 'Piedra del Indio',
      imageSrc: piedraIndio
    },
    {
      id: 7,
      title: 'Pico Oriental',
      imageSrc: picoOriental
    },
    {
      id: 8,
      title: 'Antenas Avila',
      imageSrc: antenasAvila
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