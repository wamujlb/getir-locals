import React from 'react';

import ProductFilterCard from 'common/components/ProductFilterCard/ProductFilterCard';

const ProductFilters = () => {
  return (
    <div>
      <ProductFilterCard title="Sorting">
        <div />
      </ProductFilterCard>

      <ProductFilterCard title="Brands">
        <div />
      </ProductFilterCard>

      <ProductFilterCard title="Tags">
        <div />
      </ProductFilterCard>
    </div>
  );
};

ProductFilters.displayName = 'ProductFilters';

export default ProductFilters;
