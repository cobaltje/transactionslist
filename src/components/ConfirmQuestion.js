import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmQuestion({ question }) {
  return (
    <div className="confirm">
      <span>{error}</span>
      <span className="erroricon">
        <FontAwesomeIcon icon={faSquareXmark} onClick={onCloseError} />
      </span>
    </div>
  );
}
