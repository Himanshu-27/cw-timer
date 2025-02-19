import { useEffect, useState } from 'react';
import { Plus, Clock } from 'lucide-react';
import { TimerList } from './components/TimerList';
import { CommonModal } from './components/CommonModal';
import { Toaster } from 'sonner';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [position, setPosition] = useState<"top-right" | "bottom-center">("top-right");

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.innerWidth < 768 ? "bottom-center" : "top-right");
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position={position}/>
      <div className="container mx-auto px-4 py-8 mb-5">
        <div className="flex justify-between mb-10">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timer</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Timer
          </button>
        </div>
        
        <TimerList />
        
        <CommonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type="add"
        />
      </div>
    </div>
  );
}

export default Home;