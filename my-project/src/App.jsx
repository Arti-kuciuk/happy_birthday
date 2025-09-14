import { useState } from "react";
import GreetingScreen from "./components/GreetingScreen";
import SliderScreen from "./components/SliderScreen";

export default function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [animateOverlay, setAnimateOverlay] = useState(false);

  const handleNext = () => {
    setAnimateOverlay(true);
    setTimeout(() => {
      setShowGreeting(false);
    }, 1000); // Переключение через 1 секунду (на середине анимации)
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100">
      {showGreeting ? (
        <GreetingScreen onNext={handleNext} />
      ) : (
        <SliderScreen />
      )}
      
      {animateOverlay && (
        <div className="absolute inset-0 z-20 animate-expandOverlay bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"></div>
      )}
    </div>
  );
}