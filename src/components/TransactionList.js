import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function TransactionList({ transactions, categories }) {
  const categoriesList = [...categories];

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Type</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction
            date={transaction.date}
            description={transaction.description}
            type={transaction.type}
            category={transaction.category}
            categories={categoriesList}
            amount={transaction.amount}
            key={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
}

function Transaction({
  date,
  description,
  type,
  category,
  amount,
  categories,
}) {
  const currentCategory = categories.find((cat) => cat.id === category);

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{type}</td>
      <td>{currentCategory.name}</td>
      {type === "expense" ? (
        <td style={{ backgroundColor: "#f7b7b7" }}>
          <FontAwesomeIcon icon={faArrowDown} /> {amount}
        </td>
      ) : (
        <td style={{ backgroundColor: "#b7f7bf" }}>
          <FontAwesomeIcon icon={faArrowUp} /> {amount}
        </td>
      )}
    </tr>
  );
}
