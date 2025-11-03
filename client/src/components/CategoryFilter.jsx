import React from "react";

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
      <button
        onClick={() => onSelect("")}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
          selected === "" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
        }`}
      >
        All
      </button>
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
            selected === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
