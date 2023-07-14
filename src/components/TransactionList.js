export default function TransactionList({ transactions, categories }) {
  console.log(categories);
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
  console.log(currentCategory);

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{type}</td>
      <td>{currentCategory.name}</td>
      <td>{amount}</td>
    </tr>
  );
}
