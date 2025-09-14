import { motion } from "framer-motion";

export default function GreetingScreen({ onNext }) {
  const text = "С Днём Рождения, мама ❤️";
  const letters = Array.from(text); // сохраняет эмодзи и пробелы корректно

  const handleClick = () => {
    onNext(); // Переход происходит мгновенно
  };
  // Вариант варианта для каждой буквы: функция использует custom (index)
  const letterVariant = {
    initial: { y: 0, opacity: 1 },  
    animate: (i) => ({
      y: [0, -8, 0], 
      opacity: [1, 1, 1],
      transition: {
        delay: i * 0.06,        
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          aria-label={text}
          className="text-6xl md:text-6xl lg:text-8xl font-['Pacifico'] text-rose-600 inline-block tracking-wide"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariant}
              initial="initial"
              animate="animate"
              className="inline-block"
              // чтобы screen readers корректно читали пробелы, aria-hidden для визуальных пробелов
              aria-hidden={char === " "}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <button
            onClick={handleClick}
            className="mt-[10vh] mx-auto block px-6 py-3 text-white rounded-2xl shadow-lg bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-[length:200%_200%] animate-gradientMove"
            >
            Дальше ➝
        </button>

      </div>
    </div>
  );
}