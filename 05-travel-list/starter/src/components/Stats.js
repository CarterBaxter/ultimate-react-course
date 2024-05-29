export function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em> Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const length = items.length;
  const packed = items.reduce(
    (numPacked, item) => (item.packed ? numPacked + 1 : numPacked),
    0
  );
  const percentage = Math.round((packed / length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You Got Everything! Ready to go!`
          : `You have ${length} items on your list, and you already packed ${packed} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
