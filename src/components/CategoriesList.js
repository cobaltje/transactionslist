import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CategoriesList({
  categories,
  onDeleteCategories,
  onEditCategoryName,
}) {
  return (
    <div className="category">
      {categories.map((category) => (
        <Category
          name={category.name}
          id={category.id}
          key={category.id}
          onDeleteCategories={onDeleteCategories}
          onEditCategoryName={onEditCategoryName}
        />
      ))}
    </div>
  );
}

function Category({ name, id, onDeleteCategories, onEditCategoryName }) {
  const [editCategory, setEditCategory] = useState(false);
  const [categoryName, setCategoryName] = useState(name);

  return (
    <div className="category-item">
      {!editCategory ? (
        <>
          <div className="category-title">{name}</div>
          <div className="category-actions">
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => setEditCategory(true)}
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => onDeleteCategories(id)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="category-title">
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <button
            className="btn"
            onClick={() => {
              setEditCategory(false);
              onEditCategoryName(id, categoryName);
            }}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}
