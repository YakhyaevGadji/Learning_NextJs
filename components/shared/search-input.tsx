'use client';

import React from 'react';
import {Search} from "lucide-react";
import {cn} from "@/lib/utils";
import {useClickAway, useDebounce} from "react-use";
import Link from "next/link";
import {ItemProduct, search} from "@/services/products";

interface IProps {
    className?: string;
}

const SearchInput: React.FC<IProps> = ({className}) => {
    const [focus, setFocus] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [products, setProducts] = React.useState<ItemProduct[]>([]);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocus(false);
    });

    useDebounce(() => {
        search(searchValue).then(items => {
            setProducts(items);
        });
    }, 300, [searchValue]);

    const onClickItem = () => {
        setFocus(false);
        setSearchValue('');
        setProducts([]);
    };

    const renderProducts = products.length <= 5 ? products : products.slice(0, 5);

    return (
        <>
            {focus && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30"></div>}
            <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"/>
                <input
                    onFocus={() => setFocus(true)}
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                    type="text"
                    placeholder="Поиск..."
                    onChange={(event) => setSearchValue(event.target.value)}
                />

                {renderProducts.length > 0 && (
                    <div className={cn(
                    'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-2 invisible opacity-0 z-30',
                    focus && 'visible opacity-100 top-12'
                )}>
                    {renderProducts.map(product => {
                        return (
                            <Link
                                onClick={onClickItem}
                                key={product.id}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
                                href={`/product/${product.id}`}
                            >
                                <img
                                    className="rounded-sm h-8 w-8"
                                    src={product.imgUrl}
                                    alt={product.title}
                                />
                                <span>{product.title}</span>
                            </Link>
                        )
                    })}
                </div>
                )}
            </div>
        </>

    );
};

export default SearchInput;