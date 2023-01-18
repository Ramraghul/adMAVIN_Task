import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./InfiniteScroll.css";

function Infinite() {
  const [items, setItems] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  const loadData = async () => {
    try {
      
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${page}&_limit=10`);
      const data = await res.json();
      
      setItems([...items, ...data]);
      
      if (data.length === 10) {
        setPage(page + 10);
      } else {
        setHasMoreItems(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadMoreData = () => {
    loadData();
  };

  return (
    <div className="items">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreData}
        hasMore={hasMoreItems}
        loader={<div className="loader">Loading ...</div>}
      >
        {items.map((item, index) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Infinite;
