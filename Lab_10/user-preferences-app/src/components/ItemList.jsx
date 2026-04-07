import { useState, useMemo, useTransition, useDeferredValue } from "react";

function ItemList() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  // Large list of 1000 items
  const items = useMemo(() => Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`), []);

  // Deferred search query
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search items..."
        value={query}
        onChange={(e) => startTransition(() => setQuery(e.target.value))}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {isPending && <p>Updating list...</p>}
    </div>
  );
}

export default ItemList;
