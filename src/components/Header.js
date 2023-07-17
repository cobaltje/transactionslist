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
        <span>
          <FontAwesomeIcon
            icon={faFaceSmile}
            spin
            size="lg"
            style={{ color: "#1454c2" }}
          />
          <span> Welcome {user.name}</span>
        </span>
        <menu>
          <button
            className="btn"
            onClick={() => onShowCategories("transactions")}
          >
            <FontAwesomeIcon icon={faList} />
            <span> Transactions</span>
          </button>
          <button
            className="btn"
            onClick={() => onShowCategories("categories")}
          >
            <FontAwesomeIcon icon={faList} />
            <span> Categories</span>
          </button>
          <button className="btn" onClick={onShowForm}>
            <FontAwesomeIcon icon={faSquarePlus} />{" "}
            <span> Add Transaction</span>
          </button>
          <button className="btn" onClick={onLogout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span> Logout</span>
          </button>
        </menu>
      </nav>
    </div>
  );
}
