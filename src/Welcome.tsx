import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();
  const login = (location.state as any)?.login;

  return <h1>Witaj, {login}!</h1>;
}

export default Welcome;
