import React from 'react';
import ChooseProductModal from "@/components/shared/modals/choose-product-modal";
import {getProduct} from "@/services/getProduct";
import {notFound} from "next/navigation";

const ProductModalPage = async ({params: {id}}: {params: {id: number}}) => {
    const item = await getProduct(id);

    if(!item) {
        return notFound();
    }

    return <ChooseProductModal product={item}/>
};

export default ProductModalPage;