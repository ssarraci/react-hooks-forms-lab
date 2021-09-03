import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from 'react'

function ItemForm({onItemFormSubmit}) {
  const[itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleItemChange(e) {
     setItemName(e.target.value)
  }

  function handleCatChange(e) {
    setItemCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {id: uuid(), name: itemName, category: itemCategory}
    onItemFormSubmit(newItem)
  }

  console.log(onItemFormSubmit)
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
