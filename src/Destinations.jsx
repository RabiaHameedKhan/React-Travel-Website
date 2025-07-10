import React from 'react';
import turkey from './assets/turkey.jpg';
import dubai from './assets/dubai.jpg';
import peru from './assets/peru.jpg';
import indonesia from './assets/indonesia.jpg';
import greece from './assets/greece.jpg';
import france from './assets/france.jpg';
import japan from './assets/japan.jpg';
import canada from './assets/canada.jpg';
import bgImg from './assets/contact-bg.jpg'; // use same dark image

const Destinations = () => {
  const places = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: greece,
      description: "Famous for whitewashed houses and stunning sunsets.",
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      image: japan,
      description: "A beautiful city known for temples and cherry blossoms.",
    },
    {
      id: 3,
      name: "Bali, Indonesia",
      image: indonesia,
      description: "A tropical paradise with beaches and rice terraces.",
    },
    {
      id: 4,
      name: "Paris, France",
      image: france,
      description: "The city of love, lights, and the Eiffel Tower.",
    },
    {
      id: 5,
      name: "Machu Picchu, Peru",
      image: peru,
      description: "Ancient Incan ruins high in the Andes Mountains.",
    },
    {
      id: 6,
      name: "Banff, Canada",
      image: canada,
      description: "Stunning lakes and mountain scenery in Alberta.",
    },
    {
      id: 7,
      name: "Cappadocia, Turkey",
      image: turkey,
      description: "Hot air balloons over fairy chimneys and caves.",
    },
    {
      id: 8,
      name: "Dubai, UAE",
      image: dubai,
      description: "Modern skyscrapers and luxurious desert experiences.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative pt-28 px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto pb-10">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">
          Top Travel Destinations
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <div
              key={place.id}
              data-aos="fade-up"
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                  {place.name}
                </h2>
                <p className="text-gray-300 mt-2 text-sm">
                  {place.description}
                </p>
                <button className="mt-4 border border-orange-400 text-orange-400 bg-transparent px-4 py-2 rounded-md transition-colors duration-300 hover:bg-orange-400 hover:text-black">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
