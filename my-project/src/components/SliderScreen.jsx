import PhotoSlider from "./PhotoSlider";
import MusicPlayer from "./MusicPlayer";

export default function SliderScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 lg:gap-10 px-2 sm:px-4 overflow-hidden">
      <PhotoSlider />
      <MusicPlayer />
      <p className="text-center text-lg sm:text-lg md:text-3xl font-['Pacifico'] text-rose-600 px-4 sm:px-8 lg:px-24 tracking-wide">
        Мамочка, поздравляю тебя с Днём Рождения! 🌸
        Спасибо за любовь, заботу и поддержку. Желаю тебе счастья,
        здоровья и исполнения всех мечт!
      </p>
      
    </div>
  );
}