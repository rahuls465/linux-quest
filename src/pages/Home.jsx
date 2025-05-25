import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quest/1'); // Start Day 1
  };

  return (
    <div className="home p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">🧙‍♂️ Linux Quest</h1>
      <p className="mb-6">
        Embark on a 15-day adventure to master Linux through quests, rewards, and challenges.
      </p>
      <button
        onClick={handleStart}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl"
      >
        Start Adventure
      </button>
    </div>
  );
}

export default Home;
