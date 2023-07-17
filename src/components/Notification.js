import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export default function Notification({ notification, onCloseNotification }) {
  return (
    <div className="error">
      <span>{notification}</span>
      <span className="erroricon">
        <FontAwesomeIcon icon={faSquareXmark} onClick={onCloseNotification} />
      </span>
    </div>
  );
}
