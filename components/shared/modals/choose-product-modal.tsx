'use client';

import React from 'react';
import ChooseProductForm from "@/components/shared/choose-product-form";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {ItemProduct} from "@/services/products";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

interface IProps {
    className?: string;
    product: ItemProduct;
}

const ChooseProductModal: React.FC<IProps> = ({className, product}) => {
    const route = useRouter();

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => route.back()}>
            <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                <ChooseProductForm imgUrl={product.imgUrl} name={product.name} ingredients={[]}/>
            </DialogContent>
        </Dialog>
    );
};

export default ChooseProductModal;
