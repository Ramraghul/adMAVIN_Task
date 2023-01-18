import React, { useState } from "react";
import "./NestedList.css";

export default function NestedList({ items, onClick }) {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (item) => {
    setExpanded(item.id === expanded ? null : item.id);
    if (onClick) onClick(item);
  };

  return (
    <>
      
      <ul>
        {items.map((item) => (
          <li
            className={expanded === item.id ? "expanded" : ""}
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.name}
            {item.children && expanded === item.id && (
              <NestedList items={item.children} onClick={onClick} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
