import TransactionList from "./TransactionList";
import CategoriesList from "./CategoriesList";
import AddCategory from "./AddCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Main({
  transactions,
  categories,
  showCategories,
  onDeleteCategories,
  onEditCategoryName,
  onSetShowForm,
  onAddNewCategory,
}) {
  const [showAddCategory, setShowAddCategory] = useState(false);

  function handleSetShowAddCategory() {
    setShowAddCategory(() => !showAddCategory);
  }

  return (
    <div className="main">
      <div className="content">
        {!showCategories ? (
          <>
            <div className="content-heading">
              <h1>Transactions</h1>
              <button className="btn" onClick={onSetShowForm}>
                <FontAwesomeIcon icon={faSquarePlus} /> Add transaction
              </button>
            </div>
            <TransactionList
              transactions={transactions}
              categories={categories}
            />
          </>
        ) : (
          <>
            <div className="content-heading">
              <h1>Categories</h1>
              <button className="btn" onClick={handleSetShowAddCategory}>
                <FontAwesomeIcon icon={faSquarePlus} /> Add category
              </button>
            </div>
            {showAddCategory ? (
              <AddCategory
                onSetShowAddCategory={handleSetShowAddCategory}
                onAddNewCategory={onAddNewCategory}
              />
            ) : (
              ""
            )}
            <CategoriesList
              categories={categories}
              onDeleteCategories={onDeleteCategories}
              onEditCategoryName={onEditCategoryName}
            />
          </>
        )}
      </div>
    </div>
  );
}
