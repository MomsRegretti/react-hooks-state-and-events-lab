import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  function handleCatChange(e){
    setSelectedCategory(e.target.value)
  }

  const setCats = items.filter(item =>{
    return selectedCategory === "All" ? true : item.category === selectedCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCatChange} name={setCats}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
