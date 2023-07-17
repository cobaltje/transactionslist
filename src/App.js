import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Form from "./components/Form";
import CreateAccount from "./components/CreateAccount";
import Main from "./components/Main";
import Notification from "./components/Notification";
import data from "./testdata";

const initialUsers = [
  {
    id: 1,
    login: "tvi",
    password: "hakuna",
    name: "Timothy",
  },
  {
    id: 2,
    login: "cmo",
    password: "matata",
    name: "Charlotte",
  },
];

const initialTransactions = data;
//[
//   {
//     id: 1,
//     user: 1,
//     date: "21/12/2022",
//     description: "Gasoline",
//     type: "expense",
//     category: 1,
//     amount: 75,
//   },
//   {
//     id: 2,
//     user: 1,
//     date: "24/12/2022",
//     description: "Shopping",
//     type: "expense",
//     category: 2,
//     amount: 150,
//   },
//   {
//     id: 3,
//     user: 2,
//     date: "15/11/2022",
//     description: "Eco cheque",
//     type: "income",
//     category: 3,
//     amount: 250,
//   },
// ];

const initialCategories = [
  { id: 1, name: "house" },
  { id: 2, name: "car" },
  { id: 3, name: "water" },
  { id: 4, name: "gas" },
  { id: 5, name: "electricity" },
  { id: 6, name: "shopping" },
  { id: 7, name: "loan" },
  { id: 8, name: "paycheck" },
  { id: 9, name: "presents" },
];

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(0);
  const [viewCreateUser, setViewCreateUser] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState(initialCategories);
  const [showCategories, setShowCategories] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState("");

  function handleLogin(e, login, password) {
    e.preventDefault();
    if (login === "" || password === "") return;
    const loggedUser = users.find(
      (user) => user.login === login && user.password === password
    );

    if (!loggedUser) return alert("Wrong credentials!");
    setUser(loggedUser);

    /* Get Transactions from logged in user */
    setTransactions(
      initialTransactions.filter(
        (transaction) => transaction.user === loggedUser.id
      )
    );
  }

  function handleNewAccount(e, login, password, name) {
    e.preventDefault();

    if (!login || !password || !name) return;

    const newUser = {
      id: users.length + 1,
      login: login,
      password: password,
      name: name,
    };
    setUsers((users) => [...users, newUser]);
    setViewCreateUser(false);
  }

  function handleLogout() {
    setUser(0);
    setShowForm(false);
    setShowCategories(false);
    setNotification("");
  }

  function handleShowForm() {
    setShowForm((showForm) => !showForm);
  }

  function handleShowCategories(button) {
    if (button === "categories") setShowCategories(true);
    if (button === "transactions") setShowCategories(false);
  }

  function handleNewtransaction(e, date, description, type, category, amount) {
    e.preventDefault();

    if (!date || description === "" || !amount)
      return handleSetNotification("Amount needs to be different from zero.");

    const newTransaction = {
      id: transactions.length + 1,
      user: user.id,
      date: date.toLocaleDateString("nl-BE"),
      description: description,
      type: type,
      category: category,
      amount: amount,
    };

    setTransactions((transactions) => [...transactions, newTransaction]);
  }

  function handleDeleteCategories(id) {
    const transactionsFromCategory = initialTransactions.filter(
      (transaction) => transaction.category === id
    );

    if (transactionsFromCategory.length > 0)
      return handleSetNotification(
        "There are transactions with this category, you can not delete this"
      );

    const confirmed = window.confirm("Are you sure?");

    if (confirmed)
      setCategories((categories) =>
        categories.filter((category) => category.id !== id)
      );
  }

  function handleEditCategoryName(id, newName) {
    const newCategoriesList = categories.map((category) => {
      if (category.id === id) {
        return { ...category, name: newName };
      }
      return category;
    });

    setCategories(newCategoriesList);
  }

  function handleSetNotification(message) {
    setNotification(message);
  }

  function handleCloseNotification() {
    setNotification("");
  }

  return (
    <div className="app">
      {!user ? (
        !viewCreateUser ? (
          <Login
            onLogin={handleLogin}
            onViewCreateAccount={setViewCreateUser}
          />
        ) : (
          <CreateAccount
            onCreateAccount={handleNewAccount}
            onViewCreateAccount={setViewCreateUser}
          />
        )
      ) : (
        <>
          <Header
            onLogout={handleLogout}
            user={user}
            onShowForm={handleShowForm}
            onShowCategories={handleShowCategories}
          />
          {showForm ? (
            <Form
              onNewTransaction={handleNewtransaction}
              categories={categories}
              onShowForm={handleShowForm}
            />
          ) : (
            ""
          )}
          {notification !== "" ? (
            <Notification
              onCloseNotification={handleCloseNotification}
              notification={notification}
            />
          ) : (
            ""
          )}
          <Main
            transactions={transactions}
            categories={categories}
            showCategories={showCategories}
            onDeleteCategories={handleDeleteCategories}
            onEditCategoryName={handleEditCategoryName}
          />
        </>
      )}
    </div>
  );
}
