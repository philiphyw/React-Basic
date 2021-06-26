import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./index.css";

function App() {
  const allCategories =['All', ...new Set( items.map(i=> i.category))];
  console.log(allCategories);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  


  const filterItems=(selectCategory)=>{
    //use filter to check and select elements from data source by key word category, put result into a new array 
    if (selectCategory.toUpperCase()==="ALL") {
      setMenuItems(items);
    }else{
    const newItems = items.filter(item=>item.category === selectCategory);
    setMenuItems(newItems);
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Dynamic Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
