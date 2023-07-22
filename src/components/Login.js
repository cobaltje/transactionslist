import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

export default function Login({ onLogin, onViewCreateAccount }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginbox">
      <h1 className="logintitle">
        <FontAwesomeIcon icon={faUser} />
        <span> Login</span>
      </h1>
      <form onSubmit={(e) => onLogin(e, login.toLowerCase(), password)}>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <span> Login</span>
          <input
            type="text"
            placeholder="Login"
            autoComplete="username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>

        <label>
          <FontAwesomeIcon icon={faKey} />
          <span> Password</span>
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="form-footer">
          <button className="btn">Login</button>
          <button className="btn" onClick={() => onViewCreateAccount(true)}>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}
