import { useState } from "react";

export function Form({ onAddItem }) {
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!desc) return;

    const newItem = { desc, qty, packed: false, id: Date.now() };
    onAddItem(newItem);

    setDesc("");
    setQty(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={qty}
        onChange={(event) => setQty(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
