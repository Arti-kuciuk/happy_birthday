import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <div className="flex gap-6 z-1000 justify-center items-center p-3 bg-white/50 rounded-2xl shadow-lg">
      
      {/* Кнопка плей/пауза */}
      <button
        onClick={togglePlay}
        className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg transition z-1000 text-black text-lg"
      >
        {isPlaying ? "⏸" : "▶"}
      </button>

      {/* Полоса прогресса */}
      <div className="w-40 h-2 bg-white/30 rounded-full overflow-hidden self-center">
        <div
          className="h-2 bg-black rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Скрытый аудио элемент */}
      <audio ref={audioRef} src="/mom.mp3" loop />
    </div>
  );
}