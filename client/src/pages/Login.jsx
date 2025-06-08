import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('/login', { username, password });
      console.log(res.data);
      localStorage.setItem('linuxQuestUser', username);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2">
        Login
      </button>
      <p className="mt-4 text-sm">
        Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
