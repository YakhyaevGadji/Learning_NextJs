'use client';

import React from 'react';
import {Title} from "@/components/shared/title";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/shared/range-slider";
import CheckboxFiltersGroup from "@/components/shared/checkbox-filters-group";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";
import {useSet} from "react-use";

interface Props {
    className?: string;
}

interface IPriceProps {
    priceFrom: number;
    priceTo: number;
}

const Filters: React.FC<Props> = ({className}) => {
    const {ingredients, loading, onAddId, selectedIds} = useFilterIngredients();
    const [prices, setPrice] = React.useState<IPriceProps>({priceFrom: 0, priceTo: 1000});

    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>([]));
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>([]));

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}))

    const updatePrice = (name: keyof IPriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value
        })
    };

    React.useEffect(() => {
        console.log({prices, pizzaTypes, sizes, selectedIds})
    }, [prices, pizzaTypes, sizes, selectedIds]);

    return (
        <div className={className}>
            <Title className="mb-5 font-bold" text="Фильтрация" size="sm"/>

            <CheckboxFiltersGroup
                className="mt-5"
                name='pizzaTypes'
                title="Тип теста"
                items={[
                    {text: '20', value: '20'},
                    {text: '22', value: '22'},
                    {text: '24', value: '24'}
                ]}
                selectedIds={pizzaTypes}
                onClickCheckbox={togglePizzaTypes}
            />

            <CheckboxFiltersGroup
                className="mt-5"
                name='sizes'
                title="Размеры"
                items={[
                    {text: '20', value: '20'},
                    {text: '22', value: '22'},
                    {text: '24', value: '24'}
                ]}
                selectedIds={sizes}
                onClickCheckbox={toggleSizes}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="flex gap-3 mb-5">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0} max={1000}
                        value={String(prices.priceFrom)}
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        placeholder="100"
                        min={100} max={1000}
                        value={String(prices.priceTo)}
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
                />
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                name='ingredients'
                title="Ингредтенты"
                limit={5}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
            />
        </div>
    );
};

export default Filters;