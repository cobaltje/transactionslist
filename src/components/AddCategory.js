import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpToLine, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AddCategory({
  onSetShowAddCategory,
  onAddNewCategory,
}) {
  const [categoryName, setCategoryName] = useState("");

  function handleFormReset() {
    setCategoryName("");
  }

  return (
    <div className="category-form">
      <form
        onSubmit={(e) => {
          onAddNewCategory(e, categoryName.trim());
          handleFormReset();
        }}
      >
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
        <button className="btn" type="submit">
          <FontAwesomeIcon icon={faCheck} /> Submit
        </button>
        <button className="btn" onClick={onSetShowAddCategory}>
          <FontAwesomeIcon icon={faArrowsUpToLine} />
        </button>
      </form>
    </div>
  );
}
