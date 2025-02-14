import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <img src="../public/Logo.jpeg" alt="Logo" className="logo" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
        <button className="google-login"><img src="../src/image/devicon_google.png" alt="" />Continue avec Google</button>
        <button className="apple-login"><img src="../src/image/devicon_apple.png" alt="" />Continue avec Apple</button>
      </form>
    </div>
  );
};

export default Login;