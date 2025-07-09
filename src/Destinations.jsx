import React from 'react';
import turkey from '../src/assets/turkey.jpg';
import dubai from '../src/assets/dubai.jpg';
import peru from '../src/assets/peru.jpg';
import indonesia from '../src/assets/indonesia.jpg';
import greece from '../src/assets/greece.jpg';
import france from '../src/assets/france.jpg';
import japan from '../src/assets/japan.jpg';
import canada from '../src/assets/canada.jpg';

const Destinations = () => {
  const places = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: greece,
      description: 'Famous for whitewashed houses and stunning sunsets.',
    },
    {
      id: 2,
      name: 'Kyoto, Japan',
      image: japan,
      description: 'A beautiful city known for temples and cherry blossoms.',
    },
    {
      id: 3,
      name: 'Bali, Indonesia',
      image: indonesia,
      description: 'A tropical paradise with beaches and rice terraces.',
    },
    {
      id: 4,
      name: 'Paris, France',
      image: france,
      description: 'The city of love, lights, and the Eiffel Tower.',
    },
    {
      id: 5,
      name: 'Machu Picchu, Peru',
      image: peru,
      description: 'Ancient Incan ruins high in the Andes Mountains.',
    },
    {
      id: 6,
      name: 'Banff, Canada',
      image: canada,
      description: 'Stunning lakes and mountain scenery in Alberta.',
    },
    {
      id: 7,
      name: 'Cappadocia, Turkey',
      image: turkey,
      description: 'Hot air balloons over fairy chimneys and caves.',
    },
    {
      id: 8,
      name: 'Dubai, UAE',
      image: dubai,
      description: 'Modern skyscrapers and luxurious desert experiences.',
    },
  ];

  return (
    <div className="mt-10 px-4 max-w-7xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Top Travel Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <div
            key={place.id}
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {place.name}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{place.description}</p>
              <button className="mt-4 border border-blue-600 text-blue-600 bg-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
