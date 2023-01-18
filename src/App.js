import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Routes, Route } from "react-router-dom";
import SquareSplit from './pages/SqareSplit/SquareSplit';
import Navbar from './pages/Navbar/Navbar';
import ElementTransfer from './pages/element_transfer/ElementTransfer';
import NestedList from './pages/Nested_list_component/NestedList';
import Infinite from './pages/InfiniteScroll/InfiniteScroll';
import Game from './pages/Game/Game'

function App() {
  const items = [
    {
      id: 1,
      name: "Parent 1",
      children: [
        {
          id: 2,
          name: "Child 1",
          children: [
            {
              id: 3,
              name: "Grandchild 1",
            },
            {
              id: 4,
              name: "Grandchild 2",
            },
          ],
        },
        {
          id: 5,
          name: "Child 2",
        },
      ],
    },
    {
      id: 6,
      name: "Parent 2",
    },
  ];

  function handleClick(item) {
    console.log(item);
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<SquareSplit />} />
        <Route path="/Element" element={<ElementTransfer />} />
        <Route path="/List" element={<NestedList items={items} onClick={handleClick} />} />
        <Route path='/Infinitescroll' element={<Infinite />} />
        <Route path='/Game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
