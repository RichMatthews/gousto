import React from 'react';

const component = ({
  filterProducts,
  toggleDescription,
  showProductDescription,
  searchTerm
}) => (
  <div>
    {filterProducts().filter(product => product.title.toLowerCase().includes(searchTerm)).map((product) => (
      <div onClick={() => toggleDescription(product)}>
        <div className={showProductDescription(product) ? 'viewedProduct' : ''}>{product.title}</div>
        <div>{showProductDescription(product)}</div>
      </div>
    ))}
  </div>
)

export default component;
