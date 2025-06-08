import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const user = localStorage.getItem('linuxQuestUser');

  useEffect(() => {
    if (!user) navigate('/login');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('linuxQuestUser');
    navigate('/login');
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🧙 Welcome, {user}!</h1>
      <p className="mb-6">Your Linux journey begins now. Are you ready?</p>
      <button
        onClick={() => navigate('/quest/1')}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl mr-4"
      >
        Start Day 1
      </button>
      <button 
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;

