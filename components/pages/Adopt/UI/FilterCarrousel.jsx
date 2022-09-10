import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const FilterCarrousel = ({ animalFilter }) => {
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  const dogFilters = [
    'Puppies',
    'Seniors',
    'Big Dogs',
    'Small Dogs',
    'Breed Dogs',
    'Stray Dogs',
    'Male',
    'Female',
  ];

  const catFilters = ['Kitties', 'Seniors', 'Breed Cats', 'Stray Cats', 'Male', 'Female'];

  return (
    <ul ref={carouselRef} className="flex gap-4 overflow-scroll scrollbar-hide">
      {animalFilter === 'dog'
        ? dogFilters.map((item, index) => (
            <li
              className="flex justify-center items-center border-black/50 text-black/50 border rounded-[20px] min-w-[48px] text-xs px-2 py-1 flex-shrink-0 hover:cursor-pointer"
              key={index}
            >
              {item}
            </li>
          ))
        : catFilters.map((item, index) => (
            <li
              className="flex justify-center items-center border-black/50 text-black/50 border rounded-[20px] min-w-[48px] text-xs px-2 py-1 flex-shrink-0 hover:cursor-pointer"
              key={index}
            >
              {item}
            </li>
          ))}
    </ul>
  );
};

export default FilterCarrousel;
