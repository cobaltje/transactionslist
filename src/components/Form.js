import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCartShopping,
  faScaleUnbalanced,
  faSackDollar,
  faXmark,
  faCheck,
  faList,
  faArrowsUpToLine,
} from "@fortawesome/free-solid-svg-icons";

export default function Form({ onNewTransaction, categories, onShowForm }) {
  const [startDate, setStartDate] = useState(new Date());
  const [type, setType] = useState("expense");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(1);

  function handleFormReset() {
    setStartDate(new Date());
    setType("expense");
    setDescription("");
    setAmount(0);
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          onNewTransaction(e, startDate, description, type, category, amount);
          handleFormReset();
        }}
        onReset={handleFormReset}
      >
        <span>
          <label>
            <FontAwesomeIcon icon={faCalendarDays} /> Date:
          </label>
          <DatePicker
            required
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </span>
        <span>
          <label>
            <FontAwesomeIcon icon={faCartShopping} /> Description:
          </label>
          <input
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </span>
        <span>
          <label>
            <FontAwesomeIcon icon={faScaleUnbalanced} /> Type:
          </label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </span>
        <span>
          <label>
            <FontAwesomeIcon icon={faList} /> Category:
          </label>
          <select
            value={category.id}
            onChange={(e) => setCategory(Number(e.target.value))}
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </span>
        <span>
          <label>
            <FontAwesomeIcon icon={faSackDollar} /> Amount:
          </label>
          <input
            required
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </span>
        <span className="form-btn-group">
          <button className="btn" type="submit">
            <FontAwesomeIcon icon={faCheck} /> Submit
          </button>
          <button className="btn" type="reset">
            <FontAwesomeIcon icon={faXmark} /> Reset
          </button>
          <button className="btn" onClick={onShowForm}>
            <FontAwesomeIcon icon={faArrowsUpToLine} />
          </button>
        </span>
      </form>
    </div>
  );
}
