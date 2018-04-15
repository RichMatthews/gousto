import React from 'react';

const component = ({
  showAvailableCategories,
  activeCategory,
  updateSelectedCategory
}) => (
  <div className="availableCategories">
    {showAvailableCategories().map(category => (
      <div className={`${activeCategory(category)} availableCategory`} onClick={() => updateSelectedCategory(category)}>
        {category.title}
      </div>
    ))}
  </div>
)

export default component;
