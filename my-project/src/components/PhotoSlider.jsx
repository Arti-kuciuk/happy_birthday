import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  "/mom1.jpg",
  "/mom2.jpg",
  "/mom3.jpg",
  "/mom4.jpg",
  "/mom5.jpg",
  "/mom6.jpg",
  "/mom7.jpg",
  "/mom8.jpg",
  "/mom9.jpg",
];

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPreviousIndex = () =>
    (currentIndex - 1 + photos.length) % photos.length;

  const getNextIndex = () =>
    (currentIndex + 1) % photos.length;

  const goPrev = () => setCurrentIndex(getPreviousIndex());
  const goNext = () => setCurrentIndex(getNextIndex());

  return (
    <div className="relative w-full max-w-6xl mx-auto px-8 sm:px-12 flex flex-col items-center justify-center">
      
      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full relative">

        {/* Десктопные стрелки */}
        <button
          onClick={goPrev}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-1000 p-3 bg-white/70 hover:bg-white rounded-full shadow-lg transition"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-1000 p-3 bg-white/70 hover:bg-white rounded-full shadow-lg transition"
        >
          ▶
        </button>

        {/* Предыдущее фото */}
        <div className="block flex-1 max-w-[15vw] lg:max-w-[15vw] opacity-60 blur-sm scale-90">
          <img
            src={photos[getPreviousIndex()]}
            alt={`Previous slide ${getPreviousIndex() + 1}`}
            className="w-full aspect-3/4 object-cover rounded-xl shadow-lg border-2 border-white/30"
          />
        </div>

        {/* Центральное фото с анимацией */}
        <div className="flex-1 max-w-[60vw] sm:max-w-[20vw] overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photos[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full aspect-3/4 object-cover rounded-xl shadow-2xl border-6 border-white/50"
            />
          </AnimatePresence>
        </div>

        {/* Следующее фото */}
        <div className="block flex-1 max-w-[15vw] lg:max-w-[15vw] opacity-60 blur-sm scale-90">
          <img
            src={photos[getNextIndex()]}
            alt={`Next slide ${getNextIndex() + 1}`}
            className="w-full aspect-3/4 object-cover rounded-xl shadow-lg border-2 border-white/30"
          />
        </div>
      </div>

      {/* Мобильные стрелки под слайдером */}
      <div className="flex gap-6 mt-4 sm:hidden z-1000">
        <button
          onClick={goPrev}
          className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg transition z-1000"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg transition z-1000"
        >
          ▶
        </button>
      </div>
    </div>
  );
}