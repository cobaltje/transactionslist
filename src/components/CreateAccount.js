import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUser,
  faKey,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

export default function CreateAccount({
  onCreateAccount,
  onViewCreateAccount,
}) {
  const [newLogin, setNewLogin] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="loginbox">
      <h1 className="logintitle">
        <FontAwesomeIcon icon={faUserPlus} /> Create new account
      </h1>
      <form
        onSubmit={(e) => onCreateAccount(e, newLogin, newPassword, newName)}
      >
        <label>
          <FontAwesomeIcon icon={faSignature} />
          Name
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </label>

        <label>
          <FontAwesomeIcon icon={faUser} />
          Login
          <input
            type="text"
            placeholder="Login"
            autoComplete="username"
            value={newLogin}
            onChange={(e) => setNewLogin(e.target.value)}
            required
          />
        </label>

        <label>
          <FontAwesomeIcon icon={faKey} />
          Password
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <div className="form-footer">
          <button className="btn">Create!</button>
          <button className="btn" onClick={() => onViewCreateAccount(false)}>
            Back to login
          </button>
        </div>
      </form>
    </div>
  );
}
