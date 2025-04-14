import React from 'react';

function SubMenu({category}) {

  
  const menuItems = {
    FASHION: ["Men", "Women", "Kids", "Accessories"],
    ELECTRONICS: ["Mobiles", "Laptops", "Televisions", "Accessories"],
    BAGS: ["Backpacks", "Tote Bags", "Handbags"],
    FOOTWEAR: ["Men Shoes", "Women Shoes", "Sandals"],
    GROCERIES: ["Vegetables", "Fruits", "Beverages", "Snacks"],
    BEAUTY: ["Skincare", "Makeup", "Haircare"],
    WELLNESS: ["Vitamins", "Supplements", "Fitness Gear"]
  };

  const items = menuItems[category] || ["No Items Available"];
  return (
    <div className="mb-10">
      <ul>
          {items.map((item,index)=>(
            <li key={index} className="text-gray-500 text-md hover:text-blue-600 pl-5 pt-2 cursor-pointer">{item}</li>
))}
      </ul>
    </div>
  );
}

export default SubMenu;
