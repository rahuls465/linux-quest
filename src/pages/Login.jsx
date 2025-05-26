import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) return;
    localStorage.setItem('linuxQuestUser', name); // save username
    navigate('/'); // go to homepage
  };

  return (
    <div className="login p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🧙 Welcome to Linux Quest</h1>
      <p className="mb-4">Enter your adventurer name to begin:</p>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Your name..."
        className="border p-2 rounded-xl w-64 text-center"
      />
      <br />
      <button
        onClick={handleLogin}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl"
      >
        Enter the Realm
      </button>
    </div>
  );
}

export default Login;
