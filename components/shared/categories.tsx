'use client';

import React from 'react';
import {cn} from "@/lib/utils";
import {useAppSelector} from "@/app/hooks/reudxHooks";

interface Props {
    className?: string;
}

const cats = [
    {id: 1, name: 'Пиццы'},
    {id: 2, name: 'Комбо'},
    {id: 3, name: 'Закуски'},
    {id: 4, name: 'Коктейли'},
    {id: 5, name: 'Кофе'},
    {id: 6, name: 'Напитка'},
    {id: 7, name: 'Десерты'},
];

const Categories: React.FC<Props> = ({className}) => {
    const activeIndex = useAppSelector((state) => state.product.products);

    console.log(activeIndex);

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map(({id, name}, index) => (
                    <a className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeIndex === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} href={`/#${name}`} key={index}>
                        <button>
                            {name}
                        </button>
                    </a>
                ))
            }
        </div>
    );
};

export default Categories;