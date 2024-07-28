import React from 'react';
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import ProductCard from "@/components/shared/product-card";

interface IProps {
    className?: string;
    title: string;
    listClassName?: string;
    categoryId: number;
    items: any[];
}

const ProductsGroupList: React.FC<IProps> = (props) => {
    const {className, title, listClassName, /*categoryId,*/ items} = props;

    return (
        <div className={className}>
            <Title className="font-extrabold mb-5" text={title} size="lg"/>

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item.id}
                        name={item.name}
                        price={item.items[0].price}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsGroupList;