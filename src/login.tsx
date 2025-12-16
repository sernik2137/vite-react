import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [login, setLogin] = useState("");
  const [haslo, setHaslo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, haslo }),
    });

    const data = await res.json();

    if (data.success) {
      navigate("/welcome", { state: { login } });
    } else {
      alert("Błędny login lub hasło");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input placeholder="Login" onChange={e => setLogin(e.target.value)} />
      <input type="password" placeholder="Hasło" onChange={e => setHaslo(e.target.value)} />
      <button>Zaloguj</button>
    </form>
  );
}

export default Login;
