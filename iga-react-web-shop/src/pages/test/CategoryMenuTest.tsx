import React from "react";

type Category = {
  id: number;
  category_name: string;
  children: Category[];
};

type Props = {
  categories: Category[];
};

const CategoryMenuTest: React.FC<Props> = ({ categories }) => {
  const renderCategories = (items: Category[]) => {
    return items.map((item) => (
      <li key={item.id} className="">
        {item.children.length > 0 ? (
          <details>
            <summary>{item.category_name}</summary>
            <ul>{renderCategories(item.children)}</ul>
          </details>
        ) : (
          <a>{item.category_name}</a>
        )}
      </li>
    ));
  };

  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      {renderCategories(categories)}
    </ul>
  );
};

export default CategoryMenuTest;
