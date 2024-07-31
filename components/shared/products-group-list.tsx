'use client';

import React from 'react';
import ProductCard from "@/components/shared/product-card";
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import {useIntersection} from "react-use";
import {useAppDispatch} from "@/app/hooks/reudxHooks";
import {setProducts} from "@/entities/category";

interface IProps {
    className?: string;
    title: string;
    listClassName?: string;
    categoryId: number;
    items: any[];
}

const ProductsGroupList: React.FC<IProps> = (props) => {
    const {className, title, listClassName, categoryId, items} = props;
    const dispatch = useAppDispatch();
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {threshold: 0.4});

    React.useEffect(() => {
       if(intersection?.isIntersecting) {
           dispatch(setProducts(categoryId));
       }
    }, [categoryId, dispatch, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
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