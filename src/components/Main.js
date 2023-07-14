import TransactionList from "./TransactionList";
import CategoriesList from "./CategoriesList";

export default function Main({
  transactions,
  categories,
  showCategories,
  onDeleteCategories,
  onEditCategoryName,
}) {
  return (
    <div className="main">
      <div className="content">
        {!showCategories ? (
          <>
            <h1>Transactions</h1>
            <TransactionList
              transactions={transactions}
              categories={categories}
            />
          </>
        ) : (
          <>
            <h1>Categories</h1>
            <CategoriesList
              categories={categories}
              onDeleteCategories={onDeleteCategories}
              onEditCategoryName={onEditCategoryName}
            />
          </>
        )}
      </div>
      <div className="sidebar">
        <h1>Actions</h1>
      </div>
    </div>
  );
}
