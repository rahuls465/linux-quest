import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await api.post('/signup', { username, password });
      alert('Signup successful! You can now log in.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2"
      /><br />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2"
      /><br />
      <button onClick={handleSignup} className="bg-green-600 text-white px-4 py-2">
        Create Account
      </button>
    </div>
  );
}

export default Signup;
