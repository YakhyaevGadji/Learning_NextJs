'use client';

import React from 'react';
import {FilterChecboxProps, FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui/input";
import {Skeleton} from "@/components/ui/skeleton";

type TypeItem = FilterChecboxProps;

interface Props {
    title: string;
    className?: string;
    items: TypeItem[];
    defaultItems?: TypeItem[];
    limit?: number;
    loading?: boolean;
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    selectedIds?: Set<string>;
    name?: string;
}

const CheckboxFiltersGroup: React.FC<Props> = ({
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'Поиск...',
        className,
        loading,
        onClickCheckbox,
        selectedIds,
        name
        // onChange,
        // defaultValue
    }) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : (defaultItems || items).slice(0, limit);

    const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    if(loading) {
        return <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            {
                [...Array(limit)].map((_, i) => (
                    <Skeleton key={i} className="h-5 mb-4 rounded-[5px]"/>
                ))
            }
        </div>
    }

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            <div className="mb-5">
                <Input onChange={onChangeSearchValue} placeholder={searchInputPlaceholder}/>
            </div>

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selectedIds?.has(item.value)}
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                        name={name}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}

        </div>
    );
};

export default CheckboxFiltersGroup;
