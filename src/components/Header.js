import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faSquarePlus,
  faFaceSmile,
  faList,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({
  onLogout,
  user,
  onShowForm,
  onShowCategories,
}) {
  return (
    <div className="topbar">
      <nav>
        <span>Transactions</span>
        <span>
          <FontAwesomeIcon
            icon={faFaceSmile}
            spin
            size="lg"
            style={{ color: "#1454c2" }}
          />
          Welcome {user.name}
        </span>
        <menu>
          <button
            className="btn"
            onClick={() => onShowCategories("transactions")}
          >
            <FontAwesomeIcon icon={faList} />
            Transactions
          </button>
          <button
            className="btn"
            onClick={() => onShowCategories("categories")}
          >
            <FontAwesomeIcon icon={faList} />
            Categories
          </button>
          <button className="btn" onClick={onShowForm}>
            <FontAwesomeIcon icon={faSquarePlus} /> Add Transaction
          </button>
          <button className="btn" onClick={onLogout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Logout
          </button>
        </menu>
      </nav>
    </div>
  );
}
