import React from 'react';

const ProductPage = ({params: {id}}: {params: {id: number}}) => {
    return (
        <div>
            params: {id}
        </div>
    );
};

export default ProductPage;
