import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";

interface Props {
    className?: string;
}

const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title className="mb-5 font-bold" text="Фильтрация" size="sm"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирвать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>
        </div>
    );
};

export default Filters;